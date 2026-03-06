'use client';

import { useState } from 'react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

function WrenchIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      {/* Floating pill */}
      <nav className="flex items-center gap-0.5 rounded-full bg-navy/95 px-2 py-1.5 shadow-xl ring-1 ring-white/10 backdrop-blur-md">

        {/* Logo — back to top */}
        <a
          href="#home"
          aria-label="Cresco Plumbing — back to top"
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-white transition-colors hover:bg-white/10"
        >
          <span className="text-accent"><WrenchIcon /></span>
          <span className="text-sm font-bold text-white">Cresco</span>
          <span className="hidden text-sm font-medium text-accent sm:inline">Plumbing</span>
        </a>

        {/* Separator */}
        <span className="mx-1 hidden h-4 w-px bg-white/15 lg:block" aria-hidden="true" />

        {/* Desktop nav links */}
        <div className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute left-1/2 mt-2 w-48 -translate-x-1/2 rounded-2xl bg-navy/95 p-2 shadow-xl ring-1 ring-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
