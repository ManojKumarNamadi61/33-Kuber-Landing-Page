import React, { useState, useEffect } from 'react';
import { PROCESS_STEPS } from '../data/projectsData';
import {
  Code2,
  Cpu,
  ShieldCheck,
  Rocket,
  Activity,
  ChevronRight,
  Play,
  Pause,
} from 'lucide-react';

const STEP_ICONS = [Code2, Cpu, ShieldCheck, Rocket, Activity];

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <section id="process" className="framer-section bg-[#FFFFFF] border-t border-[#E8EAEE] overflow-hidden">
      <div className="framer-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-[14px] font-medium text-[#747B86] mb-2 sm:mb-3 flex items-center gap-2">
              <span>04 / Engineering Methodology</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a62ff] animate-ping" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-[44px] font-medium text-[#17191D] tracking-tight leading-[1.18] sm:leading-[1.14]">
              How we take complex software from concept to scale.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="btn-secondary h-8! sm:h-9! px-3! sm:px-3.5! text-xs! flex items-center gap-1.5"
              title={isAutoPlaying ? 'Pause interactive cycle' : 'Resume auto-cycle'}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-[#1a62ff]" /> : <Play className="w-3.5 h-3.5 text-[#1a62ff]" />}
              <span>{isAutoPlaying ? 'Auto-Cycle Active' : 'Resume Animation'}</span>
            </button>
          </div>
        </div>

        <div className="relative border border-[#E8EAEE] rounded-2xl sm:rounded-3xl bg-[#F8F9FB] p-4 sm:p-8 lg:p-12 overflow-hidden shadow-xs">
          <div className="hidden lg:block relative w-full h-0.5 bg-[#E8EAEE] mb-12 overflow-hidden rounded-full">
            <div className="absolute top-0 bottom-0 w-1/3 bg-linear-to-r from-transparent via-[#1a62ff] to-transparent animate-beam-flow" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4 mb-6 sm:mb-10">
            {PROCESS_STEPS.map((s, idx) => {
              const Icon = STEP_ICONS[idx] || Code2;
              const isActive = activeStep === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer relative border ${
                    isActive
                      ? 'bg-white border-[#1a62ff] shadow-md ring-2 ring-[#1a62ff]/10 scale-[1.02]'
                      : 'bg-white/70 border-[#E8EAEE] hover:bg-white hover:border-[#D6D9E0]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className={`text-[10px] sm:text-xs font-mono font-semibold ${isActive ? 'text-[#1a62ff]' : 'text-[#747B86]'}`}>
                      {s.step}
                    </span>
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#1a62ff] text-white' : 'bg-[#F5F6F8] text-[#747B86]'
                    }`}>
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <div className={`text-xs sm:text-sm font-medium leading-snug line-clamp-1 ${isActive ? 'text-[#17191D]' : 'text-[#747B86]'}`}>
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="framer-card p-5 sm:p-8 lg:p-10 bg-white grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center border border-[#E8EAEE] shadow-sm">
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#1a62ff] font-semibold flex-wrap">
                <span className="w-2 h-2 rounded-full bg-[#1a62ff] animate-pulse" />
                <span>Step {activeStep + 1} of {PROCESS_STEPS.length}</span>
                <span className="text-[#D6D9E0]">•</span>
                <span className="text-[#747B86] uppercase tracking-wider text-[11px] truncate max-w-xs">{PROCESS_STEPS[activeStep].tagline}</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#17191D] tracking-tight">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-xs sm:text-base text-[#747B86] leading-relaxed max-w-2xl">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                {PROCESS_STEPS[activeStep].tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-[#F5F6F8] border border-[#E8EAEE] text-[#17191D] font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E8EAEE] pt-6 lg:pt-0 lg:pl-8 space-y-6">
              <div>
                <div className="text-xs font-medium text-[#747B86] uppercase tracking-wider mb-2">
                  Step progress
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-medium text-[#17191D] font-mono">
                    {activeStep + 1}
                  </span>
                  <span className="text-xs text-[#747B86]">of {PROCESS_STEPS.length}</span>
                </div>
                <div className="w-full h-2 bg-[#F5F6F8] rounded-full overflow-hidden border border-[#E8EAEE]">
                  <div
                    className="h-full bg-[#1a62ff] transition-all duration-500 rounded-full"
                    style={{ width: `${((activeStep + 1) / PROCESS_STEPS.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1));
                    setIsAutoPlaying(false);
                  }}
                  className="btn-secondary h-9! px-3! text-xs! flex-1"
                >
                  <span>Previous</span>
                </button>
                <button
                  onClick={() => {
                    if (activeStep === PROCESS_STEPS.length - 1) return;
                    setActiveStep((prev) => prev + 1);
                    setIsAutoPlaying(false);
                  }}
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  className="btn-primary h-9! px-3.5! text-xs! flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
