'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
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
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
        Hi, I'm Md. Subahan Ali is a Junior Full Stack Developer with a background in Computer Science Engineering. specializing in front-end maintenance. Passionate about crafting user-centric applications using MongoDB, Express.js, Typescript , React.Js, Next.Js and Node.js. With a strong foundation in both front-end and back-end technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Starting with a passion for technology and design, I've spent the last 1+ years building full-stack applications. From single-page applications to complex backend systems, I've mastered the entire web development stack.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Current Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm specializing in Next.js and the Full stack stack, creating interactive elements and dynamic user interfaces. My passion lies in the intersection of design and development—crafting apps that not only look great but perform excellently.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Why Work With Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I bring a collaborative approach to every project. I'm passionate about tackling new challenges and continuously learning to improve my craft. Quality, innovation, and user satisfaction guide my work.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition">
              <h4 className="font-semibold mb-4 text-accent">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js' , 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'TypeScript', 'Tailwind CSS' ,'ShadcnUi','HyperUi','PassportJs'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-background border border-border rounded-full text-sm text-muted-foreground hover:text-accent hover:border-accent transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition">
              <h4 className="font-semibold mb-4 text-accent">Core Skills</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-2">Front-End Development</p>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-95%"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Back-End Development</p>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-90%"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">UI/UX Design Integration</p>
                  <div className="w-full bg-background rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-88%"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
