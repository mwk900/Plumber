import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Cresco Plumbing & Heating | Emergency Plumber Nottingham',
  description:
    'Emergency plumber in Nottingham. Fast fix, fair price, sorted. Available 24/7 for emergency callouts. Gas Safe registered. Fixed pricing confirmed before work starts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
