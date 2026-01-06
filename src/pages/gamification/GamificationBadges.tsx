/**
 * GamificationBadges Component
 * 
 * Badge system showcase:
 * - Badge grid with all rarity levels
 * - Badge categories
 * - Featured badges
 * - Badge details
 */

import { useTranslation } from 'react-i18next';
import { PageHeader, Card, CardHeader, CardContent, Badge, BadgeGrid } from '@mira/ui';
import { Trophy, Award, Heart, Users, Target, Calendar, Star } from 'lucide-react';

export default function GamificationBadges() {
  const { t } = useTranslation();
  const badges = [
    { id: '1', type: 'First Sale', category: 'achievement', rarity: 'common' as const, earned: true },
    { id: '2', type: 'Team Builder', category: 'achievement', rarity: 'uncommon' as const, earned: true },
    { id: '3', type: 'Gold Rank', category: 'rank', rarity: 'rare' as const, earned: true },
    { id: '4', type: '7-Day Streak', category: 'achievement', rarity: 'common' as const, earned: true },
    { id: '5', type: 'Top Performer', category: 'achievement', rarity: 'epic' as const, earned: true },
    { id: '6', type: 'Impact Hero', category: 'milestone', rarity: 'legendary' as const, earned: true },
    { id: '7', type: 'First Paw', category: 'milestone', rarity: 'common' as const, earned: false },
    { id: '8', type: 'Shelter Friend', category: 'milestone', rarity: 'uncommon' as const, earned: false },
    { id: '9', type: 'Life Saver', category: 'milestone', rarity: 'rare' as const, earned: false },
    { id: '10', type: 'Animal Guardian', category: 'milestone', rarity: 'epic' as const, earned: false },
    { id: '11', type: 'MIRA Legend', category: 'milestone', rarity: 'legendary' as const, earned: false },
    { id: '12', type: 'Winter Hero 2024', category: 'campaign', rarity: 'rare' as const, earned: false },
  ];

  const categories = [
    { name: 'Milestone', icon: Heart, count: 5, earned: 1 },
    { name: 'Achievement', icon: Trophy, count: 4, earned: 4 },
    { name: 'Rank', icon: Award, count: 1, earned: 1 },
    { name: 'Campaign', icon: Calendar, count: 1, earned: 0 },
    { name: 'Shelter', icon: Star, count: 0, earned: 0 },
    { name: 'Community', icon: Users, count: 0, earned: 0 },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title={t('gamificationBadges.title')}
        subtitle={t('gamificationBadges.subtitle')}
      />

      {/* Badge Statistics */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">6</p>
            <p className="text-xs text-slate-600">{t('gamificationBadges.badgesEarned')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">12</p>
            <p className="text-xs text-slate-600">{t('gamificationBadges.totalAvailable')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">3</p>
            <p className="text-xs text-slate-600">{t('gamificationBadges.featuredBadges')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-forest-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">50%</p>
            <p className="text-xs text-slate-600">{t('gamificationBadges.completionRate')}</p>
          </CardContent>
        </Card>
      </div>

      {/* Badge Categories */}
      <Card>
        <CardHeader title={t('gamificationBadges.badgeCategories')} />
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-slate-600" />
                    <h4 className="font-semibold text-slate-900">{category.name}</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    {category.earned} / {category.count} {t('gamificationBadges.earned')}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* All Badges Grid */}
      <Card>
        <CardHeader title={t('gamificationBadges.allBadges')} />
        <CardContent className="p-6">
          <BadgeGrid
            badges={badges.map((badge) => ({
              id: badge.id,
              type: badge.type,
              rarity: badge.rarity,
              earnedAt: badge.earned ? new Date() : undefined,
            }))}
          />
        </CardContent>
      </Card>

      {/* Rarity Breakdown */}
      <Card>
        <CardHeader title="Rarity Breakdown" />
        <CardContent className="p-6">
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { name: 'Common', color: 'slate', earned: 2, total: 3 },
              { name: 'Uncommon', color: 'forest', earned: 1, total: 2 },
              { name: 'Rare', color: 'blue', earned: 1, total: 2 },
              { name: 'Epic', color: 'purple', earned: 1, total: 2 },
              { name: 'Legendary', color: 'amber', earned: 1, total: 3 },
            ].map((rarity) => (
              <div
                key={rarity.name}
                className={`p-4 rounded-lg border-2 bg-${rarity.color}-50 border-${rarity.color}-200 text-center`}
              >
                <Trophy className={`w-8 h-8 text-${rarity.color}-600 mx-auto mb-2`} />
                <p className="font-semibold text-slate-900 mb-1">{rarity.name}</p>
                <p className="text-sm text-slate-600">
                  {rarity.earned} / {rarity.total}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Featured Badges */}
      <Card>
        <CardHeader title="Featured Badges" />
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-4">
            {badges.filter(b => b.earned).slice(0, 3).map((badge) => (
              <div
                key={badge.id}
                className={`p-4 rounded-lg border-2 ${
                  badge.rarity === 'common' ? 'bg-slate-50 border-slate-300' :
                  badge.rarity === 'uncommon' ? 'bg-forest-50 border-forest-300' :
                  badge.rarity === 'rare' ? 'bg-blue-50 border-blue-300' :
                  badge.rarity === 'epic' ? 'bg-purple-50 border-purple-300' :
                  'bg-amber-50 border-amber-300'
                } text-center`}
              >
                <Trophy className={`w-12 h-12 mx-auto mb-2 ${
                  badge.rarity === 'common' ? 'text-slate-400' :
                  badge.rarity === 'uncommon' ? 'text-forest-600' :
                  badge.rarity === 'rare' ? 'text-blue-600' :
                  badge.rarity === 'epic' ? 'text-purple-600' :
                  'text-amber-600'
                }`} />
                <p className="font-semibold text-slate-900">{badge.type}</p>
                <Badge variant={badge.rarity === 'common' ? 'default' : badge.rarity === 'uncommon' ? 'primary' : badge.rarity === 'rare' ? 'info' : badge.rarity === 'epic' ? 'default' : 'warning'} size="sm" className="mt-2">
                  {badge.rarity}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

