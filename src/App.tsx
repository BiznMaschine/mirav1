import { useState, useEffect } from 'react';
import PrototypeSiteMapSidebar from './components/PrototypeSiteMapSidebar';
import PrototypeLogin from './components/PrototypeLogin';
import Footer from './components/Footer';
import Login from './pages/auth/Login';
import RegisterReseller from './pages/auth/RegisterReseller';
import RegisterCustomer from './pages/auth/RegisterCustomer';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import EmailVerification from './pages/auth/EmailVerification';
import AssessmentIntro from './pages/reseller/AssessmentIntro';
import AssessmentQuestions from './pages/reseller/AssessmentQuestions';
import AssessmentResult from './pages/reseller/AssessmentResult';
import OnboardingChecklist from './pages/reseller/OnboardingChecklist';
import TrainingStep from './pages/reseller/TrainingStep';
import AgreementStep from './pages/reseller/AgreementStep';
import ResellerDashboard from './pages/reseller/ResellerDashboard';
import CustomerShop from './pages/customer/CustomerShop';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProfileSettings from './pages/shared/ProfileSettings';
import SecuritySettings from './pages/shared/SecuritySettings';
import NotificationPreferences from './pages/shared/NotificationPreferences';
import PayoutSettings from './pages/shared/PayoutSettings';
import AddressBook from './pages/shared/AddressBook';
import PaymentMethods from './pages/shared/PaymentMethods';
import PrivacyData from './pages/shared/PrivacyData';
import GamificationConceptOverview from './pages/gamification/GamificationConceptOverview';
import GamificationDashboard from './pages/gamification/GamificationDashboard';
import GamificationChallenges from './pages/gamification/GamificationChallenges';
import GamificationLevels from './pages/gamification/GamificationLevels';
import GamificationStreaks from './pages/gamification/GamificationStreaks';
import GamificationAchievements from './pages/gamification/GamificationAchievements';
import GamificationBadges from './pages/gamification/GamificationBadges';
import GamificationLeaderboards from './pages/gamification/GamificationLeaderboards';
import GamificationMultipliers from './pages/gamification/GamificationMultipliers';
import GamificationImpactMilestones from './pages/gamification/GamificationImpactMilestones';
import GamificationNotifications from './pages/gamification/GamificationNotifications';

export type UserRole = 'reseller' | 'customer' | 'admin' | null;
export type AuthView = 
  | 'login'
  | 'register-reseller'
  | 'register-customer'
  | 'forgot-password'
  | 'reset-password'
  | 'email-verification';
export type OnboardingView =
  | 'assessment-intro'
  | 'assessment-questions'
  | 'assessment-result'
  | 'onboarding-checklist'
  | 'training'
  | 'agreement';
export type SettingsView =
  | 'profile'
  | 'security'
  | 'notifications'
  | 'payout'
  | 'address'
  | 'payment'
  | 'privacy';

export type GamificationView =
  | 'gamification-overview'
  | 'gamification-dashboard'
  | 'gamification-challenges'
  | 'gamification-levels'
  | 'gamification-streaks'
  | 'gamification-achievements'
  | 'gamification-badges'
  | 'gamification-leaderboards'
  | 'gamification-multipliers'
  | 'gamification-impact-milestones'
  | 'gamification-notifications';

