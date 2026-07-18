import Image from "next/image";
import Link from "next/link";

const profileLinks = [
  ["Email", "mailto:vashisht.madhavan@gmail.com"],
  ["Twitter", "https://twitter.com/vashmadhavan"],
  ["GitHub", "https://github.com/VashishtMadhavan"],
  ["LinkedIn", "https://www.linkedin.com/in/vashishtmadhavan/"],
  ["Scholar", "https://scholar.google.com/citations?user=WjF1dugAAAAJ&hl=en&oi=ao"],
];

export default function Header() {
  return (
    <header className="border-b border-slate-900/10 pb-5 lg:flex lg:items-center lg:justify-between lg:gap-8">
      <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="Vashisht Madhavan home">
        <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-slate-900/10 bg-white transition-transform duration-300 group-hover:-translate-y-0.5">
          <Image src="/vm-mark.png" alt="Vashisht Madhavan monogram" width={48} height={48} priority className="h-full w-full object-contain p-1.5" />
        </span>
        <span className="min-w-0">
          <span className="block text-xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-2xl">Vashisht Madhavan</span>
          <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.12em] text-slate-500 sm:text-[11px] sm:tracking-[0.16em]">AI researcher &amp; builder · New York</span>
        </span>
      </Link>
      <nav aria-label="Profile links" className="mt-4 flex items-center gap-5 overflow-x-auto border-t border-slate-900/10 pt-4 lg:mt-0 lg:shrink-0 lg:border-0 lg:pt-0">
        {profileLinks.map(([label, href]) => (
          <Link key={label} href={href} className="group inline-flex shrink-0 text-xs font-medium text-slate-500 hover:text-slate-950">
            {label}<span className="ml-1 text-slate-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-500">↗</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
