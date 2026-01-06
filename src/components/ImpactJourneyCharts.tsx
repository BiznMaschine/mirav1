/**
 * Impact Journey Charts Variant
 * 
 * Shows impact through charts and graphs
 */

import { Card } from '@mira/ui';
import { TrendingUp, BarChart3, PieChart } from 'lucide-react';

export interface ImpactJourneyChartsProps {
  impact: {
    foodKg: number;
    neuterings: number;
    animalsHelped: number;
  };
  monthlyData?: Array<{
    month: string;
    food: number;
    neuterings: number;
    animals: number;
  }>;
  className?: string;
}

export default function ImpactJourneyCharts({ impact, monthlyData, className }: ImpactJourneyChartsProps) {
  const defaultMonthlyData = monthlyData || [
    { month: 'Jan', food: 50, neuterings: 0, animals: 2 },
    { month: 'Feb', food: 75, neuterings: 1, animals: 3 },
    { month: 'Mar', food: 100, neuterings: 1, animals: 4 },
    { month: 'Apr', food: 120, neuterings: 2, animals: 5 },
    { month: 'May', food: 150, neuterings: 2, animals: 6 },
    { month: 'Jun', food: 180, neuterings: 3, animals: 8 },
  ];

  const maxFood = Math.max(...defaultMonthlyData.map(d => d.food));
  const maxAnimals = Math.max(...defaultMonthlyData.map(d => d.animals));

  // Pie chart data
  const total = impact.foodKg + (impact.neuterings * 50) + (impact.animalsHelped * 10);
  const foodPercent = (impact.foodKg / total) * 100;
  const neuterPercent = ((impact.neuterings * 50) / total) * 100;
  const animalPercent = ((impact.animalsHelped * 10) / total) * 100;

  return (
    <Card noPadding className={className}>
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Your Impact Journey</h2>
          <p className="text-slate-600">
            Analyze your impact through data and trends
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Bar Chart - Monthly Trend */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-forest-600" />
              <h3 className="text-lg font-semibold text-slate-900">Monthly Trend</h3>
            </div>
            <div className="space-y-3">
              {defaultMonthlyData.map((data, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-slate-700">{data.month}</span>
                    <span className="text-xs text-slate-500">{data.food} kg</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-4">
                    <div
                      className="bg-forest-600 h-4 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                      style={{ width: `${(data.food / maxFood) * 100}%` }}
                    >
                      <span className="text-xs font-medium text-white">{data.food}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pie Chart - Impact Distribution */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PieChart className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-slate-900">Impact Distribution</h3>
            </div>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-48 h-48">
                <svg className="transform -rotate-90 w-full h-full">
                  {/* Food segment */}
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="32"
                    strokeDasharray={`${2 * Math.PI * 80 * (foodPercent / 100)} ${2 * Math.PI * 80}`}
                    strokeDashoffset="0"
                  />
                  {/* Neuterings segment */}
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    fill="none"
                    stroke="#9333ea"
                    strokeWidth="32"
                    strokeDasharray={`${2 * Math.PI * 80 * (neuterPercent / 100)} ${2 * Math.PI * 80}`}
                    strokeDashoffset={`-${2 * Math.PI * 80 * (foodPercent / 100)}`}
                  />
                  {/* Animals segment */}
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="32"
                    strokeDasharray={`${2 * Math.PI * 80 * (animalPercent / 100)} ${2 * Math.PI * 80}`}
                    strokeDashoffset={`-${2 * Math.PI * 80 * ((foodPercent + neuterPercent) / 100)}`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">Total</div>
                    <div className="text-sm text-slate-600">Impact</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-forest-600"></div>
                  <span className="text-sm text-slate-700">Food Donated</span>
                </div>
                <span className="text-sm font-semibold text-slate-900">{Math.round(foodPercent)}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  <span className="text-sm text-slate-700">Neuterings</span>
                </div>
                <span className="text-sm font-semibold text-slate-900">{Math.round(neuterPercent)}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-600"></div>
                  <span className="text-sm text-slate-700">Animals Helped</span>
                </div>
                <span className="text-sm font-semibold text-slate-900">{Math.round(animalPercent)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="pt-6 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-forest-600" />
            <h3 className="text-lg font-semibold text-slate-900">Impact Summary</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-forest-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-forest-600 mb-1">{impact.foodKg.toLocaleString()}</div>
              <div className="text-sm text-slate-700">kg Food</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">{impact.neuterings}</div>
              <div className="text-sm text-slate-700">Neuterings</div>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-amber-600 mb-1">{impact.animalsHelped}</div>
              <div className="text-sm text-slate-700">Animals</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
