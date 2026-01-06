import { useTranslation } from 'react-i18next';
import { Card, Button, Input, Label, IconButton } from '@mira/ui';
import { mockProducts } from '../../data/mockData';

interface ShoppingCartProps {
  onCheckout: () => void;
  onBack: () => void;
}

export default function ShoppingCart({ onCheckout, onBack }: ShoppingCartProps) {
  const { t } = useTranslation();
  // Mock cart items
  const cartItems = [
    {
      product: mockProducts[0],
      sku: mockProducts[0].skus[2],
      quantity: 1,
      frequency: '4 weeks',
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.sku.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div>
      <Button variant="secondary" onClick={onBack} className="mb-6">
        {t('customer.cart.continueShopping')}
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card noPadding>
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">{t('customer.cart.title')}</h2>
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 border border-slate-200 rounded-lg">
                    <div className="w-24 h-24 bg-slate-200 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🐾</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{item.product.name}</h3>
                      <p className="text-sm text-slate-600">{item.sku.weight}kg • {item.frequency}</p>
                      <p className="text-lg font-bold text-forest-600 mt-2">
                        €{item.sku.price.toFixed(2)}/month
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="secondary" size="sm">-</Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button variant="secondary" size="sm">+</Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">{t('customer.cart.remove')}</Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card noPadding className="mt-6">
            <div className="p-6">
              <h3 className="font-semibold text-slate-900 mb-4">{t('customer.cart.referralCode')}</h3>
              <div className="flex gap-2">
                <Input placeholder={t('customer.cart.enterReferralCode')} className="flex-1" />
                <Button variant="secondary">{t('customer.cart.apply')}</Button>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card noPadding>
            <div className="p-6">
              <h3 className="font-semibold text-slate-900 mb-4">{t('customer.cart.orderSummary')}</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">{t('customer.cart.subtotal')}</span>
                  <span className="font-medium text-slate-900">€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">{t('customer.cart.shipping')}</span>
                  <span className="font-medium text-slate-900">{t('customer.cart.free')}</span>
                </div>
                <div className="pt-3 border-t border-slate-200 flex justify-between">
                  <span className="font-semibold text-slate-900">{t('customer.cart.total')}</span>
                  <span className="text-xl font-bold text-forest-600">€{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  {t('customer.cart.orderWillFeed', { count: Math.round(cartItems[0].sku.weight * cartItems[0].sku.impactMultiplier) })}
                </p>
              </div>

              <Button onClick={onCheckout} className="w-full" size="lg">
                {t('customer.cart.proceedToCheckout')}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
