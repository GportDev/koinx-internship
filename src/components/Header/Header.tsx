import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className='bg-white shadow-sm'>
      <div className='flex items-center justify-between p-4'>
        <Image src={'/logo.png'} alt='logo' width={100} height={100} />
        <div className='hidden lg:block'>
          <nav className='flex items-center gap-4 font-bold'>
            <ul className='flex cursor-not-allowed items-center gap-4'>
              <li>Crypto Taxes</li>
              <li>Free Tools</li>
              <li>Resource Center</li>
            </ul>
            <Link
              href={'https://www.koinx.com/'}
              target='_blank'
              className='rounded-lg bg-blue px-4 py-2 text-white transition-all hover:scale-105 hover:bg-blue/90'
            >
              Get Started
            </Link>
          </nav>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
