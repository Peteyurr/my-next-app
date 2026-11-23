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
      <div className="mx-auto flex max-w-[1200px] gap-6 overflow-x-auto px-6 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:justify-between lg:gap-4 lg:overflow-visible">
        {CREDENTIALS.map((item, i) => (
          <div key={item} className="flex shrink-0 items-center gap-6 lg:gap-4">
            {i > 0 && (
              <span aria-hidden="true" className="shrink-0 text-line">
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
