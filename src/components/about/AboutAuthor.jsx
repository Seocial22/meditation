'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Globe, Clock, HeartHandshake } from 'lucide-react';

export default function AboutAuthor() {
    const highlights = [
        {
            icon: Clock,
            stat: "40+ Years",
            label: "DAILY PRACTICE",
            desc: "More than four decades of daily meditation practice, with meditation being a central part of her life since her teenage years."
        },
        {
            icon: Globe,
            stat: "Multicultural",
            label: "GLOBAL PERSPECTIVES",
            desc: "Perspectives shaped across several cultures and countries, influenced by both Western and Asian experiences."
        },
        {
            icon: HeartHandshake,
            stat: "Community & Service",
            label: "SHARING & FACILITATION",
            desc: "Extensive volunteering with non-profit organizations, facilitating meditation sessions and workshops."
        }
    ];

    return (
        <section className="py-24 px-4 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#4A6741] uppercase bg-[#F7F8ED] px-4 py-2 rounded-full border border-[#C7DC49]/20">
                            About the Author
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A2E05]"
                    >
                        A Life Rooted in Contemplation & Global Experience
                    </motion.h2>
                </div>

                {/* Main Author Showcase Grid */}
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
                    {/* Author Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative h-[440px] md:h-[520px] w-full rounded-3xl overflow-hidden shadow-2xl bg-[#F7F8ED] border border-[#1A2E05]/10">
                            <Image
                                src="/images/Riverside-Meditation.jpeg"
                                alt="Meditation practice"
                                fill
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="object-cover object-[87%_60%]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                            {/* Prominent Badge Overlay */}
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg text-center">
                                    <div className="text-lg font-serif font-bold text-[#1A2E05]">
                                        40+ Years of Daily Practice
                                    </div>
                                    <div className="text-xs uppercase tracking-wider text-[#4A6741] font-medium mt-1">
                                        Meditation Since Teenage Years
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Author Narrative Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed font-light text-base md:text-lg"
                    >
                        <div className="border-l-4 border-[#C7DC49] pl-6 py-1">
                            <p className="font-serif italic text-xl md:text-2xl text-[#1A2E05] leading-snug">
                                "The content of this website reflects the experiences, interests, and long-standing practice of the author; whose background spans several cultures, countries, and professional fields."
                            </p>
                        </div>

                        <p>
                            Drawing on a multicultural background, a keen interest in the arts—in particular classical dance forms—and professional experience spanning journalism, media, and international public service, the perspectives shared here have been shaped by both Western and Asian influences.
                        </p>

                        <p>
                            Meditation has been a central part of her life since her teenage years. Over more than four decades of daily practice, she has also volunteered extensively with non-profit organizations, facilitating meditation sessions and workshops and supporting the transmission of contemplative traditions and practices.
                        </p>
                    </motion.div>
                </div>

                {/* Stat & Highlight Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {highlights.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                                className="bg-[#F7F8ED] rounded-2xl p-8 border border-gray-100 hover:border-[#C7DC49]/40 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white border border-[#C7DC49]/30 flex items-center justify-center text-[#4A6741] mb-6 shadow-sm">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div className="text-2xl font-serif font-bold text-[#1A2E05] mb-1">
                                    {item.stat}
                                </div>
                                <div className="text-sm font-medium tracking-wide uppercase text-[#4A6741] mb-3">
                                    {item.label}
                                </div>
                                <p className="text-gray-600 font-light text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
