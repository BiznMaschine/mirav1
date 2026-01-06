import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card, Checkbox } from '@mira/ui';
import { AuthLayout } from '@mira/ui';

interface AgreementStepProps {
  onComplete: () => void;
  onBack: () => void;
}

export default function AgreementStep({ onComplete, onBack }: AgreementStepProps) {
  const { t } = useTranslation();
  const [accepted, setAccepted] = useState(false);

  return (
    <AuthLayout>
      <div className="w-full max-w-3xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">{t('reseller.onboarding.agreement.title')}</h1>
          <p className="text-slate-600">{t('reseller.onboarding.agreement.subtitle')}</p>
        </div>

        <Card>
          <div className="p-8 space-y-6">
            <div className="h-64 overflow-y-auto border border-slate-200 rounded-lg p-4 bg-slate-50">
              <div className="prose text-sm text-slate-700 space-y-4">
                <h3 className="font-semibold text-slate-900">{t('reseller.onboarding.agreement.resellerAgreement')}</h3>
                <p>
                  {t('reseller.onboarding.agreement.byBecomingReseller')}
                </p>
                <h4 className="font-semibold">{t('reseller.onboarding.agreement.section1')}</h4>
                <p>
                  {t('reseller.onboarding.agreement.section1Text')}
                </p>
                <h4 className="font-semibold">{t('reseller.onboarding.agreement.section2')}</h4>
                <p>
                  {t('reseller.onboarding.agreement.section2Text')}
                </p>
                <h4 className="font-semibold">{t('reseller.onboarding.agreement.section3')}</h4>
                <p>
                  {t('reseller.onboarding.agreement.section3Text')}
                </p>
                <h4 className="font-semibold">{t('reseller.onboarding.agreement.section4')}</h4>
                <p>
                  {t('reseller.onboarding.agreement.section4Text')}
                </p>
                <h4 className="font-semibold">{t('reseller.onboarding.agreement.section5')}</h4>
                <p>
                  {t('reseller.onboarding.agreement.section5Text')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="accept"
                checked={accepted}
                onCheckedChange={(checked) => setAccepted(checked as boolean)}
              />
              <label htmlFor="accept" className="text-sm text-slate-600">
                {t('reseller.onboarding.agreement.agreeToTerms')}
              </label>
            </div>

            <div className="flex gap-4">
              <Button variant="secondary" onClick={onBack} className="flex-1">
                {t('reseller.onboarding.agreement.back')}
              </Button>
              <Button onClick={onComplete} disabled={!accepted} className="flex-1">
                {t('reseller.onboarding.agreement.acceptAndContinue')}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </AuthLayout>
  );
}
