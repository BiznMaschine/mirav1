/**
 * AppMenu Component
 * 
 * User-specific application menu with role-based navigation items
 */

import { useState } from 'react';
import { Card, Badge } from '@mira/ui';
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
  LogOut,
  ChevronRight,
} from 'lucide-react';
import type { UserRole } from '../App';

export interface AppMenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href?: string;
  badge?: string | number;
  onClick?: () => void;
  isActive?: boolean;
}

export interface AppMenuProps {
  role: UserRole;
  activeItem?: string;
  onItemClick?: (itemId: string) => void;
  onLogout?: () => void;
  className?: string;
}

const resellerMenuItems: AppMenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'network', label: 'Network', icon: Users },
  { id: 'earnings', label: 'Earnings', icon: TrendingUp },
  { id: 'impact', label: 'Impact', icon: Heart },
  { id: 'achievements', label: 'Achievements', icon: Award },
];

const customerMenuItems: AppMenuItem[] = [
  { id: 'dashboard', label: 'Overview', icon: Home },
  { id: 'subscriptions', label: 'Subscriptions', icon: Repeat },
  { id: 'orders', label: 'Orders', icon: Package },
  { id: 'impact', label: 'My Impact', icon: Heart },
  { id: 'rewards', label: 'Rewards', icon: Gift, badge: '2' },
  { id: 'shop', label: 'Shop', icon: ShoppingBag },
];

const adminMenuItems: AppMenuItem[] = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'resellers', label: 'Resellers', icon: Users },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'orders', label: 'Orders', icon: Package },
  { id: 'commission', label: 'Commission', icon: TrendingUp },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function AppMenu({ role, activeItem, onItemClick, onLogout, className }: AppMenuProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getMenuItems = (): AppMenuItem[] => {
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

  const handleItemClick = (item: AppMenuItem) => {
    if (item.onClick) {
      item.onClick();
    } else if (onItemClick) {
      onItemClick(item.id);
    }
  };

  return (
    <div className={`bg-white border-r border-slate-200 h-screen flex flex-col ${className || ''}`}>
      {/* Logo/Brand */}
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-forest-600">
            <Heart size={20} className="text-white" />
          </div>
          {!isCollapsed && (
            <div>
              <span className="text-lg font-bold text-slate-900">MIRA</span>
              <p className="text-xs text-slate-500">
                {role === 'reseller' && 'Reseller Portal'}
                {role === 'customer' && 'My Account'}
                {role === 'admin' && 'Admin Portal'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id || item.isActive;

          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg mb-0.5 transition-colors ${
                isActive
                  ? 'bg-forest-50 text-forest-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Icon size={18} />
              {!isCollapsed && (
                <>
                  <span className="text-sm font-medium flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <Badge variant="secondary" size="sm" className="bg-purple-100 text-purple-700">
                      {item.badge}
                    </Badge>
                  )}
                </>
              )}
            </button>
          );
        })}
      </nav>

      {/* Settings & Logout */}
      <div className="p-2 border-t border-slate-200 space-y-1">
        <button
          onClick={() => handleItemClick({ id: 'settings', label: 'Settings', icon: Settings })}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-600"
        >
          <Settings size={18} />
          {!isCollapsed && <span className="text-sm font-medium">Settings</span>}
        </button>
        {onLogout && (
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-red-50 text-red-600"
          >
            <LogOut size={18} />
            {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
          </button>
        )}
      </div>
    </div>
  );
}
