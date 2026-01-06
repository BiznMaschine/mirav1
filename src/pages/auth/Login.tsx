import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, Label, Link, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@mira/ui';
import { AuthLayout } from '@mira/ui';
import type { UserRole } from '../../App';

interface LoginProps {
  onLogin: (role: UserRole) => void;
  onNavigateToRegister?: (role: 'reseller' | 'customer') => void;
  onNavigateToForgotPassword?: () => void;
}

export default function Login({ onLogin, onNavigateToRegister, onNavigateToForgotPassword }: LoginProps) {
  const { t } = useTranslation();
  const [email, setEmail] = useState('demo@mira.com');
  const [password, setPassword] = useState('demo123');
  const [selectedRole, setSelectedRole] = useState<UserRole>('reseller');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded login - any credentials work (this is the UX mock login screen)
    onLogin(selectedRole);
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{t('auth.login.title')}</h1>
          <p className="text-slate-600">{t('auth.login.subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="role">{t('common.selectRole')}</Label>
            <Select
              value={selectedRole || ''}
              onValueChange={(value) => setSelectedRole(value as UserRole)}
            >
              <SelectTrigger id="role" className="w-full mt-2">
                <SelectValue placeholder={t('common.selectRole')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="reseller">{t('roles.reseller')}</SelectItem>
                <SelectItem value="customer">{t('roles.customer')}</SelectItem>
                <SelectItem value="admin">{t('roles.admin')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="email">{t('auth.login.email')}</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('auth.login.emailPlaceholder')}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="password">{t('auth.login.password')}</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('auth.login.passwordPlaceholder')}
              className="mt-1"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-slate-300" />
              <span className="text-sm text-slate-600">{t('common.rememberMe')}</span>
            </label>
            {onNavigateToForgotPassword && (
              <button
                type="button"
                onClick={onNavigateToForgotPassword}
                className="text-sm text-forest-600 hover:underline"
              >
                {t('common.forgotPassword')}
              </button>
            )}
          </div>

          <Button type="submit" className="w-full">
            {t('auth.login.signIn')}
          </Button>
        </form>

        <div className="mt-6 space-y-2">
          {onNavigateToRegister && (
            <>
              <div className="text-center text-sm text-slate-600">
                {t('auth.login.noAccount')}{' '}
                <button
                  type="button"
                  onClick={() => onNavigateToRegister('reseller')}
                  className="text-forest-600 hover:underline"
                >
                  {t('auth.login.registerAsReseller')}
                </button>
                {' '}{t('auth.login.or')}{' '}
                <button
                  type="button"
                  onClick={() => onNavigateToRegister('customer')}
                  className="text-forest-600 hover:underline"
                >
                  {t('auth.login.registerAsCustomer')}
                </button>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">
            <strong>{t('auth.login.prototypeMode')}</strong> {t('auth.login.prototypeMessage')}
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
