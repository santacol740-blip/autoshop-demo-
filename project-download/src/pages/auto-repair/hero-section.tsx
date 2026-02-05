import { useEffect, useState } from 'react';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';

const BOOKING_URL = 'https://cal.com/aibossflow-mwglgg/15min';

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const checkReducedMotion = () => {
      setPrefersReducedMotion(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    };

    checkMobile();
    checkReducedMotion();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const showStaticFallback = isMobile || prefersReducedMotion;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-400">
              <Bot className="w-4 h-4 text-cyan-400" />
              AI-Powered Automation
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                AI Automation for
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-400">
                Auto Repair Shops
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed">
              Never miss a call, follow up on estimates automatically, and book
              more repair jobs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40"
                onClick={() => window.open(BOOKING_URL, '_blank')}
              >
                Book a Free 15-Minute Demo Call
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-neutral-500">Always Available</div>
              </div>
              <div className="w-px h-10 bg-neutral-800" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-neutral-500">Call Coverage</div>
              </div>
              <div className="w-px h-10 bg-neutral-800" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2x</div>
                <div className="text-sm text-neutral-500">More Bookings</div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[600px]">
            {showStaticFallback ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <Bot className="w-48 h-48 text-cyan-400 relative z-10" />
                </div>
              </div>
            ) : (
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
