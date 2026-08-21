"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from '@/components/ui/Container';
import { motion, AnimatePresence } from "framer-motion";
import Button from '@/components/ui/Button';
import { IoIosCloseCircle } from "react-icons/io";
import { navItems } from "@/data/navItems";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <header className={`${isScrolled && 'fixed w-full top-5 z-100'}`}>
            <nav className="w-full z-99 relative">
                <Container>
                    <div className={`mx-auto flex items-center justify-between py-2 p-2 rounded-xl shadow-2xl
                        ${isScrolled && 'bg-black/60 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[3px] border border-white/30'}
                        `}>
                        {/* Logo */}
                        <Link href="#nav-hero-section" className="text-[16px] text-white">
                            <span className={`py-1 px-3 bg-primary text-white rounded-md inline-block me-2 shadow-lg`}>M</span> Michael Mendez
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden items-center gap-8 lg:flex">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="transition-opacity hover:text-primary text-[14px] cursor-target text-white"
                                >
                                    {item.label}
                                </Link>
                            ))}


                        </div>
                        <Button href="#contact" className="bg-primary text-black hidden lg:block" text="Let's Start Automate" />
                        {/* Mobile Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex flex-col gap-1.5 lg:hidden"
                            aria-label="Toggle menu"
                        >
                            <span className="h-0.5 w-10 bg-primary" />
                            <span className="h-0.5 w-10 bg-primary" />
                            <span className="h-0.5 w-10 bg-primary" />
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="px-4 py-6 lg:hidden bg-black w-full h-full fixed top-0 left-0 z-99"
                            >
                                <div className="flex justify-between items-center">
                                    <Link href="/" className="text-[20px] text-white">
                                        <span className="py-1 px-3 bg-primary text-white rounded-md inline-block me-2 shadow-lg">
                                            M
                                        </span>
                                        Michael Mendez
                                    </Link>

                                    <IoIosCloseCircle
                                        onClick={() => setIsOpen(false)}
                                        className="text-white text-[40px] cursor-pointer"
                                    />
                                </div>

                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        hidden: {},
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.08,
                                                delayChildren: 0.15,
                                            },
                                        },
                                    }}
                                    className="flex items-start flex-col gap-8 mt-10"
                                >
                                    {navItems.map((item) => (
                                        <motion.div
                                            key={item.href}
                                            variants={{
                                                hidden: { opacity: 0, x: -20 },
                                                visible: { opacity: 1, x: 0 },
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="text-white text-lg hover:text-primary transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                    >
                                        <Button
                                            href="#contact"
                                            className="bg-primary inline-block text-black"
                                            text="Let's Start Automate"
                                        />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Container>
            </nav>
        </header>
    );
}