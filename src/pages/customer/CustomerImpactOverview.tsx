import { useTranslation } from 'react-i18next';
import { PageHeader, Card, ImpactCounter, Button } from '@mira/ui';
import { currentCustomer } from '../../data/mockData';

export default function CustomerImpactOverview() {
  const { t } = useTranslation();
  
  return (
    <div>
      <PageHeader
        title={t('customer.impact.overview.title')}
        subtitle={t('customer.impact.overview.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card noPadding>
          <div className="p-6">
            <ImpactCounter
              label={t('customer.impact.overview.foodDonated')}
              value={currentCustomer.impact.foodKg}
              unit="kg"
              icon="🍽️"
            />
          </div>
        </Card>
        <Card noPadding>
          <div className="p-6">
            <ImpactCounter
              label={t('customer.impact.overview.neuteringsFunded')}
              value={currentCustomer.impact.neuterings}
              unit=""
              icon="✂️"
            />
          </div>
        </Card>
        <Card noPadding>
          <div className="p-6">
            <ImpactCounter
              label={t('customer.impact.overview.animalsHelped')}
              value={currentCustomer.impact.animalsHelped}
              unit=""
              icon="🐾"
            />
          </div>
        </Card>
      </div>

      <Card noPadding>
        <div className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">{t('customer.impact.overview.recentImpact')}</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-slate-900">{t('customer.impact.overview.kgDelivered', { kg: 6, shelter: 'Shelter A' })}</p>
                <p className="text-sm text-slate-600">{t('customer.impact.overview.fromLastOrder', { date: '2025-12-18' })}</p>
              </div>
              <Button variant="ghost" size="sm">{t('customer.impact.overview.viewOrder')}</Button>
            </div>
            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-slate-900">{t('customer.impact.overview.neuteringFunded', { count: 1 })}</p>
                <p className="text-sm text-slate-600">{t('customer.impact.overview.fromSubscriptionRenewal', { date: '2025-12-15' })}</p>
              </div>
              <Button variant="ghost" size="sm">{t('customer.impact.overview.viewDetails')}</Button>
            </div>
          </div>
        </div>
      </Card>

      <Card noPadding className="mt-6">
        <div className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">{t('customer.impact.overview.shareYourImpact')}</h3>
          <p className="text-sm text-slate-600 mb-4">
            {t('customer.impact.overview.shareStory')}
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button variant="primary" className="bg-blue-600 hover:bg-blue-700">
              {t('customer.impact.overview.shareOnFacebook')}
            </Button>
            <Button variant="primary" className="bg-sky-500 hover:bg-sky-600">
              {t('customer.impact.overview.shareOnTwitter')}
            </Button>
            <Button variant="secondary">{t('customer.impact.overview.copyLink')}</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
