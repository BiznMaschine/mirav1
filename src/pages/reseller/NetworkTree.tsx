import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHeader, Card, Badge, Button, NetworkTree as NetworkTreeComponent } from '@mira/ui';
import { mockNetworkTree } from '../../data/mockData';

interface NetworkNodeProps {
  node: typeof mockNetworkTree;
  level: number;
}

function NetworkNode({ node, level }: NetworkNodeProps) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`ml-${level * 4}`}>
      <div
        className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg mb-2 cursor-pointer hover:bg-slate-50"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="text-slate-400">{expanded ? '▼' : '▶'}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-900">{node.name}</span>
            <Badge variant="secondary" size="sm">
              {node.rank}
            </Badge>
          </div>
          <div className="text-xs text-slate-600 mt-1">
            {t('reseller.network.pv')}: €{node.personalVolume} | {t('reseller.network.tv')}: €{node.teamVolume} | {t('reseller.network.team')}: {node.directReports}
          </div>
        </div>
      </div>
      {expanded && node.children && (
        <div className="ml-4">
          {node.children.map((child) => (
            <NetworkNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function NetworkTree() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === 'de' ? 'de-DE' : 'en-GB';
  const [selectedNode, setSelectedNode] = useState(mockNetworkTree);

  return (
    <div>
      <PageHeader
        title={t('reseller.network.networkTree')}
        subtitle={t('reseller.network.networkTreeSubtitle')}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card noPadding>
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">{t('reseller.network.yourNetwork')}</h3>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm">{t('reseller.network.zoomIn')}</Button>
                  <Button variant="secondary" size="sm">{t('reseller.network.zoomOut')}</Button>
                </div>
              </div>
              <NetworkTreeComponent
                data={{
                  id: mockNetworkTree.id,
                  name: mockNetworkTree.name,
                  rank: mockNetworkTree.rank,
                  personalVolume: mockNetworkTree.personalVolume,
                  teamVolume: mockNetworkTree.teamVolume,
                  directReports: mockNetworkTree.directReports,
                  children: mockNetworkTree.children?.map((child) => ({
                    id: child.id,
                    name: child.name,
                    rank: child.rank,
                    personalVolume: child.personalVolume,
                    teamVolume: child.teamVolume,
                    directReports: child.directReports,
                    children: child.children,
                  })),
                }}
                onNodeClick={(node) => setSelectedNode(node as typeof mockNetworkTree)}
              />
            </div>
          </Card>
        </div>

        <div>
          <Card noPadding>
            <div className="p-6">
              <h3 className="font-semibold text-slate-900 mb-4">{t('reseller.network.nodeDetails')}</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-slate-600">{t('reseller.network.name')}</p>
                  <p className="font-medium text-slate-900">{selectedNode.name}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">{t('reseller.network.rank')}</p>
                  <Badge variant="secondary">{selectedNode.rank}</Badge>
                </div>
                <div>
                  <p className="text-sm text-slate-600">{t('reseller.network.joinDate')}</p>
                  <p className="font-medium text-slate-900">{selectedNode.joinDate}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">{t('reseller.network.personalVolume')}</p>
                  <p className="font-medium text-slate-900">€{selectedNode.personalVolume.toLocaleString(locale)}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">{t('reseller.network.teamVolume')}</p>
                  <p className="font-medium text-slate-900">€{selectedNode.teamVolume.toLocaleString(locale)}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">{t('reseller.network.directReports')}</p>
                  <p className="font-medium text-slate-900">{selectedNode.directReports}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
