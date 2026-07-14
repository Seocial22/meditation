'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Font note:
 * This design pairs a serif display face (for "Meditate" / "Get In Touch" / the
 * footer line) with a tracked-out sans for the nav links. If you have next/font
 * set up, drop something like this in your root layout and swap the classNames
 * below (`font-serif-display`, `font-sans-nav`) for the generated variables:
 *
 *   import { Cormorant_Garamond, Manrope } from 'next/font/google';
 *   const serifDisplay = Cormorant_Garamond({ subsets: ['latin'], weight: ['400','500'], variable: '--font-serif-display' });
 *   const sansNav = Manrope({ subsets: ['latin'], weight: ['400','500'], variable: '--font-sans-nav' });
 *
 * Until then this falls back to the system serif/sans stacks, which still read fine.
 */

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Our Expertise' },
  { href: '/blog', label: 'Blogs' },
  { href: '/faq', label: 'FAQs' },
];

const GOLD = '#C8A96A';
const GREEN = '#C7DC49';
const INK = '#444444';

function LotusMark({ className = '' }) {
  // Single-stroke, line-art lotus — the signature mark. Petals gently
  // separate/brighten on hover via group-hover, rather than a static icon.
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 22C16 22 16 12 16 8"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className="transition-all duration-500"
      />
      <path
        d="M16 22C16 22 9 19 8 12C8 12 14.5 12.5 16 20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className="transition-all duration-500 origin-bottom group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
      />
      <path
        d="M16 22C16 22 23 19 24 12C24 12 17.5 12.5 16 20"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className="transition-all duration-500 origin-bottom group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
      <path
        d="M16 22C16 22 11.5 17 12.5 10C12.5 10 17 11.5 16.5 19"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.7"
        className="transition-all duration-500 origin-bottom group-hover:-translate-x-0.5"
      />
      <path
        d="M16 22C16 22 20.5 17 19.5 10C19.5 10 15 11.5 15.5 19"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.7"
        className="transition-all duration-500 origin-bottom group-hover:translate-x-0.5"
      />
      <path
        d="M9 22C9 22 16 24.5 23 22"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NavLink({ href, label, onClick, tone = 'light' }) {
  const textTone =
    tone === 'light' ? 'text-[#444444]' : 'text-white';
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-flex items-center py-2 text-[13px] font-medium uppercase tracking-[0.18em] ${textTone} transition-all duration-300 ease-out hover:-translate-y-[2px]`}
    >
      <span className="transition-colors duration-300 group-hover:text-[#8f9f2e]">
        {label}
      </span>
      <span
        className="pointer-events-none absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-[#C7DC49] transition-all duration-300 ease-out group-hover:w-full"
      />
    </Link>
  );
}

export default function MeditationHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Measure the header's real rendered height (instead of a hardcoded
  // spacer value) so the spacer below it can never drift out of sync —
  // that mismatch is what was showing as a black gap under the nav.
  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;
    const updateHeight = () => setHeaderHeight(node.offsetHeight);
    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(node);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Single navbar — always fixed, styles transition on scroll rather than
          swapping in a second nav element */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-[0_8px_32px_-4px_rgba(200,169,106,0.18)] border-b border-[#C8A96A]/15'
            : 'bg-white border-b border-transparent'
        }`}
      >
        {/* Row 1 — Meditate | Logo | Get In Touch (desktop) / hamburger | logo (mobile)
            Note: this row has a fixed height (not padding-driven), so the logo
            can be sized larger than the row and overflow it slightly without
            changing the navbar's total height. */}
        <div
          className={`container mx-auto px-6 md:px-10 flex items-center transition-all duration-500 ${
            isScrolled ? 'h-14 md:h-16' : 'h-[72px] md:h-24'
          }`}
        >
          <div className="flex items-center justify-between w-full">
            {/* Left — Meditate (desktop) */}
            <Link
              href="/"
              className="group hidden md:flex items-center gap-2.5 text-[#444444] transition-opacity duration-300 hover:opacity-70"
            >
              <LotusMark className="w-[18px] h-[18px] text-[#C8A96A] transition-colors duration-500 group-hover:text-[#C7DC49]" />
              <span className="font-serif text-[13px] uppercase tracking-[0.22em]">
                Meditate
              </span>
            </Link>

            {/* Mobile Menu Button — Left side */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col gap-[5px] p-2 -ml-2"
              aria-label="Toggle menu"
            >
              <span className="w-5 h-px bg-[#444444]" />
              <span className="w-5 h-px bg-[#444444]" />
              <span className="w-5 h-px bg-[#444444]" />
            </button>

            {/* Center Logo — intentionally larger than the row; overflow is
                allowed so it reads as a strong focal point without pushing
                the header taller */}
            <div className="flex-1 flex justify-center md:flex-initial relative z-10">
              <Link
                href="/"
                className="group inline-block transition-transform duration-500 ease-out hover:scale-[1.03]"
              >
                <Image
                  src="/images/newlogo.png"
                  alt="Meditation Treasures"
                  width={600}
                  height={250}
                  className={`w-auto transition-all duration-500 ease-out opacity-95 group-hover:opacity-100 ${
                    isScrolled ? 'h-14 md:h-[72px]' : 'h-20 md:h-28'
                  }`}
                  priority
                />
              </Link>
            </div>

            {/* Right — Get In Touch (desktop) */}
            <Link
              href="/contact"
              className="group hidden md:inline-flex items-center gap-2 text-[#444444] transition-colors duration-300"
            >
              <span className="font-serif text-[13px] uppercase tracking-[0.22em] transition-colors duration-300 group-hover:text-[#8f9f2e]">
                Get In Touch
              </span>
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-1 text-[#C8A96A] group-hover:text-[#C7DC49]">
                →
              </span>
            </Link>

            {/* Placeholder for mobile to balance the centered logo */}
            <div className="w-6 md:hidden" />
          </div>
        </div>

        {/* Hairline divider — thin, centered, doesn't span full width */}
        <div className="hidden md:flex justify-center">
          <div
            className={`h-px bg-gradient-to-r from-transparent via-[#C8A96A]/40 to-transparent transition-all duration-500 ${
              isScrolled ? 'w-1/3 opacity-70' : 'w-1/2 opacity-100'
            }`}
          />
        </div>

        {/* Row 2 — primary nav, desktop only */}
        <nav className="hidden md:block">
          <div className="container mx-auto px-10">
            <ul
              className={`flex items-center justify-center gap-12 lg:gap-16 transition-all duration-500 ${
                isScrolled ? 'py-2.5' : 'py-3.5'
              }`}
            >
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Spacer so page content doesn't sit under the fixed header — height
          is measured live from the header itself (see headerHeight above),
          so it can never mismatch and leave a gap. */}
      <div style={{ height: headerHeight }} className="transition-all duration-500 ease-out" />

      {/* Mobile Menu — full-screen overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-500 ease-out ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Rich brand-green background, in keeping with the original mobile menu */}
        <div className="absolute inset-0 bg-[#10551f]" />
        <div
          className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${
            isMobileMenuOpen ? 'opacity-30' : 'opacity-0'
          }`}
        >
          <div className="absolute top-16 -left-24 w-72 h-72 bg-[#C7DC49] rounded-full blur-3xl" />
          <div className="absolute bottom-24 -right-20 w-80 h-80 bg-[#C8A96A] rounded-full blur-3xl" />
        </div>

        <div className="relative h-full flex flex-col">
          {/* Close button */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-5 right-5 p-2.5 text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:rotate-90 z-10"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo at top — larger, since it's the anchor of the fullscreen menu */}
          <div
            className={`flex justify-center pt-10 pb-4 transition-all duration-700 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
            }`}
          >
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src="/images/newlogo.png"
                alt="Meditation Treasures"
                width={220}
                height={90}
                className="h-24 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <div className="flex justify-center">
            <div className="w-16 h-px bg-white/30" />
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex items-center justify-center px-8">
            <ul className="w-full">
              {[
                ...NAV_LINKS,
                { href: '/contact', label: 'Contact Us' },
              ].map((item, index) => (
                <li
                  key={item.href}
                  className={`transition-all duration-700 ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${120 + index * 80}ms` : '0ms' }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="group flex items-center justify-between py-5 border-b border-white/15"
                  >
                    <span className="font-serif text-[34px] text-white transition-colors duration-300 group-hover:text-[#C7DC49]">
                      {item.label}
                    </span>
                    <span className="text-[#C8A96A] transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer text */}
          <div
            className={`pb-8 flex items-center justify-center gap-2 text-white/60 text-xs tracking-[0.2em] uppercase transition-all duration-700 delay-700 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <LotusMark className="w-3.5 h-3.5 text-[#C8A96A]" />
            Find your inner peace
          </div>
        </div>
      </div>
    </>
  );
}