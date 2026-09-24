'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutHero() {
    return (
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/gallery/slide1.jpeg"
                    alt="Peaceful meditation setting"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Gradient Overlay for Navbar Visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/30"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl mt-28 md:mt-36">
                <div className="space-y-6 md:space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="text-xs md:text-sm font-medium tracking-[0.25em] text-[#C7DC49] uppercase bg-black/40 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                            About Meditation Treasures
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight drop-shadow-2xl"
                    >
                        A Space for Meditation, <br />
                        <span className="font-serif italic text-white/95 block mt-2 drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                            Self-Development & Inner Well-Being
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-gray-100 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md"
                    >
                        Meditation Treasures is a curated space dedicated to meditation, self-development, and inner well-being. Drawing on a range of traditions, practices, and resources, the site aims to make meditation more accessible and meaningful for anyone seeking greater calm, clarity, and balance in daily life.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="pt-4"
                    >
                        <div className="w-16 h-1 bg-[#C7DC49]/50 mx-auto rounded-full"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}