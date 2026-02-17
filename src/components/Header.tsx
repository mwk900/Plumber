'use client';

import { useEffect, useState } from 'react';

type Props = { businessName: string; phone: string; phoneHref: string };

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#areas', label: 'Areas' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' }
];

export function Header({ businessName, phone, phoneHref }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="section flex h-16 items-center justify-between gap-3">
        <a href="#home" className="min-w-0 text-sm font-bold text-navy sm:text-base">
          {businessName}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-700 hover:text-teal">
              {link.label}
            </a>
          ))}
        </nav>

        <a href={phoneHref} className="hidden rounded-xl bg-teal px-4 py-2 text-sm font-semibold text-white md:inline-block">
          Call {phone}
        </a>

        <button
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="section flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-base font-medium" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href={phoneHref} className="rounded-xl bg-teal px-4 py-3 text-center text-base font-semibold text-white" onClick={() => setOpen(false)}>
              Call {phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
