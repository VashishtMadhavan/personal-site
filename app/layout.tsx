import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from "next/link";
import { SidebarNav } from "@/components/sidebar-nav"
import Header from "@/components/header"
import '@/app/globals.css'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vashisht Madhavan',
  description: 'Vashishts personal site',
}


const sidebarNavItems = [
  {
    title: "About",
    href: "/",
  },
  {
    title: "Research",
    href: "/research",
  },
  {
    title: "Resume",
    href: "/resume.pdf",
  },
  {
    title: "Investments",
    href: "/investments",
  }
]

interface RootLayoutProps {
  children: React.ReactNode
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Head>
          <link rel="icon" href="/logo.webp" />
        </Head>
        <div className="hidden space-y-6 p-10 pb-16 md:block">
          <section>
            <Header />
          </section>
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <main className="flex-1 lg:max-w-6xl">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}