import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporary (302) while the redesign is checked; switch to permanent after launch.
  async redirects() {
    return [
      { source: "/start", destination: "/resources#program", permanent: false },
      { source: "/task", destination: "/resources#program", permanent: false },
      { source: "/start/thanks", destination: "/resources", permanent: false },
      { source: "/thanks", destination: "/", permanent: false },
      // /products/[slug] and the checkout pages stay in the code for later Stripe use.
      { source: "/products", destination: "/shop", permanent: false },
    ];
  },
};

export default nextConfig;
