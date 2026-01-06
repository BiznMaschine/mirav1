import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card } from '@mira/ui';
import type { UserRole } from '../App';

export interface SiteMapScreen {
  id: string;
  label: string;
  path: string[];
  role: UserRole;
  category: string;
}

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
  
  // Customer Shop
  { id: 'product-catalogue', label: 'Product Catalogue', path: ['customer', 'shop'], role: 'customer', category: 'Customer Shop' },
  { id: 'product-detail', label: 'Product Detail', path: ['customer', 'product-detail'], role: 'customer', category: 'Customer Shop' },
  { id: 'cart', label: 'Shopping Cart', path: ['customer', 'cart'], role: 'customer', category: 'Customer Shop' },
  { id: 'checkout-delivery', label: 'Checkout: Delivery', path: ['customer', 'checkout-delivery'], role: 'customer', category: 'Customer Shop' },
  { id: 'checkout-payment', label: 'Checkout: Payment', path: ['customer', 'checkout-payment'], role: 'customer', category: 'Customer Shop' },
  { id: 'order-confirmation', label: 'Order Confirmation', path: ['customer', 'confirmation'], role: 'customer', category: 'Customer Shop' },
  
  // Customer Account
  { id: 'customer-dashboard', label: 'Customer Dashboard', path: ['customer', 'dashboard'], role: 'customer', category: 'Customer Account' },
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

interface PrototypeSiteMapProps {
  currentRole: UserRole;
  onNavigate: (screenId: string) => void;
}

// Helper function to get translated label
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

// Helper function to get translated category
const getTranslatedCategory = (category: string, t: (key: string) => string): string => {
  const categoryMap: Record<string, string> = {
    'Authentication': 'siteMap.categories.authentication',
    'Reseller Onboarding': 'siteMap.categories.resellerOnboarding',
    'Reseller Dashboard': 'siteMap.categories.resellerDashboard',
    'Customer Shop': 'siteMap.categories.customerShop',
    'Customer Account': 'siteMap.categories.customerAccount',
    'Customer Gamification': 'siteMap.categories.customerGamification',
    'Customer Dashboard': 'siteMap.categories.customerDashboard',
    'Gamification Concept': 'siteMap.categories.gamificationConcept',
    'Admin Dashboard': 'siteMap.categories.adminDashboard',
    'Settings': 'siteMap.categories.settings',
    'External Links': 'siteMap.categories.externalLinks',
  };
  const key = categoryMap[category];
  return key ? t(key) : category;
};

export default function PrototypeSiteMap({ currentRole, onNavigate }: PrototypeSiteMapProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(siteMap.map(s => s.category)));

  const handleScreenClick = (screen: SiteMapScreen) => {
    onNavigate(screen.id);
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-amber-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm">UX PROTOTYPE</span>
            <span className="text-xs opacity-90">|</span>
            <span className="text-xs opacity-90">{t('siteMap.role')}: {currentRole || t('siteMap.notLoggedIn')}</span>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsOpen(true)}
            className="bg-white text-amber-600 hover:bg-amber-50"
          >
            📋 {t('siteMap.siteMap')}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">{t('siteMap.title')}</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                ✕ {t('siteMap.close')}
              </Button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  {t('siteMap.allScreens')}
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'primary' : 'secondary'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {getTranslatedCategory(category, t)}
                  </Button>
                ))}
              </div>

              <div className="space-y-6">
                {categories
                  .filter(cat => !selectedCategory || cat === selectedCategory)
                  .map((category) => {
                    const screens = siteMap.filter(s => s.category === category);
                    return (
                      <div key={category}>
                        <h3 className="font-semibold text-slate-900 mb-3 text-lg">{getTranslatedCategory(category, t)}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                          {screens.map((screen) => {
                            const isExternal = screen.category === 'External Links';
                            const handleClick = () => {
                              if (isExternal && screen.id === 'fognini-tech') {
                                window.open('https://www.fognini.tech', '_blank', 'noopener,noreferrer');
                              } else {
                                handleScreenClick(screen);
                              }
                            };
                            
                            return (
                              <button
                                key={screen.id}
                                onClick={handleClick}
                                className="text-left p-3 border border-slate-200 rounded-lg hover:border-forest-600 hover:bg-forest-50 transition-colors"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-slate-900">
                                    {getTranslatedLabel(screen.id, t)}
                                    {isExternal && <span className="ml-2 text-xs">🔗</span>}
                                  </span>
                                  {screen.role && (
                                    <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                                      {screen.role}
                                    </span>
                                  )}
                                </div>
                                <div className="text-xs text-slate-500 mt-1">
                                  {isExternal ? t('siteMap.externalLink') : screen.path.join(' → ')}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
