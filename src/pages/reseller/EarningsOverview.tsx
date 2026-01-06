import { useTranslation } from 'react-i18next';
import { PageHeader, Card, EarningsTile, Button } from '@mira/ui';
import { currentReseller } from '../../data/mockData';

export default function EarningsOverview() {
  const { t } = useTranslation();
  
  return (
    <div>
      <PageHeader
        title={t('reseller.earnings.title')}
        subtitle={t('reseller.earnings.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <EarningsTile
          current={currentReseller.earnings.thisMonth}
          previous={currentReseller.earnings.lastMonth}
          period={t('reseller.earnings.thisMonth')}
        />
        <Card noPadding>
          <div className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">{t('reseller.earnings.availableForPayout')}</h3>
            <p className="text-3xl font-bold text-forest-600 mb-2">
              €{currentReseller.earnings.available.toFixed(2)}
            </p>
            <p className="text-sm text-slate-600 mb-4">
              {t('reseller.earnings.minimumThreshold', { amount: 100.00 })}
            </p>
            <Button>{t('reseller.earnings.requestPayout')}</Button>
          </div>
        </Card>
      </div>

      <Card noPadding>
        <div className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">{t('reseller.earnings.earningsSummary')}</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-slate-200">
              <span className="text-slate-600">{t('reseller.earnings.totalEarnings')}</span>
              <span className="font-semibold text-slate-900">€{currentReseller.earnings.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-200">
              <span className="text-slate-600">{t('reseller.earnings.thisMonth')}</span>
              <span className="font-semibold text-forest-600">€{currentReseller.earnings.thisMonth.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-200">
              <span className="text-slate-600">{t('reseller.earnings.lastMonth')}</span>
              <span className="font-semibold text-slate-900">€{currentReseller.earnings.lastMonth.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-600">{t('reseller.earnings.availableBalance')}</span>
              <span className="font-semibold text-forest-600">€{currentReseller.earnings.available.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
