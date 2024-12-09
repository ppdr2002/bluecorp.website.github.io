import React from 'react';
import Header from '@/components/layout/header';
import Image from 'next/image';

export default function CloudPage() {
  return (
    <div>
      <div className='text-neutral-900'>
        <Header />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1720px] m-auto gap-x-8 gap-y-4 px-4 md:px-10 my-20'>
        <div className='page-header'>
          <span className='page-icon-header bg-orange-600'>cl</span>
          <span className='page-header-title'>Cloud</span>
        </div>
        <div className=''>
          <div className='page-title'>The cloud is an accelerator for your business—and your people.</div>
          <div>To compete today, every business needs the agility and flexibility of cloud technology. At Slalom, we help you use the cloud to become more data-driven and customer-focused, bring products to market faster, and improve your employee experience.</div>
        </div>
      </div>
      {/* This div for any background color */}
      <div className='bg-neutral-800'>
        <div className='max-w-[1720px] m-auto px-2 h-[800px]'>
        <Image src={"/strategy-img-1.webp"} alt='strategy-img-1.webp' width={100} height={100} className='w-full absolute left-0 h-[800px]'/>
        </div>
      </div>
      <div className='bg-orange-600'>
        <div className='max-w-[1720px] m-auto px-4 py-16'>
          <div className='section-header'>Our cloud <i>expertise</i></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16'>
            <div>
              <div className='section-block-title'>Migration & modernization</div>
              <div>To achieve transformative outcomes, you need a future-forward approach to cloud migration & modernization.That means not only shifting workloads to the cloud and updating your applications, but also upskilling and empowering your team members to thrive in the new environment.</div>
            </div>
            <div>
              <div className='section-block-title'>Optimization</div>
              <div>By 2026, Gartner predicts that public cloud spending will exceed 45% of all enterprise IT spending. So how can you ensure that you&apos;re spending that money wisely? Slalom&apos;s experts help you eliminate redundancies, make the most of automation, and maximize the return on your cloud investment.</div>
            </div>
            <div>
              <div className='section-block-title'>Infrastructure</div>
              <div>Infrastructure is the foundation of every modern organization. Today, key infrastructure priorities include privacy, governance, security, and resiliency. We help you craft a resilient, secure infrastructure that positions your organization to embrace the ever-changing possibilities of building in the cloud.</div>
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
