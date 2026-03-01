'use client';

import React from "react"

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'subahanislam523@gmail.com',
      href: 'mailto:subahanislam523@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+8801786727749',
      href: 'tel:+8801786727749',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: '#',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Visit my GitHub',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="text-accent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={idx}
                  href={method.href}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-card transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground">{method.label}</p>
                    <p className="text-lg font-medium text-accent hover:text-accent/80 transition">{method.value}</p>
                  </div>
                </motion.a>
              );
            })}

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Github, label: 'GitHub' },
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent/50 transition-colors"
                      title={social.label}
                    >
                      <Icon className="w-5 h-5 text-accent" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-8 space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">Send me a message</h3>

            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition"
            >
              Send Message
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
