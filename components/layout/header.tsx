'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // ক্লিক করলেই আগে মেনু বন্ধ হবে

    // মেনু বন্ধ হওয়ার অ্যানিমেশনের জন্য একটু সময় দিয়ে তারপর স্ক্রল করানো হচ্ছে
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // হেডারের হাইট বাদ দিয়ে স্ক্রল করার জন্য (যাতে হেডার সেকশনের ওপর না পড়ে যায়)
        const headerOffset = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        setActiveSection(id);
      }
    }, 100); // ১০০ মিলিসেকেন্ড ডিলে
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ // sticky এর বদলে fixed করা হয়েছে
        scrolled
          ? 'border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between relative bg-background/95 md:bg-transparent z-50">
        
        {/* Logo and Profile Picture */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, 'hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-accent/50 group-hover:border-accent transition-colors">
            <Image
              src="/subahanvai.png"
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
          {/* Hire Me Button */}
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
            type="button"
            className="md:hidden p-2 text-foreground relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            // absolute top-full দিয়ে মেনুটিকে ঠিক হেডারের নিচে রাখা হয়েছে
            className="md:hidden absolute top-full left-0 right-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-lg z-40"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => scrollToSection(e, id)}
                  // block এবং প্যাডিং দিয়ে ক্লিকেবল এরিয়া বড় করা হয়েছে
                  className={`block w-full text-lg font-medium py-3 px-4 rounded-md transition-colors ${
                    activeSection === id ? 'text-accent bg-accent/10' : 'text-muted-foreground active:bg-muted'
                  }`}
                >
                  {label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="flex sm:hidden items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-accent text-primary-foreground mt-4"
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