function App() {
  // Check if prototype login is required (simple password protection)
  const [prototypeAuthenticated, setPrototypeAuthenticated] = useState(false);

  const [userRole, setUserRole] = useState<UserRole>(null);
  const [authView, setAuthView] = useState<AuthView>('login');
  const [onboardingView, setOnboardingView] = useState<OnboardingView | null>(null);
  const [settingsView, setSettingsView] = useState<SettingsView | null>(null);
  const [gamificationView, setGamificationView] = useState<GamificationView | null>(null);
  const [resetToken, setResetToken] = useState('mock-token-123');
  const [directScreen, setDirectScreen] = useState<string | null>(null);
  const [currentScreenId, setCurrentScreenId] = useState<string | null>(null); // Track current screen for menu expansion
  const [siteMapOpen, setSiteMapOpen] = useState(true); // Start with sidebar open

  // Clear sessionStorage on mount to always show login screen first
  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('mira_prototype_auth');
    }
  }, []);

  // After prototype login, default to reseller dashboard if no role is set
  // But don't override if we're navigating to an auth screen or settings
  useEffect(() => {
    const isAuthViewCheck = ['login', 'register-reseller', 'register-customer', 'forgot-password', 'reset-password', 'email-verification'].includes(authView);
    if (prototypeAuthenticated && !userRole && !isAuthViewCheck && !onboardingView && !settingsView && !currentScreenId) {
      setUserRole('reseller');
      setSiteMapOpen(true);
      setCurrentScreenId('reseller-dashboard'); // Set initial screen
    }
  }, [prototypeAuthenticated, userRole, authView, onboardingView, settingsView, currentScreenId]);

  // Scroll to top when navigating to auth screens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [authView]);

  // Scroll to top when navigating to onboarding screens
  useEffect(() => {
    if (onboardingView) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [onboardingView]);

  // Scroll to top when navigating to settings screens
  useEffect(() => {
    if (settingsView) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [settingsView]);

  // Scroll to top when navigating to gamification screens
  useEffect(() => {
    if (gamificationView) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [gamificationView]);

  // Scroll to top when currentScreenId changes (for dashboard screens)
  useEffect(() => {
    if (currentScreenId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentScreenId]);

  // Show prototype login screen if not authenticated (must be after all hooks)
  if (!prototypeAuthenticated) {
    return (
      <PrototypeLogin
        onLogin={() => {
          setPrototypeAuthenticated(true);
          // After prototype login, show reseller dashboard with sidebar open
          setUserRole('reseller');
          setSiteMapOpen(true);
        }}
      />
    );
  }

  const handleLogin = (role: UserRole) => {
    // Mock login handler - just sets the role, no actual authentication required
    // This is just for the UX mock login screen demo
    setUserRole(role);
    setOnboardingView(null);
    setAuthView('login');
    setSettingsView(null);
    // Navigate to appropriate dashboard based on role
    if (role === 'reseller') {
      setCurrentScreenId('reseller-dashboard');
    } else if (role === 'customer') {
      setCurrentScreenId('customer-dashboard');
    } else if (role === 'admin') {
      setCurrentScreenId('admin-overview');
    }
  };

  const handleLogout = () => {
    // Clear prototype auth
    sessionStorage.removeItem('mira_prototype_auth');
    setPrototypeAuthenticated(false);
    setUserRole(null);
    setAuthView('login');
    setOnboardingView(null);
    setSettingsView(null);
  };

  const handleRoleChange = (role: UserRole) => {
    setUserRole(role);
    setOnboardingView(null);
    setSettingsView(null);
    setDirectScreen(null);
  };

  const handleSiteMapNavigate = (screenId: string) => {
    console.log('handleSiteMapNavigate called with:', screenId); // Debug log
    setCurrentScreenId(screenId); // Track current screen for menu expansion
    setDirectScreen(screenId);
    // Scroll to top when navigating to a new screen
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Map screen IDs to views
    const screenMap: Record<string, { role: UserRole; view?: string; auth?: AuthView; onboarding?: OnboardingView; settings?: SettingsView }> = {
      'login': { role: null, auth: 'login' },
      'register-reseller': { role: null, auth: 'register-reseller' },
      'register-customer': { role: null, auth: 'register-customer' },
      'forgot-password': { role: null, auth: 'forgot-password' },
      'reset-password': { role: null, auth: 'reset-password' },
      'email-verification': { role: null, auth: 'email-verification' },
      'assessment-intro': { role: 'reseller', onboarding: 'assessment-intro' },
      'assessment-questions': { role: 'reseller', onboarding: 'assessment-questions' },
      'assessment-result': { role: 'reseller', onboarding: 'assessment-result' },
      'onboarding-checklist': { role: 'reseller', onboarding: 'onboarding-checklist' },
      'training': { role: 'reseller', onboarding: 'training' },
      'agreement': { role: 'reseller', onboarding: 'agreement' },
      'reseller-dashboard': { role: 'reseller', view: 'dashboard' },
      'network-tree': { role: 'reseller', view: 'network' },
      'team-list': { role: 'reseller', view: 'team' },
      'earnings': { role: 'reseller', view: 'earnings' },
      'commission-history': { role: 'reseller', view: 'commission-history' },
      'impact-overview': { role: 'reseller', view: 'impact' },
      'impact-milestones': { role: 'reseller', view: 'milestones' },
      'badges': { role: 'reseller', view: 'badges' },
      'leaderboard': { role: 'reseller', view: 'leaderboard' },
      'product-catalogue': { role: 'customer', view: 'shop' },
      'product-detail': { role: 'customer', view: 'product-detail' },
      'cart': { role: 'customer', view: 'cart' },
      'checkout-delivery': { role: 'customer', view: 'checkout-delivery' },
      'checkout-payment': { role: 'customer', view: 'checkout-payment' },
      'order-confirmation': { role: 'customer', view: 'confirmation' },
      'subscriptions': { role: 'customer', view: 'subscriptions' },
      'subscription-detail': { role: 'customer', view: 'subscription-detail' },
      'order-history': { role: 'customer', view: 'order-history' },
      'customer-dashboard': { role: 'customer', view: 'dashboard' },
      'customer-impact': { role: 'customer', view: 'impact' },
      'customer-milestones': { role: 'customer', view: 'milestones' },
      'customer-badges': { role: 'customer', view: 'badges' },
      'customer-leaderboard': { role: 'customer', view: 'leaderboard' },
      'admin-overview': { role: 'admin', view: 'overview' },
      'reseller-list': { role: 'admin', view: 'resellers' },
      'customer-list': { role: 'admin', view: 'customers' },
      'order-management': { role: 'admin', view: 'orders' },
      'commission-config': { role: 'admin', view: 'commission-config' },
      'commission-ledger': { role: 'admin', view: 'commission-ledger' },
      'audit-log': { role: 'admin', view: 'audit-log' },
      'system-settings': { role: 'admin', view: 'system-settings' },
      'profile-settings': { role: null, settings: 'profile' },
      'security-settings': { role: null, settings: 'security' },
      'notification-preferences': { role: null, settings: 'notifications' },
      'payout-settings': { role: null, settings: 'payout' },
      'address-book': { role: null, settings: 'address' },
      'payment-methods': { role: null, settings: 'payment' },
      'privacy-data': { role: null, settings: 'privacy' },
      'gamification-overview': { role: null, view: 'gamification-overview' },
      'gamification-dashboard': { role: null, view: 'gamification-dashboard' },
      'gamification-challenges': { role: null, view: 'gamification-challenges' },
      'gamification-levels': { role: null, view: 'gamification-levels' },
      'gamification-streaks': { role: null, view: 'gamification-streaks' },
      'gamification-achievements': { role: null, view: 'gamification-achievements' },
      'gamification-badges': { role: null, view: 'gamification-badges' },
      'gamification-leaderboards': { role: null, view: 'gamification-leaderboards' },
      'gamification-multipliers': { role: null, view: 'gamification-multipliers' },
      'gamification-impact-milestones': { role: null, view: 'gamification-impact-milestones' },
      'gamification-notifications': { role: null, view: 'gamification-notifications' },
    };

    const screen = screenMap[screenId];
    if (screen) {
      // Clear all views first when navigating
      setOnboardingView(null);
      setSettingsView(null);
      
      // Handle settings screens first (they don't require a role change)
      if (screen.settings) {
        setSettingsView(screen.settings);
        setAuthView('login'); // Reset auth view
        setOnboardingView(null);
        setGamificationView(null);
        // Settings can be accessed from any role, so keep current userRole
        return;
      }
      
      // Handle gamification concept screens (they don't require a role change)
      if (screen.view && screen.view.startsWith('gamification-')) {
        setGamificationView(screen.view as GamificationView);
        setAuthView('login'); // Reset auth view
        setOnboardingView(null);
        setSettingsView(null);
        // Gamification concept can be accessed from any role
        return;
      }
      
      // Handle auth screens (Login, Register, etc.)
      // Allow navigation to auth screens without clearing role - user can view them while logged in
      if (screen.auth) {
        setAuthView(screen.auth);
        setOnboardingView(null);
        setSettingsView(null);
        setGamificationView(null);
        // Don't clear userRole - allow viewing auth screens while logged in
        return;
      }
      
      // Handle onboarding screens
      if (screen.onboarding) {
        setOnboardingView(screen.onboarding);
        setUserRole(screen.role || 'reseller');
        setAuthView('login');
        setSettingsView(null);
        setGamificationView(null);
        return;
      }
      
      // Handle dashboard/view screens
      // Automatically set the role based on the screen - no mock login required
      if (screen.view) {
        // currentScreenId is already set at the beginning of this function
        setDirectScreen(screenId);
        if (screen.role) {
          setUserRole(screen.role);
        }
        setOnboardingView(null);
        setSettingsView(null);
        setGamificationView(null);
        setAuthView('login'); // Reset auth view but won't show because dashboard check happens first
        return;
      }
      
      // Handle role-only screens (fallback)
      if (screen.role) {
        setUserRole(screen.role);
        setOnboardingView(null);
        setSettingsView(null);
        setGamificationView(null);
        setAuthView('login'); // Keep auth view reset but don't show it
      }
    }
  };

  // Handle direct screen navigation from site map - this is handled in dashboard components via useEffect

  // Define screen lists for each role
  // Note: Onboarding screens are handled separately, not included in dashboard screens
  const resellerScreens = ['reseller-dashboard', 'network-tree', 'team-list', 'earnings', 'commission-history', 'impact-overview', 'impact-milestones', 'badges', 'leaderboard'];
  const customerScreens = ['product-catalogue', 'product-detail', 'cart', 'checkout-delivery', 'checkout-payment', 'order-confirmation', 'subscriptions', 'subscription-detail', 'order-history', 'customer-dashboard', 'customer-impact', 'customer-milestones', 'customer-badges', 'customer-leaderboard'];
  const adminScreens = ['admin-overview', 'reseller-list', 'customer-list', 'order-management', 'commission-config', 'commission-ledger', 'audit-log', 'system-settings'];
  const authScreens = ['login', 'register-reseller', 'register-customer', 'forgot-password', 'reset-password', 'email-verification'];
  
  // PRIORITY 1: Handle onboarding screens FIRST (before dashboard check)
  // This ensures onboarding screens are shown when navigating to them
  if (onboardingView) {
    switch (onboardingView) {
      case 'assessment-intro':
        return (
          <>
            <PrototypeSiteMapSidebar 
              currentRole={userRole} 
              currentScreenId={currentScreenId}
              onNavigate={handleSiteMapNavigate}
              isOpen={siteMapOpen}
              onToggle={() => setSiteMapOpen(!siteMapOpen)}
            />
            <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
              <div className="flex-1 pt-10">
                <AssessmentIntro 
                  onStart={() => setOnboardingView('assessment-questions')}
                  onPrefill={() => {
                    setUserRole('reseller');
                    setOnboardingView(null);
                  }}
                />
              </div>
              <Footer />
            </div>
          </>
        );
      case 'assessment-questions':
        return (
          <>
            <PrototypeSiteMapSidebar 
              currentRole={userRole} 
              currentScreenId={currentScreenId}
              onNavigate={handleSiteMapNavigate}
              isOpen={siteMapOpen}
              onToggle={() => setSiteMapOpen(!siteMapOpen)}
            />
            <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
              <div className="flex-1 pt-10">
                <AssessmentQuestions
                  onComplete={() => setOnboardingView('assessment-result')}
                  onBack={() => setOnboardingView('assessment-intro')}
                />
              </div>
              <Footer />
            </div>
          </>
        );
      case 'assessment-result':
        return (
          <>
            <PrototypeSiteMapSidebar 
              currentRole={userRole} 
              currentScreenId={currentScreenId}
              onNavigate={handleSiteMapNavigate}
              isOpen={siteMapOpen}
              onToggle={() => setSiteMapOpen(!siteMapOpen)}
            />
            <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
              <div className="flex-1 pt-10">
                <AssessmentResult onContinue={() => setOnboardingView('onboarding-checklist')} />
              </div>
              <Footer />
            </div>
          </>
        );
      case 'onboarding-checklist':
        return (
          <>
            <PrototypeSiteMapSidebar 
              currentRole={userRole} 
              currentScreenId={currentScreenId}
              onNavigate={handleSiteMapNavigate}
              isOpen={siteMapOpen}
              onToggle={() => setSiteMapOpen(!siteMapOpen)}
            />
            <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
              <div className="flex-1 pt-10">
                <OnboardingChecklist
                  onComplete={() => setOnboardingView('training')}
                />
              </div>
              <Footer />
            </div>
          </>
        );
      case 'training':
        return (
          <>
            <PrototypeSiteMapSidebar 
              currentRole={userRole} 
              currentScreenId={currentScreenId}
              onNavigate={handleSiteMapNavigate}
              isOpen={siteMapOpen}
              onToggle={() => setSiteMapOpen(!siteMapOpen)}
            />
            <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
              <div className="flex-1 pt-10">
                <TrainingStep
                  onComplete={() => setOnboardingView('agreement')}
                  onBack={() => setOnboardingView('onboarding-checklist')}
                />
              </div>
              <Footer />
            </div>
          </>
        );
      case 'agreement':
        return (
          <>
            <PrototypeSiteMapSidebar 
              currentRole={userRole} 
              currentScreenId={currentScreenId}
              onNavigate={handleSiteMapNavigate}
              isOpen={siteMapOpen}
              onToggle={() => setSiteMapOpen(!siteMapOpen)}
            />
            <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
              <div className="flex-1 pt-10">
                <AgreementStep
                  onComplete={() => {
                    setUserRole('reseller');
                    setOnboardingView(null);
                    setCurrentScreenId('reseller-dashboard');
                  }}
                  onBack={() => setOnboardingView('training')}
                />
              </div>
              <Footer />
            </div>
          </>
        );
    }
  }
  
  // PRIORITY 2: Handle dashboard views - check currentScreenId to determine which dashboard to show
  // This ensures dashboards are shown when navigating to them, not auth screens
  if (currentScreenId && resellerScreens.includes(currentScreenId)) {
    return (
      <>
        <PrototypeSiteMapSidebar 
          currentRole={userRole || 'reseller'} 
          currentScreenId={currentScreenId}
          onNavigate={handleSiteMapNavigate}
          isOpen={siteMapOpen}
          onToggle={() => setSiteMapOpen(!siteMapOpen)}
        />
        <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
          <div className="flex-1">
            <ResellerDashboard
              onLogout={handleLogout}
              onRoleChange={handleRoleChange}
              onNavigateToSettings={(view) => setSettingsView(view as SettingsView)}
              directScreen={directScreen}
              onDirectScreenSet={(screen) => setDirectScreen(screen)}
            />
          </div>
          <Footer />
        </div>
      </>
    );
  }
  
  if (currentScreenId && customerScreens.includes(currentScreenId)) {
    return (
      <>
        <PrototypeSiteMapSidebar 
          currentRole={userRole || 'customer'} 
          currentScreenId={currentScreenId}
          onNavigate={handleSiteMapNavigate}
          isOpen={siteMapOpen}
          onToggle={() => setSiteMapOpen(!siteMapOpen)}
        />
        <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
          <div className="flex-1">
            <CustomerShop
              onLogout={handleLogout}
              onRoleChange={handleRoleChange}
              onNavigateToSettings={(view) => setSettingsView(view as SettingsView)}
              directScreen={directScreen}
              onDirectScreenSet={(screen) => setDirectScreen(screen)}
            />
          </div>
          <Footer />
        </div>
      </>
    );
  }
  
  if (currentScreenId && adminScreens.includes(currentScreenId)) {
    return (
      <>
        <PrototypeSiteMapSidebar 
          currentRole={userRole || 'admin'} 
          currentScreenId={currentScreenId}
          onNavigate={handleSiteMapNavigate}
          isOpen={siteMapOpen}
          onToggle={() => setSiteMapOpen(!siteMapOpen)}
        />
        <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
          <div className="flex-1">
            <AdminDashboard
              onLogout={handleLogout}
              onRoleChange={handleRoleChange}
              onNavigateToSettings={(view) => setSettingsView(view as SettingsView)}
              directScreen={directScreen}
              onDirectScreenSet={(screen) => setDirectScreen(screen)}
            />
          </div>
          <Footer />
        </div>
      </>
    );
  }

  // PRIORITY 2: Handle authentication views (UX mock login screen - part of prototype design)
  // These are just viewable screens, not actual authentication gates
  // Only show if explicitly navigating to an auth screen
  const isAuthView = authScreens.includes(authView);
  const isNavigatingToAuthScreen = currentScreenId && authScreens.includes(currentScreenId);
  
  if (isAuthView && !onboardingView && !settingsView && isNavigatingToAuthScreen) {
    switch (authView) {
      case 'login':
        return (
          <>
            <PrototypeSiteMapSidebar 
              currentRole={userRole} 
              currentScreenId={currentScreenId}
              onNavigate={handleSiteMapNavigate}
              isOpen={siteMapOpen}
              onToggle={() => setSiteMapOpen(!siteMapOpen)}
            />
            <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
              <div className="flex-1 pt-10">
                <Login
                  onLogin={handleLogin}
                  onNavigateToRegister={(role) => setAuthView(role === 'reseller' ? 'register-reseller' : 'register-customer')}
                  onNavigateToForgotPassword={() => setAuthView('forgot-password')}
                />
              </div>
              <Footer />
            </div>
          </>
        );
      case 'register-reseller':
        return (
          <>
            <PrototypeSiteMapSidebar 
              currentRole={userRole} 
              currentScreenId={currentScreenId}
              onNavigate={handleSiteMapNavigate}
              isOpen={siteMapOpen}
              onToggle={() => setSiteMapOpen(!siteMapOpen)}
            />
            <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
              <div className="flex-1 pt-10">
                <RegisterReseller
                  onRegister={() => setAuthView('email-verification')}
                  onBack={() => setAuthView('login')}
                />
              </div>
              <Footer />
            </div>
          </>
        );
      case 'register-customer':
        return (
          <>
            <PrototypeSiteMapSidebar 
              currentRole={userRole} 
              currentScreenId={currentScreenId}
              onNavigate={handleSiteMapNavigate}
              isOpen={siteMapOpen}
              onToggle={() => setSiteMapOpen(!siteMapOpen)}
            />
            <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
              <div className="flex-1 pt-10">
                <RegisterCustomer
                  onRegister={() => setAuthView('email-verification')}
                  onBack={() => setAuthView('login')}
                />
              </div>
              <Footer />
            </div>
          </>
        );
      case 'forgot-password':
        return (
          <>
            <PrototypeSiteMapSidebar 
              currentRole={userRole} 
              currentScreenId={currentScreenId}
              onNavigate={handleSiteMapNavigate}
              isOpen={siteMapOpen}
              onToggle={() => setSiteMapOpen(!siteMapOpen)}
            />
            <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
              <div className="flex-1 pt-10">
                <ForgotPassword
                  onReset={() => setAuthView('reset-password')}
                  onBack={() => setAuthView('login')}
                />
              </div>
              <Footer />
            </div>
          </>
        );
      case 'reset-password':
        return (
          <>
            <PrototypeSiteMapSidebar 
              currentRole={userRole} 
              currentScreenId={currentScreenId}
              onNavigate={handleSiteMapNavigate}
              isOpen={siteMapOpen}
              onToggle={() => setSiteMapOpen(!siteMapOpen)}
            />
            <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
              <div className="flex-1 pt-10">
                <ResetPassword
                  token={resetToken}
                  onComplete={() => setAuthView('login')}
                  onBack={() => setAuthView('forgot-password')}
                />
              </div>
              <Footer />
            </div>
          </>
        );
      case 'email-verification':
        return (
          <>
            <PrototypeSiteMapSidebar 
              currentRole={userRole} 
              currentScreenId={currentScreenId}
              onNavigate={handleSiteMapNavigate}
              isOpen={siteMapOpen}
              onToggle={() => setSiteMapOpen(!siteMapOpen)}
            />
            <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
              <div className="flex-1 pt-10">
                <EmailVerification
                  token="mock-verification-token"
                  onComplete={() => setAuthView('login')}
                  onResend={() => {}}
                />
              </div>
              <Footer />
            </div>
          </>
        );
    }
    
    // Default: show login if no auth view matches
    return (
      <>
        <PrototypeSiteMapSidebar 
          currentRole={userRole} 
          currentScreenId={currentScreenId}
          onNavigate={handleSiteMapNavigate}
          isOpen={siteMapOpen}
          onToggle={() => setSiteMapOpen(!siteMapOpen)}
        />
        <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
          <div className="flex-1 pt-10">
            <Login
              onLogin={handleLogin}
              onNavigateToRegister={(role) => setAuthView(role === 'reseller' ? 'register-reseller' : 'register-customer')}
              onNavigateToForgotPassword={() => setAuthView('forgot-password')}
            />
          </div>
          <Footer />
        </div>
      </>
    );
  }

  // Handle gamification concept view (accessible to all)
  if (gamificationView) {
    const GamificationComponent = {
      'gamification-overview': GamificationConceptOverview,
      'gamification-dashboard': GamificationDashboard,
      'gamification-challenges': GamificationChallenges,
      'gamification-levels': GamificationLevels,
      'gamification-streaks': GamificationStreaks,
      'gamification-achievements': GamificationAchievements,
      'gamification-badges': GamificationBadges,
      'gamification-leaderboards': GamificationLeaderboards,
      'gamification-multipliers': GamificationMultipliers,
      'gamification-impact-milestones': GamificationImpactMilestones,
      'gamification-notifications': GamificationNotifications,
    }[gamificationView];

    return (
      <>
        <PrototypeSiteMapSidebar 
          currentRole={userRole} 
          currentScreenId={currentScreenId}
          onNavigate={handleSiteMapNavigate}
          isOpen={siteMapOpen}
          onToggle={() => setSiteMapOpen(!siteMapOpen)}
        />
        <div className={`flex flex-col min-h-screen bg-slate-50 ${siteMapOpen ? 'pl-56' : ''}`}>
          <div className="flex-1 p-6 pt-20">
            <div className="max-w-7xl mx-auto">
              <button
                onClick={() => setGamificationView(null)}
                className="mb-6 text-forest-600 hover:underline"
              >
                ← Back
              </button>
              <GamificationComponent />
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  // Handle settings view (only when authenticated)
  if (settingsView) {
    const SettingsComponent = {
      profile: ProfileSettings,
      security: SecuritySettings,
      notifications: NotificationPreferences,
      payout: PayoutSettings,
      address: AddressBook,
      payment: PaymentMethods,
      privacy: PrivacyData,
    }[settingsView];

    return (
      <>
        <PrototypeSiteMapSidebar 
          currentRole={userRole} 
          currentScreenId={currentScreenId}
          onNavigate={handleSiteMapNavigate}
          isOpen={siteMapOpen}
          onToggle={() => setSiteMapOpen(!siteMapOpen)}
        />
        <div className={`flex flex-col min-h-screen bg-slate-50 ${siteMapOpen ? 'pl-56' : ''}`}>
          <div className="flex-1 p-6 pt-20">
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setSettingsView(null)}
                className="mb-6 text-forest-600 hover:underline"
              >
                ← Back to Dashboard
              </button>
              <SettingsComponent />
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  // Default: show reseller dashboard if no specific screen is selected
  // This happens when userRole is set but no currentScreenId is specified
  if (userRole && !currentScreenId) {
    return (
      <>
        <PrototypeSiteMapSidebar 
          currentRole={userRole || 'reseller'} 
          currentScreenId={currentScreenId || 'reseller-dashboard'}
          onNavigate={handleSiteMapNavigate}
          isOpen={siteMapOpen}
          onToggle={() => setSiteMapOpen(!siteMapOpen)}
        />
        <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
          <div className="flex-1">
            <ResellerDashboard
              onLogout={handleLogout}
              onRoleChange={handleRoleChange}
              onNavigateToSettings={(view) => setSettingsView(view as SettingsView)}
              directScreen={directScreen}
              onDirectScreenSet={(screen) => setDirectScreen(screen)}
            />
          </div>
          <Footer />
        </div>
      </>
    );
  }
  
  // Final fallback: show reseller dashboard
  return (
    <>
      <PrototypeSiteMapSidebar 
        currentRole={userRole || 'reseller'} 
        currentScreenId={currentScreenId || 'reseller-dashboard'}
        onNavigate={handleSiteMapNavigate}
        isOpen={siteMapOpen}
        onToggle={() => setSiteMapOpen(!siteMapOpen)}
      />
      <div className={`flex flex-col min-h-screen ${siteMapOpen ? 'pl-56' : ''}`}>
        <div className="flex-1">
          <ResellerDashboard
            onLogout={handleLogout}
            onRoleChange={handleRoleChange}
            onNavigateToSettings={(view) => setSettingsView(view as SettingsView)}
            directScreen={directScreen}
            onDirectScreenSet={(screen) => setDirectScreen(screen)}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
