import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomerLayout, PageHeader, Card, Button, Input, Sidebar } from '@mira/ui';
import { cn } from '@mira/ui';
import { 
  LayoutDashboard, ShoppingBag, Package, FileText, 
  Heart, Target, Trophy, Award, Settings, Menu
} from 'lucide-react';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { useNavigation } from '../../hooks/useNavigation';
import { useMobileBreakpoint } from '../../hooks/useMobileBreakpoint';
import type { UserRole } from '../../App';
import { currentCustomer, mockProducts } from '../../data/mockData';
import MobileNavDrawer from '../../components/MobileNavDrawer';
import ProductCatalogue from './ProductCatalogue';
import ProductDetail from './ProductDetail';
import ShoppingCart from './ShoppingCart';
import CheckoutDelivery from './CheckoutDelivery';
import CheckoutPayment from './CheckoutPayment';
import OrderConfirmation from './OrderConfirmation';
import MySubscriptions from './MySubscriptions';
import SubscriptionDetail from './SubscriptionDetail';
import OrderHistory from './OrderHistory';
import CustomerDashboardHome from './CustomerDashboardHome';
import CustomerImpactOverview from './CustomerImpactOverview';
import CustomerBadgesAchievements from './CustomerBadgesAchievements';
import CustomerMilestones from './CustomerMilestones';
import CustomerLeaderboard from './CustomerLeaderboard';

type CustomerView =
  | 'dashboard'
  | 'shop'
  | 'product-detail'
  | 'cart'
  | 'checkout-delivery'
  | 'checkout-payment'
  | 'confirmation'
  | 'subscriptions'
  | 'subscription-detail'
  | 'order-history'
  | 'impact'
  | 'milestones'
  | 'badges'
  | 'leaderboard'
  | 'settings';

interface CustomerShopProps {
  onLogout: () => void;
  onRoleChange?: (role: UserRole) => void;
  onNavigateToSettings?: (view: string) => void;
  directScreen?: string | null;
  onDirectScreenSet?: (screen: string | null) => void;
}

export default function CustomerShop({ onLogout, onRoleChange, onNavigateToSettings, directScreen, onDirectScreenSet }: CustomerShopProps) {
  const { t } = useTranslation();
  const { currentView, navigate } = useNavigation<CustomerView>('dashboard');
  const [currentRole, setCurrentRole] = useState<UserRole>('customer');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { isMobile } = useMobileBreakpoint();

  useEffect(() => {
    if (directScreen) {
      const viewMap: Record<string, CustomerView> = {
        'customer-dashboard': 'dashboard',
        'product-catalogue': 'shop',
        'product-detail': 'product-detail',
        'cart': 'cart',
        'checkout-delivery': 'checkout-delivery',
        'checkout-payment': 'checkout-payment',
        'order-confirmation': 'confirmation',
        'subscriptions': 'subscriptions',
        'subscription-detail': 'subscription-detail',
        'order-history': 'order-history',
        'customer-impact': 'impact',
        'customer-milestones': 'milestones',
        'customer-badges': 'badges',
        'customer-leaderboard': 'leaderboard',
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
    { id: 'dashboard', label: t('navigation.customer.dashboard'), icon: <LayoutDashboard className="h-5 w-5" strokeWidth={1.5} />, href: '#dashboard', isActive: currentView === 'dashboard', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('dashboard'); } },
    { id: 'shop', label: t('navigation.customer.shop'), icon: <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />, href: '#shop', isActive: currentView === 'shop', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('shop'); } },
    { id: 'subscriptions', label: t('navigation.customer.subscriptions'), icon: <Package className="h-5 w-5" strokeWidth={1.5} />, href: '#subscriptions', isActive: currentView === 'subscriptions', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('subscriptions'); } },
    { id: 'order-history', label: t('navigation.customer.orderHistory'), icon: <FileText className="h-5 w-5" strokeWidth={1.5} />, href: '#order-history', isActive: currentView === 'order-history', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('order-history'); } },
    { id: 'impact', label: t('navigation.customer.impact'), icon: <Heart className="h-5 w-5" strokeWidth={1.5} />, href: '#impact', isActive: currentView === 'impact', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('impact'); } },
    { id: 'milestones', label: t('navigation.customer.milestones'), icon: <Target className="h-5 w-5" strokeWidth={1.5} />, href: '#milestones', isActive: currentView === 'milestones', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('milestones'); } },
    { id: 'badges', label: t('navigation.customer.badges'), icon: <Trophy className="h-5 w-5" strokeWidth={1.5} />, href: '#badges', isActive: currentView === 'badges', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('badges'); } },
    { id: 'leaderboard', label: t('navigation.customer.leaderboard'), icon: <Award className="h-5 w-5" strokeWidth={1.5} />, href: '#leaderboard', isActive: currentView === 'leaderboard', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('leaderboard'); } },
    { id: 'settings', label: t('navigation.customer.settings'), icon: <Settings className="h-5 w-5" strokeWidth={1.5} />, href: '#settings', isActive: currentView === 'settings', onClick: (e: React.MouseEvent) => { e.preventDefault(); onNavigateToSettings ? onNavigateToSettings('profile') : navigate('settings'); } },
  ];

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <CustomerDashboardHome />;
      case 'shop':
        return <ProductCatalogue onProductClick={(id) => { setSelectedProductId(id); navigate('product-detail'); }} />;
      case 'product-detail':
        // Default to first product if no product is selected
        const productIdToShow = selectedProductId || mockProducts[0]?.id || '';
        return <ProductDetail productId={productIdToShow} onBack={() => navigate('shop')} onAddToCart={() => navigate('cart')} />;
      case 'cart':
        return <ShoppingCart onCheckout={() => navigate('checkout-delivery')} onBack={() => navigate('shop')} />;
      case 'checkout-delivery':
        return <CheckoutDelivery onNext={() => navigate('checkout-payment')} onBack={() => navigate('cart')} />;
      case 'checkout-payment':
        return <CheckoutPayment onComplete={() => navigate('confirmation')} onBack={() => navigate('checkout-delivery')} />;
      case 'confirmation':
        return <OrderConfirmation onContinue={() => navigate('shop')} />;
      case 'subscriptions':
        return <MySubscriptions />;
      case 'subscription-detail':
        return <SubscriptionDetail />;
      case 'order-history':
        return <OrderHistory />;
      case 'impact':
        return <CustomerImpactOverview />;
      case 'milestones':
        return <CustomerMilestones />;
      case 'badges':
        return <CustomerBadgesAchievements />;
      case 'leaderboard':
        return <CustomerLeaderboard />;
      case 'settings':
        // Settings handled by App.tsx
        return <CustomerDashboardHome />;
      default:
        return <CustomerDashboardHome />;
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
      <CustomerLayout
        headerProps={{
          className: "w-full",
          logo: (
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
          ),
          user: {
            name: 'Thomas Weber',
          },
          onProfileClick: () => navigate('settings'),
          children: (
            <div className="flex items-center gap-2">
              {/* Role badge - hide on very small screens */}
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-md">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-xs font-medium text-amber-700">
                  Customer
                </span>
                <span className="text-xs text-amber-600">
                  Lvl. {currentCustomer.level}
                </span>
              </div>
              
          {/* Language switcher - hide on mobile */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
            </div>
          ),
        } as any}
      >
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
      </CustomerLayout>
      
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
    </div>
  );
}
