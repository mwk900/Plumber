import { FadeIn } from './FadeIn';

export function Areas({ areas }: { areas: string[] }) {
  return (
    <section id="areas" className="py-12 sm:py-16">
      <div className="section">
        <FadeIn>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Service areas</h2>
          <p className="mt-2 text-slate-600">Fast coverage across Nottingham and surrounding towns.</p>
        </FadeIn>
        <div className="mt-6 flex flex-wrap gap-3">
          {areas.map((area) => (
            <span key={area} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
