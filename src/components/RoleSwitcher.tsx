import { useTranslation } from 'react-i18next';
import { Button, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@mira/ui';
import type { UserRole } from '../App';

interface RoleSwitcherProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  onLogout: () => void;
}

export default function RoleSwitcher({ currentRole, onRoleChange, onLogout }: RoleSwitcherProps) {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-2">
      <Select
        value={currentRole || ''}
        onValueChange={(value) => onRoleChange(value as UserRole)}
      >
        <SelectTrigger size="sm" className="w-[100px]">
          <SelectValue placeholder={t('common.selectRole')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="reseller">{t('roles.reseller')}</SelectItem>
          <SelectItem value="customer">{t('roles.customer')}</SelectItem>
          <SelectItem value="admin">{t('roles.admin')}</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="ghost" size="sm" onClick={onLogout}>
        {t('common.logout')}
      </Button>
    </div>
  );
}
