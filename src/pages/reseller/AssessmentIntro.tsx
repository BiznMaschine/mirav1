import { useTranslation } from 'react-i18next';
import { Button, Card } from '@mira/ui';
import { AuthLayout } from '@mira/ui';

interface AssessmentIntroProps {
  onStart: () => void;
  onPrefill?: () => void;
}

export default function AssessmentIntro({ onStart, onPrefill }: AssessmentIntroProps) {
  const { t } = useTranslation();
  return (
    <AuthLayout>
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{t('reseller.assessment.intro.title')}</h1>
          <p className="text-lg text-slate-600">
            {t('reseller.assessment.intro.subtitle')}
          </p>
        </div>

        <Card>
          <div className="p-8 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">{t('reseller.assessment.intro.whatToExpect')}</h2>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>{t('reseller.assessment.intro.questions')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>{t('reseller.assessment.intro.duration')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>{t('reseller.assessment.intro.personalization')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>{t('reseller.assessment.intro.saveProgress')}</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <div className="flex items-start gap-2 mb-4">
                <input type="checkbox" id="consent" className="mt-1" required />
                <label htmlFor="consent" className="text-sm text-slate-600">
                  {t('reseller.assessment.intro.consent')}
                </label>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="secondary" className="flex-1">
                {t('reseller.assessment.intro.saveForLater')}
              </Button>
              <Button onClick={onStart} className="flex-1">
                {t('reseller.assessment.intro.startAssessment')}
              </Button>
            </div>

            {onPrefill && (
              <div className="pt-4 border-t border-slate-200">
                <Button
                  variant="outline"
                  onClick={onPrefill}
                  className="w-full bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100"
                >
                  ⚡ {t('reseller.assessment.intro.prefillSkip')}
                </Button>
                <p className="text-xs text-slate-500 mt-2 text-center">
                  {t('reseller.assessment.intro.skipDescription')}
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </AuthLayout>
  );
}
