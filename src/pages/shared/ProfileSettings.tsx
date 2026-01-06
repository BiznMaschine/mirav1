import { useTranslation } from 'react-i18next';
import { Card, Button, Input, Label } from '@mira/ui';
import { PageHeader } from '@mira/ui';

export default function ProfileSettings() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        title={t('shared.profile.title')}
        subtitle={t('shared.profile.subtitle')}
        actions={
          <Button>{t('shared.profile.saveChanges')}</Button>
        }
      />

      <Card noPadding>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">{t('shared.profile.firstName')}</Label>
              <Input id="firstName" defaultValue="Maria" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="lastName">{t('shared.profile.lastName')}</Label>
              <Input id="lastName" defaultValue="Schmidt" className="mt-1" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">{t('shared.profile.email')}</Label>
            <Input id="email" type="email" defaultValue="maria@example.com" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="phone">{t('shared.profile.phone')}</Label>
            <Input id="phone" type="tel" defaultValue="+49 123 456789" className="mt-1" />
          </div>
        </div>
      </Card>
    </div>
  );
}
