import { useTranslation } from 'react-i18next';
import { PageHeader, Card, BadgeGrid, Badge } from '@mira/ui';
import { currentReseller } from '../../data/mockData';

export default function BadgesAchievements() {
  const { t, i18n } = useTranslation();
  const badges = [
    { id: 'badge-001', type: 'First Sale', rarity: 'common' as const, earnedAt: new Date('2024-10-15') },
    { id: 'badge-002', type: 'Team Builder', rarity: 'uncommon' as const, earnedAt: new Date('2024-11-01') },
    { id: 'badge-003', type: 'Gold Rank', rarity: 'rare' as const, earnedAt: new Date('2024-11-20') },
    { id: 'badge-004', type: '7-Day Streak', rarity: 'common' as const, earnedAt: new Date('2024-12-10') },
    { id: 'badge-005', type: 'Top Performer', rarity: 'epic' as const, earnedAt: new Date('2025-01-01') },
    { id: 'badge-006', type: 'Impact Hero', rarity: 'legendary' as const, earnedAt: new Date('2025-02-01') },
  ];

  return (
    <div>
      <PageHeader
        title={t('reseller.badges.title')}
        subtitle={t('reseller.badges.subtitle')}
      />

      <Card noPadding>
        <div className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">{t('reseller.badges.yourBadges')}</h3>
          <BadgeGrid
            badges={badges.map((badge) => ({
              id: badge.id,
              type: badge.type,
              rarity: badge.rarity,
              earnedAt: badge.earnedAt,
            }))}
          />
        </div>
      </Card>

      <Card noPadding className="mt-6">
        <div className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">{t('reseller.badges.recentAchievements')}</h3>
          <div className="space-y-3">
            {badges.filter((b) => b.earnedAt <= new Date()).slice(0, 3).map((badge) => (
              <div key={badge.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div className="text-2xl">🏆</div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{badge.type}</p>
                  <p className="text-xs text-slate-600">
                    {t('reseller.badges.earned', { date: badge.earnedAt.toLocaleDateString(i18n.language === 'de' ? 'de-DE' : 'en-GB') })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
