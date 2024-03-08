'use client';

import React, { memo, useEffect, useRef } from 'react';

function MainChart() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current?.appendChild(script);
  }, []);

  return (
    <div
      className='tradingview-widget-container h-full w-full'
      ref={container}
    >
      <div
        className='tradingview-widget-container__widget h-[calc(100%-32px)] w-full'
      />

    </div>
  );
}

export default memo(MainChart);
