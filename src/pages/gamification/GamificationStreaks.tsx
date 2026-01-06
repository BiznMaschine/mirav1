/**
 * GamificationStreaks Component
 * 
 * Streak system showcase:
 * - Login streak
 * - Sales streak
 * - Impact streak
 * - Streak milestones
 * - Grace periods
 * - Freeze tokens
 */

import { useTranslation } from 'react-i18next';
import { PageHeader, Card, CardHeader, CardContent, Badge, ProgressBar } from '@mira/ui';
import { Flame, Calendar, TrendingUp, Heart, Shield, Gift } from 'lucide-react';

export default function GamificationStreaks() {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <PageHeader
        title={t('gamificationStreaks.title')}
        subtitle={t('gamificationStreaks.subtitle')}
      />

      {/* Active Streaks */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Login Streak */}
        <Card className="border-2 border-red-200">
          <CardHeader title={t('gamificationStreaks.loginStreak')} />
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-3">
                <Flame className="w-10 h-10 text-red-600 animate-pulse" />
              </div>
              <p className="text-4xl font-bold text-slate-900">23</p>
              <p className="text-sm text-slate-600">{t('gamificationStreaks.days')}</p>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <p className="text-xs font-medium text-slate-900 mb-1">{t('gamificationStreaks.nextMilestone')}</p>
                <p className="text-sm text-slate-600">30 days → 1.5x XP multiplier</p>
                <ProgressBar value={77} variant="default" className="mt-2" />
                <p className="text-xs text-slate-500 mt-1">{t('gamificationStreaks.daysRemaining', { days: 7 })}</p>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">{t('gamificationStreaks.gracePeriod')}</span>
                  <span className="font-medium text-slate-900">24 hours</span>
                </div>
                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-slate-600">{t('gamificationStreaks.freezeTokens')}</span>
                  <span className="font-medium text-slate-900">2 {t('gamificationStreaks.available')}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sales Streak */}
        <Card className="border-2 border-amber-200">
          <CardHeader title={t('gamificationStreaks.salesStreak')} />
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-3">
                <TrendingUp className="w-10 h-10 text-amber-600" />
              </div>
              <p className="text-4xl font-bold text-slate-900">4</p>
              <p className="text-sm text-slate-600">{t('gamificationStreaks.weeks')}</p>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-xs font-medium text-slate-900 mb-1">{t('gamificationStreaks.nextMilestone')}</p>
                <p className="text-sm text-slate-600">8 weeks → 1.2x Commission</p>
                <ProgressBar value={50} variant="default" className="mt-2" />
                <p className="text-xs text-slate-500 mt-1">{t('gamificationStreaks.weeksRemaining', { weeks: 4 })}</p>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">{t('gamificationStreaks.gracePeriod')}</span>
                  <span className="font-medium text-slate-900">1 week</span>
                </div>
                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-slate-600">{t('gamificationStreaks.freezeTokens')}</span>
                  <span className="font-medium text-slate-900">1 {t('gamificationStreaks.available')}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Streak */}
        <Card className="border-2 border-green-200">
          <CardHeader title={t('gamificationStreaks.impactStreak')} />
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-3">
                <Heart className="w-10 h-10 text-green-600" />
              </div>
              <p className="text-4xl font-bold text-slate-900">2</p>
              <p className="text-sm text-slate-600">{t('gamificationStreaks.months')}</p>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-xs font-medium text-slate-900 mb-1">Current Goal</p>
                <p className="text-sm text-slate-600">10kg impact this month</p>
                <ProgressBar value={80} variant="default" className="mt-2" />
                <p className="text-xs text-slate-500 mt-1">8kg achieved</p>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">{t('gamificationStreaks.gracePeriod')}</span>
                  <span className="font-medium text-slate-900">None</span>
                </div>
                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-slate-600">{t('gamificationStreaks.freezeTokens')}</span>
                  <span className="font-medium text-slate-900">Not available</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Streak Milestones */}
      <Card>
        <CardHeader title={t('gamificationStreaks.streakMilestones')} />
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Flame className="w-5 h-5 text-red-600" />
                Login Streak Milestones
              </h4>
              <div className="space-y-2">
                {[
                  { days: 7, reward: '1.2x XP multiplier', earned: true },
                  { days: 30, reward: '1.5x XP multiplier + 1 freeze token', earned: false },
                  { days: 90, reward: '2.0x XP multiplier + 2 freeze tokens', earned: false },
                ].map((milestone) => (
                  <div
                    key={milestone.days}
                    className={`p-3 rounded-lg border ${
                      milestone.earned
                        ? 'bg-green-50 border-green-200'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-900">{milestone.days} Days</p>
                        <p className="text-xs text-slate-600">{milestone.reward}</p>
                      </div>
                      {milestone.earned && <Badge variant="success" size="sm">Earned</Badge>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                Sales Streak Milestones
              </h4>
              <div className="space-y-2">
                {[
                  { weeks: 4, reward: '1.1x Commission multiplier', earned: true },
                  { weeks: 8, reward: '1.2x Commission multiplier + 1 freeze token', earned: false },
                  { weeks: 12, reward: '1.3x Commission multiplier', earned: false },
                ].map((milestone) => (
                  <div
                    key={milestone.weeks}
                    className={`p-3 rounded-lg border ${
                      milestone.earned
                        ? 'bg-green-50 border-green-200'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-900">{milestone.weeks} Weeks</p>
                        <p className="text-xs text-slate-600">{milestone.reward}</p>
                      </div>
                      {milestone.earned && <Badge variant="success" size="sm">Earned</Badge>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grace Periods & Freeze Tokens */}
      <Card>
        <CardHeader title="Grace Periods & Freeze Tokens" />
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                How Grace Periods Work
              </h4>
              <div className="space-y-2 text-sm text-slate-600">
                <p>• Login streak: 24-hour grace period</p>
                <p>• Sales streak: 1-week grace period</p>
                <p>• Impact streak: No grace period (monthly reset)</p>
                <p>• Grace period starts when you miss a day</p>
                <p>• Streak continues if you resume within grace period</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Gift className="w-5 h-5 text-purple-600" />
                Freeze Tokens
              </h4>
              <div className="space-y-2 text-sm text-slate-600">
                <p>• Consumable to preserve streak for one missed period</p>
                <p>• Automatically consumed when period is missed</p>
                <p>• Maximum 5 freeze tokens per streak type</p>
                <p>• Earned at milestone achievements (30-day, 8-week)</p>
                <p>• Tokens do not expire</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

