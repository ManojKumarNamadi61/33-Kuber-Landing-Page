import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger white background once user scrolls beyond the top of the hero
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E8EAEE] shadow-[0_2px_14px_rgba(23,25,29,0.06)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-350 mx-auto px-4 sm:px-6 md:px-6.25 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* Brand Logo & Name */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 sm:gap-3.5 text-left focus:outline-none group cursor-pointer min-w-0"
        >
          <img
            src="/assets/aistudio/33_Kuber_Logowearytu_9a8d37ba.png"
            alt="33 Kuber Advisory LLP Logo"
            className="h-10 sm:h-10 w-auto object-contain transition-transform group-hover:scale-[1.02] shrink-0 brightness-110"
          />
          <div className="flex flex-col min-w-0">
            <span
              className={`font-medium text-sm sm:text-[16px] tracking-tight leading-snug truncate transition-colors duration-200 ${
                scrolled ? 'text-[#17191D]' : 'text-white drop-shadow-sm'
              }`}
            >
              33 Kuber Advisory LLP
            </span>
            <span
              className={`hidden md:block text-[11px] font-normal tracking-normal truncate transition-colors duration-200 ${
                scrolled ? 'text-[#747B86]' : 'text-slate-300 drop-shadow-xs'
              }`}
            >
              Enterprise Software & Advisory
            </span>
          </div>
        </button>

        {/* Primary CTA Button */}
        <div className="shrink-0">
          <button
            onClick={() => onNavigateSection('contact')}
            className={`btn-primary h-9! sm:h-11! px-3.5! sm:px-5! text-xs! sm:text-sm! transition-all duration-200 ${
              !scrolled ? 'shadow-lg shadow-[#1a62ff]/40 ring-1 ring-white/20' : ''
            }`}
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
