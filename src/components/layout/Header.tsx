"use client";

import { useState } from "react";

import Image from "next/image";
import logo from "../../../public/logo/logo.png";
import Link from "next/link";
import { headerData } from "@/data/layout/Header";
import { Download, Menu, X } from "lucide-react";

export default function Header() {

    const [isopen, setIsopen] = useState(false)
    return (
        <section className="bg-background w-full relative">

            <div className="relative">

                <div className="mx-auto mt-2 flex w-full max-w-7xl items-center justify-between rounded-2xl border border-accent/10 bg-background px-4 py-2 sm:px-6 lg:px-10">
                   <Link href="/">
                    <Image src={logo} alt="logo" className="w-18" />
                   </Link>
                    <div className="hidden md:flex gap-4 text-white">
                        {headerData.map((item) => {
                            return (
                                <Link key={item.id} href={item.href}>
                                    {item.label}
                                </Link>
                            )
                        })}

                    </div>

                    <button className="hidden md:flex gap-2 border border-accent text-white px-8 py-2 rounded-lg ">
                        <p>Downlaod Resume</p>
                        <Download className="text-accent" />

                    </button>
<button
    onClick={() => setIsopen(!isopen)}
    className="text-foreground md:hidden"
>
    {isopen ? <X size={24} /> : <Menu size={24} />}
</button>

{/* <Link
    href="#menu"
    onClick={(e) => {
        e.preventDefault();
        setIsopen((prev) => !prev);
    }}
    className="text-foreground md:hidden"
    aria-label={isopen ? "Close menu" : "Open menu"}
>
    {isopen ? <X size={24} /> : <Menu size={24} />}
</Link> */}
                </div>

                <aside

                    className={`absolute right-0 top-full z-40 h-dvh w-[70%] max-w-sm bg-surface p-6 transition-transform duration-300 ${isopen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    sidebar

                </aside>
            </div>


        </section>

    );
}