'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Job = {
  id: string;
  label: string;
  price: string;
  range: string;
  detail: string;
};

const jobs: Job[] = [
  { id: 'emergency', label: 'Emergency callout', price: 'From £95', range: '£95 – £180+', detail: 'Includes first hour on site. Available 24/7. Parts quoted separately.' },
  { id: 'boiler-repair', label: 'Boiler repair', price: 'From £85', range: '£85 – £250', detail: 'Diagnosis and labour. Common parts carried in the van. All major brands.' },
  { id: 'boiler-install', label: 'New boiler', price: 'From £1,800', range: '£1,800 – £3,200', detail: 'Supply and fit. Removal of old boiler included. Up to 10yr manufacturer warranty.' },
  { id: 'drain', label: 'Blocked drain', price: 'From £75', range: '£75 – £120', detail: 'Internal or external clearance. CCTV survey available for persistent blockages.' },
  { id: 'radiator', label: 'Radiator or TRV', price: 'From £65', range: '£65 – £180', detail: 'TRV replacement, radiator swap, or full system balancing.' },
  { id: 'bathroom', label: 'Bathroom plumbing', price: 'From £350', range: '£350 – £800+', detail: 'Basin, bath, shower, or toilet installation. Parts quoted separately.' },
  { id: 'tap-toilet', label: 'Tap or toilet repair', price: 'From £65', range: '£65 – £120', detail: 'Washer, seat, flush valve replacement, or full tap/toilet swap.' },
  { id: 'powerflush', label: 'Powerflush', price: 'From £350', range: '£350 – £450', detail: 'Full system flush. Up to 10 radiators. Inhibitor included.' },
];

export function PricingTable() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = jobs.find((j) => j.id === selectedId) ?? null;

  return (
    <section id="pricing" className="bg-cream py-14 sm:py-20">
      <div className="section">
        <div className="mb-8">
          <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-navy">Instant price guide</h2>
          <p className="mt-2 text-slate-500">Select a job to see approximate costs. Fixed quote confirmed before work starts.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[2fr_3fr] lg:items-start">
          {/* Job selector */}
          <div className="flex flex-col gap-2">
            {jobs.map((job) => (
              <button
                key={job.id}
                onClick={() => setSelectedId(selectedId === job.id ? null : job.id)}
                className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-left text-sm transition-all min-h-[52px] ${
                  selectedId === job.id
                    ? 'border-accent bg-accent font-bold text-white shadow-soft'
                    : 'border-slate-200 bg-white font-medium text-navy hover:border-accent hover:text-accent'
                }`}
              >
                <span>{job.label}</span>
                <span className={`ml-3 shrink-0 text-xs font-bold ${selectedId === job.id ? 'text-white/80' : 'text-accent'}`}>
                  {job.price}
                </span>
              </button>
            ))}
          </div>

          {/* Result panel */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-2xl border border-accent/20 bg-accent-soft p-6 sm:p-8"
                >
                  <p className="text-4xl font-black text-accent sm:text-5xl">{selected.range}</p>
                  <h3 className="mt-2 text-lg font-bold text-navy">{selected.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{selected.detail}</p>
                  <p className="mt-3 text-xs text-slate-400">
                    All prices include labour. Parts quoted separately where needed. No call out fee for booked appointments.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="tel:01150000000"
                      className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent-hover min-h-[48px]"
                    >
                      <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.68l1.45 4.36a1 1 0 0 1-.23 1.03L8.91 10.5a16 16 0 0 0 4.6 4.6l1.43-1.54a1 1 0 0 1 1.03-.23l4.36 1.45A1 1 0 0 1 21 15.72V19a2 2 0 0 1-2 2h-1C9.16 21 3 14.84 3 7V5z" />
                      </svg>
                      Call to book
                    </a>
                    <a
                      href="#contact"
                      className="flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-accent hover:text-accent min-h-[48px]"
                    >
                      Request a callback
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-slate-300 lg:min-h-[340px]"
                >
                  <p className="text-sm text-slate-400">Select a job to see pricing</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
