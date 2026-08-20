import React from 'react'
import Container from '@/components/ui/Container';
import Chat from '@/components/ui/Chat';
import Button from '@/components/ui/Button';
import HeroTags from '@/components/ui/HeroTags';
import { HeadingH1, HeadingH4, HeroSubHeadung } from '@/components/ui/Typography';
import Link from "next/link";

export default function Hero() {
    return (
        <section id='hero' className='z-1 relative pt-15 px-4'>
            <Container>
                <div className='wrapper'>
                    <div className="wrapper-top-box flex gap-3 justify-center flex-wrap">
                        <HeroTags />
                    </div>
                    <div className="wrapper-middle-box flex flex-col items-center">
                        <HeadingH4 className='text-primary font-bold shadow-lg text-center max-w-220 mt-12 mb-2 md:mb-0 uppercase'>Website Developer · AI Automation Developer</HeadingH4>
                        <HeadingH1>
                            Modern
                            <span className='text-primary'> Web </span> Smart
                            <span className='text-primary'> Automation</span>
                        </HeadingH1>
                        <HeroSubHeadung>
                            I build modern, high-performance websites and digital solutions that combine thoughtful design,
                            seamless functionality, and smart automation to help businesses grow.
                        </HeroSubHeadung>
                        <div className='flex items-center gap-3 mt-10 md:mt-14 lg:mt-18 flex-col md:flex-row'>
                            <Button href="#contact" className="bg-primary text-black" text="Let's Start Automate" />
                            <Button className="border text-white" text="Download CV" />
                        </div>
                    </div>
                    <div className='wrapper-bottom-box w-full flex justify-center mt-10 md:mt-14 lg:mt-18'>
                        <Chat />
                    </div>
                </div>
            </Container>
        </section>

    )
}
