/**
 * GamificationImpactMilestones Component
 * 
 * Impact milestone system:
 * - Milestone progression
 * - Impact metrics
 * - Shareable impact cards
 * - Milestone rewards
 */

import { useTranslation } from 'react-i18next';
import { PageHeader, Card, CardHeader, CardContent, Badge, ProgressBar, Button } from '@mira/ui';
import { Heart, TrendingUp, Share2, Award, CheckCircle2 } from 'lucide-react';

export default function GamificationImpactMilestones() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'de' ? 'de-DE' : 'en-GB';
  const milestones = [
    { id: '1', name: 'First Paw', threshold: 1, current: 1, unit: 'kg', badge: 'BADGE-001', xp: 50, earned: true },
    { id: '2', name: 'Helping Hand', threshold: 10, current: 10, unit: 'animals', badge: null, xp: 75, earned: true },
    { id: '3', name: 'Shelter Friend', threshold: 100, current: 100, unit: 'kg', badge: 'BADGE-002', xp: 100, earned: true },
    { id: '4', name: 'Community Supporter', threshold: 1, current: 0, unit: 'neuterings', badge: null, xp: 150, earned: false },
    { id: '5', name: 'Life Saver', threshold: 500, current: 500, unit: 'kg', badge: 'BADGE-003', xp: 200, earned: true },
    { id: '6', name: 'Rescue Hero', threshold: 1, current: 0, unit: 'rescues', badge: null, xp: 250, earned: false },
    { id: '7', name: 'Animal Guardian', threshold: 1000, current: 750, unit: 'kg', badge: 'BADGE-004', xp: 500, earned: false },
    { id: '8', name: 'Impact Leader', threshold: 500, current: 450, unit: 'animals', badge: null, xp: 400, earned: false },
    { id: '9', name: 'Impact Hero', threshold: 2500, current: 750, unit: 'kg', badge: null, xp: 750, earned: false },
    { id: '10', name: 'MIRA Legend', threshold: 5000, current: 750, unit: 'kg', badge: 'BADGE-005', xp: 1000, earned: false },
  ];

  const impactMetrics = [
    { label: 'Kilograms Donated', value: 750, unit: 'kg', icon: TrendingUp },
    { label: 'Animals Fed', value: 450, unit: 'animals', icon: Heart },
    { label: 'Neuterings Funded', value: 0, unit: 'neuterings', icon: Award },
    { label: 'Rescues Supported', value: 0, unit: 'rescues', icon: Heart },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title={t('gamificationImpactMilestones.title')}
        subtitle={t('gamificationImpactMilestones.subtitle')}
      />

      {/* Impact Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        {impactMetrics.map((metric) => {
          const Icon = metric.icon;
          const translationKey = metric.label === 'Kilograms Donated' ? 'kilogramsDonated' :
                                 metric.label === 'Animals Fed' ? 'animalsFed' :
                                 metric.label === 'Neuterings Funded' ? 'neuteringsFunded' :
                                 'rescuesSupported';
          return (
            <Card key={metric.label}>
              <CardContent className="p-4 text-center">
                <Icon className="w-8 h-8 text-forest-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-slate-900">{metric.value.toLocaleString(locale)}</p>
                <p className="text-xs text-slate-600">{t(`gamificationImpactMilestones.${translationKey}`)}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Milestone Progression */}
      <Card>
        <CardHeader title={t('gamificationImpactMilestones.milestoneProgression')} />
        <CardContent className="p-6">
          <div className="space-y-4">
            {milestones.map((milestone) => {
              const progress = milestone.earned ? 100 : (milestone.current / milestone.threshold) * 100;
              return (
                <div
                  key={milestone.id}
                  className={`p-4 rounded-lg border-2 ${
                    milestone.earned
                      ? 'bg-green-50 border-green-200'
                      : progress > 0
                      ? 'bg-amber-50 border-amber-200'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        milestone.earned
                          ? 'bg-green-600 text-white'
                          : progress > 0
                          ? 'bg-amber-600 text-white'
                          : 'bg-slate-300 text-slate-600'
                      }`}>
                        {milestone.earned ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <Heart className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{milestone.name}</h4>
                        <p className="text-xs text-slate-600">
                          {milestone.current} / {milestone.threshold} {milestone.unit}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      {milestone.badge && (
                        <Badge variant="default" size="sm" className="mb-1">
                          {t('gamificationImpactMilestones.badge')}
                        </Badge>
                      )}
                      <p className="text-xs text-slate-600">{milestone.xp} {t('gamification.xp')}</p>
                    </div>
                  </div>
                  {!milestone.earned && (
                    <div className="space-y-1">
                      <ProgressBar value={Math.min(progress, 100)} variant="default" />
                      <p className="text-xs text-slate-500">
                        {t('gamificationImpactMilestones.remaining', { value: milestone.threshold - milestone.current, unit: milestone.unit })}
                      </p>
                    </div>
                  )}
                  {milestone.earned && (
                    <div className="pt-2 border-t border-green-200">
                      <Button size="sm" variant="secondary" className="w-full">
                        <Share2 className="w-4 h-4 mr-2" />
                        {t('gamificationImpactMilestones.shareAchievement')}
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Shareable Impact Cards */}
      <Card>
        <CardHeader title={t('gamificationImpactMilestones.shareableImpactCards')} />
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-4">
            {milestones.filter(m => m.earned).slice(0, 2).map((milestone) => (
              <div
                key={milestone.id}
                className="p-6 bg-gradient-to-br from-forest-500 to-amber-500 rounded-lg text-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <Heart className="w-8 h-8" />
                  <Badge variant="default" size="sm" className="bg-white/20 text-white border-white/30">
                    {t('gamificationImpactMilestones.milestone')}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">{milestone.name}</h3>
                <p className="text-lg mb-4">
                  {milestone.current.toLocaleString(locale)} {milestone.unit} {t('gamificationImpactMilestones.donated')}
                </p>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm opacity-90">{t('gamificationImpactMilestones.miraPlatform')}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-4">
            {t('gamificationImpactMilestones.eachMilestoneGenerates')}
          </p>
        </CardContent>
      </Card>

      {/* Impact Calculation Info */}
      <Card>
        <CardHeader title={t('gamificationImpactMilestones.impactMetricsCalculation')} />
        <CardContent className="p-6">
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-start gap-2">
              <TrendingUp className="w-4 h-4 text-forest-600 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">{t('gamificationImpactMilestones.kilogramsDonated')}</p>
                <p>{t('gamificationImpactMilestones.sumOfImpactKg')}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Heart className="w-4 h-4 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">{t('gamificationImpactMilestones.animalsFed')}</p>
                <p>{t('gamificationImpactMilestones.kgDonatedDividedBy')}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">{t('gamificationImpactMilestones.neuteringsFunded')}</p>
                <p>{t('gamificationImpactMilestones.aggregatedFundsDividedBy')}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Heart className="w-4 h-4 text-purple-600 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">{t('gamificationImpactMilestones.rescuesSupported')}</p>
                <p>{t('gamificationImpactMilestones.manualVerificationFromVETO')}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

