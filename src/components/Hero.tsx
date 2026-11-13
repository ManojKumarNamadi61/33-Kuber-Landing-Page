import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden bg-[#07090e] pt-16 sm:pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/aistudio/Hands_Reaching_in_Light_04f34332.png"
          alt="33 Kuber Advisory LLP Prismatic Hands in Light"
          className="w-full h-full object-cover object-center filter contrast-105 brightness-95"
        />
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-[#07090e] pointer-events-none" />
      </div>

      <div className="framer-container relative z-10 w-full py-12 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-xs sm:text-[14px] font-medium text-slate-200 tracking-normal mb-4 sm:mb-5 inline-flex items-center gap-1.5 sm:gap-2 bg-black/50 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-white/15 shadow-xl max-w-full">
            <span className="truncate">Enterprise Software Engineering</span>
            <span className="text-white/30">/</span>
            <span className="truncate">Technology Advisory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[74px] font-medium text-white tracking-tight leading-[1.1] sm:leading-[1.06] text-balance mb-4 sm:mb-6 drop-shadow-lg">
            Enterprise software that performs, scales and lasts.
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-slate-200 font-normal leading-relaxed max-w-2xl text-balance mb-8 sm:mb-10 drop-shadow-sm px-2">
            We design resilient platforms, cloud-native operations, and high-trust digital systems for modern enterprises.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 w-full sm:w-auto px-4 sm:px-0 max-w-md sm:max-w-none">
            <button
              onClick={onExploreProjects}
              className="btn-primary h-12! px-7! text-sm! sm:text-base! shadow-lg shadow-[#1a62ff]/35 w-full sm:w-auto"
            >
              <span>Explore Featured Work</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2 h-12! px-7! text-sm! sm:text-base! rounded-md bg-white/15 hover:bg-white/25 border border-white/25 text-white transition-all cursor-pointer backdrop-blur-sm shadow-md w-full sm:w-auto"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 ml-0.5 text-white/80" />
            </button>
          </div>

          <div className="pt-5 sm:pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-[13px] text-slate-300">
            <div>
              <span className="text-white font-medium">Head Office:</span> Mumbai, Maharashtra 400069
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div>
              <span className="text-white font-medium">Branch Office:</span> Bengaluru, Karnataka 560078
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
