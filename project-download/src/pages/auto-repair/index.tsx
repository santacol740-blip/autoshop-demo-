import { HeroSection } from './hero-section';
import { ProblemsSection } from './problems-section';
import { SolutionsSection } from './solutions-section';
import { OfferSection } from './offer-section';

export function AutoRepairLanding() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <OfferSection />

      <footer className="py-8 border-t border-neutral-800">
        <div className="container mx-auto px-6 text-center text-neutral-500 text-sm">
          AI BossFlow - Automation for Auto Repair Shops
        </div>
      </footer>
    </div>
  );
}
