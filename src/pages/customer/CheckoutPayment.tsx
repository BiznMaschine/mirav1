import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Button, Input, Label } from '@mira/ui';

interface CheckoutPaymentProps {
  onComplete: () => void;
  onBack: () => void;
}

export default function CheckoutPayment({ onComplete, onBack }: CheckoutPaymentProps) {
  const { t } = useTranslation();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: '',
  });

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
          <span className="px-3 py-1 border border-slate-300 rounded-full">{t('customer.checkout.step1')}</span>
          <span>{t('customer.checkout.delivery')}</span>
          <span>→</span>
          <span className="px-3 py-1 bg-forest-600 text-white rounded-full">{t('customer.checkout.step2')}</span>
          <span>{t('customer.checkout.payment')}</span>
          <span>→</span>
          <span className="px-3 py-1 border border-slate-300 rounded-full">{t('customer.checkout.step3')}</span>
          <span>{t('customer.checkout.review')}</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">{t('customer.checkout.payment.title')}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card noPadding>
            <div className="p-6 space-y-6">
              <div>
                <Label className="mb-3 block">{t('customer.checkout.payment.paymentMethod')}</Label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-slate-300">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="border-slate-300"
                    />
                    <span className="font-medium text-slate-900">{t('customer.checkout.payment.creditDebitCard')}</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-slate-300">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="border-slate-300"
                    />
                    <span className="font-medium text-slate-900">{t('customer.checkout.payment.paypal')}</span>
                  </label>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div>
                    <Label htmlFor="cardNumber">{t('customer.checkout.payment.cardNumber')}</Label>
                    <Input
                      id="cardNumber"
                      value={cardData.number}
                      onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                      placeholder={t('customer.checkout.payment.cardNumberPlaceholder')}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardName">{t('customer.checkout.payment.cardholderName')}</Label>
                    <Input
                      id="cardName"
                      value={cardData.name}
                      onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">{t('customer.checkout.payment.expiryDate')}</Label>
                      <Input
                        id="expiry"
                        value={cardData.expiry}
                        onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                        placeholder={t('customer.checkout.payment.expiryPlaceholder')}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">{t('customer.checkout.payment.cvv')}</Label>
                      <Input
                        id="cvv"
                        value={cardData.cvv}
                        onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                        placeholder={t('customer.checkout.payment.cvvPlaceholder')}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-2 pt-4 border-t border-slate-200">
                <input type="checkbox" id="terms" className="mt-1" required />
                <label htmlFor="terms" className="text-sm text-slate-600">
                  {t('customer.checkout.payment.agreeToTerms')}
                </label>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card noPadding>
            <div className="p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">Premium Dog Food 12kg</span>
                  <span className="font-medium">€69.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="pt-3 border-t border-slate-200 flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-forest-600">€69.99</span>
                </div>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
                <p className="text-sm text-green-800">
                  {t('customer.checkout.payment.orderWillFeed', { count: 6 })}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <Button variant="secondary" onClick={onBack} className="flex-1">
          {t('customer.checkout.payment.back')}
        </Button>
        <Button onClick={onComplete} className="flex-1">
          {t('customer.checkout.payment.completeOrder')}
        </Button>
      </div>
    </div>
  );
}
