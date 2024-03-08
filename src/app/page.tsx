import { Suspense } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import ChartWrapper from '@/components/MainChart/ChartWrapper';

export default function Home() {
  return (
    <div className='space-y-4'>
      <Breadcrumbs />

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ChartWrapper />
        </Suspense>
      </div>
    </div>
  );
}
