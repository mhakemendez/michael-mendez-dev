import React from 'react'
import Container from '@/components/ui/Container';
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import SectionHeading from '@/components/ui/SectionHeading';
import { specialises } from "@/data/skills";
import { Paragraph, UnOrderedList } from '@/components/ui/Typography';

export default function Developer() {
    return (
        <section id="developer" className='py-10 lg:pt-20 px-4'>
            <Container >
                <div className="wrapper">
                    <SectionHeading
                        heading="The Developer"
                        subHeading="Website and AI automation developer based in the Philippines, with experience developing various types of websites and digital solutions."
                    />
                    <div className="wrapper-bottom-box flex flex-col md:flex-row gap-10 lg:gap-20 mt-10 md:mt-15">
                        <div className="wrapper-left-box w-full md:w-[40%]">
                            <Image
                                src="/images/Mendez-Thumbnail.avif"
                                alt='Michael Mendez Photoshoot'
                                width={800}
                                height={1000}
                                className='rounded-lg'
                            />
                        </div>
                        <div className="wrapper-right-box w-full md:w-[60%]">
                            <Paragraph>
                                A Website and WordPress Developer with 5+ years of experience building responsive, high-performance
                                websites and web applications for businesses and growing brands.
                            </Paragraph>
                            <Paragraph>
                                My background is rooted in WordPress development, custom themes and plugins, WooCommerce, PHP, and Laravel,
                                with a strong focus on performance, SEO, and reliable website solutions. I’ve also expanded my development
                                stack to React and Next.js, allowing me to build modern, scalable, and dynamic web experiences beyond traditional
                                WordPress.
                            </Paragraph>
                            <Paragraph>
                                Alongside web development, I work with n8n to build AI-powered automations and workflows that connect
                                websites, APIs, business tools, and AI services. I enjoy finding ways to simplify repetitive
                                processes and turn manual tasks into efficient automated systems.
                            </Paragraph>
                            <Paragraph>
                                I approach every project with a focus on clean development, performance, usability, and
                                practical solutions—from the initial idea and development through deployment, optimization,
                                and ongoing maintenance
                            </Paragraph>
                            <UnOrderedList>
                                <ul>
                                    {specialises.map((specialise) => (
                                        <li key={specialise.id} className='text-main-white font-light mb-2'>
                                            <FiCheck className="text-primary text-xl me-2 shrink-0 inline-block" />
                                            <span>{specialise.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </UnOrderedList>
                        </div>
                    </div>
                </div>
            </Container >
        </section>
    )
}
