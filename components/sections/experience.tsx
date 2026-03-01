'use client';

import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const experiences = [
    {
      year: 'August 2025 - October 2025',
      title: 'Junior Full Stack Developer',
      company: 'SM Technology',
      description: 'Leading junior full stack development initiatives, mentoring junior developers, and architecting scalable Next.js applications for enterprise clients.',
      skills: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'ShadcnUi', 'HyperUi', 'PassportJs'],
    },
    {
      year: 'January 2023 - July 2023',
      title: 'WordPress Developer',
      company: 'Home Works',
      description: 'Designed and developed highly responsive, custom WordPress websites. Optimized site performance, managed MySQL databases, and customized themes and plugins to meet specific client requirements.',
      skills: ['WordPress', 'PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    },
    {
      year: 'November 2023 - June 2024',
      title: 'Digital Marketing Specialist',
      company: 'Fiverr (Freelance)',
      description: 'Executed data-driven digital marketing strategies for global clients. Focused on Technical SEO, web analytics, and content optimization to improve search engine rankings and drive organic traffic.',
      skills: ['SEO', 'Google Analytics', 'Keyword Research', 'Content Strategy', 'Facebook Ads', 'Google Ads'],
    },
    {
      year: 'August 2024 - December 2024',
      title: 'Data Entry Specialist',
      company: 'Fiverr (Freelance)',
      description: 'Provided accurate and efficient data entry, web research, and data mining services for global clients. Managed and organized large datasets using Microsoft Excel and Google Sheets while ensuring high data integrity.',
      skills: ['Data Entry', 'Web Research', 'Data Mining', 'Microsoft Excel', 'Google Sheets'],
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
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
            Professional <span className="text-accent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Throughout my career, I've worked on diverse projects ranging from startups to established companies, continuously expanding my expertise in web development.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-accent/30 hover:border-accent/60 transition-colors"
            >
              <div className="absolute -left-4 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background"></div>

              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <p className="text-accent font-semibold text-sm mb-1">{exp.year}</p>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-background border border-border rounded-full text-sm text-accent">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
