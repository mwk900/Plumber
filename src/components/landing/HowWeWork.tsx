'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Call or message',
    description: 'Tell us the problem. We will give you a fixed price on the phone where possible.',
  },
  {
    number: '2',
    title: 'We arrive prepared',
    description: 'Stocked van, correct parts for common jobs. Most repairs fixed in a single visit.',
  },
  {
    number: '3',
    title: 'Fixed price, paid on completion',
    description: 'No hidden extras. Card or bank transfer accepted on site.',
  },
];

export function HowWeWork() {
  return (
    <section className="bg-bg-secondary py-14 sm:py-20">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center"
        >
          <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-navy">How we work</h2>
          <p className="mt-2 text-slate-500">Simple, fast, no surprises.</p>
        </motion.div>

        {/* Desktop: horizontal with line draw */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Background track */}
            <div className="absolute left-[20%] right-[20%] top-6 h-0.5 bg-slate-200" />
            {/* Animated accent line */}
            <motion.div
              className="absolute left-[20%] right-[20%] top-6 h-0.5 bg-accent origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1, delay: 0.2, ease: 'easeInOut' }}
            />

            <div className="grid grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.3 + 0.1 }}
                  className="relative z-10 flex flex-col items-center px-4 pt-1 text-center"
                >
                  <motion.div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent text-lg font-extrabold"
                    initial={{ backgroundColor: '#ffffff', color: '#0D9488' }}
                    whileInView={{ backgroundColor: '#0D9488', color: '#ffffff' }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.35 + 0.6, duration: 0.3 }}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-slate-200" />
          <motion.div
            className="absolute left-5 top-5 w-0.5 bg-accent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, delay: 0.2, ease: 'easeInOut' }}
            style={{ height: 'calc(100% - 2.5rem)' }}
          />
          <div className="space-y-8 pl-14">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="relative"
              >
                {/* Circle marker */}
                <div className="absolute -left-[3.25rem] flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-white shadow">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-navy">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
