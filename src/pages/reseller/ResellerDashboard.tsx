import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header, PageHeader, Card, Button, Sidebar } from '@mira/ui';
import { 
  LayoutDashboard, Network, Users, Coins, TrendingUp, 
  Heart, Target, Trophy, Award, Settings, Menu
} from 'lucide-react';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { CustomNavItem } from '../../components/CustomNavItem';
import { useNavigation } from '../../hooks/useNavigation';
import { useMobileBreakpoint } from '../../hooks/useMobileBreakpoint';
import type { UserRole } from '../../App';
import { currentReseller } from '../../data/mockData';
import MobileNavDrawer from '../../components/MobileNavDrawer';
import DashboardHome from './DashboardHome';
import NetworkTree from './NetworkTree';
import TeamList from './TeamList';
import EarningsOverview from './EarningsOverview';
import CommissionHistory from './CommissionHistory';
import ImpactOverview from './ImpactOverview';
import ImpactMilestones from './ImpactMilestones';
import BadgesAchievements from './BadgesAchievements';
import Leaderboard from './Leaderboard';

type ResellerView = 
  | 'dashboard'
  | 'network'
  | 'team'
  | 'earnings'
  | 'commission-history'
  | 'impact'
  | 'milestones'
  | 'badges'
  | 'leaderboard'
  | 'settings';

interface ResellerDashboardProps {
  onLogout: () => void;
  onRoleChange?: (role: UserRole) => void;
  onNavigateToSettings?: (view: string) => void;
  directScreen?: string | null;
  onDirectScreenSet?: (screen: string | null) => void;
}

export default function ResellerDashboard({ onLogout, onRoleChange, onNavigateToSettings, directScreen, onDirectScreenSet }: ResellerDashboardProps) {
  const { t } = useTranslation();
  const { currentView, navigate } = useNavigation<ResellerView>('dashboard');
  const [currentRole, setCurrentRole] = useState<UserRole>('reseller');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { isMobile } = useMobileBreakpoint();

  useEffect(() => {
    if (directScreen) {
      const viewMap: Record<string, ResellerView> = {
        'reseller-dashboard': 'dashboard',
        'network-tree': 'network',
        'team-list': 'team',
        'earnings': 'earnings',
        'commission-history': 'commission-history',
        'impact-overview': 'impact',
        'impact-milestones': 'milestones',
        'badges': 'badges',
        'leaderboard': 'leaderboard',
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
    { id: 'dashboard', label: t('navigation.reseller.dashboard'), icon: <LayoutDashboard className="h-5 w-5" strokeWidth={1.5} />, href: '#dashboard', isActive: currentView === 'dashboard', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('dashboard'); } },
    { id: 'network', label: t('navigation.reseller.network'), icon: <Network className="h-5 w-5" strokeWidth={1.5} />, href: '#network', isActive: currentView === 'network', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('network'); } },
    { id: 'team', label: t('navigation.reseller.team'), icon: <Users className="h-5 w-5" strokeWidth={1.5} />, href: '#team', isActive: currentView === 'team', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('team'); } },
    { id: 'earnings', label: t('navigation.reseller.earnings'), icon: <Coins className="h-5 w-5" strokeWidth={1.5} />, href: '#earnings', isActive: currentView === 'earnings', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('earnings'); } },
    { id: 'commission-history', label: t('navigation.reseller.commissionHistory'), icon: <TrendingUp className="h-5 w-5" strokeWidth={1.5} />, href: '#commission-history', isActive: currentView === 'commission-history', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('commission-history'); } },
    { id: 'impact', label: t('navigation.reseller.impact'), icon: <Heart className="h-5 w-5" strokeWidth={1.5} />, href: '#impact', isActive: currentView === 'impact', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('impact'); } },
    { id: 'milestones', label: t('navigation.reseller.milestones'), icon: <Target className="h-5 w-5" strokeWidth={1.5} />, href: '#milestones', isActive: currentView === 'milestones', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('milestones'); } },
    { id: 'badges', label: t('navigation.reseller.badges'), icon: <Trophy className="h-5 w-5" strokeWidth={1.5} />, href: '#badges', isActive: currentView === 'badges', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('badges'); } },
    { id: 'leaderboard', label: t('navigation.reseller.leaderboard'), icon: <Award className="h-5 w-5" strokeWidth={1.5} />, href: '#leaderboard', isActive: currentView === 'leaderboard', onClick: (e: React.MouseEvent) => { e.preventDefault(); navigate('leaderboard'); } },
    { id: 'settings', label: t('navigation.reseller.settings'), icon: <Settings className="h-5 w-5" strokeWidth={1.5} />, href: '#settings', isActive: currentView === 'settings', onClick: (e: React.MouseEvent) => { e.preventDefault(); onNavigateToSettings ? onNavigateToSettings('profile') : navigate('settings'); } },
  ];

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardHome />;
      case 'network':
        return <NetworkTree />;
      case 'team':
        return <TeamList />;
      case 'earnings':
        return <EarningsOverview />;
      case 'commission-history':
        return <CommissionHistory />;
      case 'impact':
        return <ImpactOverview />;
      case 'milestones':
        return <ImpactMilestones />;
      case 'badges':
        return <BadgesAchievements />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'settings':
        // Settings handled by App.tsx
        return <DashboardHome />;
      default:
        return <DashboardHome />;
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
        user={{
          name: 'Maria Schmidt',
        }}
        onProfileClick={() => navigate('settings')}
      >
        <div className="flex items-center gap-2">
          {/* Role badge - hide on very small screens */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-forest-50 border border-forest-200 rounded-md">
            <Users className="w-3.5 h-3.5 text-forest-600" />
            <span className="text-xs font-medium text-forest-700">
              Reseller
            </span>
            <span className="text-xs text-forest-600">
              {currentReseller.rank}
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
