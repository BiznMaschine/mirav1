import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useMobileBreakpoint } from '../hooks/useMobileBreakpoint';

export interface MobileNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: MobileNavItem[];
  onNavigate?: (itemId: string) => void;
}

export default function MobileNavDrawer({ isOpen, onClose, items, onNavigate }: MobileNavDrawerProps) {
  const { isMobile } = useMobileBreakpoint();

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Always render the drawer (it will be hidden off-screen on desktop)
  // This ensures it's in the DOM and can be shown immediately when needed

  const handleItemClick = (item: MobileNavItem, e: React.MouseEvent) => {
    if (item.onClick) {
      item.onClick(e);
    }
    if (onNavigate) {
      onNavigate(item.id);
    }
    // Auto-close after navigation
    onClose();
  };

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[90] transition-opacity lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed left-0 top-0 bottom-0 z-[100] w-64 bg-white border-r border-slate-200 shadow-lg flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen && isMobile ? 'translate-x-0' : '-translate-x-full'}
          ${!isMobile ? 'lg:hidden' : ''}
        `}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-forest-600">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-lg font-bold text-slate-900">Navigation</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md hover:bg-slate-100"
            aria-label="Close navigation"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            {items.map((item) => {
              const isActive = item.isActive;
              return (
                <button
                  key={item.id}
                  onClick={(e) => handleItemClick(item, e)}
                  className={`
                    w-full flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors
                    min-h-[44px]
                    ${isActive
                      ? 'bg-forest-50 text-forest-700'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }
                  `}
                >
                  <span className={`shrink-0 ${isActive ? 'text-forest-600' : 'text-slate-400'}`}>
                    {item.icon}
                  </span>
                  <span className="flex-1 text-left">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}

