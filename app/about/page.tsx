import AboutHero from "@/components/about/AboutHero";
import Chapter, { Emphasis, FramedPhoto, PullQuote } from "@/components/about/Chapter";
import Beliefs from "@/components/about/Beliefs";
import Credentials from "@/components/about/Credentials";
import AboutCta from "@/components/about/AboutCta";

// Jake's story text — kept word for word from the original page except the approved edits.

export default function AboutPage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <AboutHero intro="I build strength programs for people who actually use their bodies. If your gym work is making you worse at the thing you care about, something's wrong." />

      <Chapter meta="Chapter 01" title="Movement is magic">
        <p>
          My mom was sick my whole childhood. Being there during cancer treatments, and seeing my mom fight so hard against a body that was trying to shut her down, I learned very early on how blessed we are to get to invest in our health.
        </p>
        <p>
          I rarely ever talk about it, but when I was seven, I was diagnosed with Rheumatoid Arthritis in my left hip. I used a wheelchair for a few years on and off because my flare ups killed. I was a kid very familiar with the dreary waiting rooms of medical centers, and saw firsthand how doctors often just throw drugs at symptoms without giving people the systems to keep them at home, healthy.
        </p>
        <p>
          My rheumatologist said no contact sports. Swimming, maybe some low-impact stuff. I didn&apos;t listen. Sure enough, flare ups happened less often. Then became rare. Now my hips are stronger than ever, and I use them to kick people in the face, lol.
        </p>
        <PullQuote>
          Seven-year-old me figured out something nobody told me directly: movement is magic. It heals. It builds. It changes what you think is possible.
        </PullQuote>
        <p>
          After seeing how movement prolonged quality of life for my mom, and gave me back my freedom, I knew I could help people break their own self-limiting beliefs on what&apos;s possible.
        </p>
        <div className="grid grid-cols-2 gap-4 pt-4">
          <FramedPhoto src="/momma.JPG" alt="Jake with his mom" className="aspect-[4/5]" sizes="(min-width: 1024px) 340px, 50vw" />
          <FramedPhoto src="/Soccertuff.JPG" alt="Jake playing soccer" className="aspect-[4/5]" sizes="(min-width: 1024px) 340px, 50vw" />
        </div>
      </Chapter>

      <Chapter meta="Chapter 02" title="The weight room" tone="cream-dark">
        <p>
          High school soccer was a reality check. I was scrawny, underfed, and honestly horrible. But learning how to lift? That was my shit. A new community, newbie gains. I was hooked.
        </p>
        <p>
          Watching my body actually respond to progressive overload — seeing change I built with consistency — that was the first time I felt <Emphasis>capable.</Emphasis> It was more than just the gym. It was therapy.
        </p>
        <p>
          I needed to learn everything. Anatomy, physiology, how the body actually works. Then senior year I tore my shoulder, and everything... stopped. My identity was gone. Or was it?
        </p>
        <p>
          I ended up befriending the PT at my gym. Picked his brain constantly. Learned about prehab, recovery, the science behind getting stronger without breaking down. By the time I got to West Chester, I knew Exercise Science was it.
        </p>
        <p>
          I spent two years working as an aide at Kinetic Reimagined under Dr. Christopher Sands. That clinic treated people, not just injuries. I learned how to prescribe movement that actually worked and how to build an environment where people wanted to show up.
        </p>
        <p className="font-semibold text-ink">
          But studying it wasn&apos;t enough. I needed to build more proof.
        </p>
      </Chapter>

      <Chapter meta="Chapter 03 · The experiment" title="Muay Thai">
        <p>
          After my shoulder healed, I was barely lifting, and casual rec sports weren&apos;t cutting it. I needed something that would break me if I wasn&apos;t ready.
        </p>
        <p>
          A friend dragged me to Muay Thai. Within six months I competed in my first smoker fight. Within a year I was working at the gym. Now, a little over two years in, I&apos;m preparing for my first sanctioned amateur fight.
        </p>
        <p>
          People ask how I improved that fast in a sport that brutal. It&apos;s not complicated: <Emphasis>I just built a body that could learn fast.</Emphasis>
        </p>
        <FramedPhoto src="/about/training.jpg" alt="Jake training Muay Thai" className="aspect-[4/3]" sizes="(min-width: 1024px) 700px, 100vw" />
        <p>
          Every principle I learned in school — progressive overload, recovery strategies, energy system work — I tested on myself first. Logged everything. Strength training that didn&apos;t leave me too sore for technique work. Conditioning that didn&apos;t wreck my joints. Mobility protocols that kept me feeling great through 5-6 sessions a week.
        </p>
        <p>
          It worked. Not because I&apos;m unique. Because I understood how to apply sports science to life.
        </p>
        <p>
          In late 2025 I got my NASM-CPT and started taking clients. They&apos;ve hit PRs they didn&apos;t think were possible. Built strength without sacrificing their time. And stayed healthy enough to keep doing what they actually care about.
        </p>
        <p className="font-semibold text-ink">
          That&apos;s the standard. If your strength program makes you too sore to do what matters, it&apos;s not working.
        </p>
      </Chapter>

      <Beliefs
        statement={`I'm not a pro fighter. I'm not a wannabe "Gymshark" athlete.`}
        paragraphs={[
          "I'm an Exercise Science student who spent eight years learning how to build a body that is Built for Performance.",
          "In life, in sport, whatever it looks like - let's get you there too.",
        ]}
        philosophy={`"I live to build capability: in my body, my mind, and the people I work with — so I can perform under pressure, stay present, and move with deliberate intention everywhere I go."`}
      />

      <Credentials />
      <AboutCta />
    </main>
  );
}
