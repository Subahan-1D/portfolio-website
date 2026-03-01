'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image'; 
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg border border-border/40 bg-card hover:border-accent/50 transition-colors duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 bg-muted overflow-hidden">
        
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
      
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="text-4xl font-bold text-accent/30 group-hover:text-accent/50 transition-colors duration-300">
              {project.category.charAt(0)}
            </div>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          
          {/* Frontend Github Link */}
          {project.frontendlink && (
            <a
              href={project.frontendlink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              title="Frontend Source Code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}

          {/* Backend Github Link (Optional) */}
          {project.backendlink && (
            <a
              href={project.backendlink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
              title="Backend Source Code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}

          {/* Fallback for single link (If you have older projects with just 'link') */}
          {project.link && !project.frontendlink && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              title="Source Code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}

          {/* Live Demo Link */}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded bg-primary/10 text-accent border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-medium bg-background/80 backdrop-blur-sm text-accent border border-accent/30 z-10">
        {project.category}
      </div>
    </motion.div>
  );
}