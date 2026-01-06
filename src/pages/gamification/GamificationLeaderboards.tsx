/**
 * GamificationLeaderboards Component
 * 
 * Leaderboard system visualization:
 * - Top Enrollers
 * - Top Impact
 * - Top Earners
 * - Streak Leaders
 * - Challenge Leaders
 * - Filters
 */

import { useTranslation } from 'react-i18next';
import { PageHeader, Card, CardHeader, CardContent, Badge, Button, LeaderboardCard } from '@mira/ui';
import { Users, TrendingUp, Heart, Coins, Flame, Target, Filter } from 'lucide-react';

export default function GamificationLeaderboards() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'de' ? 'de-DE' : 'en-GB';
  const topEnrollers = [
    { rank: 1, name: 'Sarah M.', value: 45, avatar: 'SM' },
    { rank: 2, name: 'Michael K.', value: 38, avatar: 'MK' },
    { rank: 3, name: 'Emma L.', value: 32, avatar: 'EL' },
    { rank: 4, name: 'You', value: 28, avatar: 'YO', isCurrentUser: true },
    { rank: 5, name: 'David R.', value: 25, avatar: 'DR' },
  ];

  const topImpact = [
    { rank: 1, name: 'Anna B.', value: 1250, avatar: 'AB' },
    { rank: 2, name: 'Tom H.', value: 980, avatar: 'TH' },
    { rank: 3, name: 'You', value: 750, avatar: 'YO', isCurrentUser: true },
    { rank: 4, name: 'Lisa W.', value: 680, avatar: 'LW' },
    { rank: 5, name: 'John D.', value: 520, avatar: 'JD' },
  ];

  const topEarners = [
    { rank: 1, name: 'Robert S.', value: 12500, avatar: 'RS' },
    { rank: 2, name: 'Maria G.', value: 9800, avatar: 'MG' },
    { rank: 3, name: 'You', value: 7200, avatar: 'YO', isCurrentUser: true },
    { rank: 4, name: 'Peter F.', value: 6500, avatar: 'PF' },
    { rank: 5, name: 'Sophie M.', value: 5800, avatar: 'SM' },
  ];

  const streakLeaders = [
    { rank: 1, name: 'Max T.', value: 127, avatar: 'MT' },
    { rank: 2, name: 'Julia K.', value: 98, avatar: 'JK' },
    { rank: 3, name: 'You', value: 23, avatar: 'YO', isCurrentUser: true },
    { rank: 4, name: 'Chris P.', value: 19, avatar: 'CP' },
    { rank: 5, name: 'Nina R.', value: 15, avatar: 'NR' },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title={t('gamificationLeaderboards.title')}
        subtitle={t('gamificationLeaderboards.subtitle')}
      />

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">{t('gamificationLeaderboards.filter')}</span>
            </div>
            <Button size="sm" variant="primary">{t('gamificationLeaderboards.thisMonth')}</Button>
            <Button size="sm" variant="secondary">{t('gamificationLeaderboards.allTime')}</Button>
            <Button size="sm" variant="secondary">{t('gamificationLeaderboards.thisWeek')}</Button>
          </div>
        </CardContent>
      </Card>

      {/* Top Enrollers */}
      <Card>
        <CardHeader 
          title={t('gamificationLeaderboards.topEnrollers')} 
          subtitle={t('gamificationLeaderboards.topEnrollersSubtitle')}
        />
        <CardContent className="p-6">
          <div className="space-y-2">
            {topEnrollers.map((entry) => (
              <LeaderboardCard
                key={entry.rank}
                rank={entry.rank}
                name={entry.name}
                avatar={entry.avatar}
                value={entry.value}
                valueLabel={t('gamificationLeaderboards.customers')}
                isCurrentUser={entry.isCurrentUser}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Impact */}
      <Card>
        <CardHeader 
          title={t('gamificationLeaderboards.topImpact')} 
          subtitle={t('gamificationLeaderboards.topImpactSubtitle')}
        />
        <CardContent className="p-6">
          <div className="space-y-2">
            {topImpact.map((entry) => (
              <LeaderboardCard
                key={entry.rank}
                rank={entry.rank}
                name={entry.name}
                avatar={entry.avatar}
                value={entry.value}
                valueLabel={t('gamificationLeaderboards.kg')}
                isCurrentUser={entry.isCurrentUser}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Earners */}
      <Card>
        <CardHeader 
          title={t('gamificationLeaderboards.topEarners')} 
          subtitle={t('gamificationLeaderboards.topEarnersSubtitle')}
        />
        <CardContent className="p-6">
          <div className="space-y-2">
            {topEarners.map((entry) => (
              <LeaderboardCard
                key={entry.rank}
                rank={entry.rank}
                name={entry.name}
                avatar={entry.avatar}
                value={`€${entry.value.toLocaleString(locale)}`}
                valueLabel=""
                isCurrentUser={entry.isCurrentUser}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Streak Leaders */}
      <Card>
        <CardHeader 
          title={t('gamificationLeaderboards.streakLeaders')} 
          subtitle={t('gamificationLeaderboards.streakLeadersSubtitle')}
        />
        <CardContent className="p-6">
          <div className="space-y-2">
            {streakLeaders.map((entry) => (
              <LeaderboardCard
                key={entry.rank}
                rank={entry.rank}
                name={entry.name}
                avatar={entry.avatar}
                value={entry.value}
                valueLabel={t('gamificationLeaderboards.days')}
                isCurrentUser={entry.isCurrentUser}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard Types Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader title={t('gamificationLeaderboards.leaderboardTypes')} />
          <CardContent className="p-6">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-forest-600" />
                <span className="text-slate-700">{t('gamificationLeaderboards.topEnrollers')} - {t('gamificationLeaderboards.updatedNearRealtime')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-green-600" />
                <span className="text-slate-700">{t('gamificationLeaderboards.topImpact')} - {t('gamificationLeaderboards.updatedNearRealtime')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Coins className="w-4 h-4 text-amber-600" />
                <span className="text-slate-700">{t('gamificationLeaderboards.topEarners')} - {t('gamificationLeaderboards.updatedDaily')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-red-600" />
                <span className="text-slate-700">{t('gamificationLeaderboards.streakLeaders')} - {t('gamificationLeaderboards.updatedHourly')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-600" />
                <span className="text-slate-700">Challenge Leaders - {t('gamificationLeaderboards.updatedHourly')}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title={t('gamificationLeaderboards.yourRankings')} />
          <CardContent className="p-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-forest-50 rounded">
                <span className="text-sm text-slate-700">{t('gamificationLeaderboards.topEnrollers')}</span>
                <Badge variant="primary" size="sm">#4</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                <span className="text-sm text-slate-700">{t('gamificationLeaderboards.topImpact')}</span>
                <Badge variant="success" size="sm">#3</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-amber-50 rounded">
                <span className="text-sm text-slate-700">{t('gamificationLeaderboards.topEarners')}</span>
                <Badge variant="warning" size="sm">#3</Badge>
              </div>
              <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                <span className="text-sm text-slate-700">{t('gamificationLeaderboards.streakLeaders')}</span>
                <Badge variant="error" size="sm">#3</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

