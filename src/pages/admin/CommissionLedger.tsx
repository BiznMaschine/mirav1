import { useTranslation } from 'react-i18next';
import { PageHeader, Card, DataTable, Badge, Button, Input } from '@mira/ui';
import { mockCommissions } from '../../data/mockData';

export default function CommissionLedger() {
  const { t } = useTranslation();
  const columns = [
    { key: 'date', label: t('admin.commissionLedger.columns.date') },
    { key: 'resellerId', label: t('admin.commissionLedger.columns.resellerId') },
    { key: 'orderId', label: t('admin.commissionLedger.columns.orderId') },
    { key: 'amount', label: t('admin.commissionLedger.columns.amount') },
    { key: 'level', label: t('admin.commissionLedger.columns.level') },
    { key: 'type', label: t('admin.commissionLedger.columns.type') },
    { key: 'status', label: t('admin.commissionLedger.columns.status') },
  ];

  const data = mockCommissions.map((comm) => ({
    date: comm.date,
    resellerId: comm.resellerId,
    orderId: comm.orderId,
    amount: comm.amount,
    level: comm.level,
    type: comm.type,
    status: comm.status,
  }));

  const columnsWithRender = columns.map((col) => {
    if (col.key === 'amount') {
      return {
        ...col,
        render: (value: number) => `€${value.toFixed(2)}`,
      };
    }
    if (col.key === 'level') {
      return {
        ...col,
        render: (value: number) => `L${value}`,
      };
    }
    if (col.key === 'type') {
      return {
        ...col,
        render: (value: string) => value === 'unilevel' ? t('admin.commissionLedger.unilevel') : t('admin.commissionLedger.rankBonus'),
      };
    }
    if (col.key === 'status') {
      return {
        ...col,
        render: (value: string) => (
          <Badge variant={value === 'paid' ? 'success' : 'warning'}>
            {value}
          </Badge>
        ),
      };
    }
    return col;
  });

  return (
    <div>
      <PageHeader
        title={t('admin.commissionLedger.title')}
        subtitle={t('admin.commissionLedger.subtitle')}
        actions={
          <div className="flex gap-2">
            <Input type="date" className="w-40" />
            <Input type="date" className="w-40" />
            <Button variant="secondary">{t('admin.commissionLedger.exportCsv')}</Button>
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
