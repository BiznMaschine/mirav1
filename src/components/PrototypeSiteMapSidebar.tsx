import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mira/ui';
import { ChevronDown, ChevronRight, Map, Users, ShoppingBag, Shield, Settings, Trophy } from 'lucide-react';
import type { UserRole } from '../App';
import type { SiteMapScreen } from './PrototypeSiteMap';

interface PrototypeSiteMapSidebarProps {
  currentRole: UserRole;
  currentScreenId: string | null;
  onNavigate: (screenId: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

// Import siteMap from PrototypeSiteMap
const siteMap: SiteMapScreen[] = [
  // Authentication
  { id: 'login', label: 'Login', path: ['auth', 'login'], role: null, category: 'Authentication' },
  { id: 'register-reseller', label: 'Register (Reseller)', path: ['auth', 'register-reseller'], role: null, category: 'Authentication' },
  { id: 'register-customer', label: 'Register (Customer)', path: ['auth', 'register-customer'], role: null, category: 'Authentication' },
  { id: 'forgot-password', label: 'Forgot Password', path: ['auth', 'forgot-password'], role: null, category: 'Authentication' },
  { id: 'reset-password', label: 'Reset Password', path: ['auth', 'reset-password'], role: null, category: 'Authentication' },
  { id: 'email-verification', label: 'Email Verification', path: ['auth', 'email-verification'], role: null, category: 'Authentication' },
  
  // Reseller Onboarding
  { id: 'assessment-intro', label: 'Assessment Intro', path: ['reseller', 'onboarding', 'assessment-intro'], role: 'reseller', category: 'Reseller Onboarding' },
  { id: 'assessment-questions', label: 'Assessment Questions', path: ['reseller', 'onboarding', 'assessment-questions'], role: 'reseller', category: 'Reseller Onboarding' },
  { id: 'assessment-result', label: 'Assessment Result', path: ['reseller', 'onboarding', 'assessment-result'], role: 'reseller', category: 'Reseller Onboarding' },
  { id: 'onboarding-checklist', label: 'Onboarding Checklist', path: ['reseller', 'onboarding', 'onboarding-checklist'], role: 'reseller', category: 'Reseller Onboarding' },
  { id: 'training', label: 'Training', path: ['reseller', 'onboarding', 'training'], role: 'reseller', category: 'Reseller Onboarding' },
  { id: 'agreement', label: 'Agreement', path: ['reseller', 'onboarding', 'agreement'], role: 'reseller', category: 'Reseller Onboarding' },
  
  // Reseller Dashboard
  { id: 'reseller-dashboard', label: 'Dashboard Home', path: ['reseller', 'dashboard'], role: 'reseller', category: 'Reseller Dashboard' },
  { id: 'network-tree', label: 'Network Tree', path: ['reseller', 'network'], role: 'reseller', category: 'Reseller Dashboard' },
  { id: 'team-list', label: 'Team List', path: ['reseller', 'team'], role: 'reseller', category: 'Reseller Dashboard' },
  { id: 'earnings', label: 'Earnings Overview', path: ['reseller', 'earnings'], role: 'reseller', category: 'Reseller Dashboard' },
  { id: 'commission-history', label: 'Commission History', path: ['reseller', 'commission-history'], role: 'reseller', category: 'Reseller Dashboard' },
  { id: 'impact-overview', label: 'Impact Overview', path: ['reseller', 'impact'], role: 'reseller', category: 'Reseller Dashboard' },
  { id: 'impact-milestones', label: 'Impact Milestones', path: ['reseller', 'milestones'], role: 'reseller', category: 'Reseller Dashboard' },
  { id: 'badges', label: 'Badges & Achievements', path: ['reseller', 'badges'], role: 'reseller', category: 'Reseller Dashboard' },
  { id: 'leaderboard', label: 'Leaderboard', path: ['reseller', 'leaderboard'], role: 'reseller', category: 'Reseller Dashboard' },
  
  // Customer Dashboard (first, like reseller-dashboard)
  { id: 'customer-dashboard', label: 'Dashboard Home', path: ['customer', 'dashboard'], role: 'customer', category: 'Customer Dashboard' },
  
  // Customer Shop
  { id: 'product-catalogue', label: 'Product Catalogue', path: ['customer', 'shop'], role: 'customer', category: 'Customer Shop' },
  { id: 'product-detail', label: 'Product Detail', path: ['customer', 'product-detail'], role: 'customer', category: 'Customer Shop' },
  { id: 'cart', label: 'Shopping Cart', path: ['customer', 'cart'], role: 'customer', category: 'Customer Shop' },
  { id: 'checkout-delivery', label: 'Checkout: Delivery', path: ['customer', 'checkout-delivery'], role: 'customer', category: 'Customer Shop' },
  { id: 'checkout-payment', label: 'Checkout: Payment', path: ['customer', 'checkout-payment'], role: 'customer', category: 'Customer Shop' },
  { id: 'order-confirmation', label: 'Order Confirmation', path: ['customer', 'confirmation'], role: 'customer', category: 'Customer Shop' },
  
  // Customer Account
  { id: 'subscriptions', label: 'My Subscriptions', path: ['customer', 'subscriptions'], role: 'customer', category: 'Customer Account' },
  { id: 'subscription-detail', label: 'Subscription Detail', path: ['customer', 'subscription-detail'], role: 'customer', category: 'Customer Account' },
  { id: 'order-history', label: 'Order History', path: ['customer', 'order-history'], role: 'customer', category: 'Customer Account' },
  
  // Customer Gamification
  { id: 'customer-impact', label: 'Customer Impact Overview', path: ['customer', 'impact'], role: 'customer', category: 'Customer Gamification' },
  { id: 'customer-milestones', label: 'Customer Milestones', path: ['customer', 'milestones'], role: 'customer', category: 'Customer Gamification' },
  { id: 'customer-badges', label: 'Customer Badges', path: ['customer', 'badges'], role: 'customer', category: 'Customer Gamification' },
  { id: 'customer-leaderboard', label: 'Customer Leaderboard', path: ['customer', 'leaderboard'], role: 'customer', category: 'Customer Gamification' },
  
  // Gamification Concept
  { id: 'gamification-overview', label: 'Overview / Concept', path: ['gamification', 'concept', 'overview'], role: null, category: 'Gamification Concept' },
  { id: 'gamification-dashboard', label: 'Personal Gamification Dashboard', path: ['gamification', 'concept', 'dashboard'], role: null, category: 'Gamification Concept' },
  { id: 'gamification-challenges', label: 'Challenges View', path: ['gamification', 'concept', 'challenges'], role: null, category: 'Gamification Concept' },
  { id: 'gamification-levels', label: 'Levels & Progression', path: ['gamification', 'concept', 'levels'], role: null, category: 'Gamification Concept' },
  { id: 'gamification-streaks', label: 'Streaks View', path: ['gamification', 'concept', 'streaks'], role: null, category: 'Gamification Concept' },
  { id: 'gamification-achievements', label: 'Achievements Overview', path: ['gamification', 'concept', 'achievements'], role: null, category: 'Gamification Concept' },
  { id: 'gamification-badges', label: 'Badges Collection', path: ['gamification', 'concept', 'badges'], role: null, category: 'Gamification Concept' },
  { id: 'gamification-leaderboards', label: 'Leaderboards', path: ['gamification', 'concept', 'leaderboards'], role: null, category: 'Gamification Concept' },
  { id: 'gamification-multipliers', label: 'Multipliers & Bonuses', path: ['gamification', 'concept', 'multipliers'], role: null, category: 'Gamification Concept' },
  { id: 'gamification-impact-milestones', label: 'Impact Milestones', path: ['gamification', 'concept', 'impact-milestones'], role: null, category: 'Gamification Concept' },
  { id: 'gamification-notifications', label: 'Notifications & Alerts', path: ['gamification', 'concept', 'notifications'], role: null, category: 'Gamification Concept' },
  
  // Admin Dashboard
  { id: 'admin-overview', label: 'Admin Overview', path: ['admin', 'overview'], role: 'admin', category: 'Admin Dashboard' },
  { id: 'reseller-list', label: 'Reseller List', path: ['admin', 'resellers'], role: 'admin', category: 'Admin Dashboard' },
  { id: 'customer-list', label: 'Customer List', path: ['admin', 'customers'], role: 'admin', category: 'Admin Dashboard' },
  { id: 'order-management', label: 'Order Management', path: ['admin', 'orders'], role: 'admin', category: 'Admin Dashboard' },
  { id: 'commission-config', label: 'Commission Configuration', path: ['admin', 'commission-config'], role: 'admin', category: 'Admin Dashboard' },
  { id: 'commission-ledger', label: 'Commission Ledger', path: ['admin', 'commission-ledger'], role: 'admin', category: 'Admin Dashboard' },
  { id: 'audit-log', label: 'Audit Log', path: ['admin', 'audit-log'], role: 'admin', category: 'Admin Dashboard' },
  { id: 'system-settings', label: 'System Settings', path: ['admin', 'system-settings'], role: 'admin', category: 'Admin Dashboard' },
  
  // Settings (Shared)
  { id: 'profile-settings', label: 'Profile Settings', path: ['settings', 'profile'], role: null, category: 'Settings' },
  { id: 'security-settings', label: 'Security Settings', path: ['settings', 'security'], role: null, category: 'Settings' },
  { id: 'notification-preferences', label: 'Notification Preferences', path: ['settings', 'notifications'], role: null, category: 'Settings' },
  { id: 'payout-settings', label: 'Payout Settings', path: ['settings', 'payout'], role: null, category: 'Settings' },
  { id: 'address-book', label: 'Address Book', path: ['settings', 'address'], role: null, category: 'Settings' },
  { id: 'payment-methods', label: 'Payment Methods', path: ['settings', 'payment'], role: null, category: 'Settings' },
  { id: 'privacy-data', label: 'Privacy & Data', path: ['settings', 'privacy'], role: null, category: 'Settings' },
  
  // External Links
  { id: 'fognini-tech', label: 'Fognini Tech', path: ['external', 'fognini-tech'], role: null, category: 'External Links' },
];

// Group screens by persona
const groupByPersona = (screens: SiteMapScreen[]) => {
  const groups: Record<string, { onboarding: SiteMapScreen[]; dashboard: SiteMapScreen[]; submenus: SiteMapScreen[]; gamification: SiteMapScreen[] }> = {
    gamification: { onboarding: [], dashboard: [], submenus: [], gamification: [] },
    reseller: { onboarding: [], dashboard: [], submenus: [], gamification: [] },
    customer: { onboarding: [], dashboard: [], submenus: [], gamification: [] },
    admin: { onboarding: [], dashboard: [], submenus: [], gamification: [] },
    shared: { onboarding: [], dashboard: [], submenus: [], gamification: [] },
  };

  screens.forEach((screen) => {
    if (screen.category === 'Gamification Concept') {
      groups.gamification.gamification.push(screen);
    } else if (screen.category === 'Authentication' || screen.category === 'Settings') {
      groups.shared.submenus.push(screen);
    } else if (screen.role === 'reseller') {
      if (screen.category === 'Reseller Onboarding') {
        groups.reseller.onboarding.push(screen);
      } else if (screen.category === 'Reseller Dashboard') {
        groups.reseller.dashboard.push(screen);
      }
    } else if (screen.role === 'customer') {
      // Handle Customer Dashboard first (should appear first in list)
      if (screen.category === 'Customer Dashboard') {
        groups.customer.dashboard.unshift(screen);
      } else if (screen.category.includes('Customer')) {
        // All other customer categories (Shop, Account, Gamification)
        groups.customer.dashboard.push(screen);
      }
    } else if (screen.role === 'admin') {
      if (screen.category === 'Admin Dashboard') {
        groups.admin.dashboard.push(screen);
      }
    }
  });

  return groups;
};

// Helper function to get translated label (same as in PrototypeSiteMap)
const getTranslatedLabel = (screenId: string, t: (key: string) => string): string => {
  const keyMap: Record<string, string> = {
    'login': 'siteMap.screens.login',
    'register-reseller': 'siteMap.screens.registerReseller',
    'register-customer': 'siteMap.screens.registerCustomer',
    'forgot-password': 'siteMap.screens.forgotPassword',
    'reset-password': 'siteMap.screens.resetPassword',
    'email-verification': 'siteMap.screens.emailVerification',
    'assessment-intro': 'siteMap.screens.assessmentIntro',
    'assessment-questions': 'siteMap.screens.assessmentQuestions',
    'assessment-result': 'siteMap.screens.assessmentResult',
    'onboarding-checklist': 'siteMap.screens.onboardingChecklist',
    'training': 'siteMap.screens.training',
    'agreement': 'siteMap.screens.agreement',
    'reseller-dashboard': 'siteMap.screens.dashboardHome',
    'network-tree': 'siteMap.screens.networkTree',
    'team-list': 'siteMap.screens.teamList',
    'earnings': 'siteMap.screens.earningsOverview',
    'commission-history': 'siteMap.screens.commissionHistory',
    'impact-overview': 'siteMap.screens.impactOverview',
    'impact-milestones': 'siteMap.screens.impactMilestones',
    'badges': 'siteMap.screens.badgesAchievements',
    'leaderboard': 'siteMap.screens.leaderboard',
    'product-catalogue': 'siteMap.screens.productCatalogue',
    'product-detail': 'siteMap.screens.productDetail',
    'cart': 'siteMap.screens.shoppingCart',
    'checkout-delivery': 'siteMap.screens.checkoutDelivery',
    'checkout-payment': 'siteMap.screens.checkoutPayment',
    'order-confirmation': 'siteMap.screens.orderConfirmation',
    'customer-dashboard': 'siteMap.screens.customerDashboard',
    'subscriptions': 'siteMap.screens.mySubscriptions',
    'subscription-detail': 'siteMap.screens.subscriptionDetail',
    'order-history': 'siteMap.screens.orderHistory',
    'customer-impact': 'siteMap.screens.customerImpactOverview',
    'customer-milestones': 'siteMap.screens.customerMilestones',
    'customer-badges': 'siteMap.screens.customerBadges',
    'customer-leaderboard': 'siteMap.screens.customerLeaderboard',
    'gamification-overview': 'siteMap.screens.overviewConcept',
    'gamification-dashboard': 'siteMap.screens.personalGamificationDashboard',
    'gamification-challenges': 'siteMap.screens.challengesView',
    'gamification-levels': 'siteMap.screens.levelsProgression',
    'gamification-streaks': 'siteMap.screens.streaksView',
    'gamification-achievements': 'siteMap.screens.achievementsOverview',
    'gamification-badges': 'siteMap.screens.badgesCollection',
    'gamification-leaderboards': 'siteMap.screens.leaderboards',
    'gamification-multipliers': 'siteMap.screens.multipliersBonuses',
    'gamification-impact-milestones': 'siteMap.screens.impactMilestones',
    'gamification-notifications': 'siteMap.screens.notificationsAlerts',
    'admin-overview': 'siteMap.screens.adminOverview',
    'reseller-list': 'siteMap.screens.resellerList',
    'customer-list': 'siteMap.screens.customerList',
    'order-management': 'siteMap.screens.orderManagement',
    'commission-config': 'siteMap.screens.commissionConfiguration',
    'commission-ledger': 'siteMap.screens.commissionLedger',
    'audit-log': 'siteMap.screens.auditLog',
    'system-settings': 'siteMap.screens.systemSettings',
    'profile-settings': 'siteMap.screens.profileSettings',
    'security-settings': 'siteMap.screens.securitySettings',
    'notification-preferences': 'siteMap.screens.notificationPreferences',
    'payout-settings': 'siteMap.screens.payoutSettings',
    'address-book': 'siteMap.screens.addressBook',
    'payment-methods': 'siteMap.screens.paymentMethods',
    'privacy-data': 'siteMap.screens.privacyData',
    'fognini-tech': 'siteMap.screens.fogniniTech',
  };
  const key = keyMap[screenId];
  return key ? t(key) : screenId;
};

export default function PrototypeSiteMapSidebar({ currentRole, currentScreenId, onNavigate, isOpen, onToggle }: PrototypeSiteMapSidebarProps) {
  const { t } = useTranslation();
  const groups = groupByPersona(siteMap);
  
  // Determine which group should be expanded based on current screen
  const getGroupForScreen = (screenId: string | null): string | null => {
    if (!screenId) {
      // Default to current role's group
      if (currentRole === 'reseller') return 'reseller';
      if (currentRole === 'customer') return 'customer';
      if (currentRole === 'admin') return 'admin';
      return 'reseller';
    }
    
    // Find the screen in the siteMap
    const screen = siteMap.find(s => s.id === screenId);
    if (!screen) return null;
    
    // Determine group based on screen category and role
    if (screen.category === 'Gamification Concept') {
      return 'gamification';
    } else if (screen.category === 'Authentication' || screen.category === 'Settings') {
      return 'shared';
    } else if (screen.role === 'reseller') {
      return 'reseller';
    } else if (screen.role === 'customer') {
      return 'customer';
    } else if (screen.role === 'admin') {
      return 'admin';
    }
    
    return 'shared'; // Default fallback
  };
  
  // Initialize expanded group based on current screen or role
  const [expandedGroup, setExpandedGroup] = useState<string | null>(() => {
    return getGroupForScreen(currentScreenId || null);
  });

  // Update expanded group when currentScreenId changes or sidebar opens
  useEffect(() => {
    if (isOpen) {
      const group = getGroupForScreen(currentScreenId || null);
      if (group && group !== expandedGroup) {
        setExpandedGroup(group);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentScreenId]);

  const toggleGroup = (groupKey: string) => {
    // If clicking the same group, collapse it. Otherwise, expand the new one and collapse others
    setExpandedGroup((prev) => prev === groupKey ? null : groupKey);
  };

  const handleScreenClick = (screen: SiteMapScreen, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent parent group toggle
    }
    
    // Handle external links
    if (screen.category === 'External Links' && screen.id === 'fognini-tech') {
      window.open('https://www.fognini.tech', '_blank', 'noopener,noreferrer');
      return;
    }
    
    console.log('Navigating to screen:', screen.id); // Debug log
    
    // Determine which group this screen belongs to and expand it
    const group = getGroupForScreen(screen.id);
    if (group) {
      setExpandedGroup(group);
    }
    
    onNavigate(screen.id);
  };

  const getPersonaIcon = (groupKey: string) => {
    switch (groupKey) {
      case 'gamification':
        return <Trophy className="w-4 h-4 text-slate-500" />;
      case 'reseller':
        return <Users className="w-4 h-4 text-slate-500" />;
      case 'customer':
        return <ShoppingBag className="w-4 h-4 text-slate-500" />;
      case 'admin':
        return <Shield className="w-4 h-4 text-slate-500" />;
      case 'shared':
        return <Settings className="w-4 h-4 text-slate-500" />;
      default:
        return null;
    }
  };

  const renderGroup = (
    title: string,
    groupKey: string,
    items: { onboarding: SiteMapScreen[]; dashboard: SiteMapScreen[]; submenus: SiteMapScreen[]; gamification: SiteMapScreen[] },
    showOnboarding = true
  ) => {
    const isExpanded = expandedGroup === groupKey;
    const hasItems = items.onboarding.length > 0 || items.dashboard.length > 0 || items.submenus.length > 0 || items.gamification.length > 0;

    if (!hasItems) return null;

    return (
      <div className="mb-1">
        <button
          onClick={() => toggleGroup(groupKey)}
          className="w-full flex items-center justify-between px-2 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded transition-colors"
        >
          <div className="flex items-center gap-1.5">
            {getPersonaIcon(groupKey)}
            <span>{title}</span>
          </div>
          {isExpanded ? <ChevronDown className="w-3 h-3 text-slate-400" /> : <ChevronRight className="w-3 h-3 text-slate-400" />}
        </button>
        {isExpanded && (
          <div className="ml-1 mt-0.5 space-y-2" onClick={(e) => e.stopPropagation()}>
            {showOnboarding && items.onboarding.length > 0 && (
              <div className="mb-2">
                <div className="px-2 py-1 mb-1 text-xs font-medium text-slate-500 uppercase tracking-wide">
                  {t('siteMap.sections.onboarding')}
                </div>
                <div className="space-y-0.5">
                  {items.onboarding.map((screen) => (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleScreenClick(screen, e);
                      }}
                      className={`w-full text-left px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                        currentScreenId === screen.id
                          ? 'text-slate-900 bg-slate-200'
                          : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                      }`}
                    >
                      {getTranslatedLabel(screen.id, t)}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {items.dashboard.length > 0 && (
              <div className="mb-2">
                <div className="px-2 py-1 mb-1 text-xs font-medium text-slate-500 uppercase tracking-wide">
                  {t('siteMap.sections.dashboard')}
                </div>
                <div className="space-y-0.5">
                  {items.dashboard.map((screen) => (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleScreenClick(screen, e);
                      }}
                      className={`w-full text-left px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                        currentScreenId === screen.id
                          ? 'text-slate-900 bg-slate-200'
                          : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                      }`}
                    >
                      {getTranslatedLabel(screen.id, t)}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {items.gamification.length > 0 && (
              <div className="mb-2">
                <div className="px-2 py-1 mb-1 text-xs font-medium text-slate-500 uppercase tracking-wide">
                  {t('siteMap.sections.gamificationConcept')}
                </div>
                <div className="space-y-0.5">
                  {items.gamification.map((screen) => (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleScreenClick(screen, e);
                      }}
                      className={`w-full text-left px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                        currentScreenId === screen.id
                          ? 'text-slate-900 bg-slate-200'
                          : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                      }`}
                    >
                      {getTranslatedLabel(screen.id, t)}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {items.submenus.length > 0 && (
              <div>
                <div className="px-2 py-1 mb-1 text-xs font-medium text-slate-500 uppercase tracking-wide">
                  {t('siteMap.sections.submenus')}
                </div>
                <div className="space-y-0.5">
                  {items.submenus.map((screen) => (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleScreenClick(screen, e);
                      }}
                      className={`w-full text-left px-3 py-1 text-xs rounded transition-colors cursor-pointer ${
                        currentScreenId === screen.id
                          ? 'text-slate-900 bg-slate-200'
                          : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                      }`}
                    >
                      {getTranslatedLabel(screen.id, t)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed left-0 top-4 z-50 bg-slate-100 text-slate-600 p-2 rounded-r-md border-r border-y border-slate-200 hover:bg-slate-200 transition-colors"
        title={t('siteMap.openSiteMap')}
      >
        <Map className="w-4 h-4" />
      </button>
    );
  }

  return (
    <div className="fixed left-0 top-0 bottom-0 z-50 w-56 bg-slate-50 border-r border-slate-200 flex flex-col">
      <div className="p-3 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Map className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-medium text-slate-600">Navigation</span>
          </div>
          <button
            onClick={onToggle}
            className="text-slate-400 hover:text-slate-600 transition-colors text-sm"
            title={t('siteMap.closeSiteMap')}
          >
            ✕
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        <div className="space-y-0.5">
          {renderGroup(t('siteMap.groups.gamificationConcept'), 'gamification', groups.gamification, false)}
          {renderGroup(t('siteMap.groups.reseller'), 'reseller', groups.reseller)}
          {renderGroup(t('siteMap.groups.customer'), 'customer', groups.customer)}
          {renderGroup(t('siteMap.groups.admin'), 'admin', groups.admin, false)}
          {renderGroup(t('siteMap.groups.shared'), 'shared', groups.shared, false)}
        </div>
      </div>
      
      <div className="p-2 border-t border-slate-200">
        <a
          href="https://www.fognini.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-2 py-1.5 text-xs text-slate-400 hover:text-slate-600 rounded transition-colors"
        >
          <span>{t('siteMap.createdBy')}</span>
          <span className="font-medium">Fognini Tech</span>
        </a>
      </div>
    </div>
  );
}
