import { FadeIn } from './FadeIn';

export function ContactForm({ phone, phoneHref }: { phone: string; phoneHref: string }) {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="section">
        <FadeIn>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">Get a fast quote</h2>
          <p className="mt-2 text-slate-600">Tell us what you need and we will get back to you quickly.</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <form
            name="quote-form"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="card mt-6 space-y-4"
          >
            <input type="hidden" name="form-name" value="quote-form" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
              </label>
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <input required name="name" placeholder="Name" className="w-full rounded-xl border border-slate-300 p-3" />
              <input required name="phone" placeholder="Phone" className="w-full rounded-xl border border-slate-300 p-3" />
              <input required type="email" name="email" placeholder="Email" className="w-full rounded-xl border border-slate-300 p-3" />
              <input name="postcode" placeholder="Postcode" className="w-full rounded-xl border border-slate-300 p-3" />
            </div>
            <input required name="service" placeholder="Service needed" className="w-full rounded-xl border border-slate-300 p-3" />
            <textarea required name="message" placeholder="Tell us about the issue" rows={5} className="w-full rounded-xl border border-slate-300 p-3" />
            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="rounded-xl bg-teal px-5 py-3 font-semibold text-white">Request quote</button>
              <a href={phoneHref} className="rounded-xl border border-navy px-5 py-3 text-center font-semibold text-navy">Or call {phone}</a>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
