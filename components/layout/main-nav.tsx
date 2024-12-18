'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Building2, Package, Settings, ShoppingCart, Users, Tag, FolderTree } from 'lucide-react';

const mainNav = [
  {
    title: 'Sites',
    href: '/sites',
    icon: Building2,
  },
  {
    title: 'Products',
    href: '/products',
    icon: Package,
  },
  {
    title: 'Brands',
    href: '/brands',
    icon: Tag,
  },
  {
    title: 'Categories',
    href: '/categories',
    icon: FolderTree,
  },
  {
    title: 'Suppliers',
    href: '/suppliers',
    icon: ShoppingCart,
  },
  {
    title: 'Users',
    href: '/users',
    icon: Users,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {mainNav.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center text-sm font-medium transition-colors hover:text-primary',
              pathname === item.href
                ? 'text-primary'
                : 'text-muted-foreground'
            )}
          >
            <Icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}