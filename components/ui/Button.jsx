import React from 'react'
import Link from "next/link";

export default function Button({ text, className, href = "#contact" }) {
    return (
        <Link
            href={href}
            className={`rounded-full text-[12px] md:text-[12px] shadow-xl px-5 py-3 uppercase tracking-[2px] cursor-target ${className}`}
        >
            {text}
        </Link>
    )
}