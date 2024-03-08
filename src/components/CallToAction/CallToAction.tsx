import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function CallToAction() {
  return (
    <div className='blue-card flex flex-col items-center gap-4 text-white text-center'>
      <h3 className='text-xl font-bold'>Get Started with KoinX <br/> for Free</h3>
      <p className='text-sm'>With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
      <Image 
        src={'/Cta-image.png'}
        alt='koinx'
        width={120}
        height={160}
      />
      <Link 
        href={'https://www.koinx.com/'}
        target='_blank'
        className='rounded-lg bg-white font-bold px-4 py-2 text-black transition-all hover:scale-105 flex items-center gap-4'
      >
        Get Started for FREE
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
