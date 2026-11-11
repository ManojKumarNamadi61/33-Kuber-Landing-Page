import React, { useEffect, useState } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';
import { Project } from '../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireProject: (project: Project) => void;
}

const fleetPlans = [
  {
    id: 'starter',
    name: 'STARTER',
    price: '₹999',
    cadence: '/ month',
    description: 'Small transport operators.',
    allowance: 'Up to 5 active vehicles',
    users: '3 users',
    featured: false,
  },
  {
    id: 'growth',
    name: 'GROWTH',
    price: '₹2,499',
    cadence: '/ month',
    description: 'Growing transport businesses.',
    allowance: 'Up to 20 active vehicles',
    users: '8 users',
    featured: true,
  },
  {
    id: 'professional',
    name: 'PROFESSIONAL',
    price: '₹5,999',
    cadence: '/ month',
    description: 'Established transport companies.',
    allowance: 'Up to 50 active vehicles',
    users: '20 users',
    featured: false,
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE',
    price: 'CUSTOM',
    cadence: '',
    description: 'Large transport organizations.',
    allowance: 'Negotiated vehicle limits',
    users: 'Negotiated trip limits',
    featured: false,
  },
] as const;

const fleetComparisonRows = [
  { feature: 'Vehicle and driver master', starter: true, growth: true, professional: true },
  { feature: 'Trip booking and dispatch', starter: true, growth: true, professional: true },
  { feature: 'Trip expenses', starter: true, growth: true, professional: true },
  { feature: 'Freight rate management', starter: 'Basic', growth: true, professional: true },
  { feature: 'Customer invoicing', starter: true, growth: true, professional: true },
  { feature: 'Driver advance/settlement', starter: false, growth: true, professional: true },
  { feature: 'Proof of delivery', starter: false, growth: true, professional: true },
  { feature: 'Vehicle profitability', starter: false, growth: true, professional: true },
  { feature: 'Receivables/payables', starter: 'Basic', growth: true, professional: true },
  { feature: 'Multi-branch operations', starter: false, growth: false, professional: true },
  { feature: 'Advanced reporting', starter: false, growth: true, professional: true },
  { feature: 'API integrations', starter: false, growth: 'Add-on', professional: true },
  { feature: 'Approval workflows', starter: false, growth: false, professional: true },
] as const;

const fleetAddOns = [
  { name: 'Additional active vehicle', price: '₹100/month', rule: 'Beyond plan allowance' },
  { name: 'Additional back-office user', price: '₹99/month', rule: 'Beyond included seats' },
  { name: 'Advanced accounting', price: '₹799/month', rule: 'Per tenant' },
  { name: 'Customer tracking portal', price: '₹499/month', rule: 'Per tenant' },
  { name: 'Custom API integration', price: 'From ₹5,000 setup', rule: 'Plus maintenance' },
  { name: 'Data migration', price: '₹2,000–₹15,000', rule: 'One-time' },
] as const;

const fleetDeploymentPricing = [
  {
    name: 'Starter',
    setup: '₹10,000',
    annual: '₹18,000',
    description: 'Small operators, up to 5 managed vehicles.',
  },
  {
    name: 'Growth',
    setup: '₹20,000',
    annual: '₹36,000',
    description: 'Up to 20 managed vehicles.',
  },
  {
    name: 'Professional',
    setup: '₹35,000',
    annual: '₹72,000',
    description: 'Up to 50 managed vehicles.',
  },
  {
    name: 'Enterprise',
    setup: '₹50,000+',
    annual: '₹1,20,000+',
    description: 'Large transport operators.',
  },
] as const;

