import { NavItem } from '@mira/ui';
import type { NavItemProps } from '@mira/ui';

interface CustomNavItemProps extends Omit<NavItemProps, 'LinkComponent'> {
  onClick?: (e: React.MouseEvent) => void;
}

export function CustomNavItem({ onClick, ...props }: CustomNavItemProps) {
  const LinkComponent = onClick
    ? ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => (
        <a
          href={href}
          className={className}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
        </a>
      )
    : undefined;

  return <NavItem {...props} LinkComponent={LinkComponent} />;
}
