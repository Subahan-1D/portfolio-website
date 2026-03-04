'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 w-full z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-balance mb-6"
            >
              <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
               Junior Full Stack
              </span>
              <br />
              Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg text-balance"
            >
              I craft beautiful, interactive web applications using modern technologies. Passionate about creating user experiences that are both visually stunning and technically excellent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="flex items-center gap-2 px-6 py-3 bg-accent text-primary-foreground rounded-lg font-semibold transition  hover:bg-accent/90">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about" className="px-6 py-3 border-2 border-border rounded-lg font-semibold hover:border-primary/50 hover:bg-card transition">
                Learn More
              </a>
            </motion.div>

            {/* Stats (Edit these numbers according to your real experience!) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex gap-8"
            >
              <div>
                <p className="text-3xl font-bold text-accent">1+</p>
                <p className="text-sm text-muted-foreground font-medium mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">20+</p>
                <p className="text-sm text-muted-foreground font-medium mt-1">Projects Built</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground font-medium mt-1">Commitment</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center h-96 md:h-[600px]"
          >
            {/* Decorative Angled Card Background */}
            <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[3rem] rotate-6 border border-border/50 backdrop-blur-sm"></div>
            
            {/* Bouncing/Floating Animation */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative w-64 h-64 md:w-80 md:h-80 z-10"
            >
              {/* Glowing Pulse behind the image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30 animate-pulse"></div>
              
              {/* The Image Container */}
              <div className="relative w-full h-full rounded-full border-4 border-background overflow-hidden shadow-2xl">
                <Image
                  src="/herosection.png"
                  alt="Subahan Ali"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover"
                  priority 
                />
              </div>

              {/* Decorative floating badge (Optional) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-card border border-border px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-semibold text-foreground">Available to hire</span>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}