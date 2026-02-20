"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  productId: string;
}

export function CheckoutButton({ productId }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Checkout error:", data.error);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="mt-8 w-full rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-zinc-950 hover:bg-zinc-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Processing..." : "Buy Now"}
    </button>
  );
}
