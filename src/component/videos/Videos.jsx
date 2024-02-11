import React, { Suspense, lazy } from 'react';

const LazyVideo = lazy(() => import('./video/Video'));

const Videos = () => {
  return (
    <div className='bg-gray-300'>
      <h1 className='md:text-3xl text-xl font-bold text-center pt-10'>Videos</h1>
      <div className='flex flex-row flex-wrap justify-center gap-10 py-10'>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyVideo />
          <LazyVideo />
          <LazyVideo />
          <LazyVideo />
        </Suspense>
      </div>
    </div>
  );
};

export default Videos;
