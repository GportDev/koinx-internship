'use client';

import { CaretDoubleRight } from '@phosphor-icons/react';

// import { useParams } from 'next/navigation';
import React from 'react';

export default function Breadcrumbs() {
  // const params = useParams();

  return (
    <div className='mt-4 flex cursor-not-allowed items-center gap-2 text-sm'>
      <p className='text-black/60'>Cryptocurrencies</p>
      <CaretDoubleRight size={14} />
      <p className='font-semibold'>Bitcoin</p>
    </div>
  );
}
