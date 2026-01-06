import { useTranslation } from 'react-i18next';
import { Card, Button } from '@mira/ui';
import { PageHeader } from '@mira/ui';

export default function PrivacyData() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        title={t('shared.privacy.title')}
        subtitle={t('shared.privacy.subtitle')}
      />

      <div className="space-y-6">
        <Card noPadding>
          <div className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">{t('shared.privacy.dataExport.title')}</h3>
            <p className="text-sm text-slate-600 mb-4">
              {t('shared.privacy.dataExport.description')}
            </p>
            <Button variant="secondary">{t('shared.privacy.dataExport.request')}</Button>
          </div>
        </Card>

        <Card noPadding>
          <div className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">{t('shared.privacy.accountDeletion.title')}</h3>
            <p className="text-sm text-slate-600 mb-4">
              {t('shared.privacy.accountDeletion.description')}
            </p>
            <Button variant="danger">{t('shared.privacy.accountDeletion.delete')}</Button>
          </div>
        </Card>

        <Card noPadding>
          <div className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">{t('shared.privacy.privacyPolicy.title')}</h3>
            <p className="text-sm text-slate-600 mb-4">
              {t('shared.privacy.privacyPolicy.description')}
            </p>
            <Button variant="secondary">{t('shared.privacy.privacyPolicy.view')}</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
