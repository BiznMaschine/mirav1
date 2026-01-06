import { useTranslation } from 'react-i18next';
import { Card, Button, Input, Label } from '@mira/ui';
import { PageHeader } from '@mira/ui';

export default function PayoutSettings() {
  const { t } = useTranslation();
  return (
    <div>
      <PageHeader
        title={t('shared.payout.title')}
        subtitle={t('shared.payout.subtitle')}
        actions={
          <Button>{t('shared.payout.saveChanges')}</Button>
        }
      />

      <Card noPadding>
        <div className="p-6 space-y-4">
          <div>
            <Label htmlFor="bankName">{t('shared.payout.bankName')}</Label>
            <Input id="bankName" defaultValue="Deutsche Bank" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="accountHolder">{t('shared.payout.accountHolder')}</Label>
            <Input id="accountHolder" defaultValue="Maria Schmidt" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="iban">{t('shared.payout.iban')}</Label>
            <Input id="iban" defaultValue="DE89 3704 0044 0532 0130 00" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="bic">{t('shared.payout.bic')}</Label>
            <Input id="bic" defaultValue="COBADEFFXXX" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="payoutThreshold">{t('shared.payout.payoutThreshold')}</Label>
            <Input id="payoutThreshold" type="number" defaultValue="100" className="mt-1" />
            <p className="text-xs text-slate-600 mt-1">{t('shared.payout.payoutThresholdDesc')}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
