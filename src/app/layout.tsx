import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cresco Plumbing & Heating Nottingham',
  description: 'Emergency plumber in Nottingham with fast response and fixed pricing.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
