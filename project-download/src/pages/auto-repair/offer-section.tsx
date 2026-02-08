import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ClipboardCheck, Workflow, TrendingUp, ArrowRight } from 'lucide-react';

const BOOKING_URL = 'https://cal.com/aibossflow-mwglgg/15min';

const offerings = [
  {
    icon: ClipboardCheck,
    title: 'Free Automation Audit',
    description:
      "We'll analyze your current workflow and identify exactly where automation can save you time and money.",
  },
  {
    icon: Workflow,
    title: 'Custom AI Workflows',
    description:
      "Get AI workflows built specifically for your shop's needs—from call handling to estimate follow-ups.",
  },
  {
    icon: TrendingUp,
    title: 'ROI Estimate',
    description:
      "See the projected return on investment based on your current call volume and conversion rates.",
  },
];

export function OfferSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-teal-400 font-medium text-sm uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            What You Get
          </h2>
          <p className="text-neutral-200 mt-4 max-w-2xl mx-auto text-lg">
            Book a free demo call and discover how AI automation can transform
            your auto shop operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {offerings.map((offering, index) => (
            <Card
              key={index}
              className="bg-gradient-to-b from-neutral-900/80 to-neutral-900/40 border-neutral-800 hover:border-teal-900/50 transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6 group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-colors">
                  <offering.icon className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {offering.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {offering.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-900/50 border border-neutral-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Shop?
            </h3>
            <p className="text-neutral-400 mb-6 max-w-md mx-auto">
              Schedule a free 15-minute call and see exactly how AI can help
              your auto repair business grow.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 group"
              onClick={() => window.open(BOOKING_URL, '_blank')}
            >
              Book Your Free Demo Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
