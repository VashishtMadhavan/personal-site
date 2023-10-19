"use client"

import Link from "next/link";

export default async function Header() {
    return (
        <div className="flex w-full py-4 items-center border-b text-left justify-between">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <Link href="/">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label={`${process.env.SITE_NAME} logo`}
                    viewBox="0 0 32 28"
                    className='h-12 w-12 fill-black dark:fill-white'
                    >
                    <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z" />
                    <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z" />
                    </svg>
                </Link>
                <div className="flex items-left justify-between space-x-4">
                    <h1 className="text-5xl md:font-serif">Vashisht Madhavan</h1>
                </div>
            </div>
        </div>
    );
}
