import { useTranslation } from 'react-i18next';
import { PageHeader, Card, Button, Badge } from '@mira/ui';
import HeroSection from '../../components/HeroSection';
import HeroBoard from '../../components/HeroBoard';
import CustomerPawsWidget from '../../components/CustomerPawsWidget';
import YourShelterWidget from '../../components/YourShelterWidget';
import CampaignBanner from '../../components/CampaignBanner';
import { Heart, Package, Gift, AlertTriangle, Award, PawPrint, Users, Repeat, Shield, Trophy, ArrowRight, TrendingUp, Sparkles, ShoppingBag, Euro } from 'lucide-react';
import { currentCustomer, mockCustomerLeaderboard, currentCustomerShelter, activeCampaign } from '../../data/mockData';

export default function CustomerDashboardHome() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        title={t('customer.dashboard.welcome', { name: currentCustomer.name })}
        subtitle={`🔥 ${t('customer.dashboard.streak', { days: currentCustomer.streak.current })} | ${t('customer.dashboard.level', { level: currentCustomer.level })}`}
      />

      {/* Paws Gamification Widget */}
      <CustomerPawsWidget
        paws={currentCustomer.paws}
        pawsToNextLevel={currentCustomer.pawsToNextLevel}
        level={currentCustomer.level}
        levelName={currentCustomer.levelName}
        streak={currentCustomer.streak.current}
        rewardsAvailable={currentCustomer.rewardsAvailable}
        className="mb-6"
      />

      {/* Campaign Banner */}
      {activeCampaign && (
        <CampaignBanner
          campaign={activeCampaign}
          userContributionKg={currentCustomer.impact.foodKg}
          className="mb-6"
        />
      )}

      {/* Your Shelter Widget */}
      <YourShelterWidget
        shelter={currentCustomerShelter}
        userImpactKg={currentCustomer.impact.foodKg}
        className="mb-6"
      />

      {/* Impact Card FIRST (as per prototype) */}
      <Card noPadding className="mb-6">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Heart size={20} className="text-forest-600" />
              <h3 className="font-semibold text-slate-900">{t('customer.dashboard.contribution')}</h3>
            </div>
            <Button variant="ghost" size="sm">{t('customer.dashboard.learnMore')}</Button>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="text-center p-3 rounded-lg bg-forest-50">
              <Package size={18} className="mx-auto mb-1 text-forest-600" />
              <p className="text-lg font-bold text-slate-900">{currentCustomer.impact.foodKg} kg</p>
              <p className="text-xs text-slate-500">{t('customer.dashboard.contributed', { kg: currentCustomer.impact.foodKg })}</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-amber-50">
              <Gift size={18} className="mx-auto mb-1 text-amber-600" />
              <p className="text-lg font-bold text-slate-900">{Math.round(currentCustomer.impact.foodKg * 20)}</p>
              <p className="text-xs text-slate-500">{t('customer.dashboard.meals')}</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-purple-50">
              <Heart size={18} className="mx-auto mb-1 text-purple-600" />
              <p className="text-lg font-bold text-slate-900">{currentCustomer.impact.animalsHelped}</p>
              <p className="text-xs text-slate-500">{t('customer.dashboard.animalsFed')}</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-red-50">
              <AlertTriangle size={18} className="mx-auto mb-1 text-red-600" />
              <p className="text-lg font-bold text-slate-900">1</p>
              <p className="text-xs text-slate-500">{t('customer.dashboard.emergencyAid')}</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Award size={14} className="text-forest-600" />
                <span className="text-xs font-medium text-slate-700">{t('customer.dashboard.nextMilestone')}: Shelter Friend</span>
              </div>
              <span className="text-xs text-slate-500">{currentCustomer.impact.foodKg}/100 kg</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-1">
              <div
                className="bg-forest-600 h-1 rounded-full transition-all duration-500"
                style={{ width: `${(currentCustomer.impact.foodKg / 100) * 100}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">{t('customer.dashboard.pawsWhenReached')}</p>
          </div>
        </div>
      </Card>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <div>
            <p className="text-sm text-slate-600 mb-1">{t('customer.dashboard.totalOrders')}</p>
            <p className="text-2xl font-bold text-slate-900">{currentCustomer.orders}</p>
            <p className="text-xs text-green-600 mt-1">↑ 1 this month</p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600 mb-1">{t('customer.dashboard.activeSubscriptions')}</p>
            <p className="text-2xl font-bold text-slate-900">{currentCustomer.subscriptions}</p>
            <p className="text-xs text-forest-600 mt-1">{t('customer.dashboard.autoRenewal')}</p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600 mb-1">{t('customer.dashboard.totalSpent')}</p>
            <p className="text-2xl font-bold text-slate-900">€{currentCustomer.totalSpent.toFixed(2)}</p>
            <p className="text-xs text-slate-600 mt-1">All time</p>
          </div>
        </Card>
        <Card>
          <div>
            <p className="text-sm text-slate-600 mb-1">Level</p>
            <p className="text-2xl font-bold text-amber-600">Level {currentCustomer.level}</p>
            <p className="text-xs text-forest-600 mt-1">75% → Level 4</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Hero Board with Category Filters */}
        <HeroBoard
          entries={mockCustomerLeaderboard.map((entry) => ({
            id: entry.customerId,
            rank: entry.rank,
            name: entry.name,
            metric: `${entry.impact.toFixed(1)} pts`,
            level: entry.level,
            badges: 4,
            isCurrentUser: entry.customerId === currentCustomer.id,
          }))}
          currentUserId={currentCustomer.id}
          userType="customer"
        />

        {/* Level Progress */}
        <Card noPadding className="overflow-hidden">
          <div className="relative bg-gradient-to-br from-purple-50 via-purple-50/50 to-amber-50 p-6">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-200/20 rounded-full blur-2xl"></div>
            
            <div className="relative space-y-5">
              {/* Header */}
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-purple-100 border border-purple-200">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Level Progress</h3>
              </div>

              {/* Level Comparison */}
              <div className="flex items-center justify-between">
                {/* Current Level */}
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg border-4 border-white">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center border-2 border-white">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-medium text-slate-600">Current</p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">Level {currentCustomer.level}</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-1 flex justify-center px-2">
                  <div className="relative">
                    <ArrowRight className="w-6 h-6 text-slate-400" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full px-2 py-0.5">
                      <span className="text-xs font-bold text-purple-600">75%</span>
                    </div>
                  </div>
                </div>

                {/* Next Level */}
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center shadow-md border-4 border-white border-dashed">
                    <Trophy className="w-8 h-8 text-slate-500" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-medium text-slate-600">Next</p>
                    <p className="text-sm font-bold text-slate-700 mt-0.5">Level {currentCustomer.level + 1}</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600">Progress to Level {currentCustomer.level + 1}</span>
                  <span className="font-semibold text-purple-600">75%</span>
                </div>
                <div className="relative w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 via-purple-500 to-amber-500 transition-all duration-500 relative"
                    style={{ width: '75%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="pt-3 border-t border-slate-200/60 space-y-2.5">
                <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Requirements to Advance</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/60 border border-slate-200/50">
                    <div className="p-1.5 rounded-md bg-purple-100 border border-purple-200">
                      <ShoppingBag className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">5 more orders</p>
                      <p className="text-xs text-slate-500">Order target</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-lg bg-white/60 border border-slate-200/50">
                    <div className="p-1.5 rounded-md bg-amber-100 border border-amber-200">
                      <Euro className="w-4 h-4 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900">€50 more spent</p>
                      <p className="text-xs text-slate-500">Spending target</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button variant="primary" className="w-full mt-4 shadow-sm">
                View Full Requirements
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Quick Actions */}
        <Card noPadding className="lg:col-span-2">
          <div className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Quick Actions</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <Button variant="secondary" className="min-h-[44px]">
                🛍️ Browse Products
              </Button>
              <Button variant="secondary" className="min-h-[44px]">
                📦 My Subscriptions
              </Button>
              <Button variant="secondary" className="min-h-[44px]">
                🏆 View Badges
              </Button>
              <Button variant="secondary" className="min-h-[44px]">
                📊 Impact Report
              </Button>
            </div>
          </div>
        </Card>

        {/* Paws Earning Tips */}
        <Card noPadding>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <PawPrint size={18} className="text-purple-600" />
              <h3 className="font-semibold text-slate-900">Earn More Paws</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
                <div className="p-1.5 rounded-lg bg-purple-100">
                  <Repeat size={14} className="text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-slate-700">Subscription Orders</p>
                  <p className="text-xs text-slate-500">2x Paws Multiplier</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
                <div className="p-1.5 rounded-lg bg-purple-100">
                  <Users size={14} className="text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-slate-700">Invite Friends</p>
                  <p className="text-xs text-slate-500">+200 Paws per friend</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
                <div className="p-1.5 rounded-lg bg-purple-100">
                  <Award size={14} className="text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-slate-700">Write Reviews</p>
                  <p className="text-xs text-slate-500">+50 Paws per review</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card noPadding className="mt-6">
        <div className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-200">
              <div>
                <p className="text-sm font-medium text-slate-900">Order completed</p>
                <p className="text-xs text-slate-600">Today</p>
              </div>
              <span className="text-sm font-semibold text-forest-600">+6 kg food donated</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-200">
              <div>
                <p className="text-sm font-medium text-slate-900">Badge earned: Impact Hero</p>
                <p className="text-xs text-slate-600">Yesterday</p>
              </div>
              <span className="text-sm font-semibold text-amber-600">🏆 New badge</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-sm font-medium text-slate-900">Subscription renewed</p>
                <p className="text-xs text-slate-600">3 days ago</p>
              </div>
              <span className="text-sm font-semibold text-forest-600">+2.5 kg food</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
