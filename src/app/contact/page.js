'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4">
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

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#F7F8ED] p-8 md:p-12 rounded-[2rem] border border-[#C7DC49]/20"
                    >
                        <h2 className="text-3xl font-serif text-[#1A2E05] mb-8">Send a Message</h2>
                        <ContactForm/>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12 lg:pt-8"
                    >
                        <div>
                            <h2 className="text-3xl font-serif text-[#1A2E05] mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-[#C7DC49]/10 rounded-2xl">
                                        <Mail className="w-6 h-6 text-[#4A6741]" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl text-[#1A2E05] mb-1">Email</h3>
                                        <p className="text-gray-500 font-light">info@meditationsanctuary.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-[#C7DC49]/10 rounded-2xl">
                                        <Phone className="w-6 h-6 text-[#4A6741]" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl text-[#1A2E05] mb-1">Phone</h3>
                                        <p className="text-gray-500 font-light">+66 (0) 12 345 6789</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-[#C7DC49]/10 rounded-2xl">
                                        <MapPin className="w-6 h-6 text-[#4A6741]" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl text-[#1A2E05] mb-1">Sanctuary Location</h3>
                                        <p className="text-gray-500 font-light">
                                            123 Serenity Path, Chiang Mai<br />
                                            Thailand 50000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#1A2E05] text-white p-8 rounded-[2rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C7DC49]/10 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150"></div>
                            <div className="relative z-10">
                                <MessageSquare className="w-8 h-8 text-[#C7DC49] mb-4" />
                                <h3 className="text-2xl font-serif mb-2">Live Chat</h3>
                                <p className="text-white/70 font-light leading-relaxed mb-6">
                                    Need immediate assistance? Our guide is available for a quick chat during business hours.
                                </p>
                                <button className="text-[#C7DC49] font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                    Start Chatting →
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
