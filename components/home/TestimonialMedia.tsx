import { Play } from "lucide-react";

type Props = {
  label: string;
  videoSrc?: string;
  posterSrc?: string;
};

export default function TestimonialMedia({ label, videoSrc, posterSrc }: Props) {
  if (videoSrc) {
    return (
      <div className="relative aspect-video w-full bg-ink">
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          poster={posterSrc}
          muted
          playsInline
          controls
          preload="metadata"
          aria-label={label}
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-video w-full items-center justify-center bg-ink">
      <p className="font-display px-6 text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-line">
        {label}
      </p>
      <div
        aria-hidden="true"
        className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center bg-cream"
      >
        <Play className="h-5 w-5 fill-ink text-ink" />
      </div>
    </div>
  );
}
