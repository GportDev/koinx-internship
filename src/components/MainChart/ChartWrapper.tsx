import { rupee, usd } from '@/utils/formatters';
import CoinTitle from './CoinTitle';
import MainChart from './MainChart';
import { Suspense } from 'react';
import TendencyIcon from '../Indicators/TendencyIcon';

export default async function ChartWrapper() {
  const coinData = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin', {
    method: 'GET',
    headers: {
      'x-cg-demo-api-key': process.env.COINGEKO_API_KEY || '',
    }
  }).then(res => res.json());

  const priceUsd = usd.format(coinData.market_data.current_price.usd);
  const priceRupee = rupee.format(coinData.market_data.current_price.inr);
  const dailyChange = coinData.market_data.price_change_percentage_24h.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });
  
  return (
    <div className='space-y-8'>
      <CoinTitle 
        url={coinData.image.small}
        name={coinData.name}
        symbol={coinData.symbol}
        ranking={coinData.market_cap_rank}
        className='flex lg:hidden'
      />

      <div className='card min-h-[600px] flex flex-col gap-4'>
        <CoinTitle 
          url={coinData.image.small}
          name={coinData.name}
          symbol={coinData.symbol}
          ranking={coinData.market_cap_rank}
          className='hidden lg:flex'
        />

        <div>
          <div className='flex items-center gap-4'>
            <h1 className='text-2xl font-bold'>{priceUsd}</h1>
            <div className='flex items-center gap-2'>
              <TendencyIcon dailyChange={dailyChange} />
              <p className='text-sm text-grey'>(24h)</p>
            </div>
          </div>
          <h3 className='text-base'>{priceRupee}</h3>
        </div>

        <Suspense fallback={<p>Loading...</p>}>
          <MainChart />
        </Suspense>
      </div>
    </div>
  );
}
