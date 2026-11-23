export type Detail = { label: string; value: string };

export default function DetailsList({ items }: { items: Detail[] }) {
  return (
    <dl className="mt-8 border-b-2 border-ink">
      {items.map((d) => (
        <div
          key={d.label}
          className="grid grid-cols-[110px_minmax(0,1fr)] gap-4 border-t-2 border-ink py-4"
        >
          <dt className="font-display pt-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-stone">
            {d.label}
          </dt>
          <dd className="text-[17px] leading-snug text-ink">{d.value}</dd>
        </div>
      ))}
    </dl>
  );
}
