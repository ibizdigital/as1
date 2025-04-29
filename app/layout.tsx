import './globals.css';
import type { Metadata } from 'next';
import { Providers } from '@/components/providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';
import { Toaster } from '@/components/ui/toaster';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'AS1 | You Own Your Data',
  description: 'Join the founding circle of AS1 at Harvard - a platform where you own your data, curate your feed, and connect with the community.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://as1.harvard.edu',
    title: 'AS1 | You Own Your Data',
    description: 'Join the founding circle of AS1 at Harvard - a platform where you own your data, curate your feed, and connect with the community.',
    siteName: 'AS1',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AS1 | You Own Your Data',
    description: 'Join the founding circle of AS1 at Harvard - a platform where you own your data, curate your feed, and connect with the community.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background antialiased', fonts.sans.variable, fonts.sansBold.variable)}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}