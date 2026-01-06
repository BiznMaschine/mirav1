import { useTranslation } from 'react-i18next';
import { Card, Button, ImpactCounter } from '@mira/ui';

interface OrderConfirmationProps {
  onContinue: () => void;
}

export default function OrderConfirmation({ onContinue }: OrderConfirmationProps) {
  const { t } = useTranslation();
  const orderNumber = 'ORD-2024-001234';

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">{t('customer.order.confirmed')}</h1>
        <p className="text-lg text-slate-600">{t('customer.order.thankYou')}</p>
      </div>

      <Card noPadding>
        <div className="p-8 space-y-6">
          <div>
            <p className="text-sm text-slate-600 mb-1">{t('customer.order.orderNumber')}</p>
            <p className="text-xl font-bold text-slate-900">{orderNumber}</p>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">{t('customer.order.yourImpact')}</h3>
            <div className="grid grid-cols-3 gap-4">
              <ImpactCounter label={t('customer.order.foodDonated')} value={6} unit="kg" />
              <ImpactCounter label={t('customer.order.mealsProvided')} value={12} unit="" />
              <ImpactCounter label={t('customer.order.animalsHelped')} value={2} unit="" />
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-3">{t('customer.order.whatsNext')}</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-forest-600 mt-1">✓</span>
                <span>{t('customer.order.emailConfirmation')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 mt-1">✓</span>
                <span>{t('customer.order.subscriptionStart')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-600 mt-1">✓</span>
                <span>{t('customer.order.trackOrder')}</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 pt-6">
            <Button variant="secondary" onClick={onContinue} className="flex-1">
              {t('customer.order.continueShopping')}
            </Button>
            <Button onClick={onContinue} className="flex-1">
              {t('customer.order.viewMyAccount')}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
