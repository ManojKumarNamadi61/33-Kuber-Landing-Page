import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { Skills } from './components/Skills';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project, PROJECTS } from './data/projectsData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenProjectBySlug = (slug: string) => {
    const found = PROJECTS.find((p) => p.slug === slug);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#17191D] flex flex-col font-sans selection:bg-[#1a62ff] selection:text-white antialiased">
      {/* 1. Minimal Sticky Navbar (Logo on left, Let's Talk CTA on right) */}
      <Navbar onNavigateSection={scrollToSection} />

      <main className="flex-1">
        {/* 2. Full-Screen 100svh Hero with Full Photographic 3D Brain Background */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 3. About Us / Strategic IT Foundation (No office cards) */}
        <AboutUs />

        {/* 4. Featured Engineering Projects (2x2 Grid) */}
        <ProjectsShowcase
          onOpenProjectModal={(project) => setSelectedProject(project)}
        />

        {/* 5. Capabilities & Architectural Stacks (3 Pillars) */}
        <Skills onContactClick={() => scrollToSection('contact')} />

        {/* 6. Engineering Methodology (Animated Connected Stepper) */}
        <ProcessTimeline />
      </main>

      {/* 7. Little Dark Grid Footer */}
      <Footer
        onNavigateSection={scrollToSection}
      />

      {/* 8. Interactive Framer-Style Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={(project) => {
          setSelectedProject(null);
          if (project.websiteUrl) {
            window.open(project.websiteUrl, '_blank', 'noopener,noreferrer');
          }
        }}
      />
    </div>
  );
}
