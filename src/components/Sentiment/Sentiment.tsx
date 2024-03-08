import { Info, Newspaper, TrendUp } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

export default function Sentiment() {
  return (
    <div className='card space-y-4'>
      <h2>Sentiment</h2>

      <div className='overflow-x-hidden w-full'>
        <h4 className='text-grey flex items-center gap-4 mb-4'>
          Key Events
          <Info size={24} weight='fill'/>
        </h4>

        <div className='overflow-hidden flex gap-4 w-[600px] lg:w-full'>
          <div className='flex gap-4 p-4 rounded-lg bg-blue-600 lg:max-w-[480px]'>
            <div className='rounded-full bg-blue p-2 lg:p-4 h-fit'>
              <Newspaper size={24} weight='fill' className='text-white'/>
            </div>

            <div className='space-y-2 text-sm'>
              <p className='font-bold text-xs lg:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit voluptatem debitis voluptas consectetur
              </p>

              <p className='text-xs lg:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit voluptatem debitis voluptas consectetur consequuntur adipisci veritatis, odio, quasi unde dolorum repellendus sequi mollitia error molestias magnam excepturi laudantium. Earum.
              </p>
            </div>
          </div>

          <div className='flex gap-4 p-4 rounded-lg bg-green-600 lg:max-w-[480px]'>
            <div className='rounded-full bg-green p-2 lg:p-4 h-fit'>
              <TrendUp size={24} weight='fill' className='text-white'/>
            </div>

            <div className='space-y-2 text-sm'>
              <p className='font-bold text-xs lg:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit voluptatem debitis voluptas consectetur
              </p>

              <p className='text-xs lg:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit voluptatem debitis voluptas consectetur consequuntur adipisci veritatis, odio, quasi unde dolorum repellendus sequi mollitia error molestias magnam excepturi laudantium. Earum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className='text-grey flex items-center gap-4 mb-4'>
          Analyst Estimates
          <Info size={24} weight='fill'/>
        </h4>

        <div className='flex gap-6'>
          <div className='flex items-center justify-center text-xl lg:text-3xl text-green bg-green-600 rounded-full w-[80px] h-[80px] lg:h-[120px] lg:w-[120px] p-6'>
            <p className='font-bold flex items-center'>76<span className='text-xs'>%</span></p>
          </div>

          <div className='flex flex-col gap-4 w-full max-w-[60%]'>
            <div className='flex items-center gap-4 text-sm w-full'>
              <p className='text-grey'>Buy</p>
              <div className='flex items-center gap-2 w-full max-w-[80%]'>
                <div className='w-[76%] h-2 rounded-sm bg-green'/>
                <p className='text-grey'>76%</p>
              </div>
            </div>

            <div className='flex items-center gap-4 text-sm w-full'>
              <p className='text-grey'>Hold</p>
              <div className='flex items-center gap-2 w-full max-w-[80%]'>
                <div className='w-[8%] h-2 rounded-sm bg-grey'/>
                <p className='text-grey'>8%</p>
              </div>
            </div>

            <div className='flex items-center gap-4 text-sm w-full'>
              <p className='text-grey'>Sell</p>
              <div className='flex items-center gap-2 w-full max-w-[80%]'>
                <div className='w-[16%] h-2 rounded-sm bg-red'/>
                <p className='text-grey'>16%</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
