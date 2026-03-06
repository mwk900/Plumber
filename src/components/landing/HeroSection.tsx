'use client';

import { useEffect, useState } from 'react';
import { ProblemFinder } from '@/components/landing/ProblemFinder';

type Props = { phone: string; phoneHref: string };

const trustItems = [
  'Gas Safe registered',
  'Fully insured',
  'Fixed pricing',
  '12 month guarantee',
];

function getAvailabilityMessage() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  if (day >= 1 && day <= 6 && hour >= 7 && hour < 19) {
    return 'Available now';
  }
  return 'Emergency callouts 24/7';
}

export function HeroSection({ phone, phoneHref }: Props) {
  const [availability, setAvailability] = useState('Available now');

  useEffect(() => {
    setAvailability(getAvailabilityMessage());
  }, []);

  return (
    <section id="home" className="bg-cream pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 border-b border-slate-200">
      <div className="section grid items-start gap-10 lg:grid-cols-2">

        {/* Left: Emergency contact */}
        <div className="flex flex-col lg:py-6">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-success/30 bg-success/10 px-4 py-2 w-fit">
            <span className="pulse-dot inline-block h-2.5 w-2.5 rounded-full bg-success" aria-hidden="true" />
            <span className="text-sm font-semibold text-success">{availability}</span>
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-2">Emergency?</p>

          <a
            href={phoneHref}
            className="block text-[clamp(2.25rem,5.5vw,3.5rem)] font-black leading-none tracking-tight text-navy transition-colors hover:text-accent"
          >
            {phone}
          </a>

          <h1 className="mt-5 text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-tight text-navy">
            Fast fix. Fair price. Sorted.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Emergency plumber and heating engineer in Nottingham. Fixed price confirmed before work starts.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 shrink-0 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium text-slate-500">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Problem finder embedded */}
        <div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
            <h2 className="text-lg font-bold text-navy">What is the problem?</h2>
            <p className="mt-1 mb-5 text-sm text-slate-500">
              Tell us what is happening for instant advice and a cost guide.
            </p>
            <ProblemFinder phone={phone} phoneHref={phoneHref} compact />
          </div>
        </div>

      </div>
    </section>
  );
}
