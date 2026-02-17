export function Footer({
  name,
  address,
  phone,
  phoneHref,
  email,
  areas,
  hours
}: {
  name: string;
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  areas: string[];
  hours: string;
}) {
  return (
    <footer className="bg-slate-900 py-10 text-slate-200">
      <div className="section grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="mt-2 text-sm">{address}</p>
          <p className="text-sm"><a href={phoneHref}>{phone}</a></p>
          <p className="text-sm"><a href={`mailto:${email}`}>{email}</a></p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Opening hours</h3>
          <p className="mt-2 text-sm">{hours}</p>
          <p className="mt-3 text-sm">Privacy policy (placeholder)</p>
          <p className="text-sm">Cookie policy (placeholder)</p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Service areas</h3>
          <p className="mt-2 text-sm">{areas.slice(0, 8).join(' • ')}</p>
          <p className="mt-4 text-xs text-slate-400">Demo site by Your Brand</p>
        </div>
      </div>
    </footer>
  );
}
