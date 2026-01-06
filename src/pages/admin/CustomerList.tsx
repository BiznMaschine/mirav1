import { useTranslation } from 'react-i18next';
import { PageHeader, Card, DataTable, Button, Input } from '@mira/ui';
import { mockCustomers } from '../../data/mockData';

export default function CustomerList() {
  const { t } = useTranslation();
  const columns = [
    { key: 'name', label: t('admin.customerList.columns.name') },
    { key: 'email', label: t('admin.customerList.columns.email') },
    { key: 'orders', label: t('admin.customerList.columns.orders') },
    { key: 'subscriptions', label: t('admin.customerList.columns.subscriptions') },
    { key: 'totalSpent', label: t('admin.customerList.columns.totalSpent') },
    { key: 'joinDate', label: t('admin.customerList.columns.joinDate') },
    { key: 'actions', label: t('admin.customerList.columns.actions') },
  ];

  const data = mockCustomers.map((customer) => ({
    name: customer.name,
    email: customer.email,
    orders: customer.orders,
    subscriptions: customer.subscriptions,
    totalSpent: customer.totalSpent,
    joinDate: customer.joinDate,
  }));

  const columnsWithRender = columns.map((col) => {
    if (col.key === 'totalSpent') {
      return {
        ...col,
        render: (value: number) => `€${value.toFixed(2)}`,
      };
    }
    if (col.key === 'actions') {
      return {
        ...col,
        render: () => (
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">{t('admin.customerList.view')}</Button>
          </div>
        ),
      };
    }
    return col;
  });

  return (
    <div>
      <PageHeader
        title={t('admin.customerList.title')}
        subtitle={t('admin.customerList.subtitle')}
        actions={
          <div className="flex gap-2">
            <Input placeholder={t('admin.customerList.searchPlaceholder')} className="w-64" />
            <Button variant="secondary">{t('admin.customerList.exportCsv')}</Button>
          </div>
        }
      />

      <Card noPadding>
        <div className="p-6">
          <div className="overflow-x-auto -mx-6 md:mx-0">
            <div className="inline-block min-w-full px-6 md:px-0">
              <DataTable columns={columnsWithRender} data={data} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
