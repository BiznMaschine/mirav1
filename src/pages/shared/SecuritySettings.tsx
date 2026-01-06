import { useTranslation } from 'react-i18next';
import { Card, Button, Input, Label, DataTable } from '@mira/ui';
import { PageHeader } from '@mira/ui';

export default function SecuritySettings() {
  const { t } = useTranslation();
  const sessions = [
    {
      device: 'Chrome on MacOS',
      location: 'Munich, Germany',
      lastActive: '2024-12-18 10:30',
      current: true,
    },
    {
      device: 'Safari on iPhone',
      location: 'Munich, Germany',
      lastActive: '2024-12-17 14:20',
      current: false,
    },
  ];

  return (
    <div>
      <PageHeader
        title={t('shared.security.title')}
        subtitle={t('shared.security.subtitle')}
      />

      <div className="space-y-6">
        <Card noPadding>
          <div className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">{t('shared.security.changePassword')}</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="currentPassword">{t('shared.security.currentPassword')}</Label>
                <Input id="currentPassword" type="password" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="newPassword">{t('shared.security.newPassword')}</Label>
                <Input id="newPassword" type="password" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="confirmPassword">{t('shared.security.confirmPassword')}</Label>
                <Input id="confirmPassword" type="password" className="mt-1" />
              </div>
              <Button>{t('shared.security.updatePassword')}</Button>
            </div>
          </div>
        </Card>

        <Card noPadding>
          <div className="p-6">
            <h3 className="font-semibold text-slate-900 mb-4">{t('shared.security.activeSessions')}</h3>
            <div className="space-y-3">
              {sessions.map((session, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900">{session.device}</p>
                    <p className="text-sm text-slate-600">{session.location} • {t('shared.security.lastActive')}: {session.lastActive}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {session.current && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">{t('shared.security.current')}</span>
                    )}
                    {!session.current && (
                      <Button variant="danger" size="sm">{t('shared.security.revoke')}</Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
