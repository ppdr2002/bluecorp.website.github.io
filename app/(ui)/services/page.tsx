import React from 'react';
import Header from '@/components/layout/header';

export default function ServicesPage() {
  return (
    <div>
      <Header />
      {/* This div for any background color or images */}
      <div className="flex items-center bg-blue-600 dark:bg-neutral-900 h-dvh">
        <div className='relative w-full max-w-[1720px] m-auto px-4 md:px-14 lg:px-12'>
          <div className='flex items-center justify-center'>
            <div className='mt-12 text-center space-y-8'>
              <div className='headline1 text-white'>Discover, Develop, Deploy</div>
              <div className='headline2 text-white'>Maximize your business potential with our cutting-edge digital transformation services.</div>
              <div>
                <button type="button" className="py-4 px-8 font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-blue-200 hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-700 dark:bg-white-800 dark:text-black dark:border-blue-600 dark:hover:text-white dark:hover:bg-blue-700">Let`s Discuss Opportunities</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* This div for any background color */}
      <div>
        <div className='max-w-[1720px] m-auto'>Section #01</div>
      </div>
      <div>
        <div className='max-w-[1720px] m-auto px-4'>Section #02</div>
      </div>
    </div>
  )
}
