import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card, Checkbox } from '@mira/ui';
import { AuthLayout } from '@mira/ui';

interface OnboardingChecklistProps {
  onComplete: () => void;
}

export default function OnboardingChecklist({ onComplete }: OnboardingChecklistProps) {
  const { t } = useTranslation();
  const [steps, setSteps] = useState({
    training: false,
    agreement: false,
    profile: false,
  });

  const allComplete = Object.values(steps).every((v) => v);

  const toggleStep = (step: keyof typeof steps) => {
    setSteps({ ...steps, [step]: !steps[step] });
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{t('reseller.onboarding.checklist.title')}</h1>
          <p className="text-lg text-slate-600">{t('reseller.onboarding.checklist.subtitle')}</p>
        </div>

        <Card>
          <div className="p-8 space-y-4">
            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={steps.training}
                  onCheckedChange={() => toggleStep('training')}
                />
                <div>
                  <p className="font-medium text-slate-900">{t('reseller.onboarding.checklist.training.title')}</p>
                  <p className="text-sm text-slate-600">{t('reseller.onboarding.checklist.training.description')}</p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  toggleStep('training');
                  // Navigate to training
                }}
              >
                {t('reseller.onboarding.checklist.start')}
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={steps.agreement}
                  onCheckedChange={() => toggleStep('agreement')}
                />
                <div>
                  <p className="font-medium text-slate-900">{t('reseller.onboarding.checklist.agreement.title')}</p>
                  <p className="text-sm text-slate-600">{t('reseller.onboarding.checklist.agreement.description')}</p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  toggleStep('agreement');
                  // Navigate to agreement
                }}
              >
                {t('reseller.onboarding.checklist.review')}
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={steps.profile}
                  onCheckedChange={() => toggleStep('profile')}
                />
                <div>
                  <p className="font-medium text-slate-900">{t('reseller.onboarding.checklist.profile.title')}</p>
                  <p className="text-sm text-slate-600">{t('reseller.onboarding.checklist.profile.description')}</p>
                </div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => toggleStep('profile')}
              >
                {t('reseller.onboarding.checklist.complete')}
              </Button>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">{t('reseller.onboarding.checklist.progress')}</span>
                  <span className="font-medium text-slate-900">
                    {t('reseller.onboarding.checklist.xofYComplete', { 
                      completed: Object.values(steps).filter(Boolean).length, 
                      total: Object.keys(steps).length 
                    })}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-forest-600 h-2 rounded-full transition-all"
                    style={{
                      width: `${(Object.values(steps).filter(Boolean).length / Object.keys(steps).length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <Button onClick={onComplete} disabled={!allComplete} className="w-full">
                {t('reseller.onboarding.checklist.enterDashboard')}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </AuthLayout>
  );
}
