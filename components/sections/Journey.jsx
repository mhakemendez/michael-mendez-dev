import React from 'react'
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { experience } from "@/data/experience";
import SpanTag from '@/components/ui/SpanTag';
import { Paragraph, HeadingH4, Span } from '@/components/ui/Typography';

export default function Journey() {
    return (
        <section id="journey" className="relative pt-10 pb-10 md:pt-20 px-4">
            <Container>
                <div className="wrapper">
                    <SectionHeading
                        heading="Journey"
                        subHeading="Ordered because the order matters — each year's constraint shaped the next year's default stack."
                    />
                    <div className="relative pl-8 md:pl-0 mt-10 md:mt-15">
                        <div className="absolute left-1.75 top-2 h-full w-px bg-white/30 md:left-1/2 md:-translate-x-1/2">
                        </div>
                        <div className="absolute left-1.75 top-2 w-px bg-linear-to-b from-primary via-primary to-accent md:left-1/2 md:-translate-x-1/2">
                        </div>
                        <div className="space-y-14">
                            {experience.map((data, index) => (
                                <SpotlightCard key={data.id} className={`relative md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ms-auto md:text-left"} md:pr-2 bg-white/16 rounded-lg shadow-sm shadow-primary backdrop-blur-[3px] border border-white/30`}>
                                    <article className="">
                                        <span className={`absolute -left-8 top-2 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-primary bg-bg ${index % 2 === 0 ? "md:left-auto md:right-[-3.05rem]" : "md:left-[-3.05rem] md:right-auto"}`}>
                                            <span className="h-1 w-1 rounded-full bg-primary">
                                            </span>
                                        </span>
                                        <div className="card spotlight p-6">
                                            <p className="text-[11px] uppercase tracking-[0.22em] text-primary">
                                                {data.date}
                                            </p>
                                            <HeadingH4 className="mt-3 text-white">
                                                {data.title}
                                            </HeadingH4>
                                            <p className="mt-1 text-[11px] uppercase text-muted font-extralight">{data.company}
                                            </p>
                                            <Paragraph className="mt-4">
                                                {data.description}
                                            </Paragraph>
                                            <ul className={`mt-4 flex flex-wrap gap-1.5 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                                {data.tags.map((tag) => (
                                                    <SpanTag key={tag}>
                                                        {tag}
                                                    </SpanTag>
                                                ))}
                                            </ul>
                                        </div>
                                    </article>
                                </SpotlightCard>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
