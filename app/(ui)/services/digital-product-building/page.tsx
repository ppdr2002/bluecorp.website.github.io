import React from 'react';
import Header from '@/components/layout/header';
import Image from 'next/image';

export default function DigitalProductBuildingPage() {
  return (
    <div>
      <div className='text-neutral-900'>
        <Header />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1720px] m-auto gap-x-8 gap-y-4 px-4 md:px-14 my-20'>
        <div className='page-header'>
          <span className='page-icon-header bg-green-300'>Dp</span>
          <span className='page-header-title'>Digital Product Building</span>
        </div>
        <div className=''>
          <div className='page-title'>Let&apos;s build the product that will move your business forward.</div>
          <div>When you&apos;re ready to build at the speed your business demands, we&apos;re ready to partner with you end to end. We can help you identify effective digital strategies, accelerate your time to market, and release more intelligent features. Best of all, we upskill your teams as we go—so you can keep growing long after our work is done.</div>
        </div>
      </div>
      {/* This div for any background color */}
      <div className='bg-neutral-800'>
        <div className='max-w-[1720px] m-auto px-2 h-[800px]'>
        <Image src={"/strategy-img-1.webp"} alt='strategy-img-1.webp' width={100} height={100} className='w-full absolute left-0 h-[800px]'/>
        </div>
      </div>
      <div className='bg-green-300'>
        <div className='max-w-[1720px] m-auto md:px-14 px-4 py-16'>
          <div className='section-header'>Our Digital Product Building <i>expertise</i></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16'>
            <div>
              <div className='section-block-title'>Product engineering</div>
              <div>Slalom&apos;s product engineering methodology (PEM) provides flexibility within a defined, repeatable framework, allowing us to sustain value with speed and quality. Whether starting with a blank slate or optimizing a mature product at scale, PEM works for every stage of your journey.</div>
            </div>
            <div>
              <div className='section-block-title'>Platform engineering</div>
              <div>Our experts build purposeful products that allow you to maximize the value of the cloud. We&apos;re focused on seamlessly combining and building the right components for each customer&apos;s situation, bringing increased engineer productivity, better custom-built software, and significant ROI.</div>
            </div>
            <div>
              <div className='section-block-title'>Data engineering & machine learning</div>
              <div>Data is the connective tissue of every product and experience, enabling the predictive, tailored, and evolving features that modern consumers expect. Our experts embed data and machine learning into everything we build, creating intelligent products that delight customers and unlock innovation potential.</div>
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
