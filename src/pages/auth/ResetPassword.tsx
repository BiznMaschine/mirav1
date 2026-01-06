import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, Label } from '@mira/ui';
import { AuthLayout } from '@mira/ui';

interface ResetPasswordProps {
  token: string;
  onBack: () => void;
  onComplete: () => void;
}

export default function ResetPassword({ token, onBack, onComplete }: ResetPasswordProps) {
  const { t } = useTranslation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show success
    onComplete();
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">{t('auth.resetPassword.title')}</h1>
        <p className="text-slate-600 mb-6">{t('auth.resetPassword.subtitle')}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="password">{t('auth.resetPassword.newPassword')}</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword">{t('auth.resetPassword.confirmPassword')}</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1"
            />
          </div>

          <div className="flex gap-4">
            <Button type="button" variant="secondary" onClick={onBack} className="flex-1">
              {t('common.cancel')}
            </Button>
            <Button type="submit" className="flex-1">
              {t('auth.resetPassword.resetPassword')}
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
