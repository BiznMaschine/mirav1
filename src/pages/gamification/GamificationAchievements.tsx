/**
 * GamificationAchievements Component
 * 
 * Complete achievements system:
 * - Achievement categories
 * - Recent achievements
 * - Achievement timeline
 * - Achievement statistics
 */

import { useTranslation } from 'react-i18next';
import { PageHeader, Card, CardHeader, CardContent, Badge } from '@mira/ui';
import { Trophy, Award, Target, Heart, Users, TrendingUp, Calendar, BarChart3 } from 'lucide-react';

export default function GamificationAchievements() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'de' ? 'de-DE' : 'en-GB';
  const achievements = [
    { id: '1', name: 'First Sale', category: 'Sales', date: '2024-10-15', icon: Trophy, color: 'forest' },
    { id: '2', name: 'Team Builder', category: 'Recruitment', date: '2024-11-01', icon: Users, color: 'blue' },
    { id: '3', name: 'Gold Rank', category: 'Rank', date: '2024-11-20', icon: Award, color: 'amber' },
    { id: '4', name: '7-Day Streak', category: 'Consistency', date: '2024-12-10', icon: Target, color: 'red' },
    { id: '5', name: 'Life Saver', category: 'Impact', date: '2025-01-01', icon: Heart, color: 'green' },
    { id: '6', name: 'Top Performer', category: 'Performance', date: '2025-02-01', icon: TrendingUp, color: 'purple' },
  ];

  const categories = [
    { name: 'Sales', count: 3, icon: Trophy, color: 'forest' },
    { name: 'Impact', count: 2, icon: Heart, color: 'green' },
    { name: 'Recruitment', count: 1, icon: Users, color: 'blue' },
    { name: 'Consistency', count: 1, icon: Target, color: 'red' },
    { name: 'Rank', count: 1, icon: Award, color: 'amber' },
    { name: 'Performance', count: 1, icon: TrendingUp, color: 'purple' },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title={t('gamificationAchievements.title')}
        subtitle={t('gamificationAchievements.subtitle')}
      />

      {/* Achievement Statistics */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">6</p>
            <p className="text-xs text-slate-600">{t('gamificationAchievements.totalAchievements')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Award className="w-8 h-8 text-forest-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">3</p>
            <p className="text-xs text-slate-600">{t('gamificationAchievements.thisMonth')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">6</p>
            <p className="text-xs text-slate-600">{t('gamificationAchievements.categories')}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">4</p>
            <p className="text-xs text-slate-600">{t('gamificationAchievements.monthsActive')}</p>
          </CardContent>
        </Card>
      </div>

      {/* Achievement Categories */}
      <Card>
        <CardHeader title={t('gamificationAchievements.achievementCategories')} />
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className={`p-4 rounded-lg border-2 bg-${category.color}-50 border-${category.color}-200`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`w-6 h-6 text-${category.color}-600`} />
                    <h4 className="font-semibold text-slate-900">{category.name}</h4>
                  </div>
                  <p className="text-sm text-slate-600">{category.count} {t('gamificationAchievements.achievements')}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card>
        <CardHeader title={t('gamificationAchievements.recentAchievements')} />
        <CardContent className="p-6">
          <div className="space-y-3">
            {achievements.slice(0, 5).map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.id}
                  className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-200"
                >
                  <div className={`w-12 h-12 rounded-lg bg-${achievement.color}-100 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${achievement.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{achievement.name}</p>
                    <p className="text-xs text-slate-600">{achievement.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">
                      {new Date(achievement.date).toLocaleDateString(locale)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Achievement Timeline */}
      <Card>
        <CardHeader title={t('gamificationAchievements.achievementTimeline')} />
        <CardContent className="p-6">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={achievement.id} className="relative flex items-start gap-4">
                    <div className={`relative z-10 w-8 h-8 rounded-full bg-${achievement.color}-100 flex items-center justify-center border-2 border-white`}>
                      <Icon className={`w-4 h-4 text-${achievement.color}-600`} />
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-slate-900">{achievement.name}</p>
                        <Badge variant="default" size="sm">{achievement.category}</Badge>
                      </div>
                      <p className="text-xs text-slate-500">
                        {new Date(achievement.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

