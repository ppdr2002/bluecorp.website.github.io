    
import React from 'react';
import Header from '@/components/layout/header';
import Image from 'next/image';

export default function SupplyChainDevelopmentPage() {
  return (
    <div>
      <div className='text-neutral-900'>
        <Header />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1720px] m-auto gap-x-8 gap-y-4 px-4 md:px-14 my-20'>
        <div className='page-header'>
          <span className='page-icon-header bg-yellow-300 text-black'>SC</span>
          <span className='page-header-title'>Supply Chain Management</span>
        </div>
        <div className=''>
          <div className='page-title'>Create the vision. Then make it real.</div>
          <div>At Slalom, we work to deeply understand your organization and develop detailed, executable roadmaps—so you know exactly what to do next, where to grow, and how to transform. Beyond helping you establish your vision, we have the technology and delivery capabilities to make sure you get there.</div>
        </div>
      </div>

      {/* This div for any background color */}
      <div className='bg-neutral-800'>
        <div className=''>
          <Image src={"/strategy-img-1.jpg"} alt='strategy-img-1' width={600} height={400} className='w-[100%]'/>
        </div>
      </div>
      <div className='bg-yellow-300 text-black'>
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
      {/* Section 3 */}
      <div className='max-w-[1720px] m-auto lg:px-14 px-4 lg:py-20 py-10'>
        <div>
          <h1 className='lg:text-6xl'>Our holistic approach combines the right services to <i>bring your vision to life.</i></h1>
          <div className='lg:flex gap-6'>
            <div className='bg-slate-900 h-[80%] lg:w-[50%] w-[100%] border-spacing-2 rounded-lg mt-20 pb-20'>
              <Image src={"/strategy-img-2.jpg"} alt='strategy-img-2' height={800} width={750} className='rounded-t-lg'/>
              <div className='pt-10 px-6'>
                <h6 className='text-lg text-white'>CUSTOMER STORY</h6>
                <p className='lg:text-3xl'>DELMAR: <i>Building a strategy for customer service and growth.</i></p>
                <button className='h-[40px] w-[150px] border-spacing-2 rounded-2xl bg-blue-600 mt-6 px-4'>Read Story</button>
              </div>
            </div>
            <div className='bg-slate-900 h-[80%] lg:w-[50%] w-[100%] border-spacing-2 rounded-lg mt-20 pb-20'>
              <Image src={"/strategy-img-3.jpg"} alt='strategy-img-3' height={800} width={750} className='rounded-t-lg'/>
              <div className='pt-10 px-6'>
                <h6 className='text-lg text-white'>CUSTOMER STORY</h6>
                <p className='lg:text-3xl'>LogRhythm: <i>Streamlining the processes that power cybersecurity.</i></p>
                <button className='h-[40px] w-[150px] border-spacing-2 rounded-2xl bg-blue-600 mt-6 px-4'>Read Story</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
