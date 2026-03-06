'use client';

import { motion } from 'framer-motion';

type Review = {
  quote: string;
  name: string;
  location: string;
  source: string;
};

const reviews: Review[] = [
  {
    quote: 'Called at 8pm with water coming through the kitchen ceiling. They arrived within 45 minutes and had it sorted by 9:30. Calm, professional, and cleaned up after.',
    name: 'Mark T.',
    location: 'Beeston',
    source: 'Google Review',
  },
  {
    quote: 'New boiler installed in a day. Old one removed, pipework tidied, and everything tested before they left. Price was exactly what was quoted.',
    name: 'Sarah K.',
    location: 'West Bridgford',
    source: 'Checkatrade',
  },
  {
    quote: 'Blocked shower drain fixed in 20 minutes. He also spotted a potential issue with the toilet inlet valve and flagged it without trying to upsell.',
    name: 'Priya R.',
    location: 'Arnold',
    source: 'Google Review',
  },
  {
    quote: 'Radiators balanced across the whole house. Two rooms that were always cold are now warm. Should have called months ago.',
    name: 'Dan M.',
    location: 'Mapperley',
    source: 'Checkatrade',
  },
  {
    quote: 'Really clear communication from the first call. Knew the price before they arrived. Taps replaced quickly and neatly.',
    name: 'Hannah L.',
    location: 'Sherwood',
    source: 'Google Review',
  },
  {
    quote: 'Emergency leak repair on a Sunday. No extra charge for the weekend. That is rare.',
    name: 'Chris W.',
    location: 'Carlton',
    source: 'Google Review',
  },
];

const stars = '★★★★★';

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-cream py-14 sm:py-20">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >
          <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-navy">What customers say</h2>
          <p className="mt-2 text-sm text-slate-400">Sample reviews shown for demonstration purposes.</p>
        </motion.div>

        <div className="columns-1 gap-5 sm:columns-2">
          {reviews.map((review, i) => (
            <motion.article
              key={review.name + review.location}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: Math.floor(i / 2) * 0.12 }}
              className="mb-5 break-inside-avoid rounded-2xl border border-slate-200 bg-white p-5 shadow-card"
            >
              <p className="text-amber-400 text-base leading-none">{stars}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">&ldquo;{review.quote}&rdquo;</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-navy">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.location}</p>
                </div>
                <span className="rounded-full bg-bg-secondary px-2.5 py-1 text-xs font-medium text-slate-500">
                  {review.source}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
