import React from 'react';
import Header from '@/components/layout/header';
import Image from 'next/image';

export default function StrategyPage() {
  return (
    <div>
      <div className='text-neutral-900'>
        <Header />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1720px] m-auto gap-x-8 gap-y-4 px-4 md:px-14 my-20'>
        <div className='page-header'>
          <span className='page-icon-header bg-purple-300'>St</span>
          <span className='page-header-title'>Strategy</span>
        </div>
        <div className=''>
          <div className='page-title'>Create the vision. Then make it real.</div>
          <div>At Slalom, we work to deeply understand your organization and develop detailed, executable roadmaps—so you know exactly what to do next, where to grow, and how to transform. Beyond helping you establish your vision, we have the technology and delivery capabilities to make sure you get there.</div>
        </div>
      </div>

      {/* This div for any background color */}
      <div className='bg-neutral-800'>
        <div className='max-w-[1720px] m-auto px-2 h-[800px]'>
          <Image src={"/strategy-img-1.png"} alt='strategy-img-1.webp' width={100} height={100} className='w-full absolute left-0 h-[800px]'/>
        </div>
      </div>
      <div className='bg-purple-300'>
        <div className='max-w-[1720px] m-auto md:px-14 px-4 py-16'>
          <div className='section-header'>Our strategy expertise</div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16'>
            <div>
              <div className='section-block-title'>Business strategy</div>
              <div>In our era of tech transformation, smart business strategy can mean continuing to do what you already do better, making fundamental changes, or reinventing your company completely. As always, Slalom takes a fiercely human approach with people at its core.</div>
            </div>
            <div>
              <div className='section-block-title'>Customer strategy</div>
              <div>Customer expectations are higher than ever. We help you meet them by creating a customer strategy that’s rooted in data, insights, and a deep understanding of your customers’ needs and behaviors.</div>
            </div>
            <div>
              <div className='section-block-title'>Technology strategy</div>
              <div>Technology is the backbone of your business. We help you develop a technology strategy that aligns with your business goals and sets you up for success.</div>
            </div>
            <div>
              <div className='section-block-title'>Business strategy</div>
              <div>In our era of tech transformation, smart business strategy can mean continuing to do what you already do better, making fundamental changes, or reinventing your company completely. As always, Slalom takes a fiercely human approach with people at its core.</div>
            </div>
            <div>
              <div className='section-block-title'>Customer strategy</div>
              <div>Customer expectations are higher than ever. We help you meet them by creating a customer strategy that’s rooted in data, insights, and a deep understanding of your customers’ needs and behaviors.</div>
            </div>
            <div>
              <div className='section-block-title'>Technology strategy</div>
              <div>Technology is the backbone of your business. We help you develop a technology strategy that aligns with your business goals and sets you up for success.</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='max-w-[1720px] m-auto px-4'>Section #02</div>
      </div>
    </div>
  )
}
