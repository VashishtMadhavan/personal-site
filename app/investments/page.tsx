import Image from "next/image";
import Link from "next/link";

const companies = [
  {
    name: "Yarn",
    href: "https://yarn.so",
    description: "AI-powered video editor for sales and marketing.",
    logo: "/investments/yarn.png",
  },
  {
    name: "Magic Hour",
    href: "https://magichour.ai/",
    description: "Platform for AI video generation.",
    logo: "/investments/magic-hour.png",
  },
  {
    name: "RetailReady",
    href: "https://www.retailreadyai.com/",
    description: "AI supply-chain compliance platform.",
    logo: "/investments/retailready.ico",
  },
  {
    name: "Adagy Robotics",
    href: "https://adagyrobotics.com/",
    description: "Remote intervention for robotic fleets.",
    logo: "/investments/adagy.jfif",
  },
];

export default function Investments() {
  return (
    <div>
      <h1 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Investments</h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
        I occasionally angel invest in ambitious teams building useful, technical products.
      </p>
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {companies.map(({ name, href, description, logo }) => (
          <Link
            href={href}
            key={name}
            className="group flex min-h-40 flex-col rounded-2xl border border-slate-900/8 bg-white/70 p-5 transition hover:-translate-y-1 hover:border-slate-900/30 hover:shadow-xl hover:shadow-slate-900/5"
          >
            <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl border border-slate-900/8 bg-white p-2.5">
              <Image src={logo} alt={`${name} logo`} width={48} height={48} className="h-full w-full object-contain" />
            </div>
            <div className="mt-auto pt-6">
              <h2 className="font-semibold text-slate-950 group-hover:text-slate-600">{name} ↗</h2>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
