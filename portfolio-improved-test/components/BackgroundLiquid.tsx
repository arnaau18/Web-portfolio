"use client";

import dynamic from 'next/dynamic';

const LiquidChrome = dynamic(() => import('@/components/LiquidChrome'), {
  ssr: false,
});

export default function BackgroundLiquid() {
  return (
    <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <div style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}>
        <LiquidChrome
          baseColor={[0.05, 0.05, 0.05]}
          speed={0.3}
          amplitude={0.5}
          interactive={true}
        />
      </div>
    </div>
  );
}
