/**
 * Impact Journey Volume Variant
 * 
 * Shows impact as visual volume representations (stacked bars, containers, etc.)
 */

import { useTranslation } from 'react-i18next';
import { Card } from '@mira/ui';
import { Package, Scissors, Heart } from 'lucide-react';

export interface ImpactJourneyVolumeProps {
  impact: {
    foodKg: number;
    neuterings: number;
    animalsHelped: number;
  };
  className?: string;
}

export default function ImpactJourneyVolume({ impact, className }: ImpactJourneyVolumeProps) {
  const { t } = useTranslation();
  // Calculate visual heights (normalized to max 100%)
  const maxValue = Math.max(impact.foodKg, impact.neuterings * 50, impact.animalsHelped * 10);
  const foodHeight = (impact.foodKg / maxValue) * 100;
  const neuterHeight = ((impact.neuterings * 50) / maxValue) * 100;
  const animalHeight = ((impact.animalsHelped * 10) / maxValue) * 100;

  return (
    <Card noPadding className={className}>
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('shared.impactJourney.title')}</h2>
          <p className="text-slate-600">
            {t('shared.impactJourney.visualizeContribution')}
          </p>
        </div>

        {/* Volume Visualization */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Food Volume */}
          <div className="flex flex-col items-center">
            <div className="w-full mb-3">
              <div className="relative w-full h-48 bg-slate-100 rounded-lg overflow-hidden border-2 border-slate-200">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-600 to-forest-400 transition-all duration-500 rounded-lg"
                  style={{ height: `${foodHeight}%` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Package className="w-8 h-8 text-white opacity-80" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-forest-600 mb-1">{impact.foodKg.toLocaleString()}</div>
              <div className="text-sm font-medium text-slate-700 mb-1">{t('shared.impactJourney.kg')} {t('shared.impactJourney.foodDonated')}</div>
              <div className="text-xs text-slate-500">{t('shared.impactJourney.feedingApproximately', { count: Math.round(impact.foodKg / 2) })}</div>
            </div>
          </div>

          {/* Neuterings Volume */}
          <div className="flex flex-col items-center">
            <div className="w-full mb-3">
              <div className="relative w-full h-48 bg-slate-100 rounded-lg overflow-hidden border-2 border-slate-200">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600 to-purple-400 transition-all duration-500 rounded-lg"
                  style={{ height: `${neuterHeight}%` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Scissors className="w-8 h-8 text-white opacity-80" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">{impact.neuterings}</div>
              <div className="text-sm font-medium text-slate-700 mb-1">{t('shared.impactJourney.neuteringsFunded')}</div>
              <div className="text-xs text-slate-500">{t('shared.impactJourney.preventingOverpopulation')}</div>
            </div>
          </div>

          {/* Animals Helped Volume */}
          <div className="flex flex-col items-center">
            <div className="w-full mb-3">
              <div className="relative w-full h-48 bg-slate-100 rounded-lg overflow-hidden border-2 border-slate-200">
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-amber-600 to-amber-400 transition-all duration-500 rounded-lg"
                  style={{ height: `${animalHeight}%` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white opacity-80" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">{impact.animalsHelped}</div>
              <div className="text-sm font-medium text-slate-700 mb-1">{t('shared.impactJourney.animalsHelped')}</div>
              <div className="text-xs text-slate-500">{t('shared.impactJourney.livesImprovedAndSaved')}</div>
            </div>
          </div>
        </div>

        {/* Comparison Bars */}
        <div className="pt-6 border-t border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700 mb-4">{t('shared.impactJourney.impactBreakdown')}</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>{t('shared.impactJourney.foodDonated')}</span>
                <span>{impact.foodKg.toLocaleString()} {t('shared.impactJourney.kg')}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div className="bg-forest-600 h-3 rounded-full" style={{ width: `${foodHeight}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>{t('shared.impactJourney.neuteringsFunded')}</span>
                <span>{impact.neuterings}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div className="bg-purple-600 h-3 rounded-full" style={{ width: `${neuterHeight}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>{t('shared.impactJourney.animalsHelped')}</span>
                <span>{impact.animalsHelped}</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div className="bg-amber-600 h-3 rounded-full" style={{ width: `${animalHeight}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
