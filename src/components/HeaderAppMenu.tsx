/**
 * HeaderAppMenu Component
 * 
 * Dropdown app menu in header for quick navigation
 * User-specific menu items based on role
 */

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mira/ui';
import {
  Home,
  Users,
  TrendingUp,
  Heart,
  Award,
  ShoppingBag,
  Package,
  Repeat,
  Gift,
  Settings,
  Menu,
  X,
} from 'lucide-react';
import type { UserRole } from '../App';

export interface HeaderAppMenuProps {
  role: UserRole;
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
  className?: string;
}

// Menu items will be translated in the component
const resellerMenuItems = [
  { id: 'dashboard', key: 'navigation.reseller.dashboard', icon: Home },
  { id: 'network', key: 'navigation.reseller.network', icon: Users },
  { id: 'earnings', key: 'navigation.reseller.earnings', icon: TrendingUp },
  { id: 'impact', key: 'navigation.reseller.impact', icon: Heart },
  { id: 'achievements', key: 'navigation.reseller.achievements', icon: Award },
];

const customerMenuItems = [
  { id: 'dashboard', key: 'navigation.customer.overview', icon: Home },
  { id: 'shop', key: 'navigation.customer.shop', icon: ShoppingBag },
  { id: 'subscriptions', key: 'navigation.customer.subscriptions', icon: Repeat },
  { id: 'orders', key: 'navigation.customer.orders', icon: Package },
  { id: 'impact', key: 'navigation.customer.impact', icon: Heart },
  { id: 'rewards', key: 'navigation.customer.rewards', icon: Gift },
];

const adminMenuItems = [
  { id: 'overview', key: 'navigation.admin.overview', icon: Home },
  { id: 'resellers', key: 'navigation.admin.resellers', icon: Users },
  { id: 'customers', key: 'navigation.admin.customers', icon: Users },
  { id: 'orders', key: 'navigation.admin.orders', icon: Package },
  { id: 'commission', key: 'navigation.admin.commission', icon: TrendingUp },
  { id: 'settings', key: 'navigation.admin.settings', icon: Settings },
];

export default function HeaderAppMenu({ role, activeItem, onItemClick, className }: HeaderAppMenuProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getMenuItems = () => {
    switch (role) {
      case 'reseller':
        return resellerMenuItems;
      case 'customer':
        return customerMenuItems;
      case 'admin':
        return adminMenuItems;
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  const handleItemClick = (itemId: string) => {
    if (onItemClick) {
      onItemClick(itemId);
    }
    setIsOpen(false);
  };

  if (!role) {
    return null;
  }

  return (
    <div className={`relative ${className || ''}`} ref={menuRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5"
      >
        <Menu size={16} />
        <span className="hidden sm:inline text-xs">{t('common.menu')}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? 'bg-forest-50 text-forest-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon size={18} />
                <span>{t(item.key)}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
