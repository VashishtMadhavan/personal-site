import Link from "next/link";

interface PublicationLinkProps {
  href: string; title: string; conference: string; blog?: string; code?: string;
}

export function PublicationLink({ href, title, conference, blog, code }: PublicationLinkProps) {
  return (
    <article className="group border-b border-slate-900/10 py-5 transition first:border-t">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <h2 className="max-w-3xl text-base font-semibold leading-snug text-slate-900">{title}</h2>
        {conference && <span className="w-fit shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">{conference}</span>}
      </div>
      <div className="mt-4 flex gap-4 text-sm font-medium">
        <Link href={href} className="text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900">Paper ↗</Link>
        {blog && <Link href={blog} className="text-slate-500 hover:text-slate-950">Blog ↗</Link>}
        {code && <Link href={code} className="text-slate-500 hover:text-slate-950">Code ↗</Link>}
      </div>
    </article>
  );
}
