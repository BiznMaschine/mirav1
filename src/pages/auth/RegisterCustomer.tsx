import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, Label, Checkbox } from '@mira/ui';
import { AuthLayout } from '@mira/ui';

interface RegisterCustomerProps {
  onRegister: () => void;
  onBack: () => void;
}

export default function RegisterCustomer({ onRegister, onBack }: RegisterCustomerProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@mira.com',
    password: 'demo123',
    confirmPassword: 'demo123',
    referralCode: '',
    acceptTerms: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister();
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">{t('auth.register.customer.title')}</h1>
        <p className="text-slate-600 mb-6">{t('auth.register.customer.subtitle')}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">{t('auth.register.customer.firstName')}</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="lastName">{t('auth.register.customer.lastName')}</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">{t('auth.register.customer.email')}</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="password">{t('auth.register.customer.password')}</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword">{t('auth.register.customer.confirmPassword')}</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="referralCode">{t('common.referralCode', 'Referral Code (Optional)')}</Label>
            <Input
              id="referralCode"
              value={formData.referralCode}
              onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
              className="mt-1"
              placeholder={t('common.referralCodePlaceholder', 'Enter referral code if you have one')}
            />
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="acceptTerms"
              checked={formData.acceptTerms}
              onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
            />
            <Label htmlFor="acceptTerms" className="text-sm text-slate-600">
              {t('auth.register.customer.agreeToTerms')}
            </Label>
          </div>

          <div className="flex gap-4">
            <Button type="button" variant="secondary" onClick={onBack} className="flex-1">
              {t('common.back')}
            </Button>
            <Button type="submit" className="flex-1">
              {t('auth.register.customer.createAccount')}
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
