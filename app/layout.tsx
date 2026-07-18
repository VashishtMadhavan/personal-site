import type { Metadata } from "next";
import { SidebarNav } from "@/components/sidebar-nav";
import Header from "@/components/header";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Vashisht Madhavan · AI Researcher",
  description: "Vashisht Madhavan — AI researcher, engineer, and investor.",
  icons: {
    icon: [{ url: "/vm-mark.png?v=2", type: "image/png" }],
    shortcut: "/vm-mark.png?v=2",
    apple: "/vm-mark.png?v=2",
  },
};

const sidebarNavItems = [
  { title: "About", href: "/" },
  { title: "Research", href: "/research" },
  { title: "Resume", href: "/resume_vash.pdf" },
  { title: "Investments", href: "/investments" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden font-sans">
        <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <Header />
          <div className="mt-6 grid gap-9 lg:mt-10 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-14">
            <aside><SidebarNav items={sidebarNavItems} /></aside>
            <main className="min-w-0 pb-12">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
