/**
 * GamificationChallenges Component
 * 
 * Showcase challenge system:
 * - Personal challenges
 * - Weekly challenges
 * - Stretch challenges
 * - Community challenges
 */

import { useTranslation } from 'react-i18next';
import { PageHeader, Card, CardHeader, CardContent, Badge, ProgressBar, Button } from '@mira/ui';
import { Target, Calendar, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function GamificationChallenges() {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <PageHeader
        title={t('gamificationChallenges.title')}
        subtitle={t('gamificationChallenges.subtitle')}
      />

      {/* Personal Challenges */}
      <Card>
        <CardHeader title={t('gamificationChallenges.personalChallenges')} />
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-forest-50 rounded-lg border border-forest-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-forest-600" />
                  <h4 className="font-semibold text-slate-900">First Sale</h4>
                </div>
                <Badge variant="primary" size="sm">{t('gamificationChallenges.easy')}</Badge>
              </div>
              <p className="text-sm text-slate-600 mb-3">Complete your first order</p>
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>0 / 1</span>
                  <span>0%</span>
                </div>
                <ProgressBar value={0} variant="default" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">{t('gamificationChallenges.reward')}: {t('gamification.badge')} + 50 {t('gamification.xp')}</p>
                <Button size="sm" variant="primary">{t('gamificationChallenges.join')}</Button>
              </div>
            </div>

            <div className="p-4 bg-forest-50 rounded-lg border border-forest-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-forest-600" />
                  <h4 className="font-semibold text-slate-900">First Recruit</h4>
                </div>
                <Badge variant="primary" size="sm">{t('gamificationChallenges.easy')}</Badge>
              </div>
              <p className="text-sm text-slate-600 mb-3">Recruit your first reseller</p>
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>0 / 1</span>
                  <span>0%</span>
                </div>
                <ProgressBar value={0} variant="default" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">{t('gamificationChallenges.reward')}: {t('gamification.badge')} + 100 {t('gamification.xp')}</p>
                <Button size="sm" variant="primary">{t('gamificationChallenges.join')}</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Challenges */}
      <Card>
        <CardHeader title={t('gamificationChallenges.weeklyChallenges')} />
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-900">Impact Week</h4>
                </div>
                <Badge variant="default" size="sm">{t('gamificationChallenges.medium')}</Badge>
              </div>
              <p className="text-sm text-slate-600 mb-3">Reach 100kg impact this week</p>
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>32 / 100 kg</span>
                  <span>32%</span>
                </div>
                <ProgressBar value={32} variant="default" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">{t('gamificationChallenges.reward')}: 500 {t('gamification.xp')}</p>
                <Badge variant="success" size="sm">{t('gamificationChallenges.active')}</Badge>
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-slate-900">Retention Champion</h4>
                </div>
                <Badge variant="default" size="sm">{t('gamificationChallenges.medium')}</Badge>
              </div>
              <p className="text-sm text-slate-600 mb-3">100% retention rate this week</p>
              <div className="space-y-1 mb-3">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>8 / 10</span>
                  <span>80%</span>
                </div>
                <ProgressBar value={80} variant="default" />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500">{t('gamificationChallenges.reward')}: 300 {t('gamification.xp')}</p>
                <Badge variant="success" size="sm">{t('gamificationChallenges.active')}</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stretch Challenges */}
      <Card>
        <CardHeader title={t('gamificationChallenges.stretchChallenges')} />
        <CardContent className="p-6">
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                <h4 className="font-semibold text-slate-900">Double Your Best</h4>
              </div>
              <Badge variant="warning" size="sm">{t('gamificationChallenges.hard')}</Badge>
            </div>
            <p className="text-sm text-slate-600 mb-3">Achieve 2x your best monthly sales</p>
            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-slate-600">
                <span>€1,200 / €2,000</span>
                <span>60%</span>
              </div>
              <ProgressBar value={60} variant="default" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">{t('gamificationChallenges.reward')}: {t('gamification.badge')} + 1,000 {t('gamification.xp')}</p>
              <Badge variant="success" size="sm">{t('gamificationChallenges.active')}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Community Challenges */}
      <Card>
        <CardHeader title={t('gamificationChallenges.communityChallenges')} />
        <CardContent className="p-6">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-slate-900">Winter Shelter Drive</h4>
              </div>
              <Badge variant="info" size="sm">{t('gamificationChallenges.community')}</Badge>
            </div>
            <p className="text-sm text-slate-600 mb-3">Community goal: 50,000kg impact</p>
            <div className="space-y-1 mb-3">
              <div className="flex justify-between text-xs text-slate-600">
                <span>32,450 / 50,000 kg</span>
                <span>65%</span>
              </div>
              <ProgressBar value={65} variant="default" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">{t('gamificationChallenges.reward')}: Special {t('gamification.badge')} for all participants</p>
              <Badge variant="success" size="sm">{t('gamificationChallenges.active')}</Badge>
            </div>
            <div className="mt-3 pt-3 border-t border-blue-200">
              <p className="text-xs text-slate-600">1,234 participants</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Completed Challenges */}
      <Card>
        <CardHeader title={t('gamificationChallenges.completedChallenges')} />
        <CardContent className="p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <div className="flex-1">
                <p className="font-medium text-slate-900">First Sale</p>
                <p className="text-xs text-slate-600">{t('gamificationChallenges.completedAgo', { weeks: 2 })}</p>
              </div>
              <Badge variant="success" size="sm">{t('gamificationChallenges.completed')}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

