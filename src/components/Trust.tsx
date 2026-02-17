import { FadeIn } from './FadeIn';

export function Trust({ trust }: { trust: string[] }) {
  return (
    <section className="bg-navy py-12 text-white sm:py-16">
      <div className="section">
        <FadeIn>
          <h2 className="text-2xl font-bold sm:text-3xl">Trust & credentials</h2>
          <p className="mt-2 text-sm text-sky">Replace with your certification number where required.</p>
        </FadeIn>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {trust.map((item) => (
            <div key={item} className="rounded-xl border border-white/20 bg-white/10 p-4">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
