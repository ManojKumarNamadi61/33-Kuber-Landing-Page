import React from 'react';
import { ShieldCheck, Cpu, Terminal } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="framer-section bg-[#F5F6F8] border-t border-[#E8EAEE]">
      <div className="framer-container">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs sm:text-[14px] font-medium text-[#747B86] mb-2 sm:mb-3">
            01 / Company Background & Presence
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-[44px] font-medium text-[#17191D] tracking-tight leading-[1.18] sm:leading-[1.14] mb-3 sm:mb-5">
            Strategic technology advisory with rigorous engineering discipline.
          </h2>
          <p className="text-sm sm:text-lg text-[#747B86] leading-relaxed">
            Founded in 2023, 33 Kuber Advisory LLP partners with enterprises to design, build, and scale secure systems, resilient cloud platforms, and data-driven digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          <div className="framer-card p-6 sm:p-8 bg-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#F5F6F8] border border-[#E8EAEE] flex items-center justify-center text-[#1a62ff] mb-6">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-[#17191D] tracking-tight mb-3">
                Architectural Integrity
              </h3>
              <p className="text-sm sm:text-base text-[#747B86] leading-relaxed">
                We build on proven design principles, resilient application architecture, and well-structured data flows to reduce operational risk and maintain long-term performance.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8EAEE] text-xs font-mono text-[#747B86]">
              Distributed & Cloud-Native
            </div>
          </div>

          <div className="framer-card p-6 sm:p-8 bg-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#F5F6F8] border border-[#E8EAEE] flex items-center justify-center text-[#1a62ff] mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-[#17191D] tracking-tight mb-3">
                Security-First Engineering
              </h3>
              <p className="text-sm sm:text-base text-[#747B86] leading-relaxed">
                Security is embedded in the delivery lifecycle through industry-standard encryption, access controls, regular code reviews, and automated checks throughout the release path.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8EAEE] text-xs font-mono text-[#747B86]">
              AES-256 & Audited Delivery
            </div>
          </div>

          <div className="framer-card p-6 sm:p-8 bg-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#F5F6F8] border border-[#E8EAEE] flex items-center justify-center text-[#1a62ff] mb-6">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-[#17191D] tracking-tight mb-3">
                High-Throughput Scale
              </h3>
              <p className="text-sm sm:text-base text-[#747B86] leading-relaxed">
                We have delivered platforms for real-time telematics, mobility operations, and high-concurrency enterprise workflows with measurable reliability and operational clarity.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#E8EAEE] text-xs font-mono text-[#747B86]">
              Production SLAs & Uptime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
