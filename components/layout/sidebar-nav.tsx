'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigationItems, navigationGroups, type NavigationItem } from '@/config/navigation';

interface SidebarNavProps {
  collapsed: boolean;
}

export function SidebarNav({ collapsed }: SidebarNavProps) {
  const pathname = usePathname();

  const groupedItems = navigationItems.reduce((acc, item) => {
    const group = item.group;
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  }, {} as Record<string, NavigationItem[]>);

  return (
    <nav className="flex-1 space-y-4 p-4">
      {Object.entries(groupedItems).map(([group, items]) => (
        <div key={group} className="space-y-2">
          {!collapsed && (
            <h4 className="px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {navigationGroups[group as keyof typeof navigationGroups]}
            </h4>
          )}
          <div className="space-y-1">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-secondary-foreground",
                    collapsed && "justify-center px-2"
                  )}
                  title={collapsed ? item.title : undefined}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  {!collapsed && <span>{item.title}</span>}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}