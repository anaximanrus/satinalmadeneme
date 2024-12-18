import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { RootLayout } from '@/components/layout/root-layout';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Construction Procurement Platform',
  description: 'Streamline your construction procurement process',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <RootLayout>{children}</RootLayout>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}