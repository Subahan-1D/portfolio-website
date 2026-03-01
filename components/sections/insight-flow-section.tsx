'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Database, Brain, Zap } from 'lucide-react';

const stages = [
  {
    icon: Database,
    title: 'Ingest Data',
    description: 'Connect your data sources seamlessly. Support for APIs, databases, files, and streaming data.',
    details: [
      'Real-time data ingestion',
      'Multi-source integration',
      'Automatic validation',
      'Secure data pipelines',
    ],
  },
  {
    icon: Brain,
    title: 'Analyze with AI',
    description: 'Advanced machine learning models process your data with industry-leading accuracy and speed.',
    details: [
      'Custom model training',
      'Predictive analytics',
      'Pattern recognition',
      'Anomaly detection',
    ],
  },
  {
    icon: Zap,
    title: 'Generate Insights',
    description: 'Transform analysis into clear, actionable insights with intelligent recommendations.',
    details: [
      'Automated reporting',
      'Smart recommendations',
      'Risk assessment',
      'Trend forecasting',
    ],
  },
];

export default function InsightFlowSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);

  return (
    <section
      id="flow"
      ref={containerRef}
      className="relative min-h-screen w-full bg-gradient-to-b from-background via-card to-background py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Three-Step <span className="text-primary">Intelligence Pipeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From data ingestion to intelligent automation, Xai handles every step of transforming raw information into actionable insights.
          </p>
        </motion.div>

        {/* Flow Visualization */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line background */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />

          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative z-10 p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur hover:border-primary/30 transition-all duration-300 hover:bg-card/80">
                  {/* Icon container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3">{stage.title}</h3>
                  <p className="text-muted-foreground mb-6">{stage.description}</p>

                  {/* Details list */}
                  <ul className="space-y-2">
                    {stage.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Index indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/20 to-accent/0 opacity-0 group-hover:opacity-100 transition duration-300 blur z-0" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Ready to transform your data workflow?
          </p>
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition">
            Explore Full Capabilities
          </button>
        </motion.div>
      </div>
    </section>
  );
}
