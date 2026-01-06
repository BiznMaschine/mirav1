/**
 * ResellerGamificationWidget Component
 * 
 * Expandable gamification widget for resellers showing level, XP, streak, badges, and challenges
 */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Badge, Button } from '@mira/ui';
import { Flame, Award, Target, ChevronUp, ChevronDown } from 'lucide-react';
import { ProgressRing } from '@mira/ui';

export interface ResellerGamificationWidgetProps {
  level: number;
  xp: number;
  xpToNextLevel: number;
  streak: number;
  badgeCount: number;
  totalBadges: number;
  activeChallenge?: {
    name: string;
    progress: number;
    current: number;
    goal: number;
  };
  className?: string;
}

export default function ResellerGamificationWidget({
  level,
  xp,
  xpToNextLevel,
  streak,
  badgeCount,
  totalBadges,
  activeChallenge,
  className,
}: ResellerGamificationWidgetProps) {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const progress = (xp / xpToNextLevel) * 100;
  const locale = i18n.language === 'de' ? 'de-DE' : 'en-GB';

  return (
    <Card noPadding className={`overflow-hidden ${className || ''}`} onClick={() => setIsExpanded(!isExpanded)}>
      <div className="p-4 cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <ProgressRing current={xp} max={xpToNextLevel} size="sm" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-base font-bold text-forest-700">{level}</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-900">{t('widgets.resellerGamification.level', { level })}</span>
                <Badge variant="success" size="sm">{t('widgets.resellerGamification.active')}</Badge>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">{xp.toLocaleString(locale)} / {xpToNextLevel.toLocaleString(locale)} XP</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-amber-100">
                <Flame size={16} className="text-amber-500" />
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">{streak}</p>
                <p className="text-xs text-slate-500">{t('widgets.resellerGamification.days')}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-forest-100">
                <Award size={16} className="text-forest-600" />
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">{badgeCount}/{totalBadges}</p>
                <p className="text-xs text-slate-500">{t('widgets.resellerGamification.badges')}</p>
              </div>
            </div>

            {activeChallenge && (
              <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
                <div className="p-1.5 rounded-lg bg-purple-100">
                  <Target size={16} className="text-purple-600" />
                </div>
                <div className="max-w-[100px]">
                  <p className="text-xs font-medium text-slate-900 truncate">{activeChallenge.name}</p>
                  <p className="text-xs text-slate-500">{activeChallenge.progress}%</p>
                </div>
              </div>
            )}

            <div className="ml-2">
              {isExpanded ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-slate-200 bg-slate-50 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-3 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Flame size={16} className="text-amber-500" />
                <span className="text-sm font-medium text-slate-700">{t('widgets.resellerGamification.streak', 'Login Streak')}</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">{streak} {t('widgets.resellerGamification.days')}</p>
              <p className="text-xs text-slate-500 mt-1">{t('widgets.resellerGamification.nextBonusAt30', 'Next bonus at 30 days')}</p>
            </div>

            <div className="bg-white rounded-lg p-3 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Award size={16} className="text-forest-600" />
                <span className="text-sm font-medium text-slate-700">{t('widgets.resellerGamification.badges')}</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">{badgeCount} {t('common.of', 'of')} {totalBadges}</p>
              <p className="text-xs text-slate-500 mt-1">{t('widgets.resellerGamification.almostReached', '2 almost reached')}</p>
            </div>

            {activeChallenge && (
              <div className="bg-white rounded-lg p-3 border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <Target size={16} className="text-purple-600" />
                  <span className="text-sm font-medium text-slate-700">{t('widgets.resellerGamification.challenge')}</span>
                </div>
                <p className="text-sm font-semibold text-slate-900">{activeChallenge.name}</p>
                <div className="mt-2">
                  <div className="w-full bg-slate-200 rounded-full h-1">
                    <div
                      className="bg-purple-600 h-1 rounded-full transition-all duration-500"
                      style={{ width: `${activeChallenge.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{t('widgets.resellerGamification.progress')}: {activeChallenge.current} / {activeChallenge.goal} kg</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Progress Bar */}
      <div className="border-t border-slate-200 bg-slate-50 px-4 py-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-slate-700">{t('widgets.resellerGamification.xpProgress', 'XP Progress')}</span>
          <span className="text-xs font-semibold text-slate-900">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-forest-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-slate-500">{xp.toLocaleString(locale)} XP</span>
          <span className="text-xs text-slate-500">{xpToNextLevel.toLocaleString(locale)} XP</span>
        </div>
      </div>
    </Card>
  );
}
