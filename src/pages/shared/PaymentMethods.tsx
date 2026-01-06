import { useTranslation } from 'react-i18next';
import { Card, Button } from '@mira/ui';
import { PageHeader } from '@mira/ui';

export default function PaymentMethods() {
  const { t } = useTranslation();
  const paymentMethods = [
    {
      id: 'pm-001',
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      expiry: '12/25',
      default: true,
    },
  ];

  return (
    <div>
      <PageHeader
        title={t('shared.paymentMethods.title')}
        subtitle={t('shared.paymentMethods.subtitle')}
        actions={
          <Button>{t('shared.paymentMethods.addNew')}</Button>
        }
      />

      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <Card key={method.id} noPadding>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 bg-slate-200 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">VISA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      •••• •••• •••• {method.last4}
                    </p>
                    <p className="text-sm text-slate-600">{t('shared.paymentMethods.expires')} {method.expiry}</p>
                  </div>
                  {method.default && (
                    <span className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded">
                      {t('shared.paymentMethods.default')}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">{t('shared.paymentMethods.edit')}</Button>
                  <Button variant="danger" size="sm">{t('shared.paymentMethods.remove')}</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
