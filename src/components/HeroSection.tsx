/**
 * HeroSection Component
 * 
 * Displays general footprint and impact indication for all personas.
 * Shows what users have achieved in terms of animal welfare impact.
 * Separated from gamification - focuses purely on impact metrics.
 */

import { useTranslation } from 'react-i18next';
import { Card, ImpactCounter } from '@mira/ui';
import { Heart, Package, Scissors, MapPin } from 'lucide-react';
import { Shelter } from '../data/mockData';

export interface HeroSectionProps {
  impact: {
    foodKg: number;
    neuterings: number;
    animalsHelped: number;
  };
  shelter?: Shelter;
  className?: string;
}

export default function HeroSection({ impact, shelter, className }: HeroSectionProps) {
  const { t } = useTranslation();
  return (
    <Card noPadding className={className}>
      <div className="p-6 bg-gradient-to-br from-forest-50 via-amber-50 to-purple-50 rounded-lg border border-forest-100">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-6 h-6 text-forest-600" />
            <h2 className="text-2xl font-bold text-slate-900">{t('shared.impactJourney.title')}</h2>
          </div>
          <p className="text-slate-600">
            {t('shared.impactJourney.description')}
          </p>
        </div>

        {/* Impact Counters - Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg p-5 border border-forest-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-forest-100">
                <Package className="w-5 h-5 text-forest-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">{t('shared.impactJourney.foodDonated')}</p>
                <p className="text-2xl font-bold text-forest-600">{impact.foodKg.toLocaleString()} {t('shared.impactJourney.kg')}</p>
              </div>
            </div>
            <p className="text-xs text-slate-500">{t('shared.impactJourney.feedingApproximately', { count: Math.round(impact.foodKg / 2) })}</p>
          </div>

          <div className="bg-white rounded-lg p-5 border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-100">
                <Scissors className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">{t('shared.impactJourney.neuteringsFunded')}</p>
                <p className="text-2xl font-bold text-purple-600">{impact.neuterings}</p>
              </div>
            </div>
            <p className="text-xs text-slate-500">{t('shared.impactJourney.preventingOverpopulation')}</p>
          </div>

          <div className="bg-white rounded-lg p-5 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-amber-100">
                <Heart className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-600 uppercase tracking-wide">{t('shared.impactJourney.animalsHelped')}</p>
                <p className="text-2xl font-bold text-amber-600">{impact.animalsHelped}</p>
              </div>
            </div>
            <p className="text-xs text-slate-500">{t('shared.impactJourney.livesImprovedAndSaved')}</p>
          </div>
        </div>

        {/* Impact Summary Bar */}
        <div className="pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700">{t('shared.impactJourney.totalImpactScore')}</span>
            <span className="text-sm font-bold text-forest-600">
              {impact.foodKg + (impact.neuterings * 50) + (impact.animalsHelped * 10)} {t('shared.impactJourney.points')}
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-forest-600 via-purple-600 to-amber-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(((impact.foodKg + (impact.neuterings * 50) + (impact.animalsHelped * 10)) / 1000) * 100, 100)}%` }}
            />
          </div>
        </div>

        {/* Shelter Attribution */}
        {shelter && (
          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-slate-500" />
              <span className="text-slate-600">
                {t('veto.shelter.supporting', { name: shelter.name, city: shelter.city, country: shelter.country })}
              </span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
