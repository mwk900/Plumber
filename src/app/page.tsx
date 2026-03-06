import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { FloatingCallButton } from '@/components/ui/FloatingCallButton';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { PricingTable } from '@/components/landing/PricingTable';
import { ReviewsSection } from '@/components/landing/ReviewsSection';
import { AreasSection } from '@/components/landing/AreasSection';
import { CredentialsBadges } from '@/components/landing/CredentialsBadges';
import { ContactSection } from '@/components/landing/ContactSection';

const PHONE = '0115 847 3291';
const PHONE_HREF = 'tel:01158473291';
const EMAIL = 'hello@crescoplumbing.co.uk';
const ADDRESS = '12 Market Street, Nottingham, NG1 6FG';

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection phone={PHONE} phoneHref={PHONE_HREF} />
      <ServicesSection />
      <PricingTable />
      <ReviewsSection />
      <AreasSection />
      <CredentialsBadges />
      <ContactSection phone={PHONE} phoneHref={PHONE_HREF} email={EMAIL} address={ADDRESS} />
      <SiteFooter phone={PHONE} phoneHref={PHONE_HREF} email={EMAIL} address={ADDRESS} />
      <FloatingCallButton phone={PHONE} phoneHref={PHONE_HREF} email={EMAIL} />
    </main>
  );
}
