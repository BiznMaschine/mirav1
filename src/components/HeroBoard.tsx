/**
 * HeroBoard Component
 * 
 * Leaderboard with category filters (All, XP/Paws, kg, Meals, Animals, Emergency)
 */

import { useState } from 'react';
import { Card, Badge, Button, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@mira/ui';
import { Trophy, Zap, Package, Gift, Heart, AlertTriangle, PawPrint, Award, TrendingUp, Sparkles, Crown } from 'lucide-react';

export interface HeroBoardEntry {
  id: string;
  rank: number;
  name: string;
  location?: string;
  metric: string | number;
  level?: number;
  badges?: number;
  isCurrentUser?: boolean;
}

export interface HeroBoardProps {
  entries: HeroBoardEntry[];
  currentUserId?: string;
  userType: 'reseller' | 'customer';
  className?: string;
}

type Category = 'all' | 'xp' | 'kg' | 'meals' | 'animals' | 'emergency';

const categories = [
  { id: 'all' as Category, label: 'All', icon: Trophy },
  { id: 'xp' as Category, label: 'XP', icon: Zap },
  { id: 'kg' as Category, label: 'kg Donated', icon: Package },
  { id: 'meals' as Category, label: 'Meals', icon: Gift },
  { id: 'animals' as Category, label: 'Animals', icon: Heart },
  { id: 'emergency' as Category, label: 'Emergency', icon: AlertTriangle },
];

const customerCategories = [
  { id: 'all' as Category, label: 'All', icon: Trophy },
  { id: 'xp' as Category, label: 'Paws', icon: PawPrint },
  { id: 'kg' as Category, label: 'kg Donated', icon: Package },
  { id: 'meals' as Category, label: 'Meals', icon: Gift },
  { id: 'animals' as Category, label: 'Animals', icon: Heart },
  { id: 'emergency' as Category, label: 'Emergency', icon: AlertTriangle },
];

export default function HeroBoard({ entries, currentUserId, userType, className }: HeroBoardProps) {
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [timePeriod, setTimePeriod] = useState('month');

  const displayCategories = userType === 'customer' ? customerCategories : categories;
  
  // For now, we'll use the provided entries for all categories
  // In a real app, this would filter by category
  const displayedEntries = showAll ? entries : entries.slice(0, 5);
  const showXpDetails = activeCategory === 'xp';

  const rankColors = ['#FFD700', '#C0C0C0', '#CD7F32']; // Gold, Silver, Bronze

  return (
    <Card noPadding className={`overflow-hidden ${className}`}>
      <div className="relative bg-gradient-to-br from-amber-50 via-amber-50/50 to-forest-50 p-4 border-b border-slate-200/60">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-forest-200/20 rounded-full blur-2xl"></div>
        
        <div className="relative">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-amber-100 border border-amber-200">
                <Trophy size={18} className="text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-900">Hero Board</h3>
            </div>
            <Select value={timePeriod} onValueChange={setTimePeriod}>
              <SelectTrigger size="sm" className="w-[140px] bg-white/80 border-slate-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1">
            {displayCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-forest-600 to-forest-700 shadow-sm'
                      : 'text-slate-600 hover:bg-white/60 bg-white/40'
                  }`}
                >
                  <Icon size={14} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="divide-y divide-slate-100/80 bg-white/50">
        {displayedEntries.map((entry) => {
          const isCurrentUser = entry.id === currentUserId || entry.isCurrentUser;
          const rankColor = entry.rank <= 3 ? rankColors[entry.rank - 1] : undefined;
          const isTopThree = entry.rank <= 3;

          return (
            <div
              key={entry.id}
              className={`px-4 py-3.5 flex items-center justify-between transition-all ${
                isCurrentUser 
                  ? 'bg-gradient-to-r from-forest-50 to-forest-50/50 border-l-4 border-forest-500 shadow-sm' 
                  : isTopThree
                  ? 'hover:bg-amber-50/50'
                  : 'hover:bg-slate-50/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      isTopThree ? 'shadow-md' : ''
                    }`}
                    style={{
                      backgroundColor: rankColor ? `${rankColor}25` : 'rgb(241 245 249)',
                      color: rankColor || 'rgb(71 85 105)',
                      border: rankColor ? `2px solid ${rankColor}` : '2px solid rgb(226 232 240)',
                    }}
                  >
                    {entry.rank}
                  </div>
                  {entry.rank === 1 && (
                    <div className="absolute -top-1 -right-1">
                      <Crown size={12} className="text-amber-500" fill="currentColor" />
                    </div>
                  )}
                </div>
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                    isCurrentUser 
                      ? 'bg-gradient-to-br from-forest-500 to-forest-600 text-white shadow-md' 
                      : 'bg-gradient-to-br from-slate-200 to-slate-300 text-slate-700'
                  }`}
                >
                  {entry.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${
                      isCurrentUser ? 'text-forest-900' : 'text-slate-900'
                    }`}>
                      {entry.name}
                    </span>
                    {isCurrentUser && (
                      <Badge variant="success" size="sm" className="shadow-sm">You</Badge>
                    )}
                    {entry.rank <= 3 && !isCurrentUser && (
                      <Sparkles size={12} className="text-amber-500" />
                    )}
                  </div>
                  {entry.location && (
                    <p className="text-xs text-slate-500 mt-0.5">{entry.location}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                {showXpDetails && entry.badges !== undefined && (
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-amber-50 border border-amber-200 text-xs text-amber-700">
                    <Award size={12} />
                    <span className="font-medium">{entry.badges}</span>
                  </div>
                )}
                {showXpDetails && entry.level && (
                  <div className="px-2.5 py-1 rounded-md text-xs font-semibold bg-gradient-to-r from-forest-100 to-forest-50 text-forest-700 border border-forest-200">
                    Lvl {entry.level}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  {entry.rank <= 3 && (
                    <TrendingUp size={14} className="text-amber-500" />
                  )}
                  <p className={`text-sm font-bold ${
                    isCurrentUser ? 'text-forest-700' : 'text-slate-900'
                  }`}>
                    {typeof entry.metric === 'number' ? entry.metric.toLocaleString() : entry.metric}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-3 border-t border-slate-200/60 bg-gradient-to-r from-slate-50 to-white">
        <Button
          variant="secondary"
          className="w-full shadow-sm hover:shadow-md transition-shadow"
          size="sm"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show Top 10'}
        </Button>
      </div>
    </Card>
  );
}
