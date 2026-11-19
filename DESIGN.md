# DESIGN.md — peteyurr.com (Built for Performance)

Read this before any UI work. The approved page designs live in the "BFP Homepage Directions" design canvas; this file is the rulebook for building them.

## Brand in one line
Cream paper, black ink, heavy outlines, square corners — taken from the BFP logo. Coaching for **athletes and everyday people, equal billing**. Tagline: **Build capability. Perform.**

## Color tokens (Tailwind v4 `@theme inline` in app/globals.css)
| Token | Hex | Use |
|---|---|---|
| `cream` | #F4F1EA | Page background |
| `cream-dark` | #EDE9E0 | Alternate sections (audience split, session steps, contact, newsletter on light pages) |
| `sand` | #E7E2D7 | Image/video placeholders while loading |
| `ink` | #0A0A0A | Text, 2px borders, primary buttons, black bands |
| `stone-dark` | #3F3B36 | Body copy on cream |
| `stone` | #57534E | Eyebrows, captions, labels |
| `line` | #BDB6A8 | Inactive carousel bars; secondary text ON INK ONLY (fails on cream) |
| white | #FFFFFF | Form input fill only |
| on-ink muted | #D6D0C4 | Body copy on black bands |

Rules: no orange, no gradients, no shadows, no grain overlay. Never two black bands touching (put a cream section between). Use tokens/classes, never raw hex in components.

## Type
- **Montserrat** (`font-display`, next/font, 400–800): headlines, nav, buttons, labels.
- **Inter** (`font-sans`): body, quotes, input text.
- Headlines: Montserrat 800, ALWAYS uppercase.
  - H1: 40px phone → 64–76px desktop (≥1024px). Line-height ~1.02.
  - H2: 32px phone → 48px desktop (≥768px).
  - H3 / card titles: 22px phone → 26px desktop.
- Eyebrow (label above H2): Montserrat 500, 12–13px, uppercase, letter-spacing 0.36–0.42em, color `stone`. Phone eyebrows ≤ ~25 characters.
- Nav / buttons: Montserrat 600–700, 13px, uppercase, letter-spacing 0.12em.
- Meta labels (card numbers, form labels, captions): Montserrat 600, 11–12px, uppercase, 0.2em.
- Body: Inter 16–17px phone, 17–19px desktop, line-height 1.6–1.7. Inputs never below 16px (stops iPhone zoom).

## Shape and spacing
- Square corners everywhere (radius 0) — buttons, cards, inputs, images, video. Override shadcn/ui radius to 0.
- Brand line: 2px ink border (header bottom, outlined cards, secondary buttons, inputs, image frames). 1px #333 only inside black bands.
- Container max 1200px, **24px side gutters at every size**.
- Section padding: 80px phone / 96px desktop. Cards 20px apart. Testimonials 64px apart on phone.
- Every tappable thing ≥44px tall; main buttons 52–54px on phone, full width and stacked.
- Breakpoints (mobile first): 640 (buttons side by side), 768 (2-up cards, desktop H2), 1024 (full nav, side-by-side hero, 3-up cards, desktop H1).
- No horizontal scroll at 390px wide.

## Shared components
- **Header**: sticky, cream, 2px ink bottom border. Logo `/bfp-logo-ink.png` 40px (phone) / 56px (desktop). Desktop nav: Coaching · Dragon Gym · Free Resources · Shop · About · [Book a consult]. Current page link gets a 2px underline + `aria-current="page"`.
- **Mobile menu** (<1024px): 44px square ☰ button → full-screen cream menu, links Montserrat 800 22px uppercase with 2px dividers (≥60px rows), plus Contact; bottom: "Book a consult" (primary) + "Call or text 717-448-4222" (secondary, tel:). Use shadcn/ui Sheet. Closes on X, link tap, Escape; locks scroll.
- **Sticky booking bar (phone only)**: fixed bottom, cream with 2px top border: primary button + 54px square call button (tel:+17174484222). Label per page: Home "Book a consult", Dragon Gym "Book your session", Coaching "Choose how to start".
- **Buttons**: primary = ink fill/cream text; secondary = 2px ink outline; inverse (on black) = cream fill/ink text; text link = semibold + 2px underline + →.
- **Offer card**: featured = solid ink; others = 2px outline. Meta label ("01 — In person"), uppercase title, ≤25 words, one arrow link.
- **Credentials strip**: ink band under hero; one row, scrolls sideways on phone. Items: CSCS · B.S. Exercise Science, WCU · M.S. student, Applied Sports Science · NASM-CPT · NASM-CNC · S&C Coach, Dragon Gym · Muay Thai athlete.
- **Hero carousel**: 3–5 real coaching photos, 2px ink frame, 4:5 on phone / 560px tall desktop, bar indicators (active 32px ink, inactive 12px `line`), arrows. shadcn/ui Carousel (Embla), swipeable, autoplay ≤ every 6s, off for reduced motion.
- **Testimonial**: 16:9 muted video (playsInline, poster) above quote; caption "NAME · descriptor".
- **Forms**: visible uppercase labels above white inputs with 2px ink border; correct type/autocomplete; errors say how to fix.
- **Footer**: ink. Cream logo `/bfp-logo-cream.png`, site links, contact (717-448-4222, jake24peterson@gmail.com), Instagram @peteyurr, YouTube library, © year + tagline.

## Pages and links
| Route | Purpose | Key links |
|---|---|---|
| `/` | Home | Book in person → /dragon-gym; Explore online → /coaching |
| `/dragon-gym` | In-person consult + Fit to Fight | Cal.com embed: https://cal.com/jacob-peterson-etqt04/training-strategy-session-at-dragon-gym · Fit to Fight: https://www.dragongym.com/reports/fit-to-fight-train-smart-fight-better.cfm |
| `/coaching` | In person vs online, clearly separated | In person → Cal.com link above · Online → Calendly embed: https://calendly.com/jake24peterson/30min |
| `/resources` | Free program, exercise library, articles, email list | Kit program: https://built-for-performance.kit.com/6a048502ae · YouTube: https://youtube.com/playlist?list=PLHYA2heaGlAVX7gO-qyNemXJm8bebxBFX |
| `/about` | Jake's story (keep his words) | Both booking links |
| `/shop` | Coming soon + waitlist | Products later via existing Stripe code (lib/products.ts) |
| `/contact` | Phone, email, message form (Resend → Gmail) | tel:+17174484222 · mailto:jake24peterson@gmail.com |

## Voice
Direct, plain, coach-like. Real names and numbers only when confirmed. No hype, fake urgency, emoji, or AI filler ("unlock your potential"). Buttons say what happens ("Book your session", not "Get started").

## Media
Next.js `<Image>` with `sizes`; WebP/AVIF, ~300KB max per photo. Real coaching photos over physique shots. Videos short, muted, poster image; long videos on YouTube.
