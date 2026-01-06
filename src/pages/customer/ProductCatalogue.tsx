import { useTranslation } from 'react-i18next';
import { Card, Button, PageHeader, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@mira/ui';
import { mockProducts } from '../../data/mockData';

interface ProductCatalogueProps {
  onProductClick: (productId: string) => void;
}

export default function ProductCatalogue({ onProductClick }: ProductCatalogueProps) {
  const { t } = useTranslation();
  
  return (
    <div>
      <PageHeader
        title={t('customer.shop.title')}
        subtitle={t('customer.shop.subtitle')}
      />

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex gap-2 flex-wrap">
          <Button variant="primary" size="sm" className="min-h-[44px] sm:min-h-0">{t('customer.shop.allProducts')}</Button>
          <Button variant="secondary" size="sm" className="min-h-[44px] sm:min-h-0">{t('customer.shop.dogs')}</Button>
          <Button variant="secondary" size="sm" className="min-h-[44px] sm:min-h-0">{t('customer.shop.cats')}</Button>
          <Button variant="secondary" size="sm" className="min-h-[44px] sm:min-h-0">{t('customer.shop.treats')}</Button>
        </div>
        <Select defaultValue="popular">
          <SelectTrigger size="sm" className="w-[160px]">
            <SelectValue placeholder={t('customer.shop.sortBy')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">{t('customer.shop.mostPopular')}</SelectItem>
            <SelectItem value="price-low">{t('customer.shop.priceLowToHigh')}</SelectItem>
            <SelectItem value="price-high">{t('customer.shop.priceHighToLow')}</SelectItem>
            <SelectItem value="newest">{t('customer.shop.newest')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <Card key={product.id} noPadding>
            <div className="p-6">
              <div className="aspect-square bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🐾</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{product.name}</h3>
              <p className="text-sm text-slate-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-lg font-bold text-forest-600">
                    {t('customer.shop.fromPrice', { price: Math.min(...product.skus.map((s) => s.price)).toFixed(2) })}
                  </p>
                  <p className="text-xs text-slate-600">{t('customer.shop.feedsMeals', { count: Math.min(...product.skus.map((s) => s.weight)) })}</p>
                </div>
              </div>
              <Button
                onClick={() => onProductClick(product.id)}
                className="w-full"
              >
                {t('customer.shop.viewDetails')}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
