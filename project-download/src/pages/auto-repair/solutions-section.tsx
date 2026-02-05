import { Card, CardContent } from '@/components/ui/card';
import {
  PhoneCall,
  MessageSquare,
  UserCheck,
  CalendarCheck,
  ShieldCheck,
} from 'lucide-react';

const solutions = [
  {
    icon: PhoneCall,
    title: 'Answers Missed Calls',
    description:
      'AI answers every call 24/7, collects customer information, and schedules callbacks—so you never lose a lead.',
  },
  {
    icon: MessageSquare,
    title: 'Sends SMS Follow-Ups',
    description:
      "Automatic text messages follow up on estimates, remind customers about appointments, and re-engage old leads.",
  },
  {
    icon: UserCheck,
    title: 'Qualifies Leads',
    description:
      "The AI asks the right questions to understand the customer's needs, so you only spend time on serious inquiries.",
  },
  {
    icon: CalendarCheck,
    title: 'Books Appointments',
    description:
      'Customers can book directly through the AI, syncing with your calendar and filling your bays efficiently.',
  },
  {
    icon: ShieldCheck,
    title: 'Filters Spam',
    description:
      'No more wasting time on robocalls and solicitors. The AI handles unwanted calls so you can focus on real customers.',
  },
];

export function SolutionsSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-medium text-sm uppercase tracking-wider">
            The Solution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            How the AI Agent Helps Your Shop
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto text-lg">
            Our AI agent works around the clock, handling communication so you
            can focus on what you do best—fixing cars.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-neutral-900/50 border-neutral-800 hover:border-cyan-900/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-950/50 flex items-center justify-center mb-4 group-hover:bg-cyan-900/50 transition-colors">
                  <solution.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
