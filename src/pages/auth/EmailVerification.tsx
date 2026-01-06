import { useTranslation } from 'react-i18next';
import { Button } from '@mira/ui';
import { AuthLayout } from '@mira/ui';

interface EmailVerificationProps {
  token: string;
  onComplete: () => void;
  onResend: () => void;
}

export default function EmailVerification({ token, onComplete, onResend }: EmailVerificationProps) {
  const { t } = useTranslation();
  return (
    <AuthLayout>
      <div className="w-full max-w-md text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">{t('auth.emailVerification.title')}</h1>
          <p className="text-slate-600">{t('auth.emailVerification.subtitle')}</p>
        </div>

        <Button onClick={onComplete} className="w-full">
          {t('auth.emailVerification.backToLogin')}
        </Button>

        <p className="mt-4 text-sm text-slate-600">
          {t('auth.emailVerification.didntReceive', "Didn't receive the email?")}{' '}
          <button onClick={onResend} className="text-forest-600 hover:underline">
            {t('auth.emailVerification.resendEmail')}
          </button>
        </p>
      </div>
    </AuthLayout>
  );
}
