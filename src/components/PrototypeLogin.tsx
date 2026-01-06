/**
 * Simple Prototype Login Screen
 * 
 * A minimal login screen that appears before the UX prototype demo.
 * This is separate from the UX mock login screen which is part of the prototype design.
 */

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, Label } from '@mira/ui';

interface PrototypeLoginProps {
  onLogin: () => void;
}

export default function PrototypeLogin({ onLogin }: PrototypeLoginProps) {
  const { t } = useTranslation();
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getDemoPassword = (): string => {
    const envPassword = import.meta.env.VITE_DEMO_PASSWORD;
    return envPassword || 'DemoMira2026$';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const demoPassword = getDemoPassword();
    if (password === demoPassword) {
      // Store auth in sessionStorage
      sessionStorage.setItem('mira_prototype_auth', 'authenticated');
      onLogin();
    } else {
      setError('Invalid password. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">{t('prototypeLogin.title')}</h1>
            <p className="text-slate-600">{t('prototypeLogin.subtitle')}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="password">{t('prototypeLogin.password')}</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('prototypeLogin.passwordPlaceholder')}
                className="mt-1"
                required
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? t('prototypeLogin.signingIn') : t('prototypeLogin.signIn')}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-slate-50 rounded-lg">
            <p className="text-xs text-slate-500 text-center">
              {t('prototypeLogin.protectedDemo')}
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center">
              {t('prototypeLogin.createdBy')}{' '}
              <a
                href="https://www.fognini.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-600 hover:text-forest-700 underline font-medium transition-colors"
              >
                {t('footer.fogniniTech')}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

