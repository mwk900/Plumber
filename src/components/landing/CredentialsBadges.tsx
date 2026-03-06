const credentials = [
  { label: 'Gas Safe Registered', sub: 'Reg. 123456 (placeholder)', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200' },
  { label: 'Fully Insured', sub: 'Public liability covered', color: 'text-green-700', bg: 'bg-green-50 border-green-200' },
  { label: 'Fixed Price Promise', sub: 'Quoted before work starts', color: 'text-accent', bg: 'bg-accent-soft border-accent/20' },
  { label: '12 Month Guarantee', sub: 'On all workmanship', color: 'text-navy', bg: 'bg-cream border-stone-300' },
  { label: "Which? Trusted Trader", sub: 'Placeholder', color: 'text-slate-700', bg: 'bg-white border-slate-200' },
  { label: 'Checkatrade Listed', sub: 'Placeholder', color: 'text-slate-700', bg: 'bg-white border-slate-200' },
];

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? 'h-5 w-5'} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 3l7 4v4.5C19 16 15.5 20 12 21 8.5 20 5 16 5 11.5V7l7-4z" />
    </svg>
  );
}

export function CredentialsBadges() {
  return (
    <section className="bg-cream py-10 sm:py-14">
      <div className="section">
        <h2 className="mb-6 text-center text-lg font-bold text-navy sm:text-xl">
          Registered, insured, and guaranteed
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {credentials.map((cred) => (
            <div
              key={cred.label}
              className={`flex flex-col items-center gap-1.5 rounded-xl border p-4 text-center ${cred.bg}`}
            >
              <ShieldIcon className={`h-6 w-6 ${cred.color}`} />
              <p className={`text-xs font-bold leading-tight ${cred.color}`}>{cred.label}</p>
              <p className="text-xs text-slate-400 leading-tight">{cred.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
