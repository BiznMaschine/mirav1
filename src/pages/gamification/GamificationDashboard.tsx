/**
 * GamificationDashboard Component
 * 
 * Complete personal gamification dashboard mockup showing:
 * - Level badge and XP progress
 * - Active streaks
 * - Recent badges
 * - Active challenges
 * - Multipliers
 * - Quick stats
 */

import { useTranslation } from 'react-i18next';
import { PageHeader, Card, CardHeader, CardContent, Badge, ProgressBar } from '@mira/ui';
import { LevelBadge, StreakIndicator, BadgeGrid, MultiplierIndicator } from '@mira/ui';
import { Flame, Award, Target, Zap, TrendingUp, Star, Trophy } from 'lucide-react';

export default function GamificationDashboard() {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <PageHeader
        title={t('gamificationDashboard.title')}
        subtitle={t('gamificationDashboard.subtitle')}
      />

      {/* Main Stats Row */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Level & XP */}
        <Card>
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                <div className="absolute inset-0 rounded-full border-4 border-forest-200"></div>
                <div className="absolute inset-0 rounded-full border-4 border-forest-600 border-t-transparent" style={{ transform: 'rotate(270deg)', clipPath: 'inset(0 0 18% 0)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-forest-700">12</span>
                </div>
              </div>
              <div className="flex-1 min-w-0 text-center sm:text-left w-full sm:w-auto">
                <LevelBadge level={12} title={t('gamificationDashboard.contributor')} />
                <p className="text-sm text-slate-600 mt-1 break-words">{t('gamificationDashboard.xpFormat', { current: '2,450', total: '3,000' })}</p>
                <ProgressBar value={82} variant="default" className="mt-2" />
              </div>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 text-center sm:text-left break-words">{t('gamificationDashboard.xpToNextLevel', { xp: 550 })}</p>
            </div>
          </CardContent>
        </Card>

        {/* Active Streaks */}
        <Card>
          <CardHeader title={t('gamificationDashboard.activeStreaks')} />
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center gap-3">
                  <Flame className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-semibold text-slate-900">{t('gamificationDashboard.days', { count: 23 })}</p>
                    <p className="text-xs text-slate-600">{t('gamification.multipliers.loginStreak')}</p>
                  </div>
                </div>
                <Badge variant="error" size="sm">{t('gamification.multipliers.status.active')}</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-amber-600" />
                  <div>
                    <p className="font-semibold text-slate-900">{t('gamificationDashboard.weeks', { count: 4 })}</p>
                    <p className="text-xs text-slate-600">{t('gamification.multipliers.salesStreak')}</p>
                  </div>
                </div>
                <Badge variant="warning" size="sm">{t('gamification.multipliers.status.active')}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Multipliers */}
        <Card>
          <CardHeader title={t('gamificationDashboard.activeMultipliers')} />
          <CardContent className="p-6">
            <div className="space-y-3">
              <MultiplierIndicator value={1.5} label={t('gamificationDashboard.loginStreak30Plus')} />
              <MultiplierIndicator value={1.1} label={t('gamificationDashboard.goldRankBonus')} />
              <div className="pt-2 border-t border-slate-200">
                <p className="text-xs text-slate-500">{t('gamificationDashboard.combined')}: 1.65x XP</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Badges */}
      <Card>
        <CardHeader title={t('gamificationDashboard.recentBadges')} />
        <CardContent className="p-6">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {[
              { id: '1', type: 'First Sale', rarity: 'common' as const },
              { id: '2', type: 'Team Builder', rarity: 'uncommon' as const },
              { id: '3', type: 'Gold Rank', rarity: 'rare' as const },
              { id: '4', type: '7-Day Streak', rarity: 'common' as const },
              { id: '5', type: 'Top Performer', rarity: 'epic' as const },
              { id: '6', type: 'Impact Hero', rarity: 'legendary' as const },
            ].map((badge) => (
              <div
                key={badge.id}
                className={`aspect-square rounded-lg border-2 flex items-center justify-center ${
                  badge.rarity === 'common' ? 'bg-slate-100 border-slate-300' :
                  badge.rarity === 'uncommon' ? 'bg-forest-100 border-forest-300' :
                  badge.rarity === 'rare' ? 'bg-blue-100 border-blue-300' :
                  badge.rarity === 'epic' ? 'bg-purple-100 border-purple-300' :
                  'bg-amber-100 border-amber-300'
                }`}
              >
                <Trophy className={`w-6 h-6 ${
                  badge.rarity === 'common' ? 'text-slate-400' :
                  badge.rarity === 'uncommon' ? 'text-forest-600' :
                  badge.rarity === 'rare' ? 'text-blue-600' :
                  badge.rarity === 'epic' ? 'text-purple-600' :
                  'text-amber-600'
                }`} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Challenges */}
      <Card>
        <CardHeader title={t('gamificationDashboard.activeChallenges')} />
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-900">{t('gamificationDashboard.winterImpactChallenge')}</h4>
                <Badge variant="default" size="sm">{t('gamificationDashboard.weekly')}</Badge>
              </div>
              <p className="text-sm text-slate-600 mb-3">{t('gamificationDashboard.reach50kgImpact')}</p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>32 / 50 kg</span>
                  <span>64%</span>
                </div>
                <ProgressBar value={64} variant="default" />
              </div>
              <p className="text-xs text-slate-500 mt-2">{t('gamificationDashboard.reward')}: 500 XP + {t('gamification.badge')}</p>
            </div>

            <div className="p-4 bg-forest-50 rounded-lg border border-forest-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-900">{t('gamificationDashboard.firstRecruit')}</h4>
                <Badge variant="primary" size="sm">{t('gamificationDashboard.personal')}</Badge>
              </div>
              <p className="text-sm text-slate-600 mb-3">{t('gamificationDashboard.recruitFirstReseller')}</p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-600">
                  <span>0 / 1</span>
                  <span>0%</span>
                </div>
                <ProgressBar value={0} variant="default" />
              </div>
              <p className="text-xs text-slate-500 mt-2">{t('gamificationDashboard.reward')}: {t('gamification.badge')} + 100 XP</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="w-8 h-8 text-forest-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">2,450</p>
            <p className="text-xs text-slate-600">{t('gamificationDashboard.totalXP')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">6</p>
            <p className="text-xs text-slate-600">{t('gamificationDashboard.badgesEarned')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Flame className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">23</p>
            <p className="text-xs text-slate-600">{t('gamificationDashboard.dayStreak')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">2</p>
            <p className="text-xs text-slate-600">{t('gamificationDashboard.activeChallengesCount')}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

