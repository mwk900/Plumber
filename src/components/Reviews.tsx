import { FadeIn } from './FadeIn';

type Review = { name: string; location: string; comment: string; rating: number };

export function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <section id="reviews" className="py-12 sm:py-16">
      <div className="section">
        <FadeIn>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Recent customer reviews</h2>
          <p className="mt-2 text-sm text-slate-600">Sample reviews — replace with your Google reviews.</p>
        </FadeIn>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <FadeIn key={review.name + review.location}>
              <article className="card h-full">
                <p className="text-amber-500">{'★'.repeat(review.rating)}</p>
                <p className="mt-2 text-sm text-slate-700">“{review.comment}”</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">{review.name} — {review.location}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
