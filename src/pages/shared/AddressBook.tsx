import { useTranslation } from 'react-i18next';
import { Card, Button, Input, Label } from '@mira/ui';
import { PageHeader } from '@mira/ui';

export default function AddressBook() {
  const { t } = useTranslation();
  const addresses = [
    {
      id: 'addr-001',
      name: 'Home',
      street: 'Musterstraße 123',
      city: 'Munich',
      postalCode: '80331',
      country: 'Germany',
      default: true,
    },
  ];

  return (
    <div>
      <PageHeader
        title={t('shared.addressBook.title')}
        subtitle={t('shared.addressBook.subtitle')}
        actions={
          <Button>{t('shared.addressBook.addNew')}</Button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <Card key={address.id} noPadding>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-slate-900">{address.name}</h3>
                  {address.default && (
                    <span className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded mt-1 inline-block">
                      {t('shared.addressBook.default')}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">{t('shared.addressBook.edit')}</Button>
                  <Button variant="danger" size="sm">{t('shared.addressBook.delete')}</Button>
                </div>
              </div>
              <div className="text-sm text-slate-600 space-y-1">
                <p>{address.street}</p>
                <p>{address.postalCode} {address.city}</p>
                <p>{address.country}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
