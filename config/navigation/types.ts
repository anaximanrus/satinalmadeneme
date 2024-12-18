import { LucideIcon } from 'lucide-react';

export type NavigationGroup = 'main' | 'catalog' | 'system';

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
  group: NavigationGroup;
}