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
        <div>Digital Transformation Service</div>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1720px] m-auto gap-x-8 gap-y-4 px-4 md:px-14 my-20'>
        <div className='page-header'>
          <span className='flex justify-center items-center text-3xl md:text-5xl h-16 md:h-32 md:w-32 lg:w-[220px] w-16 rounded-xl mb-4 md:mb-0 bg-amber-400 text-black'>Di</span>
          <span className='page-header-title'>Digital Transformation Service</span>
        </div>
        <div className=''>
          <div className='page-title'>The cloud is an accelerator for your business—and your people.</div>
          <div>To compete today, every business needs the agility and flexibility of cloud technology. At Bluecorp, we help you use the cloud to become more data-driven and customer-focused, bring products to market faster, and improve your employee experience.</div>
        </div>
      </div>
      {/* This div for any background color */}
      <div className='bg-neutral-800'>
        <div className=''>
        <Image src={"/digital-transformation-service-img-1.jpg"} alt='digital-transformation-service-img-1' width={4250} height={2800} className='w-full h-fit'/>
        </div>
      </div>
      <div className='bg-amber-400 text-black'>
        <div className='max-w-[1720px] m-auto md:px-14 px-4 py-16'>
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