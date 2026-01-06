/**
 * YourShelterWidget Component
 * 
 * Displays the user's assigned shelter with key information,
 * urgency level, user impact, and animal count.
 */

import { useTranslation } from 'react-i18next';
import { Card, Badge, Button } from '@mira/ui';
import { MapPin, Heart, ArrowRight } from 'lucide-react';
import { Shelter } from '../data/mockData';

export interface YourShelterWidgetProps {
  shelter: Shelter;
  userImpactKg: number;
  className?: string;
}

export default function YourShelterWidget({ 
  shelter, 
  userImpactKg, 
  className 
}: YourShelterWidgetProps) {
  const { t } = useTranslation();

  const urgencyBadgeVariant = 
    shelter.urgencyLevel === 'EMERGENCY' ? 'error' :
    shelter.urgencyLevel === 'URGENT' ? 'warning' : 'success';

  const urgencyLabel = 
    shelter.urgencyLevel === 'EMERGENCY' ? t('veto.shelter.emergency') :
    shelter.urgencyLevel === 'URGENT' ? t('veto.shelter.urgent') : t('veto.shelter.normal');

  return (
    <Card noPadding className={className}>
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Heart className="w-4 h-4 text-forest-600" />
              <h3 className="font-semibold text-slate-900">{t('veto.yourShelter')}</h3>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">{shelter.name}</h4>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="w-3 h-3" />
              <span>{shelter.city}, {shelter.country}</span>
            </div>
          </div>
          <Badge variant={urgencyBadgeVariant} size="sm">
            {urgencyLabel}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-slate-50 rounded-lg p-2">
            <p className="text-xs text-slate-600">{t('veto.yourImpact')}</p>
            <p className="text-lg font-bold text-forest-600">{userImpactKg.toLocaleString()} kg</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-2">
            <p className="text-xs text-slate-600">{t('veto.animals')}</p>
            <p className="text-lg font-bold text-slate-900">
              {shelter.currentAnimalCount.dogs + shelter.currentAnimalCount.cats}
            </p>
          </div>
        </div>

        <p className="text-xs text-slate-600 mb-3 line-clamp-2">{t(shelter.storyKey)}</p>

        <Button variant="ghost" size="sm" className="w-full">
          {t('veto.viewShelterProfile')} <ArrowRight className="w-3 h-3 ml-1" />
        </Button>
      </div>
    </Card>
  );
}

