import { useState, useEffect } from 'react';

/**
 * Hook to detect mobile and tablet breakpoints
 * 
 * @returns Object with isMobile (< 1024px) and isTablet (768px - 1023px) booleans
 */
export function useMobileBreakpoint() {
  // Initialize with actual window width if available (SSR-safe)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });
  const [isTablet, setIsTablet] = useState(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      return width >= 768 && width < 1024;
    }
    return false;
  });

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024);
      setIsTablet(width >= 768 && width < 1024);
    };

    // Check on mount (in case initial state was wrong)
    checkBreakpoint();

    // Listen for resize events
    window.addEventListener('resize', checkBreakpoint);

    return () => {
      window.removeEventListener('resize', checkBreakpoint);
    };
  }, []);

  return { isMobile, isTablet };
}

