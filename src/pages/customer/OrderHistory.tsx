import { useTranslation } from 'react-i18next';
import { Card, DataTable, Badge, PageHeader, Button } from '@mira/ui';
import { mockOrders } from '../../data/mockData';

export default function OrderHistory() {
  const { t } = useTranslation();
  
  const columns = [
    { key: 'date', label: t('customer.orders.date') },
    { key: 'orderId', label: t('customer.orders.orderId') },
    { key: 'items', label: t('customer.orders.items') },
    { key: 'total', label: t('customer.orders.total') },
    { key: 'status', label: t('customer.orders.status') },
    { key: 'actions', label: t('customer.orders.actions') },
  ];

  const data = mockOrders.map((order) => ({
    date: order.date,
    orderId: order.id,
    items: order.items.length,
    total: order.total,
    status: order.status,
  }));

  const columnsWithRender = columns.map((col) => {
    if (col.key === 'items') {
      return {
        ...col,
        render: (value: number) => t('customer.orders.itemCount', { count: value }),
      };
    }
    if (col.key === 'total') {
      return {
        ...col,
        render: (value: number) => `€${value.toFixed(2)}`,
      };
    }
    if (col.key === 'status') {
      return {
        ...col,
        render: (value: string) => (
          <Badge variant={value === 'completed' ? 'success' : 'warning'}>
            {value}
          </Badge>
        ),
      };
    }
    if (col.key === 'actions') {
      return {
        ...col,
        render: () => (
          <Button variant="ghost" size="sm">{t('customer.orders.viewDetails')}</Button>
        ),
      };
    }
    return col;
  });

  return (
    <div>
      <PageHeader
        title={t('customer.orders.title')}
        subtitle={t('customer.orders.subtitle')}
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
