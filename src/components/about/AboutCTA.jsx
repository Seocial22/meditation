'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Sparkles } from 'lucide-react';

export default function AboutCTA() {
    const reasons = [
        {
            icon: Sparkles,
            text: "Learn more about the author and her practice"
        },
        {
            icon: MessageSquare,
            text: "Request a personal discussion"
        },
        {
            icon: Calendar,
            text: "Arrange a tailored meditation session"
        }
    ];

    return (
        <section className="py-24 px-4 bg-[#F7F8ED] relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#4A6741] uppercase">
                        Get in Touch
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1A2E05]"
                >
                    Connect With the Author
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-2xl mx-auto"
                >
                    Feel free to reach out if you wish to find out more about the author, or request a personal discussion or tailored meditation session.
                </motion.p>

                {/* 3 Touchpoint cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4"
                >
                    {reasons.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-[#1A2E05]/5 text-center flex flex-col items-center justify-center gap-2 shadow-sm"
                            >
                                <Icon className="w-5 h-5 text-[#4A6741]" />
                                <span className="text-sm text-gray-700 font-medium">
                                    {item.text}
                                </span>
                            </div>
                        );
                    })}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[#1A2E05] text-white rounded-full hover:bg-[#2C480A] shadow-md hover:shadow-lg transition-all duration-300 font-medium tracking-wide text-base"
                    >
                        Get in Touch
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white border border-[#1A2E05]/20 text-[#1A2E05] rounded-full hover:bg-gray-50 transition-all duration-300 font-medium text-base"
                    >
                        Request a Session
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}