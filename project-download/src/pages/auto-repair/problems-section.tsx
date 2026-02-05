import { Card, CardContent } from '@/components/ui/card';
import {
  PhoneMissed,
  Clock,
  CalendarX,
  UserX,
  FileStack,
} from 'lucide-react';

const problems = [
  {
    icon: PhoneMissed,
    title: 'Missed Calls',
    description:
      "Every unanswered call is a potential customer going to your competitor. You can't be on the phone while working under the hood.",
  },
  {
    icon: Clock,
    title: 'Slow Estimate Follow-Ups',
    description:
      "Customers who don't hear back quickly will call the next shop. Manual follow-ups take time you don't have.",
  },
  {
    icon: CalendarX,
    title: 'No-Shows',
    description:
      "Customers forget appointments, leaving bays empty and costing you money. Manual reminder calls are time-consuming.",
  },
  {
    icon: UserX,
    title: 'Lost Leads',
    description:
      "Inquiries slip through the cracks when you're busy. Without proper tracking, potential customers disappear.",
  },
  {
    icon: FileStack,
    title: 'Admin Overload',
    description:
      "Answering phones, scheduling, following up—admin tasks pile up and take you away from actual repairs.",
  },
];

export function ProblemsSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-red-400 font-medium text-sm uppercase tracking-wider">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Common Problems Auto Shops Face
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto text-lg">
            Running an auto shop means juggling repairs and customer
            communication. Something always falls through the cracks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="bg-neutral-900/50 border-neutral-800 hover:border-red-900/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-red-950/50 flex items-center justify-center mb-4 group-hover:bg-red-900/50 transition-colors">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {problem.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
