
'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* Page Heading */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-sm font-semibold tracking-[0.3em] text-[#4A6741] uppercase mb-4">
                            Connect With Us
                        </p>

                        <h1 className="text-4xl md:text-6xl font-serif text-[#1A2E05] mb-6">
                            Start Your Journey Today
                        </h1>

                        <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                            Have questions about our sessions, workshops, or retreats?
                            Reach out to us and we'll help you find the right path for your practice.
                        </p>
                    </motion.div>
                </div>

                {/* Contact Form and Information */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#F7F8ED] p-8 md:p-12 rounded-[2rem] border border-[#C7DC49]/20"
                    >
                        <h2 className="text-3xl font-serif text-[#1A2E05] mb-8">
                            Send a Message
                        </h2>

                        <ContactForm />
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12 lg:pt-8"
                    >
                        <div>
                            <h2 className="text-3xl font-serif text-[#1A2E05] mb-8">
                                Contact Information
                            </h2>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-[#C7DC49]/10 rounded-2xl">
                                    <Mail className="w-6 h-6 text-[#4A6741]" />
                                </div>

                                <div>
                                    <h3 className="font-serif text-xl text-[#1A2E05] mb-1">
                                        Email
                                    </h3>

                                    <a
                                        href="mailto:info@meditationtreasures.com"
                                        className="text-gray-500 font-light hover:text-[#4A6741] transition-colors break-all"
                                    >
                                        info@meditationtreasures.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </main>
    );
}
