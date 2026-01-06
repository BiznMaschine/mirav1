import { useTranslation } from 'react-i18next';
import { Card, Button, Toggle, Label } from '@mira/ui';
import { PageHeader } from '@mira/ui';

export default function NotificationPreferences() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        title={t('shared.notifications.title')}
        subtitle={t('shared.notifications.subtitle')}
        actions={
          <Button>{t('shared.notifications.saveChanges')}</Button>
        }
      />

      <Card noPadding>
        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">{t('shared.notifications.emailNotifications')}</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>{t('shared.notifications.newCommissionEarned')}</Label>
                  <p className="text-sm text-slate-600">{t('shared.notifications.newCommissionEarnedDesc')}</p>
                </div>
                <Toggle checked={true} onCheckedChange={() => {}} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>{t('shared.notifications.rankAdvancement')}</Label>
                  <p className="text-sm text-slate-600">{t('shared.notifications.rankAdvancementDesc')}</p>
                </div>
                <Toggle checked={true} onCheckedChange={() => {}} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>{t('shared.notifications.teamMemberJoined')}</Label>
                  <p className="text-sm text-slate-600">{t('shared.notifications.teamMemberJoinedDesc')}</p>
                </div>
                <Toggle checked={false} onCheckedChange={() => {}} />
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">{t('shared.notifications.pushNotifications')}</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>{t('shared.notifications.enablePushNotifications')}</Label>
                  <p className="text-sm text-slate-600">{t('shared.notifications.enablePushNotificationsDesc')}</p>
                </div>
                <Toggle checked={false} onCheckedChange={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
