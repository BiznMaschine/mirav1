import { useTranslation } from 'react-i18next';
import { PageHeader, Card, LeaderboardCard, Button, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@mira/ui';
import { mockCustomerLeaderboard, currentCustomer } from '../../data/mockData';

export default function CustomerLeaderboard() {
  const { t } = useTranslation();
  
  return (
    <div>
      <PageHeader
        title={t('customer.leaderboard.title')}
        subtitle={t('customer.leaderboard.subtitle')}
      />

      <Card noPadding>
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-2">
              <Button variant="primary" size="sm">{t('customer.leaderboard.thisMonth')}</Button>
              <Button variant="secondary" size="sm">{t('customer.leaderboard.allTime')}</Button>
            </div>
            <Select defaultValue="all">
              <SelectTrigger size="sm" className="w-[140px]">
                <SelectValue placeholder={t('customer.leaderboard.filter')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('customer.leaderboard.allLevels')}</SelectItem>
                <SelectItem value="level-1">{t('customer.leaderboard.level1')}</SelectItem>
                <SelectItem value="level-2">{t('customer.leaderboard.level2')}</SelectItem>
                <SelectItem value="level-3">{t('customer.leaderboard.level3')}</SelectItem>
                <SelectItem value="level-4">{t('customer.leaderboard.level4Plus')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            {mockCustomerLeaderboard.map((entry) => (
              <LeaderboardCard
                key={entry.customerId}
                rank={entry.rank}
                name={entry.name}
                value={entry.impact}
                valueLabel="pts"
                badge={`Lv ${entry.level}`}
                isCurrentUser={entry.customerId === currentCustomer.id}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
