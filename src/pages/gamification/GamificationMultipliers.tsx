/**
 * GamificationMultipliers Component
 * 
 * Multiplier system showcase:
 * - Active multipliers
 * - Multiplier types
 * - Stacking rules
 * - Multiplier history
 */

import { useTranslation } from 'react-i18next';
import { PageHeader, Card, CardHeader, CardContent, Badge, MultiplierIndicator } from '@mira/ui';
import { Zap, Flame, Crown, Calendar, Clock, TrendingUp, Info } from 'lucide-react';

export default function GamificationMultipliers() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'de' ? 'de-DE' : 'en-GB';
  
  return (
    <div className="space-y-6">
      <PageHeader
        title={t('gamification.multipliers.title')}
        subtitle={t('gamification.multipliers.subtitle')}
      />

      {/* Active Multipliers */}
      <Card>
        <CardHeader title={t('gamification.multipliers.activeMultipliers')} />
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Flame className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-semibold text-slate-900">{t('gamification.multipliers.loginStreak')} 30+</p>
                    <p className="text-xs text-slate-600">{t('gamification.multipliers.streakMultiplier')}</p>
                  </div>
                </div>
                <MultiplierIndicator value={1.5} label={t('gamification.multipliers.xpMultiplier')} />
              </div>
              <div className="pt-3 border-t border-amber-200">
                <p className="text-xs text-slate-600">
                  {t('gamification.multipliers.activeSince')} {new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString(locale)}
                </p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Crown className="w-6 h-6 text-amber-600" />
                  <div>
                    <p className="font-semibold text-slate-900">{t('gamification.multipliers.rankMultiplier')} - Gold</p>
                    <p className="text-xs text-slate-600">{t('gamification.multipliers.rankMultiplier')}</p>
                  </div>
                </div>
                <MultiplierIndicator value={1.1} label={t('gamification.multipliers.commissionMultiplier')} />
              </div>
              <div className="pt-3 border-t border-blue-200">
                <p className="text-xs text-slate-600">
                  {t('gamification.multipliers.activeSince')} {new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toLocaleDateString(locale)}
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{t('gamification.multipliers.combinedEffect')}</p>
                  <p className="text-xs text-slate-600">XP: 1.5x | {t('gamification.multipliers.commissionMultiplier')}: 1.1x</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-forest-600">1.65x</p>
                  <p className="text-xs text-slate-500">{t('gamification.multipliers.effectiveXP')}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Multiplier Types */}
      <Card>
        <CardHeader title={t('gamification.multipliers.multiplierTypes')} />
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-slate-900">{t('gamification.multipliers.streakMultipliers')}</h4>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                {t('gamification.multipliers.earnedThrough')} {t('gamification.multipliers.maintainingConsistentStreaks', 'maintaining consistent activity streaks')}
              </p>
              <div className="space-y-1 text-xs text-slate-600">
                <p>• {t('gamification.multipliers.loginStreak')} 7+ → 1.2x XP</p>
                <p>• {t('gamification.multipliers.loginStreak')} 30+ → 1.5x XP</p>
                <p>• {t('gamification.multipliers.salesStreak')} 8+ → 1.2x {t('gamification.multipliers.commissionMultiplier')}</p>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-5 h-5 text-amber-600" />
                <h4 className="font-semibold text-slate-900">{t('gamification.multipliers.rankMultipliers')}</h4>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                {t('gamification.multipliers.unlockedWhenAchieving')}
              </p>
              <div className="space-y-1 text-xs text-slate-600">
                <p>• Gold {t('gamification.rank')} → 1.1x {t('gamification.multipliers.commissionMultiplier')}</p>
                <p>• Diamond {t('gamification.rank')} → 1.2x {t('gamification.multipliers.commissionMultiplier')}</p>
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-slate-900">{t('gamification.multipliers.campaignMultipliers')}</h4>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                {t('gamification.multipliers.timeLimitedBonuses')}
              </p>
              <div className="space-y-1 text-xs text-slate-600">
                <p>• Launch Week → 3.0x (both)</p>
                <p>• Winter Campaign → 1.5x XP</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-slate-900">{t('gamification.multipliers.timeBasedMultipliers')}</h4>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                {t('gamification.multipliers.bonusesAvailableDuring')}
              </p>
              <div className="space-y-1 text-xs text-slate-600">
                <p>• {t('gamification.multipliers.weekendBonus')} → 2.0x XP</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stacking Rules */}
      <Card>
        <CardHeader title={t('gamification.multipliers.stackingRules')} />
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">{t('gamification.multipliers.howMultipliersStack')}</h4>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• {t('gamification.multipliers.multipliersSortedByPriority')}</li>
                    <li>• {t('gamification.multipliers.ifStackableTrue')}</li>
                    <li>• {t('gamification.multipliers.ifStackableFalse')}</li>
                    <li>• {t('gamification.multipliers.sameSourceMultipliers')}</li>
                    <li>• {t('gamification.multipliers.maximumEffectiveMultiplier')}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 bg-forest-50 rounded-lg border border-forest-200">
              <h4 className="font-semibold text-slate-900 mb-3">{t('gamification.multipliers.exampleCalculation')}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">{t('gamification.multipliers.baseXP')} ({t('gamification.multipliers.customerAcquired')})</span>
                  <span className="font-medium text-slate-900">50 XP</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">{t('gamification.multipliers.loginStreak')} 30+ (1.5x)</span>
                  <span className="font-medium text-slate-900">× 1.5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">{t('gamification.multipliers.weekendBonus')} (2.0x)</span>
                  <span className="font-medium text-slate-900">× 2.0</span>
                </div>
                <div className="pt-2 border-t border-forest-200 flex items-center justify-between">
                  <span className="font-semibold text-slate-900">{t('gamification.multipliers.effectiveXP')}</span>
                  <span className="font-bold text-forest-600">150 XP</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Multiplier History */}
      <Card>
        <CardHeader title={t('gamification.multipliers.recentHistory')} />
        <CardContent className="p-6">
          <div className="space-y-3">
            {[
              { name: 'Login Streak 30+', type: 'Streak', value: '1.5x XP', date: '7 days ago', status: 'active' },
              { name: 'Gold Rank Bonus', type: 'Rank', value: '1.1x Commission', date: '30 days ago', status: 'active' },
              { name: 'Weekend Bonus', type: 'Time', value: '2.0x XP', date: '2 days ago', status: 'expired' },
              { name: 'Login Streak 7+', type: 'Streak', value: '1.2x XP', date: '45 days ago', status: 'expired' },
            ].map((multiplier, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border ${
                  multiplier.status === 'active'
                    ? 'bg-green-50 border-green-200'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">{multiplier.name}</p>
                    <p className="text-xs text-slate-600">{multiplier.type} • {multiplier.value}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={multiplier.status === 'active' ? 'success' : 'default'} size="sm">
                      {t(`gamification.multipliers.status.${multiplier.status}`)}
                    </Badge>
                    <p className="text-xs text-slate-500 mt-1">{multiplier.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

