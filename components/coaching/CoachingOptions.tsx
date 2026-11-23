import Link from "next/link";
import { FIT_TO_FIGHT_URL } from "@/components/dragon-gym/links";

type Row = { label: string; value: string; strong?: boolean };

const ROW_LABELS = ["Where", "How it works", "Best for", "First step"] as const;

const IN_PERSON = {
  tag: "Option 1 · In person",
  title: "At Dragon Gym",
  rows: [
    "Dragon Gym, Exton, PA",
    "Train with Jake on the floor, 1–2 sessions a week",
    "Hands-on coaching and live feedback on every rep",
    "Free 35-min Training Strategy Session, in person",
  ],
};

const ONLINE = {
  tag: "Option 2 · Online",
  title: "From anywhere",
  rows: [
    "Your gym, your schedule",
    "Custom program, video form feedback, check-in calls every two weeks",
    "Self-starters who train on their own and want expert programming",
    "Free 30-min video consult",
  ],
};

const toRows = (values: string[]): Row[] =>
  values.map((value, i) => ({
    label: ROW_LABELS[i],
    value,
    strong: i === ROW_LABELS.length - 1,
  }));

const labelClass =
  "font-display text-[12px] font-semibold uppercase tracking-[0.2em]";
const tagBase =
  "font-display inline-block border-2 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em]";
const cardTitle =
  "font-display mt-5 text-[32px] font-extrabold uppercase leading-[1.05] md:text-[40px]";
const btnBase =
  "font-display flex min-h-[54px] w-full items-center justify-center px-7 text-center text-[13px] font-bold uppercase tracking-[0.12em]";
const textLink =
  "inline-flex min-h-11 items-center font-semibold underline decoration-current decoration-2 underline-offset-4";

function InPersonActions() {
  return (
    <div className="flex flex-col items-start gap-2">
      <Link href="/dragon-gym#book" className={`${btnBase} bg-cream text-ink`}>
        Book in-person session
      </Link>
      <Link href="/dragon-gym" className={textLink}>
        More about Dragon Gym →
      </Link>
    </div>
  );
}

function OnlineActions() {
  return (
    <a href="#book-online" className={`${btnBase} bg-ink text-cream`}>
      Book online consult
    </a>
  );
}

/* ---------- Mobile / tablet: two stacked cards ---------- */

function MobileCards() {
  return (
    <div className="grid gap-5 lg:hidden">
      <article className="bg-ink p-6 text-cream md:p-8">
        <p className={`${tagBase} border-cream`}>{IN_PERSON.tag}</p>
        <h2 className={cardTitle}>{IN_PERSON.title}</h2>
        <dl className="mt-6 border-b border-ink-line">
          {toRows(IN_PERSON.rows).map((r) => (
            <div key={r.label} className="border-t border-ink-line py-4">
              <dt className={`${labelClass} text-line`}>{r.label}</dt>
              <dd
                className={`mt-1 text-[17px] leading-relaxed ${
                  r.strong ? "font-bold text-cream" : "text-on-ink-muted"
                }`}
              >
                {r.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-6">
          <InPersonActions />
        </div>
      </article>

      <article className="border-2 border-ink bg-cream p-6 text-ink md:p-8">
        <p className={`${tagBase} border-ink`}>{ONLINE.tag}</p>
        <h2 className={cardTitle}>{ONLINE.title}</h2>
        <dl className="mt-6 border-b-2 border-ink">
          {toRows(ONLINE.rows).map((r) => (
            <div key={r.label} className="border-t-2 border-ink py-4">
              <dt className={`${labelClass} text-stone`}>{r.label}</dt>
              <dd
                className={`mt-1 text-[17px] leading-relaxed ${
                  r.strong ? "font-bold text-ink" : "text-stone-dark"
                }`}
              >
                {r.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-6">
          <OnlineActions />
        </div>
      </article>
    </div>
  );
}

/* ---------- Desktop: comparison table ---------- */

function ComparisonTable() {
  const inPersonCell = "bg-ink px-8 py-5 align-top text-cream";
  const onlineCell =
    "border-x-2 border-ink bg-cream px-8 py-5 align-top text-ink";

  return (
    <table className="hidden w-full table-fixed border-collapse lg:table">
      <caption className="sr-only">
        In-person coaching at Dragon Gym compared with online coaching
      </caption>
      <colgroup>
        <col className="w-[200px]" />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <td className="border-b-2 border-ink" />
          <th scope="col" className={`${inPersonCell} pt-8 text-left font-normal`}>
            <p className={`${tagBase} border-cream`}>{IN_PERSON.tag}</p>
            <h2 className={cardTitle}>{IN_PERSON.title}</h2>
          </th>
          <th
            scope="col"
            className={`${onlineCell} border-t-2 pt-8 text-left font-normal`}
          >
            <p className={`${tagBase} border-ink`}>{ONLINE.tag}</p>
            <h2 className={cardTitle}>{ONLINE.title}</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        {ROW_LABELS.map((label, i) => {
          const strong = i === ROW_LABELS.length - 1;
          return (
            <tr key={label}>
              <th
                scope="row"
                className={`${labelClass} border-t-2 border-ink py-5 pr-6 text-left align-top text-stone`}
              >
                {label}
              </th>
              <td
                className={`${inPersonCell} border-t border-ink-line text-[17px] leading-relaxed ${
                  strong ? "font-bold" : "text-on-ink-muted"
                }`}
              >
                {IN_PERSON.rows[i]}
              </td>
              <td
                className={`${onlineCell} border-t-2 text-[17px] leading-relaxed ${
                  strong ? "font-bold" : "text-stone-dark"
                }`}
              >
                {ONLINE.rows[i]}
              </td>
            </tr>
          );
        })}
        <tr>
          <td className="border-t-2 border-ink" />
          <td className={`${inPersonCell} pb-8`}>
            <InPersonActions />
          </td>
          <td className={`${onlineCell} border-b-2 pb-8`}>
            <OnlineActions />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default function CoachingOptions() {
  return (
    <section
      id="options"
      className="bg-cream pt-10 pb-20 text-ink md:pb-24 lg:pt-12"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <MobileCards />
        <ComparisonTable />

        <div className="mt-12 border-t-2 border-ink pt-6">
          <p className={`${labelClass} text-stone`}>Also available</p>
          <ul className="mt-3 flex flex-col gap-1 md:flex-row md:gap-10">
            <li>
              <Link href="/contact" className={textLink}>
                Team or small group? Ask about group training →
              </Link>
            </li>
            <li>
              <a
                href={FIT_TO_FIGHT_URL}
                target="_blank"
                rel="noopener"
                className={textLink}
              >
                Combat athlete? See Fit to Fight →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
