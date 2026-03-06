'use client';

import { motion } from 'framer-motion';

type Service = {
  id: string;
  title: string;
  from: string;
  description: string;
  icon: React.ReactNode;
};

function LightningIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M13 2L4.5 13H12L11 22L19.5 11H12L13 2z" />
    </svg>
  );
}
function FlameIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 22c4 0 7-3 7-7 0-3-1.5-5.5-3-7.5-.5 1.5-1 3-2 3.5C14.5 9.5 14 7 13 5c-2 3-5 5.5-5 10a4 4 0 0 0 4 4z" />
    </svg>
  );
}
function BoilerInstallIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="11" r="3" />
      <path d="M12 8V5m0 9v3m3-5.5h3M6 11H3" />
    </svg>
  );
}
function ShowerIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M4 4l6 6" />
      <path d="M9.5 5.5a5.5 5.5 0 0 1 7.78.22A5.5 5.5 0 0 1 17.5 13.5" />
      <circle cx="9" cy="10" r="0.5" fill="currentColor" />
      <circle cx="12" cy="10" r="0.5" fill="currentColor" />
      <circle cx="15" cy="10" r="0.5" fill="currentColor" />
      <circle cx="9" cy="13" r="0.5" fill="currentColor" />
      <circle cx="12" cy="13" r="0.5" fill="currentColor" />
      <circle cx="15" cy="13" r="0.5" fill="currentColor" />
      <path d="M10 20v-4" />
      <path d="M14 20v-4" />
    </svg>
  );
}
function DrainServiceIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="3" x2="12" y2="9" />
      <line x1="21" y1="12" x2="15" y2="12" />
      <line x1="12" y1="21" x2="12" y2="15" />
      <line x1="3" y1="12" x2="9" y2="12" />
    </svg>
  );
}
function RadiatorIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="10" rx="1" />
      <line x1="7" y1="7" x2="7" y2="17" />
      <line x1="12" y1="7" x2="12" y2="17" />
      <line x1="17" y1="7" x2="17" y2="17" />
      <line x1="2" y1="4" x2="22" y2="4" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

const services: Service[] = [
  {
    id: 'emergency',
    title: 'Emergency Repairs',
    from: 'From £95 callout',
    description: 'Burst pipes, major leaks, and anything that cannot wait. Same day attendance.',
    icon: <LightningIcon />,
  },
  {
    id: 'boiler-repair',
    title: 'Boiler Repair',
    from: 'From £85',
    description: 'Diagnosis, parts, and repair for all major boiler brands. Worcester, Vaillant, Baxi, Ideal.',
    icon: <FlameIcon />,
  },
  {
    id: 'boiler-install',
    title: 'Boiler Installation',
    from: 'From £1,800',
    description: 'New boiler supply and fit with up to 10 year manufacturer warranty. Gas Safe certified.',
    icon: <BoilerInstallIcon />,
  },
  {
    id: 'bathroom',
    title: 'Bathroom Plumbing',
    from: 'From £350',
    description: 'Basin, bath, shower, and toilet installation. Full bathroom plumbing or individual upgrades.',
    icon: <ShowerIcon />,
  },
  {
    id: 'drains',
    title: 'Blocked Drains',
    from: 'From £75',
    description: 'Internal and external drain clearance. CCTV drain survey available for persistent issues.',
    icon: <DrainServiceIcon />,
  },
  {
    id: 'radiators',
    title: 'Radiators and Heating',
    from: 'From £65',
    description: 'Radiator replacement, powerflush, thermostatic valve upgrades, and underfloor heating.',
    icon: <RadiatorIcon />,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-cream py-14 sm:py-20">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >
          <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-navy">What we cover</h2>
          <p className="mt-2 text-slate-500">All prices include labour. Parts quoted separately where needed.</p>
        </motion.div>

        {/* Mobile: horizontal scroll. Desktop: 3x2 grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-shadow hover:shadow-soft"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  {service.icon}
                </span>
                <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent">
                  {service.from}
                </span>
              </div>
              <h3 className="text-base font-bold text-navy">{service.title}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>
              <div className="mt-4 flex items-center gap-4">
                <a href="#contact" className="text-sm font-semibold text-accent transition-colors hover:text-accent-hover">
                  Learn more
                </a>
                <a href="tel:01150000000" className="text-sm font-medium text-slate-500 transition-colors hover:text-accent">
                  Call to book
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex w-[72vw] max-w-[280px] shrink-0 snap-start flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  {service.icon}
                </span>
                <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent">
                  {service.from}
                </span>
              </div>
              <h3 className="text-sm font-bold text-navy">{service.title}</h3>
              <p className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-600">{service.description}</p>
              <a href="#contact" className="mt-3 text-sm font-semibold text-accent">
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
