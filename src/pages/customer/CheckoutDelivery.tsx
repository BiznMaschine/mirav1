import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Button, Input, Label, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@mira/ui';

interface CheckoutDeliveryProps {
  onNext: () => void;
  onBack: () => void;
}

export default function CheckoutDelivery({ onNext, onBack }: CheckoutDeliveryProps) {
  const { t } = useTranslation();
  const [address, setAddress] = useState({
    street: '',
    city: '',
    postalCode: '',
    country: 'Germany',
  });

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
          <span className="px-3 py-1 bg-forest-600 text-white rounded-full">{t('customer.checkout.step1')}</span>
          <span>{t('customer.checkout.delivery')}</span>
          <span>→</span>
          <span className="px-3 py-1 border border-slate-300 rounded-full">{t('customer.checkout.step2')}</span>
          <span>{t('customer.checkout.payment')}</span>
          <span>→</span>
          <span className="px-3 py-1 border border-slate-300 rounded-full">{t('customer.checkout.step3')}</span>
          <span>{t('customer.checkout.review')}</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">{t('customer.checkout.delivery.title')}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card noPadding>
            <div className="p-6 space-y-4">
              <div>
                <Label htmlFor="street">{t('customer.checkout.delivery.streetAddress')}</Label>
                <Input
                  id="street"
                  value={address.street}
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="postalCode">{t('customer.checkout.delivery.postalCode')}</Label>
                  <Input
                    id="postalCode"
                    value={address.postalCode}
                    onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="city">{t('customer.checkout.delivery.city')}</Label>
                  <Input
                    id="city"
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="country">{t('customer.checkout.delivery.country')}</Label>
                <Select
                  value={address.country}
                  onValueChange={(value) => setAddress({ ...address, country: value })}
                >
                  <SelectTrigger id="country" className="w-full mt-1">
                    <SelectValue placeholder={t('customer.checkout.delivery.selectCountry')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Germany">{t('customer.checkout.delivery.germany')}</SelectItem>
                    <SelectItem value="Austria">{t('customer.checkout.delivery.austria')}</SelectItem>
                    <SelectItem value="Switzerland">{t('customer.checkout.delivery.switzerland')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card noPadding>
            <div className="p-6">
              <h3 className="font-semibold text-slate-900 mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
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
            </div>
          </Card>
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <Button variant="secondary" onClick={onBack} className="flex-1">
          {t('customer.checkout.delivery.backToCart')}
        </Button>
        <Button onClick={onNext} className="flex-1">
          {t('customer.checkout.delivery.continueToPayment')}
        </Button>
      </div>
    </div>
  );
}
