'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Header } from './header';
import { Sidebar } from './sidebar';

export function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
      <div className={cn(
        "flex-1 transition-all duration-300",
        sidebarOpen ? "lg:pl-64" : "lg:pl-20"
      )}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="h-[calc(100vh-3.5rem)] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}