import React from 'react'
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SpanTag from '@/components/ui/SpanTag';
import Image from "next/image";
import { stackData } from "@/data/stackData";
import { Paragraph, HeadingH3, Span } from '@/components/ui/Typography';

export default function Projects() {
    return (
        <section id="stack" className='pt-10 pb-10 lg:pt-20 px-4'>
            <Container >
                <div className="wrapper">
                    <SectionHeading
                        heading="Tech Stack"
                        subHeading="The technologies I use to build modern websites, optimize performance, and create smart automation solutions."
                    />
                    {stackData.map((data, index) => (
                        <div key={data.id} className={`wrapper-bottom-box ${index === 0 ? "mt-10 md:mt-15 border-t" : ""} py-4 border-b border-white/30`}>
                            <div className='flex flex-col md:flex-row justify-between'>
                                <div className='w-full md:w-[40%]'>
                                    <HeadingH3> {data.title} </HeadingH3>
                                </div>
                                <div className='w-full md:w-[60%]'>
                                    <Paragraph className='mb-5'>{data.description}</Paragraph>
                                    <div className="flex flex-wrap gap-2">
                                        {data.tags.map((tag) => (
                                            <SpanTag key={tag.name} className="flex items-center gap-2">
                                                <div className='p-1 bg-white rounded-2xl'>
                                                    <Image
                                                        src={tag.image}
                                                        alt={tag.name}
                                                        width={40}
                                                        height={40}
                                                        className='w-4 h-4 md:w-6 md:h-6 rounded-full'
                                                    />
                                                </div>
                                                <span>{tag.name}</span>
                                            </SpanTag>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container >
        </section>
    )
}
