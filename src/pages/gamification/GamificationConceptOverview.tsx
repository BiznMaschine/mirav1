/**
 * GamificationConceptOverview Component
 * 
 * Main showcase page explaining the gamification system:
 * - Concept and philosophy
 * - Architecture and solution approach
 * - All visual elements and components
 */

import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardContent, Badge, ProgressBar } from '@mira/ui';
import { 
  Flame, 
  Award, 
  Target, 
  TrendingUp, 
  Zap, 
  Trophy, 
  Star,
  Gift,
  Users,
  Heart,
  Sparkles,
  BarChart3,
  Crown,
  Shield,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Layers,
  Activity,
  Bell
} from 'lucide-react';

export default function GamificationConceptOverview() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-forest-500 to-amber-500 mb-4">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900">{t('gamificationConceptOverview.title')}</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('gamificationConceptOverview.subtitle')}
          </p>
        </div>

        {/* Core Philosophy */}
        <Card>
          <CardHeader title={t('gamificationConceptOverview.designPhilosophy')} />
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-forest-50 border border-forest-200">
                <Heart className="w-12 h-12 text-forest-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">{t('gamificationConceptOverview.impactCentered')}</h3>
                <p className="text-sm text-slate-600">
                  {t('gamificationConceptOverview.impactCenteredDesc')}
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-amber-50 border border-amber-200">
                <TrendingUp className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">{t('gamificationConceptOverview.progressiveMastery')}</h3>
                <p className="text-sm text-slate-600">
                  {t('gamificationConceptOverview.progressiveMasteryDesc')}
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-blue-50 border border-blue-200">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">{t('gamificationConceptOverview.transparentFair')}</h3>
                <p className="text-sm text-slate-600">
                  {t('gamificationConceptOverview.transparentFairDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Architecture Visualization */}
        <Card>
          <CardHeader title={t('gamificationConceptOverview.architecture')} />
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-forest-50 to-amber-50 p-6 rounded-lg border-2 border-forest-200">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-6 h-6 text-forest-600" />
                  <h3 className="font-semibold text-slate-900">{t('gamificationConceptOverview.gamificationLayer')}</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  {t('gamificationConceptOverview.operatesAcrossAllPillars')}
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-5 h-5 text-forest-600" />
                      <span className="font-medium text-sm">{t('gamificationConceptOverview.dashboard')}</span>
                    </div>
                    <p className="text-xs text-slate-600">{t('gamificationConceptOverview.xpCountersBadgesStreaks')}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-5 h-5 text-amber-600" />
                      <span className="font-medium text-sm">{t('gamificationConceptOverview.parametrizationEngine')}</span>
                    </div>
                    <p className="text-xs text-slate-600">{t('gamificationConceptOverview.xpRulesBadgeCriteria')}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-sm">{t('gamificationConceptOverview.apiLayer')}</span>
                    </div>
                    <p className="text-xs text-slate-600">{t('gamificationConceptOverview.eventsNotificationsWebSocket')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <ArrowRight className="w-5 h-5 text-slate-600" />
                  <span className="font-medium text-sm text-slate-700">{t('gamificationConceptOverview.eventDrivenFlow')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 flex-wrap">
                  <span className="px-3 py-1 bg-white rounded border">order.paid</span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="px-3 py-1 bg-white rounded border">Gamification Service</span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="px-3 py-1 bg-white rounded border">BullMQ Queue</span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="px-3 py-1 bg-white rounded border">xp.awarded</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seven Gamification Components */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('gamificationConceptOverview.sevenGamificationComponents')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* XP & Levels */}
            <Card className="border-2 border-forest-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-forest-100 flex items-center justify-center">
                    <Star className="w-6 h-6 text-forest-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t('gamificationConceptOverview.xpLevels')}</h3>
                    <p className="text-xs text-slate-500">{t('gamificationConceptOverview.experiencePointsSystem')}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{t('gamificationConceptOverview.currentLevel')}</span>
                    <Badge variant="primary" size="sm">Level 12</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>2,450 / 3,000 XP</span>
                      <span>82%</span>
                    </div>
                    <ProgressBar value={82} variant="default" />
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <p className="text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 inline mr-1" />
                      {t('gamificationConceptOverview.actionXpMapping')}
                    </p>
                    <p className="text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 inline mr-1" />
                      {t('gamificationConceptOverview.levelThresholds')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card className="border-2 border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t('gamification.badge')}s</h3>
                    <p className="text-xs text-slate-500">{t('gamificationConceptOverview.achievementSystem')}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-4 gap-2">
                    <div className="aspect-square rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-slate-400" />
                    </div>
                    <div className="aspect-square rounded-lg bg-forest-100 border border-forest-300 flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-forest-600" />
                    </div>
                    <div className="aspect-square rounded-lg bg-blue-100 border border-blue-300 flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="aspect-square rounded-lg bg-purple-100 border border-purple-300 flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-purple-600" />
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <p className="text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 inline mr-1" />
                      {t('gamificationConceptOverview.rarityLevels')}
                    </p>
                    <p className="text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 inline mr-1" />
                      {t('gamificationConceptOverview.criteriaBasedAwards')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Streaks */}
            <Card className="border-2 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                    <Flame className="w-6 h-6 text-red-600 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t('gamification.streak')}s</h3>
                    <p className="text-xs text-slate-500">{t('gamificationConceptOverview.consistencyRewards')}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                    <Flame className="w-8 h-8 text-red-600" />
                    <div>
                      <p className="text-2xl font-bold text-slate-900">23</p>
                      <p className="text-xs text-slate-600">Day Login Streak</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <p className="text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 inline mr-1" />
                      {t('gamificationConceptOverview.gracePeriodsFreezeTokens')}
                    </p>
                    <p className="text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 inline mr-1" />
                      {t('gamificationConceptOverview.milestoneMultipliers')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card className="border-2 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t('gamification.challenge')}s</h3>
                    <p className="text-xs text-slate-500">{t('gamificationConceptOverview.timeBoundGoals')}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-sm font-medium text-slate-900 mb-2">Winter Impact Challenge</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-600">
                        <span>32 / 50 kg</span>
                        <span>64%</span>
                      </div>
                      <ProgressBar value={64} variant="default" />
                    </div>
                    <p className="text-xs text-slate-500 mt-2">{t('gamificationChallenges.reward')}: 500 {t('gamification.xp')} + {t('gamification.badge')}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <p className="text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 inline mr-1" />
                      {t('gamificationConceptOverview.personalWeeklyCommunity')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Milestones */}
            <Card className="border-2 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t('gamification.milestone')}s</h3>
                    <p className="text-xs text-slate-500">{t('gamificationConceptOverview.animalWelfareImpact')}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-900">Life Saver</span>
                      <Badge variant="success" size="sm">500 kg</Badge>
                    </div>
                    <p className="text-xs text-slate-600">You've helped feed 500+ animals</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <p className="text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 inline mr-1" />
                      {t('gamificationConceptOverview.realWorldImpactTracking')}
                    </p>
                    <p className="text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 inline mr-1" />
                      {t('gamificationConceptOverview.shareableImpactCards')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Multipliers */}
            <Card className="border-2 border-amber-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t('gamification.multipliers.title')}</h3>
                    <p className="text-xs text-slate-500">{t('gamificationConceptOverview.xpCommissionBoosts')}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-900">{t('gamification.multipliers.activeMultipliers')}</p>
                        <p className="text-xs text-slate-600">Login Streak 30+</p>
                      </div>
                      <div className="text-2xl font-bold text-amber-700">1.5x</div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <p className="text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 inline mr-1" />
                      {t('gamificationConceptOverview.stackableBonuses')}
                    </p>
                    <p className="text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 inline mr-1" />
                      {t('gamificationConceptOverview.streakRankCampaignBased')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="border-2 border-blue-200 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Bell className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t('gamification.notifications.title')}</h3>
                    <p className="text-xs text-slate-500">{t('gamificationConceptOverview.engagementAlerts')}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="p-2 bg-blue-50 rounded border border-blue-200 text-xs">
                      <p className="font-medium text-slate-900">🎉 Badge earned!</p>
                      <p className="text-slate-600">You've unlocked "First Sale"</p>
                    </div>
                    <div className="p-2 bg-blue-50 rounded border border-blue-200 text-xs">
                      <p className="font-medium text-slate-900">🔥 Streak milestone!</p>
                      <p className="text-slate-600">30-day streak achieved</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <p className="text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 inline mr-1" />
                      {t('gamificationConceptOverview.pushEmailInApp')}
                    </p>
                    <p className="text-xs text-slate-500">
                      <CheckCircle2 className="w-3 h-3 inline mr-1" />
                      {t('gamificationConceptOverview.quietHoursThrottling')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Visual Elements Showcase */}
        <Card>
          <CardHeader title={t('gamificationConceptOverview.visualElementsIcons')} />
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-forest-100 flex items-center justify-center">
                  <Star className="w-8 h-8 text-forest-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">XP & Levels</p>
                <p className="text-xs text-slate-500">Star, TrendingUp</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-100 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-amber-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">Badges</p>
                <p className="text-xs text-slate-500">Trophy, Award</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-red-100 flex items-center justify-center">
                  <Flame className="w-8 h-8 text-red-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">Streaks</p>
                <p className="text-xs text-slate-500">Flame</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">Challenges</p>
                <p className="text-xs text-slate-500">Target</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">Impact</p>
                <p className="text-xs text-slate-500">Heart</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-100 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-amber-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">Multipliers</p>
                <p className="text-xs text-slate-500">Zap</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center">
                  <Crown className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">Ranks</p>
                <p className="text-xs text-slate-500">Crown</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-slate-100 flex items-center justify-center">
                  <Users className="w-8 h-8 text-slate-600" />
                </div>
                <p className="text-sm font-medium text-slate-900">Leaderboards</p>
                <p className="text-xs text-slate-500">Users, BarChart3</p>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Rarity System */}
        <Card>
          <CardHeader title={t('gamificationConceptOverview.badgeRaritySystem')} />
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { name: 'Common', color: 'slate', percentage: '80%+', multiplier: '1.0x' },
                { name: 'Uncommon', color: 'forest', percentage: '40-80%', multiplier: '1.1x' },
                { name: 'Rare', color: 'blue', percentage: '15-40%', multiplier: '1.2x' },
                { name: 'Epic', color: 'purple', percentage: '5-15%', multiplier: '1.3x' },
                { name: 'Legendary', color: 'amber', percentage: '<5%', multiplier: '1.5x' },
              ].map((rarity) => (
                <div 
                  key={rarity.name}
                  className={`p-4 rounded-lg border-2 bg-${rarity.color}-50 border-${rarity.color}-200 text-center`}
                >
                  <Trophy className={`w-8 h-8 text-${rarity.color}-600 mx-auto mb-2`} />
                  <p className="font-semibold text-slate-900 mb-1">{rarity.name}</p>
                  <p className="text-xs text-slate-600 mb-1">{rarity.percentage} {t('gamificationConceptOverview.users')}</p>
                  <Badge variant={rarity.color === 'slate' ? 'default' : rarity.color === 'forest' ? 'primary' : rarity.color === 'blue' ? 'info' : rarity.color === 'purple' ? 'default' : 'warning'} size="sm">
                    {rarity.multiplier}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card>
          <CardHeader title={t('gamificationConceptOverview.keyFeaturesRules')} />
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  {t('gamificationConceptOverview.whatWeDo')}
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <Rocket className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                    <span>{t('gamificationConceptOverview.eventDrivenAsync')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                    <span>{t('gamificationConceptOverview.configurableXpAwards')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                    <span>{t('gamificationConceptOverview.crossCuttingIntegration')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Rocket className="w-4 h-4 text-forest-600 mt-0.5 flex-shrink-0" />
                    <span>{t('gamificationConceptOverview.impactCenteredRewards')}</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  {t('gamificationConceptOverview.whatWeAvoid')}
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span>{t('gamificationConceptOverview.payToWinMechanics')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span>{t('gamificationConceptOverview.artificialScarcityPressure')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span>{t('gamificationConceptOverview.darkPatterns')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span>{t('gamificationConceptOverview.hiddenModifiers')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

