import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MidZen Studios — Games with impact',
  description: 'MidZen Studios is an independent game studio founded by Midripa and Z3N.',
  openGraph: {
    title: 'MidZen Studios',
    description: 'Two creators. One studio. Games with impact.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MidZen Studios',
    description: 'Two creators. One studio. Games with impact.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
