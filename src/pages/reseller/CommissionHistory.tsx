import { useTranslation } from 'react-i18next';
import { PageHeader, Card, DataTable, Badge, Button } from '@mira/ui';
import { mockCommissions } from '../../data/mockData';

export default function CommissionHistory() {
  const { t } = useTranslation();
  
  const columns = [
    { key: 'date', label: t('reseller.commission.date') },
    { key: 'orderId', label: t('reseller.commission.orderId') },
    { key: 'amount', label: t('reseller.commission.amount') },
    { key: 'level', label: t('reseller.commission.level') },
    { key: 'type', label: t('reseller.commission.type') },
    { key: 'status', label: t('reseller.commission.status') },
  ];

  const data = mockCommissions.map((comm) => ({
    date: comm.date,
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
        render: (value: string) => value === 'unilevel' ? t('reseller.commission.unilevel') : t('reseller.commission.rankBonus'),
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
        title={t('reseller.commission.title')}
        subtitle={t('reseller.commission.subtitle')}
      />

      <Card noPadding>
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-slate-900">{t('reseller.commission.transactions')}</h3>
            <Button variant="secondary" size="sm">{t('reseller.commission.exportCsv')}</Button>
          </div>
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
