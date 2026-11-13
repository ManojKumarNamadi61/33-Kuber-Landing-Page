import React from 'react';

interface SkillsProps {
  onContactClick: () => void;
}

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  image: string;
  description: string;
  icon: 'web' | 'custom' | 'product' | 'advisory';
}

const ServiceIcon: React.FC<{ type: ServiceItem['icon'] }> = ({ type }) => {
  const iconMap = {
    web: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-[#17191D]">
        <rect x="3.5" y="5" width="17" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 9.5H20.5M8 18.5L12 15.5L16 18.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    custom: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-[#17191D]">
        <path d="M7 7.5L12 4L17 7.5V16.5L12 20L7 16.5V7.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 4V20M7 7.5L12 10.5L17 7.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    product: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-[#17191D]">
        <path d="M12 3.5L18.5 7V17L12 20.5L5.5 17V7L12 3.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 7.5V12M9.5 9.5H14.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    advisory: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-[#17191D]">
        <path d="M12 4.5L18 7.5V11.5C18 15.5 15.2 18.8 12 19.5C8.8 18.8 6 15.5 6 11.5V7.5L12 4.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9.5 12H14.5M12 9.5V14.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  };

  return iconMap[type];
};

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Web Development',
    image: '/assets/aistudio/service_3d_web.png',
    description: 'Scalable, secure, and responsive web applications engineered for performance, clarity, and long-term maintainability.',
    icon: 'web'
  },
  {
    id: 'custom-solutions',
    number: '02',
    title: 'Customized Solutions',
    image: '/assets/aistudio/service_3d_custom.png',
    description: 'Tailor-made software designed around your workflows, operational requirements, and specific growth objectives.',
    icon: 'custom'
  },
  {
    id: 'product-dev',
    number: '03',
    title: 'Product Development',
    image: '/assets/aistudio/service_3d_product.png',
    description: 'From concept to launch, we shape digital products with product strategy, rapid delivery, and structured optimization.',
    icon: 'product'
  },
  {
    id: 'technology-advisory',
    number: '04',
    title: 'Technology Advisory',
    image: '/assets/aistudio/service_3d_custom.png',
    description: 'Architecture guidance, tech due diligence, roadmap planning, and delivery governance for teams building critical platforms.',
    icon: 'advisory'
  }
];

export const Skills: React.FC<SkillsProps> = ({ onContactClick }) => {
  return (
    <section id="capabilities" className="framer-section bg-[#FFFFFF] border-t border-[#E8EAEE] relative">
      <div className="framer-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-[14px] font-medium text-[#747B86] mb-2 sm:mb-3">
              03 / Service Capabilities
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-[44px] font-medium text-[#17191D] tracking-tight leading-[1.18] sm:leading-[1.14]">
              Smart, scalable engineering solutions built for growth.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#747B86] max-w-sm leading-relaxed">
            We design resilient digital systems, automate operations, and engineer products that remain fast, reliable, and ready for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.id}
              onClick={onContactClick}
              className="group flex h-full min-h-107.5 md:min-h-115 cursor-pointer flex-col justify-between overflow-hidden rounded-[20px] border border-[#E8EAEE] bg-[#FFFFFF] p-4 sm:p-5 md:p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#D6D9E0] hover:shadow-[0_18px_38px_-22px_rgba(23,25,29,0.18)]"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[10px] border border-[#E8EAEE] bg-[#F5F6F8] text-[#17191D]">
                  <ServiceIcon type={service.icon} />
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.14em] text-[#747B86]">
                  {service.number}
                </span>
              </div>

              <div className="relative mb-4 sm:mb-5 aspect-4/3 overflow-hidden rounded-2xl border border-[#E8EAEE] bg-[#F5F6F8]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/8 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col justify-end">
                <h3 className="text-xl sm:text-[22px] md:text-[24px] font-medium text-[#17191D] tracking-tight leading-[1.2] mb-2.5 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#747B86]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
