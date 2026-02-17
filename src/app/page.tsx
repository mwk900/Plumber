import site from '@/data/site.json';
import { Areas } from '@/components/Areas';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MapSection } from '@/components/MapSection';
import { Reviews } from '@/components/Reviews';
import { Services } from '@/components/Services';
import { Steps } from '@/components/Steps';
import { Trust } from '@/components/Trust';

export default function Home() {
  const { business, services, steps, areas, trust, reviews } = site;

  return (
    <main>
      {/* Replace business contact details in src/data/site.json when launching this site live. */}
      <Header businessName={business.name} phone={business.phone} phoneHref={business.phoneHref} />
      <Hero
        headline={business.tagline}
        subheadline={business.subheadline}
        phone={business.phone}
        phoneHref={business.phoneHref}
      />
      <Services services={services} />
      <Steps steps={steps} />
      <Areas areas={areas} />
      <Trust trust={trust} />
      <Reviews reviews={reviews} />
      <MapSection
        address={business.address}
        phone={business.phone}
        phoneHref={business.phoneHref}
        email={business.email}
        hours={business.hours}
        emergency={business.emergency}
      />
      <ContactForm phone={business.phone} phoneHref={business.phoneHref} />
      <Footer
        name={business.name}
        address={business.address}
        phone={business.phone}
        phoneHref={business.phoneHref}
        email={business.email}
        areas={areas}
        hours={business.hours}
      />
      <a
        href={business.phoneHref}
        className="fixed bottom-4 right-4 z-40 rounded-full bg-teal px-5 py-3 text-sm font-bold text-white shadow-soft md:hidden"
      >
        Call now
      </a>
    </main>
  );
}
