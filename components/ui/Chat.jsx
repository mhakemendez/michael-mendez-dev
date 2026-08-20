"use client";

import { useEffect, useRef, useState } from "react";
import { MdSmartToy } from "react-icons/md";

export default function Chat() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);

    const messagesContainerRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const container = messagesContainerRef.current;

        if (container) {
            container.scrollTo({
                top: container.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [messages, loading]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = input;

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: userMessage,
            },
        ]);

        setInput("");
        setLoading(true);

        try {
            const res = await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: userMessage,
                }),
            });

            if (!res.ok) {
                throw new Error("Request failed.");
            }

            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: data.output,
                },
            ]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        "Sorry, something went wrong. Please try again.",
                },
            ]);

            inputRef.current?.focus();
        } finally {
            setLoading(false);
            inputRef.current?.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage();
    };

    return (
        <div className="w-full max-w-240 space-y-4 rounded-2xl bg-white p-4">
            <div ref={messagesContainerRef} className="scrollbar-hide flex h-37.5 md:h-40 flex-col space-y-4 overflow-y-scroll">
                {messages.length === 0 ? (
                    <div className="text-gray-400">
                        <p className="text-left text-[13px] md:text-[15px]">
                            Ask my AI agent to learn more about my work,
                            projects, services, and what I can build...
                        </p>
                    </div>
                ) : (
                    <>
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`w-auto max-w-[70%] rounded-2xl p-2 text-[13px] md:text-[15px] text-left ${message.role === "user"
                                    ? "ml-auto bg-primary text-white"
                                    : "mr-auto bg-gray-100"
                                    }`}
                            >
                                {message.content}
                            </div>
                        ))}
                        {loading && (
                            <div className="mr-auto flex w-fit gap-2 rounded-2xl bg-gray-100 p-3">
                                <MdSmartToy className="size-5 animate-bounce" />

                                <MdSmartToy
                                    className="size-5 animate-bounce"
                                    style={{ animationDelay: "0.15s" }}
                                />

                                <MdSmartToy
                                    className="size-5 animate-bounce"
                                    style={{ animationDelay: "0.3s" }}
                                />
                            </div>
                        )}
                    </>
                )}
            </div>

            <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2"
            >
                <input
                    type="text"
                    value={input}
                    ref={inputRef}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full rounded border border-black/5 p-3 cursor-target shadow outline-none focus:outline-none text-[13px] md:text-[15px] focus:ring-0"
                    placeholder="Type your message here to get started..."
                />

                <button
                    type="submit"
                    aria-label="Send Chat Message"
                    disabled={loading}
                    className="cursor-pointer cursor-target rounded-lg bg-primary px-6 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <MdSmartToy className="size-5" />
                </button>
            </form>
        </div>
    );
}