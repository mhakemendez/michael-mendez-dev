import React from 'react'

export function HeadingH1({ children }) {
    return (
        <h1 className="text-main-white text-center text-[32px] md:text-[60px] lg:text-[110px] [text-shadow:0_0_3px_rgba(255,255,255,0.8)] font-extrabold uppercase mb-5 leading-[140%] md:leading-[100%]">
            {children}
        </h1>
    )
}

export function HeadingH3({ children, className }) {
    return (
        <h3 className={`text-white text-[18px] md:text-[20px] lg:text-[24px] ${className}`}>
            {children}
        </h3>
    )
}

export function HeadingH4({ children, className }) {
    return (
        <h4 className={`text-[16px] md:text-[18px] ${className}`}>
            {children}
        </h4>
    )
}

export function HeadingH6({ children, className }) {
    return (
        <h6 className={`text-[14px] md:text-[16px] ${className}`}>
            {children}
        </h6>
    )
}

export function HeroSubHeadung({ children }) {
    return (
        <p className='text-main-white text-[16px] md:text-[18px] text-center max-w-220'>
            {children}
        </p>
    )
}

export function Paragraph({ children, className }) {
    return (
        <p className={`text-main-white text-[13px] md:text-[15px] font-light mb-4 leading-[160%] ${className}`}>
            {children}
        </p>
    )
}

export function UnOrderedList({ children, className }) {
    return (
        <ul className={`text-main-white text-[13px] md:text-[15px] font-light mb-4 leading-[160%] ${className}`}>
            {children}
        </ul>
    )
}

export function Span({ children, className }) {
    return (
        <span className={`text-main-white text-[12px] md:text-[14px] font-light ${className}`}>
            {children}
        </span>
    )
}

