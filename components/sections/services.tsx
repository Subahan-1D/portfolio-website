'use client';

import { motion } from 'framer-motion';
import { Code, Layout, Zap, Database, Globe, Settings } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: 'Single-Page Application Development',
      description: 'Creating fast, responsive, and scalable web applications using React.js that provide exceptional user experiences.',
    },
    {
      icon: Layout,
      title: 'UI/UX Design Integration',
      description: 'Developing visually appealing and user-friendly interfaces that combine beautiful design with robust functionality.',
    },
    {
      icon: Zap,
      title: 'API Integration',
      description: 'Seamlessly integrating complex APIs to enhance functionality and create dynamic, interactive user experiences.',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Building efficient and scalable database architectures with MongoDB, ensuring optimal performance and data integrity.',
    },
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Ensuring applications are mobile-friendly and perform excellently across all devices and screen sizes.',
    },
    {
      icon: Settings,
      title: 'Full Stack Solutions',
      description: 'Delivering complete end-to-end solutions from frontend interfaces to backend servers using the MERN stack.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services I <span className="text-accent">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services tailored to bring your ideas to life and exceed your expectations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-card border border-border rounded-xl p-8 hover:border-accent/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
