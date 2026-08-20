"use client";

import { useState } from "react";

export default function SendMessage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        company: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Replace this with your API or n8n webhook
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setFormData({
                name: "",
                email: "",
                message: "",
                company: "",
            });

            alert("Message sent successfully!");
        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div>
                <label
                    htmlFor="name"
                    className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-primary"
                >
                    Name
                </label>

                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-lg cursor-target border border-white/10 text-[12px] md:text-[15px] font-light bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary/50"
                />
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-primary"
                >
                    Email
                </label>

                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg cursor-target border border-white/10 text-[12px] md:text-[15px] font-light bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary/50"
                />
            </div>

            <div>
                <label
                    htmlFor="company"
                    className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-primary"
                >
                    Company
                </label>

                <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full rounded-lg cursor-target border border-white/10 text-[12px] md:text-[15px] font-light bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary/50"
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-primary"
                >
                    Message
                </label>

                <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none cursor-target  rounded-lg border border-white/10 text-[12px] md:text-[15px] font-light bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary/50"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-black  disabled:cursor-not-allowed disabled:opacity-50 cursor-target"
            >
                {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}