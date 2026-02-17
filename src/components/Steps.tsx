import { FadeIn } from './FadeIn';

export function Steps({ steps }: { steps: string[] }) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="section">
        <FadeIn>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">How it works</h2>
        </FadeIn>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step} delay={i * 0.08}>
              <div className="card h-full">
                <p className="text-sm font-bold text-teal">Step {i + 1}</p>
                <p className="mt-2 font-medium">{step}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
