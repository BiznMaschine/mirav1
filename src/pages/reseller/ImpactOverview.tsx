import { useTranslation } from 'react-i18next';
import { PageHeader, Card, ImpactCounter, Button } from '@mira/ui';
import { currentReseller } from '../../data/mockData';

export default function ImpactOverview() {
  const { t } = useTranslation();
  
  return (
    <div>
      <PageHeader
        title={t('reseller.impact.overview.title')}
        subtitle={t('reseller.impact.overview.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card noPadding>
          <div className="p-6">
            <ImpactCounter
              label={t('reseller.impact.overview.foodDonated')}
              value={currentReseller.impact.foodKg}
              unit="kg"
              icon="🍽️"
            />
          </div>
        </Card>
        <Card noPadding>
          <div className="p-6">
            <ImpactCounter
              label={t('reseller.impact.overview.neuteringsFunded')}
              value={currentReseller.impact.neuterings}
              unit=""
              icon="✂️"
            />
          </div>
        </Card>
        <Card noPadding>
          <div className="p-6">
            <ImpactCounter
              label={t('reseller.impact.overview.animalsHelped')}
              value={currentReseller.impact.animalsHelped}
              unit=""
              icon="🐾"
            />
          </div>
        </Card>
      </div>

      <Card noPadding>
        <div className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">{t('reseller.impact.overview.recentImpact')}</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-slate-900">{t('reseller.impact.overview.kgDelivered', { kg: 50, shelter: 'Shelter A' })}</p>
                <p className="text-sm text-slate-600">2025-12-15</p>
              </div>
              <Button variant="ghost" size="sm">{t('reseller.impact.overview.viewDetails')}</Button>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-slate-900">{t('reseller.impact.overview.neuteringFunded', { count: 2 })}</p>
                <p className="text-sm text-slate-600">2025-12-10</p>
              </div>
              <Button variant="ghost" size="sm">{t('reseller.impact.overview.viewDetails')}</Button>
            </div>
          </div>
        </div>
      </Card>

      <Card noPadding className="mt-6">
        <div className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">{t('reseller.impact.overview.shareYourImpact')}</h3>
          <p className="text-sm text-slate-600 mb-4">
            {t('reseller.impact.overview.shareStory')}
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button variant="primary" className="bg-blue-600 hover:bg-blue-700">
              {t('reseller.impact.overview.shareOnFacebook')}
            </Button>
            <Button variant="primary" className="bg-sky-500 hover:bg-sky-600">
              {t('reseller.impact.overview.shareOnTwitter')}
            </Button>
            <Button variant="secondary">{t('reseller.impact.overview.copyLink')}</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
