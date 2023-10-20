"use client"

import Link from "next/link";

export default async function Header() {
    return (
        <div className="flex w-full py-4 items-center border-b text-left justify-between">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <Link href="/">
                    <img
                    src="/logo-edit.png"
                    alt={`${process.env.SITE_NAME} logo`}
                    className='h-20 w-20'
                    />
                </Link>
                <div className="flex items-left justify-between space-x-4">
                    <h1 className="text-5xl md:font-serif">Vashisht Madhavan</h1>
                </div>
            </div>
        </div>
    );
}
