import React, { useState } from 'react';
import { 
  ArrowUp, 
  Mail, 
  Building2, 
  Check, 
  Copy, 
  ArrowRight,
  Phone
} from 'lucide-react';

interface FooterProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('admin@33kuber.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="dark-grid-footer text-white pt-14 sm:pt-24 pb-10 sm:pb-14 border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle radial ambient highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-75 bg-[#1a62ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="framer-container relative z-10">
        
        {/* Grand CTA Section: Clean, uncluttered, no boxed cards */}
        <div className="pb-12 sm:pb-20 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#599bff] mb-3 sm:mb-4 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              <span>Start an Enterprise Collaboration</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium tracking-tight text-white leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-6 text-balance">
              Let's engineer your next breakthrough platform.
            </h2>

            <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 text-balance px-2">
              Connect directly with our senior engineering practice leads in Mumbai and Bengaluru. 
              We review enterprise software requirements and architectural proposals within 24 business hours.
            </p>

            {/* Direct Email Action Buttons - Stack full width on mobile */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <a
                href="mailto:admin@33kuber.com"
                className="btn-primary h-12! sm:h-14! px-6! sm:px-8! text-sm! sm:text-base! shadow-lg shadow-[#1a62ff]/25 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5" />
                <span>admin@33kuber.com</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 h-12! sm:h-14! px-6! sm:px-7! text-sm! sm:text-base! rounded-md bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-all cursor-pointer w-full sm:w-auto"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                    <span>Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                    <span>Copy Direct Email</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Directory & Presence Grid: Clean text layout, responsive columns */}
        <div className="py-10 sm:py-14 border-b border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <img
                src="/assets/aistudio/33_Kuber_Logowearytu_9a8d37ba.png"
                alt="33 Kuber Advisory LLP Logo"
                className="h-8 sm:h-10 w-auto object-contain brightness-110"
              />
              <div className="font-medium text-sm sm:text-base text-white">
                33 Kuber Advisory LLP
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-3 sm:mb-4">
              Strategic IT advisory, enterprise software engineering, and mission-critical platform architectures. 
              Founded in 2023.
            </p>
            <div className="text-xs text-slate-400">
              Direct Contact: <a href="mailto:admin@33kuber.com" className="text-white hover:text-[#599bff] transition-colors">admin@33kuber.com</a>
            </div>
          </div>

          {/* Mumbai Head Office */}
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-white uppercase tracking-wider mb-2.5 sm:mb-3">
              <Building2 className="w-4 h-4 text-[#599bff]" />
              <span>Head Office – Mumbai</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2">
              Mumbai, Maharashtra, India
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <a href="tel:+912225218933" className="hover:text-white transition-colors">
                +91 22 2521 8933
              </a>
            </div>
          </div>

          {/* Bengaluru Branch Office */}
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-white uppercase tracking-wider mb-2.5 sm:mb-3">
              <Building2 className="w-4 h-4 text-[#599bff]" />
              <span>Branch Office – Bengaluru</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2">
              Bengaluru, Karnataka 560102, India
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <a href="tel:+918041204533" className="hover:text-white transition-colors">
                +91 80 4120 4533
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left text-[11px] sm:text-xs">
            © 2026 <strong className="text-white font-medium">33 Kuber Advisory LLP</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-mono text-[10px] sm:text-[11px]">Mumbai & Bengaluru</span>
            <span className="text-white/20">•</span>
            <button
              onClick={scrollToTop}
              className="px-3 sm:px-3.5 py-1.5 rounded-md bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors flex items-center gap-1.5 cursor-pointer text-xs font-medium"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
