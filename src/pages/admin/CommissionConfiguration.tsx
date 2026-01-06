import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PageHeader, Card, Button, Input, Label } from '@mira/ui';
import { mockCommissionConfig } from '../../data/mockData';

export default function CommissionConfiguration() {
  const { t } = useTranslation();
  const [config, setConfig] = useState(mockCommissionConfig.unilevel);
  const [effectiveDate, setEffectiveDate] = useState(mockCommissionConfig.effectiveDate);

  return (
    <div>
      <PageHeader
        title={t('admin.commissionConfiguration.title')}
        subtitle={t('admin.commissionConfiguration.subtitle')}
        actions={
          <Button>{t('admin.commissionConfiguration.saveChanges')}</Button>
        }
      />

      <Card noPadding>
        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">{t('admin.commissionConfiguration.currentConfiguration')}</h3>
            <div className="p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600 mb-1">{t('admin.commissionConfiguration.effectiveSince')} {mockCommissionConfig.effectiveDate}</p>
              <div className="grid grid-cols-4 gap-4 mt-2">
                <div>
                  <p className="text-xs text-slate-600">{t('admin.commissionConfiguration.level1')}</p>
                  <p className="font-semibold text-slate-900">{config.level1}%</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600">{t('admin.commissionConfiguration.level2')}</p>
                  <p className="font-semibold text-slate-900">{config.level2}%</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600">{t('admin.commissionConfiguration.level3')}</p>
                  <p className="font-semibold text-slate-900">{config.level3}%</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600">{t('admin.commissionConfiguration.level4')}</p>
                  <p className="font-semibold text-slate-900">{config.level4}%</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">{t('admin.commissionConfiguration.editUnilevelRates')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="level1">{t('admin.commissionConfiguration.level1Direct')}</Label>
                <Input
                  id="level1"
                  type="number"
                  value={config.level1}
                  onChange={(e) => setConfig({ ...config, level1: Number(e.target.value) })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="level2">{t('admin.commissionConfiguration.level2')}</Label>
                <Input
                  id="level2"
                  type="number"
                  value={config.level2}
                  onChange={(e) => setConfig({ ...config, level2: Number(e.target.value) })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="level3">{t('admin.commissionConfiguration.level3')}</Label>
                <Input
                  id="level3"
                  type="number"
                  value={config.level3}
                  onChange={(e) => setConfig({ ...config, level3: Number(e.target.value) })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="level4">{t('admin.commissionConfiguration.level4')}</Label>
                <Input
                  id="level4"
                  type="number"
                  value={config.level4}
                  onChange={(e) => setConfig({ ...config, level4: Number(e.target.value) })}
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="effectiveDate">{t('admin.commissionConfiguration.effectiveFrom')}</Label>
            <Input
              id="effectiveDate"
              type="date"
              value={effectiveDate}
              onChange={(e) => setEffectiveDate(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="flex gap-4">
            <Button variant="secondary">{t('admin.commissionConfiguration.previewImpact')}</Button>
            <Button>{t('admin.commissionConfiguration.saveChanges')}</Button>
          </div>
        </div>
      </Card>

      <Card noPadding className="mt-6">
        <div className="p-6">
          <h3 className="font-semibold text-slate-900 mb-4">{t('admin.commissionConfiguration.configurationHistory')}</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center py-2 border-b border-slate-200">
              <div>
                <p className="text-sm font-medium text-slate-900">{t('admin.commissionConfiguration.effectiveSince')} 2025-12-01</p>
                <p className="text-xs text-slate-600">L1: 10% | L2: 5% | L3: 3% | L4: 2%</p>
              </div>
              <span className="text-xs text-slate-600">{t('admin.commissionConfiguration.changedBy')} {t('admin.commissionConfiguration.admin')}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-sm font-medium text-slate-900">{t('admin.commissionConfiguration.effectiveSince')} 2025-06-01</p>
                <p className="text-xs text-slate-600">L1: 8% | L2: 4% | L3: 2% | L4: 1%</p>
              </div>
              <span className="text-xs text-slate-600">{t('admin.commissionConfiguration.changedBy')} {t('admin.commissionConfiguration.admin')}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
