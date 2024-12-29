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
          <div className='page-title'>Digital Transformation Services Company that Helps Businesses Champion Change</div>
          <div>Our IT outsourcing services for digital business transformation services drive impactful benefits by optimizing processes, automating systems, and propelling innovation. As a renowned digital transformation services company, we utilize a forward-thinking approach that not only addresses your immediate digital concerns but also guides you in making well-informed, future-proof decisions for your business.</div>
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
          <div className='section-header'>Our Digital Transformation Service <i>expertise</i></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16'>
            <div>
              <div className='section-block-title'>End-to-End Digital Business Transformation Services</div>
              <div>Our proficiency in holistic digital transformation enables enterprises to adopt cutting-edge technologies and effortlessly adjust to the dynamic digital environment.Being a dedicated product development company, we help you through every stage of your transformation journey with an emphasis on an all-encompassing strategy, guaranteeing long-term success and growth.</div>
            </div>
            <div>
              <div className='section-block-title'>New Revenue Streams</div>
              <div>As one of the finest digital transformation companies, we build scalable solutions to spot and seize new business opportunities. With our robust custom digital business transformation solutions, we help you diversify revenue streams, maintain competitiveness, and prosper in the ever-changing digital landscape. Our strategy is centered on innovative approaches to optimize your profitability and development potential, guaranteeing sustained success.</div>
            </div>
            <div>
              <div className='section-block-title'>Market Responsiveness</div>
              <div>With our digital transformation strategy, your company can remain up-to-date with the ever-changing market conditions. As a leading digital transformation solutions company, we give you the flexibility and resources you need to adapt to new trends and make changes in your business. Staying current and embracing innovation not only positions your company to seize emerging opportunities but also sustains a competitive edge.</div>
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