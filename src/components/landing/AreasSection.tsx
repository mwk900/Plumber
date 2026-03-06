const areas = [
  'Nottingham', 'West Bridgford', 'Beeston', 'Arnold', 'Carlton',
  'Mapperley', 'Long Eaton', 'Hucknall', 'Stapleford', 'Ruddington',
  'Sherwood', 'Wollaton', 'Gedling', 'Radcliffe on Trent',
];

export function AreasSection() {
  return (
    <section id="areas" className="bg-cream py-14 sm:py-20">
      <div className="section">
        <h2 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold text-navy">
          Covering Nottingham and 20 miles out
        </h2>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-slate-200 bg-bg-secondary px-4 py-2 text-sm font-medium text-slate-700"
            >
              {area}
            </span>
          ))}
        </div>

        <p className="mt-5 text-sm text-slate-500">
          Not listed? Call us. If we can get there within 30 minutes, we will.
        </p>
      </div>
    </section>
  );
}
