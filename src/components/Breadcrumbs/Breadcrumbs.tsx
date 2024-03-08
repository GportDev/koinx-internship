'use client';

import { CaretDoubleRight } from '@phosphor-icons/react';
// import { useParams } from 'next/navigation';
import React from 'react';

export default function Breadcrumbs() {
  // const params = useParams();

  return (
    <div className='flex items-center gap-2 text-sm mt-4 cursor-not-allowed'>
      <p className='text-black/60'>Cryptocurrencies</p>
      <CaretDoubleRight size={14} />
      <p className='font-semibold'>Bitcoin</p>
    </div>
  );
}
