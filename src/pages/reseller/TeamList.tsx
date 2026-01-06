import { useTranslation } from 'react-i18next';
import { PageHeader, Card, Badge, DataTable } from '@mira/ui';
import { mockNetworkTree } from '../../data/mockData';

// Flatten network tree for table display
function flattenTree(node: typeof mockNetworkTree, level: number = 0): Array<typeof mockNetworkTree & { level: number }> {
  const result: Array<typeof mockNetworkTree & { level: number }> = [{ ...node, level }];
  if (node.children) {
    node.children.forEach((child) => {
      result.push(...flattenTree(child as typeof mockNetworkTree, level + 1));
    });
  }
  return result;
}

export default function TeamList() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'de' ? 'de-DE' : 'en-GB';
  const teamMembers = flattenTree(mockNetworkTree).filter((m) => m.level > 0);

  const columns = [
    { key: 'name', label: t('reseller.team.name') },
    { key: 'rank', label: t('reseller.team.rank') },
    { key: 'level', label: t('reseller.team.level') },
    { key: 'personalVolume', label: t('reseller.team.personalVolume') },
    { key: 'teamVolume', label: t('reseller.team.teamVolume') },
    { key: 'directReports', label: t('reseller.team.directReports') },
    { key: 'joinDate', label: t('reseller.team.joinDate') },
  ];

  const data = teamMembers.map((member) => ({
    name: member.name,
    rank: member.rank,
    level: `L${member.level}`,
    personalVolume: `€${member.personalVolume.toLocaleString(locale)}`,
    teamVolume: `€${member.teamVolume.toLocaleString(locale)}`,
    directReports: member.directReports,
    joinDate: member.joinDate,
  }));

  const columnsWithRender = columns.map((col) => {
    if (col.key === 'rank') {
      return {
        ...col,
        render: (value: string) => <Badge variant="secondary">{value}</Badge>,
      };
    }
    return col;
  });

  return (
    <div>
      <PageHeader
        title={t('reseller.team.title')}
        subtitle={t('reseller.team.subtitle')}
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
