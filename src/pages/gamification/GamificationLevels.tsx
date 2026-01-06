/**
 * GamificationLevels Component
 * 
 * Level system visualization:
 * - Level progression chart (1-50)
 * - Title progression
 * - XP thresholds
 * - Unlocks per level
 */

import { useTranslation } from 'react-i18next';
import { PageHeader, Card, CardHeader, CardContent, Badge, ProgressBar } from '@mira/ui';
import { Star, TrendingUp, Unlock, Award } from 'lucide-react';

export default function GamificationLevels() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'de' ? 'de-DE' : 'en-GB';
  const levels = [
    { level: 1, title: 'Newcomer', xpRequired: 0, xpToNext: 100, badgeSlots: 1 },
    { level: 5, title: 'Newcomer', xpRequired: 400, xpToNext: 150, badgeSlots: 2 },
    { level: 10, title: 'Contributor', xpRequired: 1000, xpToNext: 200, badgeSlots: 3 },
    { level: 15, title: 'Contributor', xpRequired: 2000, xpToNext: 250, badgeSlots: 3 },
    { level: 20, title: 'Advocate', xpRequired: 3500, xpToNext: 300, badgeSlots: 4 },
    { level: 25, title: 'Advocate', xpRequired: 5250, xpToNext: 350, badgeSlots: 4 },
    { level: 30, title: 'Champion', xpRequired: 7000, xpToNext: 400, badgeSlots: 5 },
    { level: 35, title: 'Champion', xpRequired: 9000, xpToNext: 450, badgeSlots: 5 },
    { level: 40, title: 'Ambassador', xpRequired: 12000, xpToNext: 500, badgeSlots: 6 },
    { level: 45, title: 'Ambassador', xpRequired: 15500, xpToNext: 550, badgeSlots: 6 },
    { level: 50, title: 'Legend', xpRequired: 20000, xpToNext: null, badgeSlots: 8 },
  ];

  const currentLevel = 12;
  const currentXP = 2450;
  const nextLevelXP = 3000;

  return (
    <div className="space-y-6">
      <PageHeader
        title={t('gamificationLevels.title')}
        subtitle={t('gamificationLevels.subtitle')}
      />

      {/* Current Level Status */}
      <Card>
        <CardHeader title={t('gamificationLevels.yourCurrentLevel')} />
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full border-4 border-forest-200"></div>
              <div className="absolute inset-0 rounded-full border-4 border-forest-600 border-t-transparent" style={{ transform: 'rotate(270deg)', clipPath: 'inset(0 0 18% 0)' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-forest-700">{currentLevel}</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-bold text-slate-900">{t('gamificationLevels.level')} {currentLevel}</h3>
                <Badge variant="primary" size="sm">Contributor</Badge>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                {currentXP.toLocaleString(locale)} / {nextLevelXP.toLocaleString(locale)} {t('gamification.xp')}
              </p>
              <ProgressBar value={82} variant="default" />
              <p className="text-xs text-slate-500 mt-2">
                {t('gamificationLevels.xpToLevel', { xp: nextLevelXP - currentXP, level: currentLevel + 1 })}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Level Progression Chart */}
      <Card>
        <CardHeader title={t('gamificationLevels.levelProgression')} />
        <CardContent className="p-6">
          <div className="space-y-4">
            {levels.map((lvl) => (
              <div
                key={lvl.level}
                className={`p-4 rounded-lg border-2 ${
                  lvl.level === currentLevel
                    ? 'bg-forest-50 border-forest-300'
                    : lvl.level < currentLevel
                    ? 'bg-green-50 border-green-200'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      lvl.level === currentLevel
                        ? 'bg-forest-600 text-white'
                        : lvl.level < currentLevel
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-300 text-slate-600'
                    }`}>
                      {lvl.level < currentLevel ? (
                        <Award className="w-5 h-5" />
                      ) : (
                        <span className="font-bold">{lvl.level}</span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-slate-900">{t('gamificationLevels.level')} {lvl.level}</h4>
                        <Badge variant={lvl.level === currentLevel ? 'primary' : lvl.level < currentLevel ? 'success' : 'default'} size="sm">
                          {lvl.title}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-600">
                        {lvl.xpRequired.toLocaleString(locale)} {t('gamificationLevels.xpRequired')}
                        {lvl.xpToNext && ` • ${lvl.xpToNext} ${t('gamificationLevels.xpToNext')}`}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-600">{lvl.badgeSlots} {t('gamificationLevels.badgeSlots')}</p>
                  </div>
                </div>
                {lvl.level === currentLevel && (
                  <div className="mt-2 pt-2 border-t border-forest-200">
                    <p className="text-xs text-forest-700">
                      <Unlock className="w-3 h-3 inline mr-1" />
                      Unlocks: Impact feed, Challenge participation
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Title Progression */}
      <Card>
        <CardHeader title="Title Progression" />
        <CardContent className="p-6">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Newcomer', range: '1-9', theme: 'Learning the platform' },
              { title: 'Contributor', range: '10-19', theme: 'Active participation' },
              { title: 'Advocate', range: '20-29', theme: 'Growing influence' },
              { title: 'Champion', range: '30-39', theme: 'Consistent excellence' },
              { title: 'Ambassador', range: '40-49', theme: 'Community leadership' },
              { title: 'Legend', range: '50', theme: 'Pinnacle achievement' },
            ].map((title) => (
              <div key={title.title} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-1">{title.title}</h4>
                <p className="text-xs text-slate-600 mb-2">Levels {title.range}</p>
                <p className="text-xs text-slate-500">{title.theme}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

