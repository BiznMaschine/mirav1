import { useTranslation } from 'react-i18next';
import { PageHeader, Card, DataTable, Badge, Button, Input, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@mira/ui';
import { mockOrders } from '../../data/mockData';

export default function OrderManagement() {
  const { t } = useTranslation();
  const columns = [
    { key: 'orderId', label: t('admin.orderManagement.columns.orderId') },
    { key: 'date', label: t('admin.orderManagement.columns.date') },
    { key: 'customer', label: t('admin.orderManagement.columns.customer') },
    { key: 'reseller', label: t('admin.orderManagement.columns.reseller') },
    { key: 'total', label: t('admin.orderManagement.columns.total') },
    { key: 'status', label: t('admin.orderManagement.columns.status') },
    { key: 'actions', label: t('admin.orderManagement.columns.actions') },
  ];

  const data = mockOrders.map((order) => ({
    orderId: order.id,
    date: order.date,
    customer: 'Customer Name',
    reseller: 'Reseller Name',
    total: order.total,
    status: order.status,
  }));

  const columnsWithRender = columns.map((col) => {
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
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">{t('admin.orderManagement.view')}</Button>
          </div>
        ),
      };
    }
    return col;
  });

  return (
    <div>
      <PageHeader
        title={t('admin.orderManagement.title')}
        subtitle={t('admin.orderManagement.subtitle')}
        actions={
          <div className="flex gap-2">
            <Input placeholder={t('admin.orderManagement.searchPlaceholder')} className="w-64" />
            <Select defaultValue="all">
              <SelectTrigger size="sm" className="w-[140px]">
                <SelectValue placeholder={t('admin.orderManagement.status')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('admin.orderManagement.allStatus')}</SelectItem>
                <SelectItem value="pending">{t('admin.orderManagement.pending')}</SelectItem>
                <SelectItem value="paid">{t('admin.orderManagement.paid')}</SelectItem>
                <SelectItem value="processing">{t('admin.orderManagement.processing')}</SelectItem>
                <SelectItem value="shipped">{t('admin.orderManagement.shipped')}</SelectItem>
                <SelectItem value="delivered">{t('admin.orderManagement.delivered')}</SelectItem>
                <SelectItem value="completed">{t('admin.orderManagement.completed')}</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="secondary">{t('admin.orderManagement.exportCsv')}</Button>
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
