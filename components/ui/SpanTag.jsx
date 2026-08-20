import React from 'react'

export default function SpanTag({ children, className }) {
    return (
        <span className={`${className} uppercase text-[9px] md:text-[10px] text-main-white tracking-[2px] font-light bg-white/16 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[3px] border border-white/30 py-1 px-4`}>
            {children}
        </span>
    )
}
