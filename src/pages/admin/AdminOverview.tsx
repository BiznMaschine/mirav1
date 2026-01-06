import { useTranslation } from 'react-i18next';
import { PageHeader, Card, Button } from '@mira/ui';
import { mockPlatformMetrics } from '../../data/mockData';

export default function AdminOverview() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'de' ? 'de-DE' : 'en-GB';
  return (
    <div>
      <PageHeader
        title={t('admin.overview.title')}
        subtitle={t('admin.overview.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <div className="p-4">
            <p className="text-sm text-slate-600 mb-1">{t('admin.overview.totalResellers')}</p>
            <p className="text-2xl font-bold text-slate-900">{mockPlatformMetrics.totalResellers.toLocaleString(locale)}</p>
          </div>
        </Card>
        <Card>
          <div className="p-4">
            <p className="text-sm text-slate-600 mb-1">{t('admin.overview.totalCustomers')}</p>
            <p className="text-2xl font-bold text-slate-900">{mockPlatformMetrics.totalCustomers.toLocaleString(locale)}</p>
          </div>
        </Card>
        <Card>
          <div className="p-4">
            <p className="text-sm text-slate-600 mb-1">{t('admin.overview.totalOrders')}</p>
            <p className="text-2xl font-bold text-slate-900">{mockPlatformMetrics.totalOrders.toLocaleString(locale)}</p>
          </div>
        </Card>
        <Card>
          <div className="p-4">
            <p className="text-sm text-slate-600 mb-1">{t('admin.overview.revenue')}</p>
            <p className="text-2xl font-bold text-forest-600">€{mockPlatformMetrics.totalRevenue.toLocaleString(locale)}</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card noPadding>
          <div className="p-6">
            <p className="text-sm text-slate-600 mb-2">{t('admin.overview.foodDonated')}</p>
            <p className="text-3xl font-bold text-green-600">{mockPlatformMetrics.totalImpact.foodKg.toLocaleString(locale)} kg</p>
          </div>
        </Card>
        <Card noPadding>
          <div className="p-6">
            <p className="text-sm text-slate-600 mb-2">{t('admin.overview.neuteringsFunded')}</p>
            <p className="text-3xl font-bold text-blue-600">{mockPlatformMetrics.totalImpact.neuterings}</p>
          </div>
        </Card>
        <Card noPadding>
          <div className="p-6">
            <p className="text-sm text-slate-600 mb-2">{t('admin.overview.animalsHelped')}</p>
            <p className="text-3xl font-bold text-purple-600">{mockPlatformMetrics.totalImpact.animalsHelped.toLocaleString(locale)}</p>
          </div>
        </Card>
      </div>

      <Card noPadding>
        <div className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">{t('admin.overview.recentActivity')}</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-200">
              <div>
                <p className="text-sm font-medium text-slate-900">{t('admin.overview.newResellerRegistered')}</p>
                <p className="text-xs text-slate-600">{t('admin.overview.hoursAgo', { hours: 2 })}</p>
              </div>
              <Button variant="ghost" size="sm">{t('admin.overview.view')}</Button>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-200">
              <div>
                <p className="text-sm font-medium text-slate-900">{t('admin.overview.commissionConfigurationUpdated')}</p>
                <p className="text-xs text-slate-600">{t('admin.overview.hoursAgo', { hours: 5 })}</p>
              </div>
              <Button variant="ghost" size="sm">{t('admin.overview.view')}</Button>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-sm font-medium text-slate-900">{t('admin.overview.payoutBatchProcessed')}</p>
                <p className="text-xs text-slate-600">{t('admin.overview.daysAgo', { days: 1 })}</p>
              </div>
              <Button variant="ghost" size="sm">{t('admin.overview.view')}</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
