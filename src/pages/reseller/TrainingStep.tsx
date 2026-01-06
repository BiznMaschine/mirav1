import { useTranslation } from 'react-i18next';
import { Button, Card } from '@mira/ui';
import { AuthLayout } from '@mira/ui';

interface TrainingStepProps {
  onComplete: () => void;
  onBack: () => void;
}

export default function TrainingStep({ onComplete, onBack }: TrainingStepProps) {
  const { t } = useTranslation();
  
  return (
    <AuthLayout>
      <div className="w-full max-w-3xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">{t('reseller.onboarding.training.title')}</h1>
          <p className="text-slate-600">{t('reseller.onboarding.training.subtitle')}</p>
        </div>

        <Card>
          <div className="p-8 space-y-6">
            <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">▶️</div>
                <p className="text-slate-600">{t('reseller.onboarding.training.trainingVideo')}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">{t('reseller.onboarding.training.welcomeToMira')}</h2>
              <div className="prose text-slate-600 space-y-3">
                <p>
                  {t('reseller.onboarding.training.miraDescription1')}
                  {t('reseller.onboarding.training.miraDescription2')}
                </p>
                <p>
                  {t('reseller.onboarding.training.thisTrainingWillCover')}
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>{t('reseller.onboarding.training.topic1')}</li>
                  <li>{t('reseller.onboarding.training.topic2')}</li>
                  <li>{t('reseller.onboarding.training.topic3')}</li>
                  <li>{t('reseller.onboarding.training.topic4')}</li>
                  <li>{t('reseller.onboarding.training.topic5')}</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-2 p-4 bg-slate-50 rounded-lg">
              <input type="checkbox" id="completed" className="mt-1" />
              <label htmlFor="completed" className="text-sm text-slate-600">
                {t('reseller.onboarding.training.completedTraining')}
              </label>
            </div>

            <div className="flex gap-4">
              <Button variant="secondary" onClick={onBack} className="flex-1">
                {t('reseller.onboarding.training.back')}
              </Button>
              <Button onClick={onComplete} className="flex-1">
                {t('reseller.onboarding.training.markComplete')}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </AuthLayout>
  );
}
