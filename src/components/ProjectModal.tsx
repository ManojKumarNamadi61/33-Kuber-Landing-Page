import React, { useEffect } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { Project } from '../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireProject: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireProject,
}) => {
  // Close on Escape key and prevent background scroll
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 lg:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#17191D]/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-4xl max-h-[94vh] bg-white rounded-xl sm:rounded-2xl border border-[#E8EAEE] shadow-[0_25px_60px_-15px_rgba(23,25,29,0.18)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-5 border-b border-[#E8EAEE] bg-white">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
            <span className="text-[11px] sm:text-xs font-medium text-[#747B86] uppercase tracking-wider truncate">
              {project.clientCategory}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center text-[#747B86] hover:text-[#17191D] hover:bg-[#F5F6F8] transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-4 sm:px-8 py-4 sm:py-6 space-y-6 sm:space-y-8">
          
          {/* Large Showcase Image */}
          <div className="rounded-lg sm:rounded-xl overflow-hidden border border-[#E8EAEE] bg-[#F8F9FB] aspect-16/10 max-h-105 w-full">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Project Title & Tagline */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#17191D] tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#747B86] font-normal leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Project Overview */}
          <div className="p-4 sm:p-6 rounded-xl bg-[#F8F9FB] border border-[#E8EAEE]">
            <h4 className="text-xs sm:text-sm font-medium text-[#17191D] uppercase tracking-wider mb-2">
              System Overview & Architecture
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-[#747B86] leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Key Deliverables & Modules */}
          <div>
            <h4 className="text-xs sm:text-sm font-medium text-[#17191D] uppercase tracking-wider mb-3">
              Core Capabilities & Modules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-lg border border-[#E8EAEE] bg-white flex items-start gap-2.5 text-xs sm:text-sm text-[#17191D]"
                >
                  <Check className="w-4 h-4 text-[#1a62ff] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs sm:text-sm font-medium text-[#747B86] uppercase tracking-wider mb-2.5">
              Engineering Stack
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md bg-[#F5F6F8] border border-[#E8EAEE] text-[#17191D] font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-4 sm:px-8 py-3.5 sm:py-4 border-t border-[#E8EAEE] bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4">
          <button
            onClick={onClose}
            className="btn-secondary h-10! order-2 sm:order-1 w-full sm:w-auto"
          >
            <span>Close</span>
          </button>

          <button
            onClick={() => onInquireProject(project)}
            className="btn-primary h-10! order-1 sm:order-2 w-full sm:w-auto"
          >
            <span>Visit Project</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </div>
  );
};
