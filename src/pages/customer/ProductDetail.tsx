import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Button, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@mira/ui';
import { mockProducts } from '../../data/mockData';

interface ProductDetailProps {
  productId: string;
  onBack: () => void;
  onAddToCart: () => void;
}

export default function ProductDetail({ productId, onBack, onAddToCart }: ProductDetailProps) {
  const { t } = useTranslation();
  // If no productId provided or product not found, default to first product
  const product = productId 
    ? mockProducts.find((p) => p.id === productId) 
    : mockProducts[0];
  
  // Fallback to first product if still not found
  const displayProduct = product || mockProducts[0];
  
  const [selectedSku, setSelectedSku] = useState(displayProduct?.skus[0]);
  const [quantity, setQuantity] = useState(1);
  const [frequency, setFrequency] = useState('4 weeks');

  if (!displayProduct) {
    return <div>No products available</div>;
  }

  return (
    <div>
      <Button variant="secondary" onClick={onBack} className="mb-6">
        {t('customer.product.backToShop')}
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="aspect-square bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-6xl">🐾</span>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{displayProduct.name}</h1>
          <p className="text-lg text-slate-600 mb-6">{displayProduct.description}</p>

          <Card noPadding>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('customer.product.size')}</label>
                <div className="grid grid-cols-2 gap-2">
                  {displayProduct.skus.map((sku) => (
                    <button
                      key={sku.id}
                      onClick={() => setSelectedSku(sku)}
                      className={`p-3 border-2 rounded-lg text-left ${
                        selectedSku?.id === sku.id
                          ? 'border-forest-600 bg-forest-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <p className="font-medium text-slate-900">{sku.weight}kg</p>
                      <p className="text-sm text-slate-600">€{sku.price.toFixed(2)}/month</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t('customer.product.deliveryFrequency')}</label>
                <Select
                  value={frequency}
                  onValueChange={(value) => setFrequency(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t('customer.product.selectFrequency')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2 weeks">{t('customer.product.every2Weeks')}</SelectItem>
                    <SelectItem value="4 weeks">{t('customer.product.every4Weeks')}</SelectItem>
                    <SelectItem value="6 weeks">{t('customer.product.every6Weeks')}</SelectItem>
                    <SelectItem value="8 weeks">{t('customer.product.every8Weeks')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-600">{t('customer.product.monthlyPrice')}</span>
                  <span className="text-2xl font-bold text-forest-600">
                    €{selectedSku?.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-600">{t('customer.product.impact')}</span>
                  <span className="text-sm text-forest-600">
                    {t('customer.product.feedsMeals', { count: selectedSku ? selectedSku.weight * selectedSku.impactMultiplier : 0 })}
                  </span>
                </div>
              </div>

              <Button onClick={onAddToCart} className="w-full" size="lg">
                {t('customer.product.addToCart')}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
