import { useTranslation } from 'react-i18next';
import { PageHeader, Card, DataTable, Badge, Button, Input, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@mira/ui';
import { mockResellers } from '../../data/mockData';

export default function ResellerList() {
  const { t } = useTranslation();
  const columns = [
    { key: 'name', label: t('admin.resellerList.columns.name') },
    { key: 'email', label: t('admin.resellerList.columns.email') },
    { key: 'rank', label: t('admin.resellerList.columns.rank') },
    { key: 'segment', label: t('admin.resellerList.columns.segment') },
    { key: 'teamSize', label: t('admin.resellerList.columns.teamSize') },
    { key: 'earnings', label: t('admin.resellerList.columns.earnings') },
    { key: 'status', label: t('admin.resellerList.columns.status') },
    { key: 'actions', label: t('admin.resellerList.columns.actions') },
  ];

  const data = mockResellers.map((reseller) => ({
    name: reseller.name,
    email: reseller.email,
    rank: reseller.rank,
    segment: reseller.segment,
    teamSize: reseller.teamSize,
    earnings: reseller.earnings.thisMonth,
    status: 'active',
  }));

  const columnsWithRender = columns.map((col) => {
    if (col.key === 'rank') {
      return {
        ...col,
        render: (value: string) => <Badge variant="secondary">{value}</Badge>,
      };
    }
    if (col.key === 'segment') {
      return {
        ...col,
        render: (value: string) => <Badge variant="primary">{value}</Badge>,
      };
    }
    if (col.key === 'earnings') {
      return {
        ...col,
        render: (value: number) => `€${value.toFixed(2)}`,
      };
    }
    if (col.key === 'status') {
      return {
        ...col,
        render: () => <Badge variant="success">{t('admin.resellerList.active')}</Badge>,
      };
    }
    if (col.key === 'actions') {
      return {
        ...col,
        render: () => (
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">{t('admin.resellerList.view')}</Button>
          </div>
        ),
      };
    }
    return col;
  });

  return (
    <div>
      <PageHeader
        title={t('admin.resellerList.title')}
        subtitle={t('admin.resellerList.subtitle')}
        actions={
          <div className="flex gap-2">
            <Input placeholder={t('admin.resellerList.searchPlaceholder')} className="w-64" />
            <Button variant="secondary">{t('admin.resellerList.exportCsv')}</Button>
          </div>
        }
      />

      <Card noPadding>
        <div className="p-6">
          <div className="mb-4 flex items-center gap-2">
            <Select defaultValue="all-segments">
              <SelectTrigger size="sm" className="w-[140px]">
                <SelectValue placeholder={t('admin.resellerList.segment')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-segments">{t('admin.resellerList.allSegments')}</SelectItem>
                <SelectItem value="novice">{t('reseller.assessment.segments.novice')}</SelectItem>
                <SelectItem value="active">{t('reseller.assessment.segments.active')}</SelectItem>
                <SelectItem value="growth">{t('reseller.assessment.segments.growth')}</SelectItem>
                <SelectItem value="ambassador">{t('reseller.assessment.segments.ambassador')}</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-ranks">
              <SelectTrigger size="sm" className="w-[130px]">
                <SelectValue placeholder={t('admin.resellerList.rank')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-ranks">{t('admin.resellerList.allRanks')}</SelectItem>
                <SelectItem value="bronze">{t('reseller.ranks.bronze')}</SelectItem>
                <SelectItem value="silver">{t('reseller.ranks.silver')}</SelectItem>
                <SelectItem value="gold">{t('reseller.ranks.gold')}</SelectItem>
                <SelectItem value="platinum">{t('reseller.ranks.platinum')}</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-status">
              <SelectTrigger size="sm" className="w-[130px]">
                <SelectValue placeholder={t('admin.resellerList.status')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">{t('admin.resellerList.allStatus')}</SelectItem>
                <SelectItem value="active">{t('admin.resellerList.active')}</SelectItem>
                <SelectItem value="suspended">{t('admin.resellerList.suspended')}</SelectItem>
              </SelectContent>
            </Select>
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
