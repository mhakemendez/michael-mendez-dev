import React from 'react'

export default function SectionHeading({ heading, subHeading }) {
    return (
        <div className="wrapper-top-box">
            <h6 className='text-primary font-semibold text-[12px] md:text-[14px] tracking-[2px] shadow-lg uppercase'>{heading}</h6>
            <p className='text-main-white text-[14px] md:text-[16px] max-w-150 mt-4'>{subHeading}
            </p>
        </div>
    )
}
