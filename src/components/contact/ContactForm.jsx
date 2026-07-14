'use client';


import React, { useState } from 'react';
import { Send } from "lucide-react";

export default function ContactForm({ onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);

                setTimeout(() => {
                    if (onClose) onClose();

                    setSubmitted(false);

                    setFormData({
                        name: "",
                        email: "",
                        subject: "General Inquiry",
                        message: "",
                    });
                }, 2000);

            } else {
                alert("Failed to send message. Please try again.");
            }

        } catch (error) {
            console.error(error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }
        if (submitted) {
            return (
                <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#C7DC49] rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[#10551f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium text-[#10551f] mb-2">Message Sent!</h3>
                    <p className="text-gray-500">We'll get back to you shortly.</p>
                </div>
            );
        }
    
        return (

                <form onSubmit={handleSubmit} className="space-y-6">

    <div className="grid md:grid-cols-2 gap-6">

        <div className="space-y-2">
            <label className="text-sm font-medium text-[#1A2E05]/80 ml-1">
                Full Name
            </label>

            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full bg-white text-[#1A2E05] placeholder:text-gray-500 border border-[#C7DC49]/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C7DC49]/50 focus:border-[#C7DC49] transition-all"
            />
        </div>

        <div className="space-y-2">
            <label className="text-sm font-medium text-[#1A2E05]/80 ml-1">
                Email Address
            </label>

            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full bg-white text-[#1A2E05] placeholder:text-gray-500 border border-[#C7DC49]/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C7DC49]/50 focus:border-[#C7DC49] transition-all"
            />
        </div>

    </div>

    <div className="space-y-2">
        <label className="text-sm font-medium text-[#1A2E05]/80 ml-1">
            Subject
        </label>

        <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-white text-[#1A2E05] border border-[#C7DC49]/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C7DC49]/50 transition-all"
        >
            <option>General Inquiry</option>
            <option>Book a Session</option>
            <option>Corporate Program</option>
            <option>Retreat Info</option>
        </select>
    </div>

    <div className="space-y-2">
        <label className="text-sm font-medium text-[#1A2E05]/80 ml-1">
            Message
        </label>

        <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            required
            className="w-full bg-white text-[#1A2E05] placeholder:text-gray-500 border border-[#C7DC49]/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C7DC49]/50 resize-none transition-all"
        />
    </div>

    <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1A2E05] text-white py-4 rounded-xl font-medium hover:bg-[#4A6741] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#1A2E05]/20 disabled:opacity-60"
    >
        {isSubmitting ? (
            <>
                <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4zm2 5.29A8 8 0 014 12H0c0 3.04 1.14 5.82 3 7.94l3-2.65z"
                    />
                </svg>

                Sending...
            </>
        ) : (
            <>
                <Send className="w-4 h-4" />
                Send Message
            </>
        )}
    </button>

</form>

    );}