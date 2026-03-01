'use client';

import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import ProjectsSection from '@/components/sections/projects';
import ExperienceSection from '@/components/sections/experience';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
