const CREDENTIALS = [
  "CSCS",
  "B.S. Exercise Science, WCU",
  "M.S. student, Applied Sports Science",
  "NASM-CPT",
  "NASM-CNC",
  "S&C Coach, Dragon Gym",
  "Muay Thai athlete",
];

const itemClass =
  "font-display shrink-0 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.2em] text-cream lg:text-[12px]";

export default function CredentialStrip() {
  return (
    <div className="bg-ink">
      {/* Phone/tablet: one row that scrolls sideways. lg+: wraps, centered, never scrolls. */}
      <div className="mx-auto flex max-w-[1200px] gap-6 overflow-x-auto px-6 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:justify-center lg:gap-x-6 lg:gap-y-2.5 lg:overflow-visible">
        {CREDENTIALS.map((item, i) => (
          <div key={item} className="flex shrink-0 items-center gap-6">
            {i > 0 && (
              // Separators would land at the start of a wrapped row on desktop, so hide them there.
              <span aria-hidden="true" className="shrink-0 text-line lg:hidden">
                ·
              </span>
            )}
            <span className={itemClass}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
