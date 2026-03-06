'use client';

import { useState } from 'react';

type Props = {
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
};

const problemTypes = ['Leak', 'Boiler', 'Hot Water', 'Drain', 'Radiator', 'Bathroom', 'Other'];
const urgencyOptions = ['Emergency (today)', 'Urgent (next 48 hours)', 'Planned job'];

export function ContactSection({ phone, phoneHref, email, address }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    postcode: '',
    problem: '',
    urgency: '',
    description: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-cream py-14 sm:py-20">
      <div className="section">
        <div className="mb-8">
          <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-navy">Get in touch</h2>
          <p className="mt-2 text-slate-500">
            Call for emergencies. Use the form for quotes and planned work.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: Direct contact */}
          <div>
            <div className="rounded-2xl border border-slate-200 bg-bg-secondary p-6 sm:p-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">Direct contact</p>

              <a
                href={phoneHref}
                className="mb-4 block text-[clamp(1.5rem,4vw,2rem)] font-bold text-navy transition-colors hover:text-accent"
              >
                {phone}
              </a>

              <a
                href={phoneHref}
                className="mb-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-bold text-white transition-colors hover:bg-accent-hover min-h-[56px]"
              >
                <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.68l1.45 4.36a1 1 0 0 1-.23 1.03L8.91 10.5a16 16 0 0 0 4.6 4.6l1.43-1.54a1 1 0 0 1 1.03-.23l4.36 1.45A1 1 0 0 1 21 15.72V19a2 2 0 0 1-2 2h-1C9.16 21 3 14.84 3 7V5z" />
                </svg>
                Call now
              </a>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                  </svg>
                  <a href={`mailto:${email}`} className="text-slate-600 transition-colors hover:text-accent">
                    {email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>
                  <span className="text-slate-600">{address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  </svg>
                  <div className="text-slate-600">
                    <p>Mon to Sat 7am to 7pm</p>
                    <p className="font-semibold text-accent">Emergency callouts 24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.528 5.857L0 24l6.335-1.652A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-4.952-1.337l-.354-.21-3.758.981.998-3.658-.232-.375A9.818 9.818 0 1 1 12 21.818z" />
                  </svg>
                  <a
                    href="https://wa.me/01150000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 transition-colors hover:text-green-600"
                  >
                    WhatsApp us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quote form */}
          <div>
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-success/30 bg-green-50 p-8 text-center">
                <svg className="mb-3 h-12 w-12 text-success" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 3l7 4v4.5C19 16 15.5 20 12 21 8.5 20 5 16 5 11.5V7l7-4z" />
                </svg>
                <h3 className="text-lg font-bold text-navy">Quote request received</h3>
                <p className="mt-2 text-sm text-slate-600">
                  We aim to respond within 30 minutes during working hours.
                </p>
                <p className="mt-4 text-xs text-slate-400">
                  Demo site only. This form does not send messages.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-sm font-medium text-accent hover:underline"
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Request a fixed price quote
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 min-h-[48px]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="formphone" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Phone
                    </label>
                    <input
                      id="formphone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 min-h-[48px]"
                      placeholder="07700 000000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="postcode" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Postcode
                  </label>
                  <input
                    id="postcode"
                    name="postcode"
                    type="text"
                    required
                    value={form.postcode}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 min-h-[48px]"
                    placeholder="NG1"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="problem" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Problem type
                    </label>
                    <select
                      id="problem"
                      name="problem"
                      required
                      value={form.problem}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 min-h-[48px] bg-white"
                    >
                      <option value="">Select...</option>
                      {problemTypes.map((p) => <option key={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="mb-1.5 block text-sm font-medium text-slate-700">
                      Urgency
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      required
                      value={form.urgency}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 min-h-[48px] bg-white"
                    >
                      <option value="">Select...</option>
                      {urgencyOptions.map((u) => <option key={u}>{u}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-slate-700">
                    Brief description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={form.description}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
                    placeholder="Tell us a bit more about the problem..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-accent px-6 py-4 text-base font-bold text-white transition-colors hover:bg-accent-hover active:scale-[0.99] min-h-[56px]"
                >
                  Request fixed price quote
                </button>

                <p className="text-center text-xs text-slate-400">
                  We aim to respond within 30 minutes during working hours. Demo site only.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
