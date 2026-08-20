"use client";

import { useEffect, useState } from "react";

export default function CurrentTime({ className }) {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            setTime(
                new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })
            );
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return <span className={`${className}`}>{time} PHT</span>;
}