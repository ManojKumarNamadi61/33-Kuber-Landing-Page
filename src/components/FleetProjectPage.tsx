import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';
import {
  fleetAddOns,
  fleetComparisonRows,
  fleetPlans,
  formatMoney,
  getCustomSubscriptionEstimate,
  type SubscriptionPlanId,
} from './ProjectModal';
import { Footer } from './Footer';

interface FleetProjectPageProps {
  onBack: () => void;
}

const fleetSummaryStats = [
  { label: 'Connected Vehicles', value: '12,500+' },
  { label: 'Average Dispatch Time', value: '< 90 sec' },
  { label: 'Fuel Savings', value: '22%' },
];

export const FleetProjectPage: React.FC<FleetProjectPageProps> = ({ onBack }) => {
  const project = PROJECTS.find((entry) => entry.slug === 'fleet-management-system');

  if (!project) {
    return null;
  }

  const [selectedPlanId, setSelectedPlanId] = useState<SubscriptionPlanId | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [customVehicleCount, setCustomVehicleCount] = useState<number>(20);
  const [customUserCount, setCustomUserCount] = useState<number>(8);

  const customEstimate = getCustomSubscriptionEstimate(customVehicleCount, customUserCount);
  const activeCustomPrice = billingCycle === 'annual' ? customEstimate.annualSubscription : customEstimate.monthlySubscription;

  const handleSelectPlan = (planId: SubscriptionPlanId) => {
    setSelectedPlanId(planId);

    if (planId !== 'enterprise') {
      window.open('https://33fleet.com/auth/registration', '_blank', 'noopener,noreferrer');
    }
  };

  const handleQuantityChange = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number,
    minimum: number,
    maximum: number,
  ) => {
    const clampedValue = Math.min(maximum, Math.max(minimum, Number.isFinite(value) ? value : minimum));
    setter(clampedValue);
  };

  const handleExploreFeatures = () => {
    document.getElementById('fleet-features')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleChoosePlan = () => {
    document.getElementById('fleet-pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-[#F5F6F8] text-[#17191D] min-h-screen">
      <div className="mx-auto max-w-[1440px] px-[20px] sm:px-[32px] lg:px-[50px] pb-[40px] sm:pb-[56px] lg:pb-[80px]">
        <header className="pt-4 sm:pt-5 lg:pt-6">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-[#E8EAEE] bg-white px-3 py-2 text-sm font-medium text-[#17191D] shadow-[0_6px_18px_rgba(23,25,29,0.04)] transition-colors hover:border-[#D6D9E0] hover:bg-[#F8F9FB]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Projects</span>
          </button>
        </header>

        <main className="mt-5 sm:mt-6 lg:mt-7 space-y-[40px] sm:space-y-[56px] lg:space-y-[72px] xl:space-y-[88px]">
          <section className="overflow-hidden rounded-[12px] border border-[#E8EAEE] bg-white shadow-[0_8px_24px_rgba(23,25,29,0.04)]">
            <div className="grid gap-6 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-10">
              <div className="flex flex-col justify-center">
                <span className="mb-3 inline-flex w-fit items-center rounded-full border border-[#DCE7FF] bg-[#F1F6FF] px-3 py-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em] text-[#1a62ff]">
                  Fleet Management
                </span>

                <h1 className="max-w-[620px] text-3xl font-medium tracking-[-0.04em] text-[#17191D] sm:text-4xl lg:text-[52px] lg:leading-[1.05]">
                  Fleet Management System
                </h1>

                <p className="mt-4 max-w-[620px] text-sm leading-relaxed text-[#747B86] sm:text-base">
                  Enterprise fleet visibility, predictive maintenance, and transport operations intelligence designed for modern commercial fleets.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://33fleet.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary h-11! sm:h-12! px-5! text-sm! sm:text-base!"
                  >
                    <span>Visit Product</span>
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </a>

                  <button
                    type="button"
                    onClick={handleExploreFeatures}
                    className="btn-secondary h-11! sm:h-12! px-5! text-sm! sm:text-base!"
                  >
                    <span>Explore Features</span>
                  </button>
                </div>
              </div>

              <div className="flex items-stretch">
                <div className="grid w-full gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {fleetSummaryStats.map((stat) => (
                    <div key={stat.label} className="rounded-[10px] border border-[#E8EAEE] bg-[#F8F9FB] p-4">
                      <div className="text-2xl font-semibold tracking-tight text-[#17191D]">{stat.value}</div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.14em] text-[#747B86]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-[12px] border border-[#E8EAEE] bg-[#F8F9FB] shadow-[0_8px_22px_rgba(23,25,29,0.04)]">
            <img
              src={project.heroImage}
              alt="Fleet Management System dashboard"
              className="block h-[320px] w-full object-cover object-top sm:h-[420px] lg:h-[520px]"
            />
          </section>

          <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[10px] border border-[#E8EAEE] bg-white p-5 sm:p-6 lg:p-7">
              <div className="mb-3 text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[#747B86]">
                Project Overview
              </div>
              <h2 className="text-2xl font-medium tracking-[-0.03em] text-[#17191D] sm:text-3xl">Built for intelligent transport operations.</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#747B86] sm:text-base">
                {project.fullOverview}
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#747B86]">Business Problem</div>
                  <p className="mt-2 text-sm leading-relaxed text-[#17191D]">
                    Commercial operators often lose margin across vehicle utilization, maintenance drift, dispatch delays, and fuel leakage.
                  </p>
                </div>

                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#747B86]">Solution Overview</div>
                  <p className="mt-2 text-sm leading-relaxed text-[#17191D]">
                    Unify telematics, trip monitoring, driver accountability, and operational reporting in a single command center.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[10px] border border-[#E8EAEE] bg-white p-5 sm:p-6">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#747B86]">Target Audience</div>
                <p className="mt-3 text-sm leading-relaxed text-[#17191D]">
                  Fleet owners, dispatch managers, transport supervisors, operations leaders, and commercial transport teams.
                </p>
              </div>

              <div className="rounded-[10px] border border-[#E8EAEE] bg-white p-5 sm:p-6">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#747B86]">Platform Capabilities</div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#17191D]">
                  <li>• Live vehicle and trip visibility</li>
                  <li>• Maintenance and fault diagnostics</li>
                  <li>• Driver safety and fuel performance controls</li>
                </ul>
              </div>

              <div className="rounded-[10px] border border-[#E8EAEE] bg-white p-5 sm:p-6">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#747B86]">Project Snapshot</div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#17191D]">
                  <li>• Commercial fleet command center</li>
                  <li>• Multi-location operational oversight</li>
                  <li>• Predictive and preventive fleet intelligence</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="fleet-features" className="content-start">
            <div className="mb-6">
              <div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[#747B86]">Key Features</div>
              <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-[#17191D] sm:text-3xl">Operational features that keep fleets moving.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {project.modules.map((module) => (
                <div key={module.id} className="flex h-full min-h-[200px] flex-col rounded-[10px] border border-[#E8EAEE] bg-white p-4 sm:p-5">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#F5F6F8] text-[#1a62ff]">
                    <Check className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-medium text-[#17191D] leading-snug">{module.title.replace(/^Module \d+:\s*/, '')}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#747B86]">{module.subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="fleet-pricing" className="content-start">
            <div className="mb-6">
              <div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[#747B86]">Pricing</div>
              <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-[#17191D] sm:text-3xl">Flexible plans for every fleet size.</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {fleetPlans.map((plan) => {
                const isSelected = selectedPlanId === plan.id;
                const isEnterprise = plan.id === 'enterprise';
                const isRecommended = plan.featured || (!selectedPlanId && plan.id === 'growth');

                return (
                  <div
                    key={plan.id}
                    className={`relative flex h-full min-h-[360px] flex-col rounded-[10px] border p-4 sm:p-5 transition-all duration-200 ${
                      isSelected || isRecommended
                        ? 'border-[#1a62ff] bg-[#F7F9FF] shadow-[0_12px_28px_rgba(26,98,255,0.12)]'
                        : 'border-[#E8EAEE] bg-white shadow-[0_8px_18px_rgba(23,25,29,0.04)]'
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#747B86]">{plan.name}</span>
                      {isRecommended && !isSelected && (
                        <span className="rounded-full bg-[#EAF1FF] px-2 py-0.5 text-[10px] font-medium text-[#1a62ff]">Recommended</span>
                      )}
                      {isSelected && (
                        <span className="rounded-full bg-[#EAF1FF] px-2 py-0.5 text-[10px] font-medium text-[#1a62ff]">Selected</span>
                      )}
                    </div>

                    <div className="flex min-h-[56px] items-end gap-1.5">
                      <span className="text-3xl font-semibold tracking-tight text-[#17191D]">{plan.price}</span>
                      {plan.cadence && <span className="pb-1 text-xs text-[#747B86]">{plan.cadence}</span>}
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[#747B86]">{plan.description}</p>

                    <div className="mt-4 flex flex-1 flex-col justify-between">
                      <div className="space-y-2 border-t border-[#E8EAEE] pt-4 text-sm text-[#17191D]">
                        <div className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1a62ff]" />
                          <span>{plan.allowance}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1a62ff]" />
                          <span>{plan.users}</span>
                        </div>
                        {isEnterprise && (
                          <div className="mt-3 rounded-[8px] bg-[#F5F6F8] px-3 py-2 text-xs leading-relaxed text-[#747B86]">
                            Starting indicative quote: approximately <span className="font-semibold text-[#17191D]">₹12,999/month</span>.
                          </div>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleSelectPlan(plan.id)}
                        className={`mt-5 h-10 w-full ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}
                      >
                        <span>{isEnterprise ? 'Custom Quote' : 'Select Plan'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedPlanId === 'enterprise' && (
              <div className="mt-6 rounded-[12px] border border-[#E8EAEE] bg-[#F8F9FB] p-4 sm:p-5 lg:p-6">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[#17191D]">Estimate Custom Subscription</div>
                    <p className="mt-1 text-sm text-[#747B86]">Tailored quote based on your fleet and team size.</p>
                  </div>

                  <div className="inline-flex rounded-full border border-[#E8EAEE] bg-white p-1">
                    {(['monthly', 'annual'] as const).map((cycle) => (
                      <button
                        key={cycle}
                        type="button"
                        onClick={() => setBillingCycle(cycle)}
                        className={`rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors ${
                          billingCycle === cycle ? 'bg-[#17191D] text-white' : 'text-[#747B86] hover:text-[#17191D]'
                        }`}
                      >
                        {cycle}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="space-y-2 rounded-[10px] border border-[#E8EAEE] bg-white p-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <label className="text-sm font-medium text-[#17191D]">Number of Vehicles</label>
                      <input
                        type="number"
                        min={1}
                        max={500}
                        value={customVehicleCount}
                        onChange={(event) => handleQuantityChange(setCustomVehicleCount, Number(event.target.value), 1, 500)}
                        className="w-20 rounded-[8px] border border-[#E8EAEE] bg-[#F8F9FB] px-2 py-1 text-right text-sm text-[#17191D] focus:border-[#1a62ff] focus:outline-none"
                      />
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={500}
                      value={customVehicleCount}
                      onChange={(event) => handleQuantityChange(setCustomVehicleCount, Number(event.target.value), 1, 500)}
                      className="w-full accent-[#1a62ff]"
                    />
                  </div>

                  <div className="space-y-2 rounded-[10px] border border-[#E8EAEE] bg-white p-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <label className="text-sm font-medium text-[#17191D]">Number of Users</label>
                      <input
                        type="number"
                        min={1}
                        max={500}
                        value={customUserCount}
                        onChange={(event) => handleQuantityChange(setCustomUserCount, Number(event.target.value), 1, 500)}
                        className="w-20 rounded-[8px] border border-[#E8EAEE] bg-[#F8F9FB] px-2 py-1 text-right text-sm text-[#17191D] focus:border-[#1a62ff] focus:outline-none"
                      />
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={500}
                      value={customUserCount}
                      onChange={(event) => handleQuantityChange(setCustomUserCount, Number(event.target.value), 1, 500)}
                      className="w-full accent-[#1a62ff]"
                    />
                  </div>
                </div>

                <div className="mt-5 h-px bg-[#E8EAEE]" />

                <div className="mt-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#747B86]">Estimated Custom Subscription</div>
                    <div className="mt-2 text-3xl font-semibold tracking-tight text-[#17191D] sm:text-4xl">
                      ₹{formatMoney(activeCustomPrice)}
                    </div>
                    <div className="mt-2 text-xs sm:text-sm text-[#747B86]">
                      {billingCycle === 'annual'
                        ? 'Annual pricing shown below is billed upfront and excludes GST.'
                        : 'Monthly pricing shown excludes GST.'}
                    </div>
                  </div>

                  <div className="min-w-[220px] rounded-[10px] border border-[#E8EAEE] bg-white p-3 text-sm text-[#17191D]">
                    <div className="flex items-center justify-between gap-3 border-b border-[#E8EAEE] pb-2">
                      <span className="text-[#747B86]">Vehicles</span>
                      <span className="font-medium">{customVehicleCount}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-3 border-b border-[#E8EAEE] pb-2">
                      <span className="text-[#747B86]">Users</span>
                      <span className="font-medium">{customUserCount}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <span className="text-[#747B86]">{billingCycle === 'annual' ? 'Annual total' : 'Monthly total'}</span>
                      <span className="font-medium">₹{formatMoney(activeCustomPrice)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-[10px] border border-[#E8EAEE] bg-white p-4">
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-center justify-between gap-3 rounded-[8px] bg-[#F8F9FB] px-3 py-2">
                      <span className="text-[#747B86]">Base plan</span>
                      <span className="font-medium">{customEstimate.baseTier.label}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 rounded-[8px] bg-[#F8F9FB] px-3 py-2">
                      <span className="text-[#747B86]">{billingCycle === 'annual' ? 'Annual amount' : 'Monthly amount'}</span>
                      <span className="font-medium">₹{formatMoney(activeCustomPrice)}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 rounded-[8px] bg-[#F8F9FB] px-3 py-2">
                      <span className="text-[#747B86]">Additional vehicle charge</span>
                      <span className="font-medium">₹{formatMoney(customEstimate.additionalVehicleCharge)}</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 rounded-[8px] bg-[#F8F9FB] px-3 py-2">
                      <span className="text-[#747B86]">Additional user charge</span>
                      <span className="font-medium">₹{formatMoney(customEstimate.additionalUserCharge)}</span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-[#747B86]">
                    Estimated figures exclude GST. Final invoice will include applicable GST as per the selected billing arrangement.
                  </p>
                </div>
              </div>
            )}
          </section>

          <section className="content-start">
            <div className="mb-6">
              <div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[#747B86]">Feature Comparison</div>
              <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-[#17191D] sm:text-3xl">Clear plan-by-plan capability differences.</h2>
            </div>

            <div className="overflow-x-auto rounded-[10px] border border-[#E8EAEE] bg-white">
              <table className="min-w-[760px] w-full text-left text-xs sm:text-sm">
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
                      <td className="px-3 py-2.5 font-medium text-[#17191D]">{row.feature}</td>
                      <td className="px-3 py-2.5">{row.starter === true ? <span className="font-semibold text-[#17191D]">✓</span> : row.starter === false ? <span className="text-[#747B86]">—</span> : <span className="text-[#747B86]">{row.starter}</span>}</td>
                      <td className="px-3 py-2.5">{row.growth === true ? <span className="font-semibold text-[#17191D]">✓</span> : row.growth === false ? <span className="text-[#747B86]">—</span> : <span className="text-[#747B86]">{row.growth}</span>}</td>
                      <td className="px-3 py-2.5">{row.professional === true ? <span className="font-semibold text-[#17191D]">✓</span> : row.professional === false ? <span className="text-[#747B86]">—</span> : <span className="text-[#747B86]">{row.professional}</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="content-start">
            <div className="mb-6">
              <div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[#747B86]">Additional Units and Add-ons</div>
              <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-[#17191D] sm:text-3xl">Flexible add-ons for scale.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {fleetAddOns.map((item) => (
                <div key={item.name} className="rounded-[10px] border border-[#E8EAEE] bg-white p-4 sm:p-5">
                  <div className="text-sm font-medium text-[#17191D]">{item.name}</div>
                  <div className="mt-2 text-lg font-semibold text-[#17191D]">{item.price}</div>
                  <div className="mt-2 text-xs text-[#747B86]">{item.rule}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[12px] border border-[#E8EAEE] bg-white p-5 sm:p-8 lg:p-10 shadow-[0_10px_24px_rgba(23,25,29,0.04)]">
            <div className="flex flex-col gap-4 text-center sm:text-left lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-[680px]">
                <div className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[#747B86]">Ready to Move</div>
                <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-[#17191D] sm:text-3xl lg:text-4xl">
                  Ready to Manage Your Fleet Smarter?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#747B86] sm:text-base">
                  Explore a smarter way to manage vehicles, drivers, dispatch and transport operations.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://33fleet.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary h-11! sm:h-12! px-5! text-sm! sm:text-base!"
                >
                  <span>Visit Fleet Management System</span>
                  <ExternalLink className="ml-1.5 h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={handleChoosePlan}
                  className="btn-secondary h-11! sm:h-12! px-5! text-sm! sm:text-base!"
                >
                  <span>Choose Your Plan</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
};
