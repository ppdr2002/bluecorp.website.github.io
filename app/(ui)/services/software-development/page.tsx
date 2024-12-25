import React from "react";
import Header from '@/components/layout/header';
import Image from 'next/image';
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function DigitalTransformationServicePage() {
    return(
    <div>
      <div className='text-neutral-900'>
        <Header />
      </div>

      {/* NAVIGATION LINKS */}
      <div className="py-5 lg:px-14 px-4 hidden md:flex items-center gap-2">
        <Link href={"/"} className="hover:text-blue-600">Home</Link>
        <div><MdOutlineKeyboardArrowRight size={20}/></div>
        <Link href={"/services"} className="hover:text-blue-600">Services</Link>
        <div><MdOutlineKeyboardArrowRight size={20}/></div>
        <div>Software Development</div>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1720px] m-auto gap-x-8 gap-y-4 px-4 md:px-14 my-20'>
        <div className='page-header'>
          <span className='flex justify-center items-center text-3xl md:text-5xl h-16 md:h-32 w-16 md:w-[150px] rounded-xl mb-4 md:mb-0 bg-indigo-400 text-black'>Sd</span>
          <span className='page-header-title'>Software Development</span>
        </div>
        <div className=''>
          <div className='page-title'>The cloud is an accelerator for your business—and your people.</div>
          <div>Bluecorp Software development services are targeted at meeting the high-level needs of the business. We will think over your software application to the smallest detail. If you have a challenging project that others are afraid to take on, we can&apos;t wait to dive in.</div>
        </div>
      </div>
      {/* This div for any background color */}
      <div className='bg-neutral-800'>
        <div className=''>
        <Image src={"/software-development-img-1.jpg"} alt='software-development-img-1' width={9500} height={6300} className='w-full h-fit'/>
        </div>
      </div>
      <div className='bg-indigo-400'>
        <div className='max-w-[1720px] m-auto md:px-14 px-4 py-16 text-black'>
          <div className='section-header'>Our Software Development<i> expertise</i></div>
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
      {/* Section 2 */}
      <div className='max-w-[1720px] m-auto lg:px-14 px-4 lg:py-20 py-10'>
        <div>
          <h1 className='lg:text-6xl'>Our holistic approach combines the right services to <i>bring your vision to life.</i></h1>
          <div className='lg:flex gap-6'>
            <div className='bg-slate-900 h-[80%] lg:w-[50%] w-[100%] border-spacing-2 rounded-lg mt-20 pb-20'>
              <Image src={"/strategy-img-2.jpg"} alt='strategy-img-2' height={800} width={750} className='rounded-t-lg'/>
              <div className='pt-10 px-6'>
                <h6 className='text-lg text-white'>CUSTOMER STORY</h6>
                <p className='lg:text-3xl pt-6'>DELMAR: <i>Building a strategy for customer service and growth.</i></p>
                <button className='h-[40px] w-[150px] border-spacing-2 rounded-2xl bg-blue-600 hover:bg-blue-800 mt-6 px-4'>Read Story</button>
              </div>
            </div>
            <div className='bg-slate-900 h-[80%] lg:w-[50%] w-[100%] border-spacing-2 rounded-lg mt-20 pb-20'>
              <Image src={"/strategy-img-3.jpg"} alt='strategy-img-3' height={800} width={750} className='rounded-t-lg'/>
                <div className='pt-10 px-6'>
                <h6 className='text-lg text-white'>CUSTOMER STORY</h6>
                <p className='lg:text-3xl pt-6'>LogRhythm: <i>Streamlining the processes that power cybersecurity.</i></p>
                <button className='h-[40px] w-[150px] border-spacing-2 rounded-2xl bg-blue-600 hover:bg-blue-800 mt-6 px-4'>Read Story</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}