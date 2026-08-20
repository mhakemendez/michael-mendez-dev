import React from 'react'
import Container from '@/components/ui/Container';
import Link from "next/link";
import { Paragraph, HeadingH4, Span } from '@/components/ui/Typography';
import { channels } from "@/data/channels";
import CurrentTime from "@/components/ui/CurrentTime";
import { navItems } from "@/data/navItems";

export default function Footer() {
    return (
        <footer className='relative pt-15 pb-3 px-4 border-t border-t-white/20 overflow-hidden'>
            <Container>
                <div className="wrapper grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-25">
                    <div>
                        <Link href="#nav-hero-section" className="text-[20px] text-white">
                            <span className="py-1 px-3 bg-primary text-white rounded-md inline-block me-2 shadow-lg">M</span> Michael Mendez
                        </Link>
                        <Paragraph className='mt-3'>
                            Website and AI automation developer based in the Philippines, with experience developing various types of websites and digital solutions.
                        </Paragraph>
                    </div>
                    <div className='flex flex-col items-start gap-4'>
                        <span className='text-[14px] text-primary uppercase mb-3'>Quick Links</span>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="transition-opacity hover:text-primary text-[14px] text-white cursor-target"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className='flex flex-col gap-4 items-start'>
                        <span className='text-[14px] text-primary uppercase mb-3'>Elsewhere</span>
                        {channels.map((item) => (
                            <Link
                                target='_blank'
                                key={item.id}
                                href={item.url}
                                className="group flex items-center gap-2 transition-colors hover:text-primary text-[14px] cursor-target text-white"
                            >
                                <item.icon className="text-white group-hover:text-primary text-[15px] transition-colors" />
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='mt-10'>
                    <span className='font-extrabold text-white/5  text-[22vw] lg:text-[20vw] uppercase lg:leading-[90%]'>Mendez</span>
                </div>
                <div className='border-t border-t-white/20 pt-3 flex items-center flex-col justify-between md:flex-row  z-1'>
                    <span className='text-white text-[14px]'>© {new Date().getFullYear()} Michael Mendez. All rights reserved.</span>
                    <CurrentTime  className='text-white text-[14px]'/>
                </div>
            </Container>
        </footer>
    )
}
