import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header, PageHeader, Sidebar, Button } from '@mira/ui';
import { 
  LayoutDashboard, Users, ShoppingBag, Package, 
  Settings, TrendingUp, FileText, Wrench, Menu, Shield
} from 'lucide-react';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useNavigation } from '../../hooks/useNavigation';
import { useMobileBreakpoint } from '../../hooks/useMobileBreakpoint';
import type { UserRole } from '../../App';
import MobileNavDrawer from '../../components/MobileNavDrawer';
import AdminOverview from './AdminOverview';
import ResellerList from './ResellerList';
import CustomerList from './CustomerList';
import OrderManagement from './OrderManagement';
import CommissionConfiguration from './CommissionConfiguration';
import CommissionLedger from './CommissionLedger';
import AuditLog from './AuditLog';
import SystemSettings from './SystemSettings';

type AdminView =
  | 'overview'
  | 'resellers'
  | 'customers'
  | 'orders'
  | 'commission-config'
  | 'commission-ledger'
  | 'audit-log'
  | 'system-settings';

interface AdminDashboardProps {
  onLogout: () => void;
  onRoleChange?: (role: UserRole) => void;
  onNavigateToSettings?: (view: string) => void;
  directScreen?: string | null;
  onDirectScreenSet?: (screen: string | null) => void;
}

export default function AdminDashboard({ onLogout, onRoleChange, onNavigateToSettings, directScreen, onDirectScreenSet }: AdminDashboardProps) {
  const { t } = useTranslation();
  const { currentView, navigate } = useNavigation<AdminView>('overview');
  const [currentRole, setCurrentRole] = useState<UserRole>('admin');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { isMobile } = useMobileBreakpoint();

  useEffect(() => {
    if (directScreen) {
      const viewMap: Record<string, AdminView> = {
        'admin-overview': 'overview',
        'reseller-list': 'resellers',
        'customer-list': 'customers',
        'order-management': 'orders',
        'commission-config': 'commission-config',
        'commission-ledger': 'commission-ledger',
        'audit-log': 'audit-log',
        'system-settings': 'system-settings',
      };
      const view = viewMap[directScreen];
      if (view) {
        navigate(view);
        onDirectScreenSet?.(null);
        // Scroll to top when navigating via directScreen (useNavigation will also scroll on view change)
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [directScreen, navigate, onDirectScreenSet]);

  const handleRoleChange = (role: UserRole) => {
    setCurrentRole(role);
    if (onRoleChange) {
      onRoleChange(role);
    }
  };

  const sidebarItems = [
    { id: 'overview', label: t('admin.navigation.overview'), icon: <LayoutDashboard className="h-5 w-5" strokeWidth={1.5} />, href: '#overview', isActive: currentView === 'overview', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('overview'); } },
    { id: 'resellers', label: t('admin.navigation.resellers'), icon: <Users className="h-5 w-5" strokeWidth={1.5} />, href: '#resellers', isActive: currentView === 'resellers', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('resellers'); } },
    { id: 'customers', label: t('admin.navigation.customers'), icon: <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />, href: '#customers', isActive: currentView === 'customers', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('customers'); } },
    { id: 'orders', label: t('admin.navigation.orders'), icon: <Package className="h-5 w-5" strokeWidth={1.5} />, href: '#orders', isActive: currentView === 'orders', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('orders'); } },
    { id: 'commission-config', label: t('admin.navigation.commissionConfig'), icon: <Settings className="h-5 w-5" strokeWidth={1.5} />, href: '#commission-config', isActive: currentView === 'commission-config', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('commission-config'); } },
    { id: 'commission-ledger', label: t('admin.navigation.commissionLedger'), icon: <TrendingUp className="h-5 w-5" strokeWidth={1.5} />, href: '#commission-ledger', isActive: currentView === 'commission-ledger', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('commission-ledger'); } },
    { id: 'audit-log', label: t('admin.navigation.auditLog'), icon: <FileText className="h-5 w-5" strokeWidth={1.5} />, href: '#audit-log', isActive: currentView === 'audit-log', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('audit-log'); } },
    { id: 'system-settings', label: t('admin.navigation.systemSettings'), icon: <Wrench className="h-5 w-5" strokeWidth={1.5} />, href: '#system-settings', isActive: currentView === 'system-settings', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('system-settings'); } },
  ];

  const renderView = () => {
    switch (currentView) {
      case 'overview':
        return <AdminOverview />;
      case 'resellers':
        return <ResellerList />;
      case 'customers':
        return <CustomerList />;
      case 'orders':
        return <OrderManagement />;
      case 'commission-config':
        return <CommissionConfiguration />;
      case 'commission-ledger':
        return <CommissionLedger />;
      case 'audit-log':
        return <AuditLog />;
      case 'system-settings':
        return <SystemSettings />;
      default:
        return <AdminOverview />;
    }
  };

  // Create custom LinkComponent that handles onClick
  const LinkComponent = ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => {
    const item = sidebarItems.find(i => i.href === href);
    return (
      <a
        href={href}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          if (item?.onClick) {
            item.onClick(e);
          }
        }}
      >
        {children}
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header - spans full width over sidebar and main content */}
      <Header
        className="w-full"
        logo={(
          <button 
            onClick={() => {
              if (isMobile) {
                setMobileNavOpen(true);
              } else {
                setSidebarCollapsed(!sidebarCollapsed);
              }
            }} 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-forest-500 to-forest-700 flex items-center justify-center">
              <Menu className="text-white" size={20} />
            </div>
            <span className="font-heading text-xl font-bold text-forest-700">MIRA</span>
          </button>
        )}
        onProfileClick={() => navigate('system-settings')}
      >
        <div className="flex items-center gap-2">
          {/* Role badge - hide on very small screens */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-purple-50 border border-purple-200 rounded-md">
            <Shield className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-xs font-medium text-purple-700">
              {t('roles.admin')}
            </span>
          </div>
          
          {/* Language switcher - hide on mobile */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
        </div>
      </Header>
      
      {/* Mobile Navigation Drawer */}
      <MobileNavDrawer
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        items={sidebarItems}
        onNavigate={(itemId) => {
          const item = sidebarItems.find(i => i.id === itemId);
          if (item?.onClick) {
            item.onClick({ preventDefault: () => {} } as React.MouseEvent);
          }
        }}
      />
      {/* Main Content Container - sidebar and main content side by side */}
      <div className="flex flex-1 min-h-0 overflow-hidden w-full">
        <div className="hidden lg:flex lg:flex-shrink-0 h-full">
          <Sidebar
            items={sidebarItems.map(({ onClick, ...item }) => item)}
            LinkComponent={LinkComponent as any}
            collapsed={sidebarCollapsed}
            onCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        </div>
        <main className="flex-1 p-4 md:p-6 overflow-y-auto min-w-0">
          <div className="max-w-7xl mx-auto">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
}
