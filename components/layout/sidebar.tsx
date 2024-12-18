'use client';

import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { SidebarNav } from './sidebar-nav';

interface SidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Sidebar({ open, onOpenChange }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => onOpenChange(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 flex flex-col bg-background border-r transition-all duration-300",
        open ? "w-64" : "w-20",
        !open && "items-center",
        !open && "lg:w-20",
        "transform lg:translate-x-0",
        !open && "-translate-x-full lg:translate-x-0"
      )}>
        <div className={cn(
          "flex h-14 items-center border-b px-6",
          !open && "justify-center px-4"
        )}>
          <Logo collapsed={!open} />
        </div>
        
        <SidebarNav collapsed={!open} />
      </aside>
    </>
  );
}