'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { UserNav } from './user-nav';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-4 sm:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <div className="flex-1" />
        <ModeToggle />
        <UserNav />
      </div>
    </header>
  );
}