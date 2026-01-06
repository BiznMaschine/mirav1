import { useTranslation } from 'react-i18next';
import { Card, Button, Badge, PageHeader } from '@mira/ui';
import { Package, Edit, Pause, Play, PawPrint } from 'lucide-react';

export default function MySubscriptions() {
  const { t } = useTranslation();
  const subscriptions = [
    {
      id: 'sub-001',
      productName: 'Premium Dog Food',
      variant: '12kg Sack - Chicken',
      price: 69.99,
      frequency: 'Monthly',
      nextDelivery: '28 Dec 2025',
      status: 'active' as const,
      pawsPerOrder: 350,
    },
    {
      id: 'sub-002',
      productName: 'Organic Cat Food',
      variant: '5kg Sack - Fish',
      price: 49.99,
      frequency: '6 Weeks',
      nextDelivery: 'Paused',
      status: 'paused' as const,
      pawsPerOrder: 250,
    },
  ];

  return (
    <div>
      <PageHeader
        title={t('customer.subscriptions.title')}
        subtitle={t('customer.subscriptions.subtitle')}
      />

      <div className="space-y-4">
        {subscriptions.map((subscription) => {
          const statusColors = {
            active: { bg: 'bg-forest-100', text: 'text-forest-700', label: t('customer.subscriptions.active') },
            paused: { bg: 'bg-amber-100', text: 'text-amber-700', label: t('customer.subscriptions.paused') },
            cancelled: { bg: 'bg-red-100', text: 'text-red-700', label: t('customer.subscriptions.cancelled') },
          };
          const status = statusColors[subscription.status] || statusColors.active;

          return (
            <Card key={subscription.id} noPadding>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Package size={24} className="text-slate-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{subscription.productName}</h4>
                      <p className="text-sm text-slate-500">{subscription.variant}</p>
                    </div>
                  </div>
                  <Badge variant={subscription.status === 'active' ? 'success' : 'warning'} size="sm">
                    {status.label}
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-3 py-3 border-t border-b border-slate-200">
                  <div>
                    <p className="text-xs text-slate-500">{t('customer.subscriptions.price')}</p>
                    <p className="text-sm font-semibold text-slate-900">€{subscription.price}/Month</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{t('customer.subscriptions.interval')}</p>
                    <p className="text-sm font-semibold text-slate-900">{subscription.frequency}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{t('customer.subscriptions.nextDelivery')}</p>
                    <p className="text-sm font-semibold text-slate-900">{subscription.nextDelivery}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 text-xs text-purple-600">
                    <PawPrint size={12} />
                    <span>{t('customer.subscriptions.pawsPerDelivery', { count: subscription.pawsPerOrder })}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm" className="flex items-center gap-1">
                      <Edit size={12} />
                      {t('customer.subscriptions.edit')}
                    </Button>
                    {subscription.status === 'active' ? (
                      <Button variant="secondary" size="sm" className="flex items-center gap-1">
                        <Pause size={12} />
                        {t('customer.subscriptions.pause')}
                      </Button>
                    ) : (
                      <Button variant="primary" size="sm" className="flex items-center gap-1">
                        <Play size={12} />
                        {t('customer.subscriptions.resume')}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
