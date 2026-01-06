/**
 * Impact Journey Timeline Variant
 * 
 * Shows impact journey as a timeline with milestones and achievements
 */

import { Card } from '@mira/ui';
import { Calendar, TrendingUp, Award, Heart } from 'lucide-react';

export interface ImpactJourneyTimelineProps {
  impact: {
    foodKg: number;
    neuterings: number;
    animalsHelped: number;
  };
  milestones?: Array<{
    date: string;
    title: string;
    description: string;
    value: number;
    type: 'food' | 'neuter' | 'animal';
  }>;
  className?: string;
}

export default function ImpactJourneyTimeline({ impact, milestones, className }: ImpactJourneyTimelineProps) {
  const defaultMilestones = milestones || [
    { date: '2024-01', title: 'First Impact', description: 'Started your journey', value: 10, type: 'food' as const },
    { date: '2024-03', title: '100kg Milestone', description: 'Reached 100kg food donated', value: 100, type: 'food' as const },
    { date: '2024-06', title: 'First Neutering', description: 'Funded first neutering', value: 1, type: 'neuter' as const },
    { date: '2024-09', title: '500kg Milestone', description: 'Reached 500kg food donated', value: 500, type: 'food' as const },
    { date: '2024-12', title: '10 Animals Helped', description: 'Helped 10 animals', value: 10, type: 'animal' as const },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'food': return '🍽️';
      case 'neuter': return '✂️';
      case 'animal': return '🐾';
      default: return '🎯';
    }
  };

  return (
    <Card noPadding className={className}>
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Your Impact Journey</h2>
          <p className="text-slate-600">
            Track your progress through key milestones and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>

          <div className="space-y-6">
            {defaultMilestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start gap-4">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-forest-100 border-4 border-white shadow-sm flex items-center justify-center">
                  <span className="text-xl">{getIcon(milestone.type)}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-medium text-slate-500">{milestone.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">{milestone.title}</h3>
                  <p className="text-sm text-slate-600 mb-2">{milestone.description}</p>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-forest-600" />
                    <span className="text-sm font-bold text-forest-600">
                      {milestone.value} {milestone.type === 'food' ? 'kg' : milestone.type === 'neuter' ? 'neutering' : 'animals'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Stats Summary */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-forest-600 mb-1">{impact.foodKg.toLocaleString()}</div>
              <div className="text-xs text-slate-600">kg Food</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">{impact.neuterings}</div>
              <div className="text-xs text-slate-600">Neuterings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 mb-1">{impact.animalsHelped}</div>
              <div className="text-xs text-slate-600">Animals</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
