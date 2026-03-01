'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import InteractiveDataCluster from '@/components/3d/interactive-cluster';
import { Suspense } from 'react';

export default function WowSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <section
      id="wow"
      ref={containerRef}
      className="relative min-h-screen w-full bg-gradient-to-b from-background via-card/30 to-background py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            top: ['-10%', '10%', '-10%'],
            left: ['-5%', '5%', '-5%'],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            bottom: ['-10%', '10%', '-10%'],
            right: ['-5%', '5%', '-5%'],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience Intelligent <span className="text-primary">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch as data clusters reorganize themselves intelligently. Move your mouse to interact with the visualization and see how Xai transforms chaos into clarity.
          </p>
        </motion.div>

        {/* Interactive 3D Section */}
        <motion.div
          style={{
            scale,
            opacity,
          }}
          className="relative h-96 md:h-screen rounded-2xl border border-border/50 bg-card/20 backdrop-blur overflow-hidden"
        >
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Loading interactive experience...
            </div>
          }>
            <InteractiveDataCluster />
          </Suspense>
        </motion.div>

        {/* Feature Cards Below */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {[
            {
              title: 'Scroll Reactive',
              description: 'The visualization responds to your scroll position, creating a sense of depth and engagement.',
              icon: '📊',
            },
            {
              title: 'Mouse Interactive',
              description: 'Move your cursor to influence the data cluster, experiencing real-time interaction with intelligent systems.',
              icon: '🖱️',
            },
            {
              title: 'Geometry Morphing',
              description: 'Watch complex geometries transform smoothly, representing the evolution from raw data to insights.',
              icon: '✨',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card/80 transition"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-8">
              Join hundreds of companies using Xai to turn data into actionable intelligence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
            >
              Start Your Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border border-border bg-transparent text-foreground font-semibold hover:bg-card transition"
            >
              Schedule a Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
