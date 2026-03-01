'use client';

import { motion } from 'framer-motion';
import { Suspense } from 'react';
import DataTransformationVisualization from '@/components/3d/data-transformation';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-background pt-20"
    >
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-b from-accent/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 h-screen flex flex-col items-center justify-center gap-8">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            From Raw Data to
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Actionable Intelligence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Xai transforms your business data into structured insights with AI-powered analysis and intelligent automation.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition">
              Start Free Trial
            </button>
            <button className="px-8 py-3 rounded-lg border border-border bg-transparent text-foreground font-semibold hover:bg-card transition">
              View Demo
            </button>
          </motion.div>
        </motion.div>

        {/* 3D Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full h-96 relative"
        >
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Loading visualization...
            </div>
          }>
            <DataTransformationVisualization />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
