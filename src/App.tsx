import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { Skills } from './components/Skills';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { FleetProjectPage } from './components/FleetProjectPage.tsx';
import { Project, PROJECTS } from './data/projectsData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  const navigateToPath = (path: string) => {
    const nextPath = path.startsWith('/') ? path : `/${path}`;
    window.history.pushState({}, '', nextPath);
    setCurrentPath(window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      if (window.location.pathname !== '/projects/fleet-management-system') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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

  const handleOpenProject = (project: Project) => {
    if (project.slug === 'fleet-management-system') {
      navigateToPath('/projects/fleet-management-system');
      return;
    }

    setSelectedProject(project);
  };

  if (currentPath === '/projects/fleet-management-system') {
    return (
      <FleetProjectPage
        onBack={() => {
          if (window.history.length > 1) {
            window.history.back();
            setCurrentPath(window.location.pathname);
            return;
          }
          navigateToPath('/');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#17191D] flex flex-col font-sans selection:bg-[#1a62ff] selection:text-white antialiased">
      <Navbar onNavigateSection={scrollToSection} />

      <main className="flex-1">
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        <AboutUs />

        <ProjectsShowcase
          onOpenProjectModal={handleOpenProject}
        />

        <Skills onContactClick={() => scrollToSection('contact')} />

        <ProcessTimeline />
      </main>

      <Footer onNavigateSection={scrollToSection} />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireProject={(project) => {
          setSelectedProject(null);

          if (project.slug === 'fleet-management-system') {
            window.open('https://33fleet.com/auth/registration', '_blank', 'noopener,noreferrer');
            return;
          }

          if (project.websiteUrl) {
            window.open(project.websiteUrl, '_blank', 'noopener,noreferrer');
          }
        }}
      />
    </div>
  );
}
