'use client';

import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';

export function Services({ services }: { services: string[] }) {
  return (
    <section id="services" className="py-12 sm:py-16">
      <div className="section">
        <FadeIn>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Plumbing Services in Nottingham</h2>
        </FadeIn>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.article key={service} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <FadeIn delay={idx * 0.04}>
                <div className="card min-h-24">
                  <h3 className="text-lg font-semibold text-slate-900">{service}</h3>
                  <p className="mt-2 text-sm text-slate-600">Reliable local support with clear pricing and professional workmanship.</p>
                </div>
              </FadeIn>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
