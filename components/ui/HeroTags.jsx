import React from "react";
import CurrentTime from "@/components/ui/CurrentTime";

const tags = [
    { id: 1, label: "Available for work", icon: true },
    { id: 2, label: "40+ Websites · 5 Years Experience", icon: false },
    { id: 3, label: "Quezon City, Metro Manila · Philippines", icon: false },
    { id: 4, label: <CurrentTime />, icon: false },
];

export default function HeroTags() {
    return (
        <>
            {tags.map((tag) => (
                <div
                    key={tag.id}
                    className="inline-flex justify-center text-center items-center gap-2 bg-white/16 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[3px] border border-white/30 py-1.5 px-4"
                >
                    {tag.icon && (
                        <span className="relative flex h-2 w-2">
                            <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                            <span className="relative h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_2px_rgba(74,222,128,0.6)]" />
                        </span>
                    )}

                    <span className="uppercase text-[10px] text-main-white tracking-[2px] font-light">
                        {tag.label}
                    </span>
                </div>
            ))}
        </>
    );
}