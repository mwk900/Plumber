'use client';

import { useEffect, useRef, useState } from 'react';

type Props = { phone: string; phoneHref: string; email: string };

export function FloatingCallButton({ phone, phoneHref, email }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [open]);

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft flex flex-col gap-2.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Get in touch</p>

          <a
            href={phoneHref}
            className="flex items-center gap-3 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-hover min-h-[48px]"
          >
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.68l1.45 4.36a1 1 0 0 1-.23 1.03L8.91 10.5a16 16 0 0 0 4.6 4.6l1.43-1.54a1 1 0 0 1 1.03-.23l4.36 1.45A1 1 0 0 1 21 15.72V19a2 2 0 0 1-2 2h-1C9.16 21 3 14.84 3 7V5z" />
            </svg>
            {phone}
          </a>

          <a
            href="https://wa.me/01150000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-green-500 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-green-600 min-h-[48px]"
          >
            <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.528 5.857L0 24l6.335-1.652A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-4.952-1.337l-.354-.21-3.758.981.998-3.658-.232-.375A9.818 9.818 0 1 1 12 21.818z" />
            </svg>
            WhatsApp us
          </a>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-accent hover:text-accent min-h-[48px]"
          >
            <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
            </svg>
            {email}
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close contact menu' : 'Open contact menu'}
        className="pulse-ring flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-all hover:scale-110 active:scale-95"
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.68l1.45 4.36a1 1 0 0 1-.23 1.03L8.91 10.5a16 16 0 0 0 4.6 4.6l1.43-1.54a1 1 0 0 1 1.03-.23l4.36 1.45A1 1 0 0 1 21 15.72V19a2 2 0 0 1-2 2h-1C9.16 21 3 14.84 3 7V5z" />
          </svg>
        )}
      </button>
    </div>
  );
}
