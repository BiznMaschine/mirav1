import { useState } from 'react';

export type UserRole = 'reseller' | 'customer' | 'admin' | null;

export function useRole() {
  const [role, setRole] = useState<UserRole>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (newRole: UserRole) => {
    setRole(newRole);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setRole(null);
    setIsAuthenticated(false);
  };

  return {
    role,
    isAuthenticated,
    login,
    logout,
  };
}
