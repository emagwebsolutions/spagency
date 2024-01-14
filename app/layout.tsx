'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Wrapper from '@/components/Wrapper';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'S.P AGENCY',
  description: 'Billboard company in Accra Ghana',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
