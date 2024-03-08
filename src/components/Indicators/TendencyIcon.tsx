import React from 'react';
import { CaretDown, CaretUp } from '@phosphor-icons/react/dist/ssr';

export default function TendencyIcon({ dailyChange }: { dailyChange: number}) {
  const tendencyIcon = dailyChange > 0 ? <CaretUp size={16} weight='fill' className='text-green font-bold' /> : <CaretDown size={16} className='text-red font-bold' weight='fill'/>;

  return (
    <div className='rounded-md bg-green-600 px-2 py-1 text-green font-semibold flex items-center gap-1'>
      {tendencyIcon}
      {dailyChange}%
    </div>
  );
}
