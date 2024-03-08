import Image from 'next/image';
import React from 'react';

export default function CoinTitle({url, name, symbol, ranking, className}: { url: string, name: string, symbol: string, ranking: number, className?: string }) {
  return (
    <div className={`${className} flex items-center gap-6`}>
      <div className='flex items-center gap-2'>
        <Image 
          src={url}
          alt='coin'
          width={32}
          height={32}
          className='rounded-full'
        />
        <h1 className='font-semibold'>
          {name} <span className='text-xs text-grey'>{symbol.toUpperCase()}</span>
        </h1>
      </div>

      <span className='rounded-md bg-grey px-2 py-1 text-white'>Rank #{ranking}</span>
    </div>
  );
}
