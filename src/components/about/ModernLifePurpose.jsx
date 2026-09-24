'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Compass, Sparkles } from 'lucide-react';

export default function ModernLifePurpose() {
    const pillars = [
        {
            icon: BookOpen,
            title: "Articles & Reflections",
            description: "Thoughtful writings and reflections that examine contemplative themes, offering space to slow down and cultivate inner awareness."
        },
        {
            icon: Compass,
            title: "Practical Guidance",
            description: "Accessible, grounded approaches designed to help integrate meditation naturally into daily life for greater calm, clarity, and balance."
        },
        {
            icon: Sparkles,
            title: "Contemplative Practices",
            description: "Drawing on diverse traditions and resources to support a deeper understanding of contemplative practices and their modern relevance."
        }
    ];

    return (
        <section className="py-24 px-4 bg-[#F7F8ED] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#4A6741] uppercase">
                            Purpose of the Website
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A2E05]"
                    >
                        Exploring Meditation in Modern Life
                    </motion.h2>
                </div>

                {/* Main Feature: Client Image & Narrative */}
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 max-w-6xl mx-auto">
                    {/* Main Client Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5"
                    >
                        <div className="relative h-[340px] md:h-[400px] lg:h-[420px] w-full rounded-3xl overflow-hidden shadow-xl border border-[#1A2E05]/10 bg-white">
                            <Image
                                src="/images/teacher-meditation.png"
                                alt="Meditation practice"
                                fill
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Purpose Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-6 bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#1A2E05]/10 shadow-sm"
                    >
                        <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
                            Meditation Treasures was created as a resource for those interested in exploring meditation and its many benefits across different facets of modern living.
                        </p>
                        <div className="border-l-4 border-[#C7DC49] pl-6 py-2">
                            <p className="text-xl md:text-2xl font-serif italic text-[#1A2E05] leading-relaxed">
                                "Through articles, reflections, and practical guidance, the site seeks to support a deeper understanding of contemplative practices and their relevance in today's fast-paced world."
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* 3 Pillars Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pillars.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#F7F8ED] border border-[#C7DC49]/30 flex items-center justify-center text-[#4A6741] mb-6 group-hover:bg-[#1A2E05] group-hover:text-[#C7DC49] transition-colors duration-300">
                                    <IconComponent className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-serif text-[#1A2E05] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
