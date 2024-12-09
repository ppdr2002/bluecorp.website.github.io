import React from "react";
import Header from '@/components/layout/header';
import Image from 'next/image';

export default function DigitalTransformationServicePage() {
    return(
        <div>
            <div className='text-neutral-900'>
        <Header />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1720px] m-auto gap-x-8 gap-y-4 px-4 md:px-10 my-20'>
        <div className='page-header'>
          <span className='page-icon-header bg-orange-600'>Sd</span>
          <span className='page-header-title'>Software Development</span>
        </div>
        <div className=''>
          <div className='page-title'>The cloud is an accelerator for your business—and your people.</div>
          <div>Bluecorp Software development services are targeted at meeting the high-level needs of the business. We will think over your software application to the smallest detail. If you have a challenging project that others are afraid to take on, we can&apos;t wait to dive in.</div>
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
          <div className='section-header'>Our Software Development<i>expertise</i></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16'>
            <div>
              <div className='section-block-title'>UI/UX Design Services</div>
              <div>No two clients are identical. We create graphic design of the UI, wireframes, and prototypes individually for each client. Partnering with Bluecorp can help make the user&apos;s journey effortless, gain a striking competitive advantage with brilliant design supported by a robust website architecture and get rid of outdated UX.</div>
            </div>
            <div>
              <div className='section-block-title'>Back-end Development</div>
              <div>Bluecorp has been doing backend development since 2000. We take into account the needs of a client and create customized, easily scalable, reliable, SEO-friendly, and secure solutions of any type of complexity. We improve the interaction between multiple software solutions and extend your application&apos;s functionality with APIs integrations.</div>
            </div>
            <div>
              <div className='section-block-title'>Front-end Development</div>
              <div>Bluecorp front-end engineers help improve user experience by creating intuitive and interactive interfaces to boost user engagement. Having your requirements, industry best practices, and accessibility standards in mind, our dedicated team builds innovative software that works impeccably on any device.</div>
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