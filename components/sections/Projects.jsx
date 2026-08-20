import React from 'react'
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { works } from "@/data/works";
import SpanTag from '@/components/ui/SpanTag';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { Paragraph, HeadingH4, Span } from '@/components/ui/Typography';

export default function Projects() {
    return (
        <section id="works" className='pt-10 pb-10 lg:pt-20 px-4'>
            <Container >
                <div className="wrapper">
                    <SectionHeading
                        heading="Selected work — projects"
                        subHeading="Every project below is live and built to solve real business needs.
                            Explore the work, solutions, and results delivered for each project."
                    />
                    <div className="wrapper-bottom-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 md:mt-15">
                        {works.map((work) => (
                            <SpotlightCard key={work.id} className="custom-spotlight-card bg-white/16 rounded-md shadow-sm shadow-primary backdrop-blur-[3px] border border-white/30">
                                <article className='flex flex-col h-full'>
                                    <Image
                                        src={work.image}
                                        alt='Michael Mendez Photoshoot Image'
                                        width={800}
                                        height={600}
                                        className='shadow-xl rounded-lg'
                                    />
                                    <div className='p-5 flex flex-col grow'>
                                        <HeadingH4 className='text-white'>{work.title}</HeadingH4>
                                        <Paragraph className="my-3">{work.description}</Paragraph>
                                        <div className='flex gap-2 flex-wrap mb-4'>
                                            {work.tags.map((tag) => (
                                                <SpanTag key={tag}>
                                                    {tag}
                                                </SpanTag>
                                            ))}
                                        </div>
                                        <div className='flex justify-between items-center gap-2 flex-col lg:flex-row border-t border-white/5 mt-auto pt-4'>
                                            <Span>{work.company}</Span>
                                            <Link className='text-primary text-[12px] md:text-[14px] cursor-target font-semibold' href={work.link} target='_blank'>
                                                <FiExternalLink className="text-primary inline-block -mt-1 me-1" />
                                                <span>Live Demo</span>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </SpotlightCard>
                        ))}
                    </div>
                </div>
            </Container >
        </section>
    )
}
