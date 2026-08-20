import React from 'react'
import SendMessage from '@/components/ui/SendMessage';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SpotlightCard from '@/components/ui/SpotlightCard';
import Link from "next/link";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { Paragraph } from '@/components/ui/Typography';
import { channels } from "@/data/channels";

export default function Contact() {
    return (
        <section id="contact" className='pt-10 pb-20 px-4'>
            <Container >
                <div className="wrapper">
                    <SectionHeading
                        heading="Contact"
                        subHeading="Have a project in mind or need help with your website? Let’s discuss your goals and find the right solution to bring your ideas to life."
                    />
                    <div className="wrapper-bottom-box mt-15 flex flex-col md:flex-row gap-5 lg:gap-10">
                        <SpotlightCard
                            className='w-full md:w-[50%] lg:w-[55%] bg-white/16 rounded-lg shadow-sm shadow-primary backdrop-blur-[3px] border border-white/30 p-4 md:p-8'
                        >
                            <SendMessage />
                        </SpotlightCard>
                        <SpotlightCard className='w-full md:w-[50%] lg:w-[45%] bg-white/16 rounded-lg shadow-sm shadow-primary backdrop-blur-[3px] border border-white/30 p-4 md:p-8'>
                            <span className='uppercase inline-block tracking-[0.22em] text-primary mb-8'>Direct channels</span>
                            <div className='flex flex-col gap-5'>
                                {channels.map((channel) => (
                                    <Link
                                        target='_blank'
                                        key={channel.id}
                                        href={channel.url}
                                        className="w-full flex items-center cursor-target gap-3 justify-between md:p-2 md:hover:bg-white/10 rounded-md"
                                    >
                                        <div className='flex items-stretch gap-3'>
                                            <div className='bg-black/20 py-2 px-4 rounded-md flex justify-center items-center'>
                                                <channel.icon className='text-primary text-[18px]' />
                                            </div>
                                            <div className='flex flex-col'>
                                                <span className='text-white'>{channel.title}</span>
                                                <span className='text-white lowercase -mt-1 font-extralight text-[14px]'>{channel.value}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <FiArrowRight className='text-white text-[18px]' />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <Paragraph className='mb-0! mt-5 italic text-[14px]!'>
                                Have a project in mind or need help with your website? Let’s discuss your goals and explore how I can help with web development,
                                improvements, or automation solutions.
                            </Paragraph>
                        </SpotlightCard>
                    </div>
                </div>
            </Container >
        </section>
    )
}
