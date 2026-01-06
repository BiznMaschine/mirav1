/**
 * CustomerPawsWidget Component
 * 
 * Gamification widget for customers showing Paws (XP equivalent) with rewards
 */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Badge, Button } from '@mira/ui';
import { PawPrint, Flame, Gift, Percent, Truck, Ticket, ChevronUp, ChevronDown } from 'lucide-react';
import { ProgressRing as ProgressRingComponent } from '@mira/ui';

export interface CustomerPawsWidgetProps {
  paws: number;
  pawsToNextLevel: number;
  level: number;
  levelName?: string;
  streak?: number;
  rewardsAvailable?: number;
  className?: string;
}

export default function CustomerPawsWidget({
  paws,
  pawsToNextLevel,
  level,
  levelName,
  streak,
  rewardsAvailable,
  className,
}: CustomerPawsWidgetProps) {
  const { t, i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const currentProgress = paws % 500; // Progress within current level
  const maxProgress = 500; // Every 500 paws = 1 level
  const locale = i18n.language === 'de' ? 'de-DE' : 'en-GB';

  return (
    <Card noPadding className={`overflow-hidden ${className || ''}`} onClick={() => setIsExpanded(!isExpanded)}>
      <div className="p-4 cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <svg 
                className="transform -rotate-90 w-full h-full" 
                viewBox="0 0 64 64"
                preserveAspectRatio="xMidYMid meet"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className="text-slate-200"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={175.9}
                  strokeDashoffset={175.9 * (1 - currentProgress / maxProgress)}
                  className="text-purple-600 transition-all duration-300"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <PawPrint size={20} className="text-purple-600" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-900">{paws.toLocaleString(locale)} {t('widgets.customerPaws.paws')}</span>
                <Badge variant="secondary" size="sm" className="bg-purple-100 text-purple-700">
                  {t('widgets.customerPaws.level')} {level}
                </Badge>
              </div>
              {levelName && (
                <p className="text-xs text-slate-500 mt-0.5">{levelName}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {streak && streak > 0 && (
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-amber-100">
                  <Flame size={16} className="text-amber-500" />
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">{streak}</p>
                  <p className="text-xs text-slate-500">Months</p>
                </div>
              </div>
            )}

            {rewardsAvailable && rewardsAvailable > 0 && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-50">
                <Gift size={16} className="text-purple-600" />
                <span className="text-sm font-medium text-purple-700">
                  {rewardsAvailable} Rewards
                </span>
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
          <div className="mb-3">
            <p className="text-sm font-medium text-slate-700 mb-2">Redeem with Paws:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 border border-slate-200 hover:border-purple-300 cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Percent size={16} className="text-purple-600" />
                <span className="text-sm font-medium text-slate-700">10% Discount</span>
              </div>
              <p className="text-xs text-slate-500">Next order</p>
              <p className="text-sm font-bold mt-1 text-purple-600">500 Paws</p>
            </div>

            <div className="bg-white rounded-lg p-3 border border-slate-200 hover:border-purple-300 cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Truck size={16} className="text-purple-600" />
                <span className="text-sm font-medium text-slate-700">Free Shipping</span>
              </div>
              <p className="text-xs text-slate-500">Permanent at Level 5</p>
              <p className="text-sm font-bold mt-1 text-purple-600">Level 5</p>
            </div>

            <div className="bg-white rounded-lg p-3 border border-slate-200 hover:border-purple-300 cursor-pointer transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Ticket size={16} className="text-purple-600" />
                <span className="text-sm font-medium text-slate-700">VIP Events</span>
              </div>
              <p className="text-xs text-slate-500">Shelter visits</p>
              <p className="text-sm font-bold mt-1 text-purple-600">1,000 Paws</p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200">
            <p className="text-xs text-slate-500">
              You earn 50 Paws per €10 order value. Subscription orders give 2x Paws!
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}
