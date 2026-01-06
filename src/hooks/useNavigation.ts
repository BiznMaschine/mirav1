import { useState, useEffect } from 'react';

export type ResellerView = 
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

export type CustomerView =
  | 'shop'
  | 'product-detail'
  | 'cart'
  | 'checkout-delivery'
  | 'checkout-payment'
  | 'confirmation'
  | 'subscriptions'
  | 'subscription-detail'
  | 'order-history'
  | 'settings';

export type AdminView =
  | 'overview'
  | 'resellers'
  | 'customers'
  | 'orders'
  | 'commission-config'
  | 'commission-ledger'
  | 'audit-log'
  | 'system-settings';

export function useNavigation<T extends string>(initialView: T) {
  const [currentView, setCurrentView] = useState<T>(initialView);

  const navigate = (view: T) => {
    setCurrentView(view);
    // Scroll to top when navigating to a new view
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top when currentView changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return {
    currentView,
    navigate,
  };
}
