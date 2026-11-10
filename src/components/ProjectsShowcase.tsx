import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, Project } from '../data/projectsData';

interface ProjectsShowcaseProps {
  onOpenProjectModal: (project: Project) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenProjectModal }) => {
  return (
    <section id="projects" className="framer-section bg-[#FFFFFF]">
      <div className="framer-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-[14px] font-medium text-[#747B86] mb-2 sm:mb-3">
              02 / Featured Engineering Portfolio
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-[44px] font-medium text-[#17191D] tracking-tight leading-[1.18] sm:leading-[1.14]">
              Mission-critical platforms built for enterprise scale.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#747B86] max-w-sm">
            Four production systems engineered by 33 Kuber Advisory LLP, operating with high-throughput uptime and secure cloud backbones.
          </p>
        </div>

        {/* 2x2 Grid of Large Editorial Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProjectModal(project)}
              className="framer-card group cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Large Image Frame with consistent 16/10 aspect ratio */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F8F9FB] border-b border-[#E8EAEE]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Meta & Typography */}
              <div className="p-5 sm:p-7 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed category */}
                  <div className="text-xs font-medium text-[#747B86] mb-2 tracking-normal">
                    {project.clientCategory}
                  </div>

                  <div className="flex items-start justify-between gap-3 mb-2.5 sm:mb-3">
                    <h3 className="text-xl sm:text-2xl font-medium text-[#17191D] tracking-tight group-hover:text-[#1a62ff] transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F5F6F8] flex items-center justify-center text-[#747B86] group-hover:bg-[#1a62ff] group-hover:text-white transition-all shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-[#747B86] leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Subtle technology tags */}
                <div className="pt-6 mt-6 border-t border-[#E8EAEE] flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-[#747B86] bg-[#F5F6F8] px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs font-mono text-[#747B86] py-1">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
