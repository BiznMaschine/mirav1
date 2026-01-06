import { useTranslation } from 'react-i18next';
import { Button, Card, Badge } from '@mira/ui';
import { AuthLayout } from '@mira/ui';

interface AssessmentResultProps {
  onContinue: () => void;
}

export default function AssessmentResult({ onContinue }: AssessmentResultProps) {
  const { t } = useTranslation();
  const segment = 'Growth';
  const score = 68;

  const segmentInfo = {
    Novice: {
      description: t('reseller.assessment.result.segmentDescriptions.novice'),
      color: 'blue',
    },
    Active: {
      description: t('reseller.assessment.result.segmentDescriptions.active'),
      color: 'green',
    },
    Growth: {
      description: t('reseller.assessment.result.segmentDescriptions.growth'),
      color: 'amber',
    },
    Ambassador: {
      description: t('reseller.assessment.result.segmentDescriptions.ambassador'),
      color: 'purple',
    },
  };

  const info = segmentInfo[segment as keyof typeof segmentInfo];

  return (
    <AuthLayout>
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">{t('reseller.assessment.result.title')}</h1>
          <p className="text-lg text-slate-600">{t('reseller.assessment.result.subtitle')}</p>
        </div>

        <Card>
          <div className="p-8 text-center space-y-6">
            <div className="w-24 h-24 bg-forest-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-4xl">🎯</span>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{t('reseller.assessment.result.yourSegment')}</h2>
              <Badge variant="primary" size="lg" className="mb-4">
                {segment}
              </Badge>
              <p className="text-slate-600">{info.description}</p>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-2">{t('reseller.assessment.result.assessmentScore')}</p>
              <p className="text-3xl font-bold text-forest-600">{score}/100</p>
            </div>

            <div className="pt-6 border-t border-slate-200 text-left">
              <h3 className="font-semibold text-slate-900 mb-3">{t('reseller.assessment.result.whatsNext')}</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>{t('reseller.assessment.result.personalizedOnboarding')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>{t('reseller.assessment.result.accessToTraining')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-forest-600 mt-1">✓</span>
                  <span>{t('reseller.assessment.result.supportFromMentors')}</span>
                </li>
              </ul>
            </div>

            <Button onClick={onContinue} className="w-full">
              {t('reseller.assessment.result.continueToOnboarding')}
            </Button>
          </div>
        </Card>
      </div>
    </AuthLayout>
  );
}
