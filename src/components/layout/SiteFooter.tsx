type Props = {
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
};

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

const areas = [
  'Nottingham', 'West Bridgford', 'Beeston', 'Arnold', 'Carlton',
  'Mapperley', 'Long Eaton', 'Hucknall', 'Stapleford', 'Ruddington',
  'Sherwood', 'Wollaton', 'Gedling',
];

export function SiteFooter({ phone, phoneHref, email, address }: Props) {
  return (
    <footer className="bg-navy text-slate-400">
      <div className="section py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="text-lg font-bold text-white">Cresco</p>
            <p className="text-sm font-semibold text-accent">Plumbing &amp; Heating</p>
            <p className="mt-3 text-xs leading-relaxed">
              Emergency plumber and heating engineer in Nottingham. Gas Safe registered. Fixed pricing.
            </p>
            <p className="mt-3 text-xs text-slate-500">Gas Safe Reg. 123456 (placeholder)</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Contact</h3>
            <div className="space-y-2 text-sm">
              <a href={phoneHref} className="block transition-colors hover:text-accent">
                {phone}
              </a>
              <a href={`mailto:${email}`} className="block transition-colors hover:text-accent">
                {email}
              </a>
              <p>{address}</p>
              <p>Mon to Sat 7am to 7pm</p>
              <p className="text-accent">Emergency callouts 24/7</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Service areas</h3>
            <p className="text-sm leading-relaxed">{areas.join(' · ')}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            Demo site only. Cresco Plumbing and Heating is a fictional business created for portfolio purposes.
          </p>
          <p className="text-xs text-slate-500">
            Built by{' '}
            <a href="https://northsummit.agency" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
              NorthSummit Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