const renderFeatureValue = (value: boolean | string) => {
  if (value === true) return <span className="text-[#17191D] font-semibold">✓</span>;
  if (value === false) return <span className="text-[#747B86]">—</span>;
  return <span className="text-[#747B86] text-xs sm:text-sm font-medium">{value}</span>;
};

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireProject,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    setSelectedPlanId(null);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isFleetProject = project.slug === 'fleet-management-system';

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    window.open('https://33fleet.com/auth/registration', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 lg:p-10">
      <div
        className="fixed inset-0 bg-[#17191D]/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-4xl max-h-[94vh] bg-white rounded-xl sm:rounded-2xl border border-[#E8EAEE] shadow-[0_25px_60px_-15px_rgba(23,25,29,0.18)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
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

        <div className="overflow-y-auto px-4 sm:px-8 py-4 sm:py-6 space-y-6 sm:space-y-8">
          <div className="rounded-lg sm:rounded-xl overflow-hidden border border-[#E8EAEE] bg-[#F8F9FB] aspect-16/10 max-h-105 w-full">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#17191D] tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#747B86] font-normal leading-relaxed">
              {project.tagline}
            </p>
          </div>

          <div className="p-4 sm:p-6 rounded-xl bg-[#F8F9FB] border border-[#E8EAEE]">
            <h4 className="text-xs sm:text-sm font-medium text-[#17191D] uppercase tracking-wider mb-2">
              System Overview & Architecture
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-[#747B86] leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {isFleetProject && (
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-wrap gap-2">
                <a href="#fleet-plans" className="rounded-full border border-[#E8EAEE] bg-[#F5F6F8] px-3 py-1.5 text-[11px] sm:text-xs font-medium text-[#17191D] hover:border-[#D6D9E0] transition-colors">
                  Plans
                </a>
                <a href="#fleet-features" className="rounded-full border border-[#E8EAEE] bg-[#F5F6F8] px-3 py-1.5 text-[11px] sm:text-xs font-medium text-[#17191D] hover:border-[#D6D9E0] transition-colors">
                  Features
                </a>
                <a href="#fleet-addons" className="rounded-full border border-[#E8EAEE] bg-[#F5F6F8] px-3 py-1.5 text-[11px] sm:text-xs font-medium text-[#17191D] hover:border-[#D6D9E0] transition-colors">
                  Add-ons
                </a>
                <a href="#fleet-deployment" className="rounded-full border border-[#E8EAEE] bg-[#F5F6F8] px-3 py-1.5 text-[11px] sm:text-xs font-medium text-[#17191D] hover:border-[#D6D9E0] transition-colors">
                  Deployment
                </a>
              </div>

              <div id="fleet-plans" className="space-y-4">
                <div className="flex items-end justify-between gap-3 flex-wrap">
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-[#17191D] uppercase tracking-wider mb-1">
                      Subscription Plans
                    </h4>
                    <p className="text-sm text-[#747B86]">Flexible monthly subscriptions for every fleet size.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 items-stretch">
                  {fleetPlans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`relative flex h-full min-h-[360px] flex-col rounded-2xl border p-4 sm:p-5 transition-all duration-200 ${
                        plan.featured
                          ? 'border-[#1a62ff] bg-[#F5F8FF] shadow-[0_18px_30px_-12px_rgba(26,98,255,0.28)]'
                          : selectedPlanId === plan.id
                            ? 'border-[#1a62ff] bg-[#F8FAFF] shadow-[0_10px_25px_-12px_rgba(26,98,255,0.2)]'
                            : 'border-[#E8EAEE] bg-white shadow-[0_8px_18px_-12px_rgba(23,25,29,0.12)]'
                      }`}
                    >
                      {plan.featured && (
                        <div className="absolute -top-3 left-4 rounded-full bg-[#1a62ff] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white">
                          Recommended
                        </div>
                      )}

                      <div className="mb-4 flex min-h-[120px] flex-col">
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] text-[#747B86]">
                            {plan.name}
                          </span>
                          {selectedPlanId === plan.id && (
                            <span className="rounded-full bg-[#EAF1FF] px-2 py-0.5 text-[10px] font-medium text-[#1a62ff]">
                              Selected
                            </span>
                          )}
                        </div>

                        <div className="flex min-h-[52px] items-end gap-1.5">
                          <span className="text-2xl sm:text-[2rem] font-semibold tracking-tight text-[#17191D] leading-none">
                            {plan.price}
                          </span>
                          {plan.cadence && (
                            <span className="pb-1 text-xs sm:text-sm text-[#747B86]">{plan.cadence}</span>
                          )}
                        </div>

                        <p className="mt-2 text-xs sm:text-sm text-[#747B86] leading-relaxed">
                          {plan.description}
                        </p>
                      </div>

                      <div className="flex flex-1 flex-col justify-between">
                        <div className="space-y-2 border-t border-[#E8EAEE] pt-4 text-sm text-[#17191D]">
                          <div className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1a62ff]" />
                            <span>{plan.allowance}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1a62ff]" />
                            <span>{plan.users}</span>
                          </div>
                          {plan.id === 'enterprise' && (
                            <div className="mt-3 rounded-lg bg-[#F5F6F8] px-3 py-2 text-xs text-[#747B86] leading-relaxed">
                              Starting indicative quote: approximately <span className="font-semibold text-[#17191D]">₹12,999/month</span>.
                            </div>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => handleSelectPlan(plan.id)}
                          className={`mt-5 w-full ${plan.featured ? 'btn-primary' : 'btn-secondary'} h-10! mt-auto`}
                        >
                          <span>Select Plan</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="fleet-features" className="space-y-3">
                <h4 className="text-xs sm:text-sm font-medium text-[#17191D] uppercase tracking-wider">
                  Feature Comparison
                </h4>
                <div className="overflow-x-auto rounded-xl border border-[#E8EAEE] bg-white">
                  <table className="min-w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#F8F9FB] text-[#17191D]">
                      <tr>
                        <th className="px-3 py-3 font-medium">Functionality</th>
                        <th className="px-3 py-3 font-medium">Starter</th>
                        <th className="px-3 py-3 font-medium">Growth</th>
                        <th className="px-3 py-3 font-medium">Professional</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fleetComparisonRows.map((row) => (
                        <tr key={row.feature} className="border-t border-[#E8EAEE] align-top">
                          <td className="px-3 py-2.5 text-[#17191D] font-medium">{row.feature}</td>
                          <td className="px-3 py-2.5">{renderFeatureValue(row.starter)}</td>
                          <td className="px-3 py-2.5">{renderFeatureValue(row.growth)}</td>
                          <td className="px-3 py-2.5">{renderFeatureValue(row.professional)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="fleet-addons" className="space-y-3">
                <h4 className="text-xs sm:text-sm font-medium text-[#17191D] uppercase tracking-wider">
                  Additional Units &amp; Add-ons
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                  {fleetAddOns.map((item) => (
                    <div key={item.name} className="rounded-xl border border-[#E8EAEE] bg-[#F8F9FB] p-4">
                      <div className="mb-2 flex items-center justify-between gap-2">
                        <h5 className="text-sm font-medium text-[#17191D] leading-snug">{item.name}</h5>
                      </div>
                      <div className="text-sm font-medium text-[#17191D]">{item.price}</div>
                      <div className="mt-2 text-xs text-[#747B86]">{item.rule}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="fleet-deployment" className="space-y-3">
                <h4 className="text-xs sm:text-sm font-medium text-[#17191D] uppercase tracking-wider">
                  Client-wise Deployment Pricing
                </h4>
                <div className="overflow-x-auto rounded-xl border border-[#E8EAEE] bg-white">
                  <table className="min-w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#F8F9FB] text-[#17191D]">
                      <tr>
                        <th className="px-3 py-3 font-medium">Plan</th>
                        <th className="px-3 py-3 font-medium">One-time Setup</th>
                        <th className="px-3 py-3 font-medium">Annual License</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fleetDeploymentPricing.map((plan) => (
                        <tr key={plan.name} className="border-t border-[#E8EAEE] align-top">
                          <td className="px-3 py-3">
                            <div className="font-medium text-[#17191D]">{plan.name}</div>
                            <div className="mt-1 text-[11px] text-[#747B86]">{plan.description}</div>
                          </td>
                          <td className="px-3 py-3 text-[#17191D] font-medium">{plan.setup}</td>
                          <td className="px-3 py-3 text-[#17191D] font-medium">{plan.annual}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl border border-[#E8EAEE] bg-[#F8F9FB]">
                <details className="group" open>
                  <summary className="cursor-pointer list-none p-4 sm:p-5 text-sm sm:text-base font-medium text-[#17191D] flex items-center justify-between gap-3">
                    <span>Example Pricing – Growth Client</span>
                    <span className="text-[#747B86] text-xs sm:text-sm transition-transform group-open:rotate-180">▾</span>
                  </summary>
                  <div className="border-t border-[#E8EAEE] px-4 sm:px-5 py-4 sm:py-5 text-sm text-[#17191D]">
                    <p className="mb-3 text-[#747B86]">
                      Illustrative quotation only — not a fixed price for every customer.
                    </p>
                    <div className="mb-4">
                      <p className="font-medium text-[#17191D] mb-2">Assumed business:</p>
                      <ul className="space-y-1 text-[#747B86]">
                        <li>• 12 owned vehicles.</li>
                        <li>• 8 contracted vehicles.</li>
                        <li>• Frequent spot-hired trucks.</li>
                      </ul>
                    </div>

                    <div className="rounded-lg border border-[#E8EAEE] bg-white overflow-hidden">
                      <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-[#E8EAEE] px-3 py-2.5 text-xs sm:text-sm text-[#17191D] font-medium">
                        <span>Component</span>
                        <span>Amount</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-3 px-3 py-2.5 text-xs sm:text-sm text-[#747B86] border-b border-[#E8EAEE]">
                        <span>Implementation and configuration</span>
                        <span className="font-medium text-[#17191D]">₹20,000</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-3 px-3 py-2.5 text-xs sm:text-sm text-[#747B86] border-b border-[#E8EAEE]">
                        <span>Annual software subscription</span>
                        <span className="font-medium text-[#17191D]">₹36,000</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-3 px-3 py-2.5 text-xs sm:text-sm text-[#747B86] border-b border-[#E8EAEE]">
                        <span>Dedicated hosting (₹1,500 × 12)</span>
                        <span className="font-medium text-[#17191D]">₹18,000</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-3 px-3 py-2.5 text-xs sm:text-sm text-[#17191D] font-medium border-b border-[#E8EAEE]">
                        <span>First-year total</span>
                        <span>₹74,000</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-3 px-3 py-2.5 text-xs sm:text-sm text-[#747B86] border-b border-[#E8EAEE]">
                        <span>GST (illustrative 18%)</span>
                        <span className="font-medium text-[#17191D]">₹13,320</span>
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-3 px-3 py-3 text-sm font-medium text-[#17191D]">
                        <span>Total including GST</span>
                        <span>₹87,320</span>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          )}

          {!isFleetProject && (
            <>
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
            </>
          )}
        </div>

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
            <span>{isFleetProject ? 'Get Started with Fleet Management System' : 'Visit Project'}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
