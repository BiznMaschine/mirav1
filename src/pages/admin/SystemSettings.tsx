import { useTranslation } from 'react-i18next';
import { PageHeader, Card, Button, Input, Label, Toggle } from '@mira/ui';

export default function SystemSettings() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        title={t('admin.settings.title')}
        subtitle={t('admin.settings.subtitle')}
        actions={
          <Button>{t('admin.settings.saveChanges')}</Button>
        }
      />

      <div className="space-y-6">
        <Card noPadding>
          <div className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">{t('admin.settings.general.title')}</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="platformName">{t('admin.settings.general.platformName')}</Label>
                <Input id="platformName" defaultValue="MIRA" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="supportEmail">{t('admin.settings.general.supportEmail')}</Label>
                <Input id="supportEmail" type="email" defaultValue="support@mira.example.com" className="mt-1" />
              </div>
            </div>
          </div>
        </Card>

        <Card noPadding>
          <div className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">{t('admin.settings.features.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>{t('admin.settings.features.gamification.label')}</Label>
                  <p className="text-sm text-slate-600">{t('admin.settings.features.gamification.description')}</p>
                </div>
                <Toggle checked={true} onCheckedChange={() => {}} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>{t('admin.settings.features.impactVerification.label')}</Label>
                  <p className="text-sm text-slate-600">{t('admin.settings.features.impactVerification.description')}</p>
                </div>
                <Toggle checked={false} onCheckedChange={() => {}} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
