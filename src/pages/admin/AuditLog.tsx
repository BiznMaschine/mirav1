import { useTranslation } from 'react-i18next';
import { PageHeader, Card, DataTable, Button, Input, Badge, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@mira/ui';
import { mockAuditLog } from '../../data/mockData';

export default function AuditLog() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'de' ? 'de-DE' : 'en-GB';
  const columns = [
    { key: 'timestamp', label: t('admin.auditLog.columns.timestamp') },
    { key: 'actor', label: t('admin.auditLog.columns.actor') },
    { key: 'action', label: t('admin.auditLog.columns.action') },
    { key: 'entityType', label: t('admin.auditLog.columns.entityType') },
    { key: 'entityId', label: t('admin.auditLog.columns.entityId') },
    { key: 'summary', label: t('admin.auditLog.columns.summary') },
    { key: 'actions', label: t('admin.auditLog.columns.actions') },
  ];

  const data = mockAuditLog.map((log) => ({
    timestamp: log.timestamp,
    actor: log.actor,
    action: log.action,
    entityType: log.entityType,
    entityId: log.entityId,
    summary: log.summary,
  }));

  const columnsWithRender = columns.map((col) => {
    if (col.key === 'timestamp') {
      return {
        ...col,
        render: (value: string) => new Date(value).toLocaleString(locale),
      };
    }
    if (col.key === 'actions') {
      return {
        ...col,
        render: () => (
          <Button variant="ghost" size="sm">{t('admin.auditLog.viewDetails')}</Button>
        ),
      };
    }
    return col;
  });

  return (
    <div>
      <PageHeader
        title={t('admin.auditLog.title')}
        subtitle={t('admin.auditLog.subtitle')}
        actions={
          <div className="flex gap-2">
            <Input type="date" className="w-40" />
            <Input type="date" className="w-40" />
            <Select defaultValue="all">
              <SelectTrigger size="sm" className="w-[160px]">
                <SelectValue placeholder={t('admin.auditLog.action')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('admin.auditLog.allActions')}</SelectItem>
                <SelectItem value="user-management">{t('admin.auditLog.userManagement')}</SelectItem>
                <SelectItem value="commission-config">{t('admin.auditLog.commissionConfig')}</SelectItem>
                <SelectItem value="order-processing">{t('admin.auditLog.orderProcessing')}</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="secondary">{t('admin.auditLog.export')}</Button>
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
