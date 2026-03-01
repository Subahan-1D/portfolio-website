'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-border/40 bg-card py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div whileHover={{ y: -4 }} className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Md. Subahan Ali</h3>
            <p className="text-sm text-muted-foreground">Full Stack Developer</p>
            <p className="text-xs text-muted-foreground mt-1">Crafting digital experiences</p>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="text-center">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-accent transition">About</a></li>
              <li><a href="#services" className="hover:text-accent transition">Services</a></li>
              <li><a href="#experience" className="hover:text-accent transition">Experience</a></li>
              <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="text-center md:text-right">
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="https://github.com/Subahan-1D" className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-accent/50 transition">
                <Github className="w-5 h-5 text-accent" />
              </a>
              <a href="https://www.linkedin.com/in/subahanali523" className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-accent/50 transition">
                <Linkedin className="w-5 h-5 text-accent" />
              </a>
              <a href="mailto:subahanislam523@gmail.com" className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-accent/50 transition">
                <Mail className="w-5 h-5 text-accent" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Md. Subahan Ali. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Built with passion using React, Next.js, and Tailwind CSS
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
