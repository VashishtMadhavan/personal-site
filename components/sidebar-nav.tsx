"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: { href: string; title: string }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()
  return (
    <nav className={cn("flex gap-1 overflow-x-auto pb-1 lg:sticky lg:top-8 lg:flex-col lg:overflow-visible lg:pb-0", className)} {...props}>
      <span className="hidden px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 lg:block">Explore</span>
      {items.map((item, index) => (
        <Link key={item.href} href={item.href} className={cn(
          "group flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all",
          pathname === item.href ? "bg-slate-950 text-white shadow-lg shadow-slate-900/10" : "text-slate-600 hover:bg-white hover:text-slate-950"
        )}>
          <span className={cn("text-xs tabular-nums", pathname === item.href ? "text-slate-300" : "text-slate-400 group-hover:text-slate-700")}>0{index + 1}</span>
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
