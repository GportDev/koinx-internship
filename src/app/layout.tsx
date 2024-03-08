import React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/Header/Header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KoinX | Gabriel Porteiro',
  description: 'Project for internship with KoinX',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`bg-primary ${inter.className}`}>
        <Header />
        <main className='mx-auto w-[clamp(320px,90%,1200px)]'>{children}</main>
      </body>
    </html>
  );
}
