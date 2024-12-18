import { NavigationItem } from './types';
import {
  Building2,
  Package,
  Settings,
  ShoppingCart,
  Users,
  Tag,
  FolderTree,
  LayoutDashboard,
  FileText,
} from 'lucide-react';

export const navigationItems: NavigationItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
    group: 'main',
  },
  {
    title: 'Sites',
    href: '/sites',
    icon: Building2,
    group: 'main',
  },
  {
    title: 'Procurements',
    href: '/procurements',
    icon: FileText,
    group: 'main',
  },
  {
    title: 'Products',
    href: '/products',
    icon: Package,
    group: 'catalog',
  },
  {
    title: 'Brands',
    href: '/brands',
    icon: Tag,
    group: 'catalog',
  },
  {
    title: 'Categories',
    href: '/categories',
    icon: FolderTree,
    group: 'catalog',
  },
  {
    title: 'Suppliers',
    href: '/suppliers',
    icon: ShoppingCart,
    group: 'catalog',
  },
  {
    title: 'Users',
    href: '/users',
    icon: Users,
    group: 'system',
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
    group: 'system',
  },
];