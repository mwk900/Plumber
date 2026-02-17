import { FadeIn } from './FadeIn';

type Props = {
  headline: string;
  subheadline: string;
  phone: string;
  phoneHref: string;
};

export function Hero({ headline, subheadline, phone, phoneHref }: Props) {
  return (
    <section id="home" className="bg-gradient-to-b from-sky to-white py-12 sm:py-16">
      <div className="section grid items-center gap-8 lg:grid-cols-2">
        <FadeIn>
          <h1 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl">{headline}</h1>
          <p className="mt-4 text-base text-slate-700 sm:text-lg">{subheadline}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={phoneHref} className="rounded-xl bg-teal px-6 py-4 text-center text-base font-semibold text-white">Call now: {phone}</a>
            <a href="#contact" className="rounded-xl border border-navy px-6 py-4 text-center text-base font-semibold text-navy">Get a quote</a>
          </div>
          <p className="mt-4 text-sm font-medium text-slate-600">Fully insured • Local Nottingham engineer • 5-star rated</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
            alt="Plumber repairing kitchen sink pipes"
            className="h-64 w-full rounded-2xl object-cover shadow-soft sm:h-80"
          />
        </FadeIn>
      </div>
    </section>
  );
}
