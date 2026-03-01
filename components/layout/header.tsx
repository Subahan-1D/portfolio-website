'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react'; // Menu এবং X আইকন যোগ করা হয়েছে
import { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // মোবাইল মেনু স্টেট

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150;

      sections.forEach(section => {
        if (!section) return;
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        {/* Logo and Profile Picture */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, 'hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent/50 group-hover:border-accent transition-colors">
            <Image
              src="/Subahanvai.png"
              alt="Subahan Ali"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-lg font-bold group-hover:text-accent transition-colors">Subahan</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className={`relative py-1 text-sm font-medium transition-colors duration-300 ${
                activeSection === id
                  ? 'text-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {label}
              {activeSection === id && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-accent"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Hire Me Button (Hidden on small mobile if needed, but keeping it visible) */}
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-primary-foreground hover:bg-accent/90 transition shadow-lg shadow-accent/20"
          >
            Hire Me
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => scrollToSection(e, id)}
                  className={`text-lg font-medium py-2 ${
                    activeSection === id ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  {label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="flex sm:hidden items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent text-primary-foreground mt-2"
              >
                Hire Me
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}