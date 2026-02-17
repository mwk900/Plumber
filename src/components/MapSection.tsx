import { FadeIn } from './FadeIn';

type Props = {
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  hours: string;
  emergency: string;
};

export function MapSection({ address, phone, phoneHref, email, hours, emergency }: Props) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="section grid gap-6 lg:grid-cols-2">
        <FadeIn>
          <div className="card p-0 overflow-hidden">
            <iframe
              title="Cresco Nottingham Map"
              src="https://www.google.com/maps?q=Nottingham&output=embed"
              loading="lazy"
              className="h-72 w-full border-0 sm:h-96"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="card h-full">
            <h2 className="text-2xl font-bold text-navy">Contact details</h2>
            <ul className="mt-4 space-y-3 text-sm sm:text-base">
              <li><strong>Address:</strong> {address}</li>
              <li><strong>Phone:</strong> <a href={phoneHref} className="text-teal underline">{phone}</a></li>
              <li><strong>Email:</strong> <a href={`mailto:${email}`} className="text-teal underline">{email}</a></li>
              <li><strong>Opening hours:</strong> {hours}</li>
              <li><strong>Emergency:</strong> {emergency}</li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
