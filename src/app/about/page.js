import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import ModernLifePurpose from '@/components/about/ModernLifePurpose';
import AboutAuthor from '@/components/about/AboutAuthor';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
    title: 'About Meditation Treasures | Meditation, Self-Development & Inner Well-Being',
    description: "Learn about Meditation Treasures, its purpose, and the author's journey of more than four decades of meditation practice, teaching, workshops and contemplative exploration.",
};

export default function AboutPage() {
    return (
        <main className="bg-white">
            <AboutHero />
            <ModernLifePurpose />
            <AboutAuthor />
            <AboutCTA />
        </main>
    );
}
