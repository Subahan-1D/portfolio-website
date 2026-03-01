'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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

        {/* Navigation Links */}
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
              {/* Active State-এর নিচে দাগ (Underline) দেখানোর জন্য */}
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

        {/* Hire Me Button */}
        <a 
          href="#contact" 
          onClick={(e) => scrollToSection(e, 'contact')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-primary-foreground hover:bg-accent/90 transition shadow-lg shadow-accent/20"
        >
          Hire Me
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.header>
  );
}