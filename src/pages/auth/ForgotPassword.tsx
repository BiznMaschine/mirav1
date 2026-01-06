import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, Label } from '@mira/ui';
import { AuthLayout } from '@mira/ui';

interface ForgotPasswordProps {
  onBack: () => void;
  onReset: () => void;
}

export default function ForgotPassword({ onBack, onReset }: ForgotPasswordProps) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show success message
    onReset();
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">{t('auth.forgotPassword.title')}</h1>
        <p className="text-slate-600 mb-6">{t('auth.forgotPassword.subtitle')}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">{t('auth.forgotPassword.email')}</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1"
              placeholder="your@email.com"
            />
          </div>

          <div className="flex gap-4">
            <Button type="button" variant="secondary" onClick={onBack} className="flex-1">
              {t('common.back')}
            </Button>
            <Button type="submit" className="flex-1">
              {t('auth.forgotPassword.sendResetLink')}
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
