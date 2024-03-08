import { Suspense } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import ChartWrapper from '@/components/MainChart/ChartWrapper';
import CallToAction from '@/components/CallToAction/CallToAction';
import Sentiment from '@/components/Sentiment/Sentiment';

export default function Home() {
  return (
    <div className='space-y-4'>
      <Breadcrumbs />

      <div className='flex flex-col items-start lg:flex-row gap-4'>
        <div className='w-full space-y-4'>
          <Suspense fallback={<div>Loading...</div>}>
            <ChartWrapper />
          </Suspense>

          <Sentiment />
        </div>

        <div className='w-[clamp(320px,100%,480px)]'>
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
