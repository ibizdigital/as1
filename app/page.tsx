import { Button } from '@/components/ui/button';
import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';
import { FoundingCircle } from '@/components/founding-circle';
import { CookieConsent } from '@/components/cookie-consent';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <HowItWorks />
      <FoundingCircle />
      <CookieConsent />
    </div>
  );
}