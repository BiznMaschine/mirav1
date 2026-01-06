import { useTranslation } from 'react-i18next';
import { PageHeader, Card, LeaderboardCard, Button, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@mira/ui';
import { mockLeaderboard, currentReseller } from '../../data/mockData';

export default function Leaderboard() {
  const { t } = useTranslation();
  
  return (
    <div>
      <PageHeader
        title={t('reseller.leaderboard.title')}
        subtitle={t('reseller.leaderboard.subtitle')}
      />

      <Card noPadding>
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-2">
              <Button variant="primary" size="sm">{t('reseller.leaderboard.thisMonth')}</Button>
              <Button variant="secondary" size="sm">{t('reseller.leaderboard.allTime')}</Button>
            </div>
            <Select defaultValue="all">
              <SelectTrigger size="sm" className="w-[140px]">
                <SelectValue placeholder={t('reseller.leaderboard.segment')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('reseller.leaderboard.allSegments')}</SelectItem>
                <SelectItem value="novice">{t('reseller.leaderboard.novice')}</SelectItem>
                <SelectItem value="active">{t('reseller.leaderboard.active')}</SelectItem>
                <SelectItem value="growth">{t('reseller.leaderboard.growth')}</SelectItem>
                <SelectItem value="ambassador">{t('reseller.leaderboard.ambassador')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            {mockLeaderboard.map((entry) => (
              <LeaderboardCard
                key={entry.resellerId}
                rank={entry.rank}
                name={entry.name}
                value={entry.earnings}
                valueLabel="€"
                badge={entry.rankBadge}
                isCurrentUser={entry.resellerId === currentReseller.id}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
