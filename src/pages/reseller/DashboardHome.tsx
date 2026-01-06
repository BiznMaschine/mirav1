import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHeader, Card, Button, Badge, TabGroup, TabList, TabTrigger, TabContent } from '@mira/ui';
import { RankTracker, LeaderboardCard, EarningsTile, ImpactCounter } from '@mira/ui';
import HeroSection from '../../components/HeroSection';
import ImpactJourneyTimeline from '../../components/ImpactJourneyTimeline';
import ImpactJourneyVolume from '../../components/ImpactJourneyVolume';
import ImpactJourneyCharts from '../../components/ImpactJourneyCharts';
import HeroBoard from '../../components/HeroBoard';
import ResellerGamificationWidget from '../../components/ResellerGamificationWidget';
import YourShelterWidget from '../../components/YourShelterWidget';
import CampaignBanner from '../../components/CampaignBanner';
import { currentReseller, mockLeaderboard, currentResellerShelter, activeCampaign } from '../../data/mockData';
import { Shield, Trophy, ArrowRight, TrendingUp, Users, Euro, Sparkles } from 'lucide-react';

type ImpactVariant = 'default' | 'timeline' | 'volume' | 'charts';

export default function DashboardHome() {
  const { t, i18n } = useTranslation();
  const [impactVariant, setImpactVariant] = useState<ImpactVariant>('default');
  const locale = i18n.language === 'de' ? 'de-DE' : 'en-GB';

  return (
    <div>
      <PageHeader
        title={t('reseller.dashboard.welcome', { name: currentReseller.name })}
        subtitle={`🔥 ${t('reseller.dashboard.streak', { days: currentReseller.streak.current })}`}
      />

      {/* Gamification Widget */}
      <ResellerGamificationWidget
        level={12}
        xp={2450}
        xpToNextLevel={3000}
        streak={currentReseller.streak.current}
        badgeCount={currentReseller.badges.length}
        totalBadges={15}
        activeChallenge={{
          name: t('gamificationDashboard.winterImpact'),
          progress: 65,
          current: 32,
          goal: 50,
        }}
        className="mb-6"
      />

      {/* Campaign Banner */}
      {activeCampaign && (
        <CampaignBanner
          campaign={activeCampaign}
          userContributionKg={currentReseller.impact.foodKg}
          className="mb-6"
        />
      )}

      {/* Your Shelter Widget */}
      <YourShelterWidget
        shelter={currentResellerShelter}
        userImpactKg={currentReseller.impact.foodKg}
        className="mb-6"
      />

      {/* Impact Journey Variant Selector */}
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
          <h3 className="text-lg font-semibold text-slate-900">{t('reseller.dashboard.impact')}</h3>
        </div>
        <TabGroup value={impactVariant} onValueChange={(value) => setImpactVariant(value as ImpactVariant)}>
          <TabList className="w-full sm:w-auto">
            <TabTrigger value="default">{t('reseller.dashboard.impactVariants.default')}</TabTrigger>
            <TabTrigger value="timeline">{t('reseller.dashboard.impactVariants.timeline')}</TabTrigger>
            <TabTrigger value="volume">{t('reseller.dashboard.impactVariants.volume')}</TabTrigger>
            <TabTrigger value="charts">{t('reseller.dashboard.impactVariants.charts')}</TabTrigger>
          </TabList>
          <TabContent value="default">
            <HeroSection
              impact={currentReseller.impact}
              shelter={currentResellerShelter}
              className="mb-6"
            />
          </TabContent>
          <TabContent value="timeline">
            <ImpactJourneyTimeline
              impact={currentReseller.impact}
              className="mb-6"
            />
          </TabContent>
          <TabContent value="volume">
            <ImpactJourneyVolume
              impact={currentReseller.impact}
              className="mb-6"
            />
          </TabContent>
          <TabContent value="charts">
            <ImpactJourneyCharts
              impact={currentReseller.impact}
              className="mb-6"
            />
          </TabContent>
        </TabGroup>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <div>
            <p className="text-sm text-slate-600 mb-1">{t('reseller.dashboard.thisMonth')}</p>
            <p className="text-2xl font-bold text-slate-900">€{currentReseller.earnings.thisMonth.toFixed(2)}</p>
            <p className="text-xs text-green-600 mt-1">
              ↑ {((currentReseller.earnings.thisMonth / currentReseller.earnings.lastMonth - 1) * 100).toFixed(1)}%
            </p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600 mb-1">{t('reseller.dashboard.teamSize')}</p>
            <p className="text-2xl font-bold text-slate-900">{currentReseller.teamSize}</p>
            <p className="text-xs text-green-600 mt-1">↑ 3 new</p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600 mb-1">{t('reseller.dashboard.foodGiven')}</p>
            <p className="text-2xl font-bold text-slate-900">{currentReseller.impact.foodKg.toLocaleString(locale)} kg</p>
            <p className="text-xs text-green-600 mt-1">↑ 15%</p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600 mb-1">{t('reseller.dashboard.rank')}</p>
            <p className="text-2xl font-bold text-slate-900">{currentReseller.rank}</p>
            <p className="text-xs text-forest-600 mt-1">{t('reseller.dashboard.percentToNext', { percent: 78, next: 'Platinum' })}</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Hero Board with Category Filters */}
        <HeroBoard
          entries={mockLeaderboard.map((entry) => ({
            id: entry.resellerId,
            rank: entry.rank,
            name: entry.name,
            metric: `€${entry.earnings.toFixed(2)}`,
            level: 12,
            badges: 8,
            isCurrentUser: entry.resellerId === currentReseller.id,
          }))}
          currentUserId={currentReseller.id}
          userType="reseller"
        />

        {/* Rank Tracker */}
        <Card noPadding className="overflow-hidden">
          <div className="relative bg-gradient-to-br from-amber-50 via-amber-50/50 to-forest-50 p-6">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-forest-200/20 rounded-full blur-2xl"></div>
            
            <div className="relative space-y-5">
              {/* Header */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-amber-100 border border-amber-200">
                  <TrendingUp className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-slate-900">{t('reseller.dashboard.rankProgress')}</h3>
              </div>

              {/* Rank Comparison */}
              <div className="flex items-center justify-between">
                {/* Current Rank */}
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg border-4 border-white">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-forest-500 rounded-full flex items-center justify-center border-2 border-white">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-medium text-slate-600">{t('reseller.dashboard.current')}</p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{currentReseller.rank}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-1 flex justify-center px-2">
                  <div className="relative">
                    <ArrowRight className="w-6 h-6 text-slate-400" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full px-2 py-0.5">
                      <span className="text-xs font-bold text-forest-600">78%</span>
                    </div>
                  </div>
                </div>

                {/* Next Rank */}
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center shadow-md border-4 border-white border-dashed">
                    <Trophy className="w-8 h-8 text-slate-500" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-medium text-slate-600">{t('reseller.dashboard.next')}</p>
                    <p className="text-sm font-bold text-slate-700 mt-0.5">Platinum</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600">{t('reseller.dashboard.progressTo', { rank: 'Platinum' })}</span>
                  <span className="font-semibold text-forest-600">78%</span>
                </div>
                <div className="relative w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-500 to-forest-500 transition-all duration-500 relative"
                    style={{ width: '78%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="pt-3 border-t border-slate-200/60 space-y-2.5">
                <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide">{t('reseller.dashboard.requirementsToAdvance')}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/60 border border-slate-200/50">
                    <div className="p-1.5 rounded-md bg-forest-100 border border-forest-200">
                      <Euro className="w-4 h-4 text-forest-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">{t('reseller.dashboard.needMoreSales', { amount: 753 })}</p>
                      <p className="text-xs text-slate-500">{t('reseller.dashboard.revenueTarget')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/60 border border-slate-200/50">
                    <div className="p-1.5 rounded-md bg-amber-100 border border-amber-200">
                      <Users className="w-4 h-4 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">{t('reseller.dashboard.orMoreTeamMembers', { count: 5 })}</p>
                      <p className="text-xs text-slate-500">{t('reseller.dashboard.networkGrowth')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button variant="primary" className="w-full mt-4 shadow-sm">
                {t('reseller.dashboard.viewFullRequirements')}
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card noPadding>
        <div className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">{t('reseller.dashboard.quickActions')}</h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <Button variant="secondary" className="min-h-[44px]">
              📋 {t('reseller.dashboard.copyReferralLink')}
            </Button>
            <Button variant="secondary" className="min-h-[44px]">
              👥 {t('reseller.dashboard.viewNetwork')}
            </Button>
            <Button variant="secondary" className="min-h-[44px]">
              📊 {t('reseller.dashboard.exportReport')}
            </Button>
          </div>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card noPadding className="mt-6">
        <div className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">{t('reseller.dashboard.recentActivity')}</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-200">
              <div>
                <p className="text-sm font-medium text-slate-900">{t('reseller.dashboard.newCustomerOrder')}</p>
                <p className="text-xs text-slate-600">{t('dates.today')}</p>
              </div>
              <span className="text-sm font-semibold text-forest-600">{t('reseller.dashboard.commissionAmount', { amount: 12.50 })}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-200">
              <div>
                <p className="text-sm font-medium text-slate-900">{t('reseller.dashboard.teamMemberJoined')}</p>
                <p className="text-xs text-slate-600">{t('dates.yesterday')}</p>
              </div>
              <span className="text-sm font-semibold text-green-600">{t('reseller.dashboard.downlineAdded', { count: 1 })}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-sm font-medium text-slate-900">{t('reseller.dashboard.commissionPaid')}</p>
                <p className="text-xs text-slate-600">{t('reseller.dashboard.daysAgo', { count: 2 })}</p>
              </div>
              <span className="text-sm font-semibold text-forest-600">{t('reseller.dashboard.toBank', { amount: 890.00 })}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
