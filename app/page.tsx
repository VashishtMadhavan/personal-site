import Image from "next/image";
import Link from "next/link";

const experience = [
  ["/amazon-a-logo.jpg", "Amazon AGI", "Senior Applied Scientist", <>Using RL to make LLMs better at coding.</>, "https://www.amazon.science/author/vashisht-madhavan", "Jan 2025 - present"],
  ["/pika-logo.png", "Pika", "Research Engineer", <>Led data curation and post-training efforts for video generation models.</>, "https://pika.art", "Jan 2024 - Jan 2025"],
  ["/humanlike.avif", "Humanlike", "Co-founder & CTO", <>Built AI voice bots to automate phone calls for businesses. Y Combinator S23.</>, "https://humanlike.app/", "May 2023 - Dec 2023"],
  ["/snorkel-logo.webp", "Snorkel AI", "Staff ML Engineer", <>Led development of the NLP platform for structured documents, used by leading enterprises.</>, "http://snorkelai.com/", "Jul 2021 - May 2023"],
  ["/uber-logo.webp", "Uber AI", "AI Researcher", <>Worked with Jeff Clune on RL research and product applications.</>, "https://www.uber.com/us/en/uberai/", "May 2017 - Nov 2019"],
  ["/berkeley-seal.png", "UC Berkeley · BAIR", "Graduate Researcher", <>Worked with Trevor Darrell on autonomous driving and large-scale video datasets.</>, "https://bair.berkeley.edu/", "Jan 2016 - May 2017"],
];

export default function Home() {
  return (
    <div className="space-y-12 lg:space-y-16">
      <section>
        <Image src="/portrait.JPEG" alt="Vashisht Madhavan" width={500} height={500} priority className="h-36 w-36 rounded-2xl border border-slate-900/10 object-cover shadow-[0_12px_32px_rgba(15,23,42,.07)] sm:h-40 sm:w-40" />
      </section>

      <section>
        <div className="mb-1 flex items-end justify-between border-b border-slate-900/10 pb-4">
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Career</p><h1 className="mt-1 text-lg font-semibold tracking-[-0.02em]">Experience</h1></div>
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-slate-400">Newest first</span>
        </div>
        <div className="divide-y divide-slate-900/10">
          {experience.map(([logo, company, role, description, href, dates]) => (
            <article key={company as string} className="group grid gap-4 py-5 sm:grid-cols-[3rem_1fr] sm:items-center">
              <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-slate-900/8 bg-white"><Image src={logo as string} alt={`${company} logo`} width={company === "Amazon AGI" ? 64 : 32} height={32} className={company === "Amazon AGI" ? "h-8 w-16 max-w-none -translate-x-[10px] object-contain" : "h-auto max-h-7 w-auto max-w-7 object-contain"} /></div>
              <div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="flex flex-wrap items-baseline gap-x-3"><Link href={href as string} className="font-semibold text-slate-900 hover:text-slate-600">{company as string} ↗</Link><span className="text-sm font-medium text-slate-500">{role as string}</span></div>
                  <time className="shrink-0 text-xs font-medium text-slate-400">{dates as string}</time>
                </div>
                <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
