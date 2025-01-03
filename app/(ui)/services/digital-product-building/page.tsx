import React from 'react';
import Header from '@/components/layout/header';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function DigitalProductBuildingPage() {
  return (
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
        <div>Digital Product Building</div>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1720px] m-auto gap-x-8 gap-y-4 px-4 md:px-14 my-20'>
        <div className='page-header'>
          <span className='flex justify-center items-center text-3xl md:text-5xl h-16 md:h-32 md:w-32 lg:w-[180px] w-16 rounded-xl mb-4 md:mb-0 text-black bg-green-300'>Dp</span>
          <span className='page-header-title'>Digital Product Building</span>
        </div>
        <div className=''>
          <div className='page-title'>Let&apos;s build the product that will move your business forward.</div>
          <div>When you&apos;re ready to build at the speed your business demands, we&apos;re ready to partner with you end to end. We can help you identify effective digital strategies, accelerate your time to market, and release more intelligent features. Best of all, we upskill your teams as we go—so you can keep growing long after our work is done.</div>
        </div>
      </div>
      {/* This div for any background color */}
      <div className='bg-neutral-800'>
        <div className=''>
        <Image src={"/digital-product-building-img-1.jpg"} alt='digital-product-building-img-1' width={7900} height={5300} className='w-full h-fit'/>
        </div>
      </div>
      <div className='bg-green-300 text-black'>
        <div className='max-w-[1720px] m-auto md:px-14 px-4 py-16'>
          <div className='section-header'>Our Digital Product Building <i>expertise</i></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16'>
            <div>
              <div className='section-block-title'>Product engineering</div>
              <div>Bluecorp&apos;s product engineering methodology (PEM) provides flexibility within a defined, repeatable framework, allowing us to sustain value with speed and quality. Whether starting with a blank slate or optimizing a mature product at scale, PEM works for every stage of your journey.</div>
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
      {/* Section 2 */}
      <div className='max-w-[1720px] m-auto lg:px-14 px-4 lg:py-20 py-10'>
        <div>
          <h1 className='lg:text-6xl'>We drive success holistically by bringing a tailored mix of services to <i>each project.</i></h1>
          <div className='lg:flex gap-6'>
            <div className='bg-slate-900 h-[80%] lg:w-[50%] w-[100%] border-spacing-2 rounded-lg mt-20 pb-20'>
              <Image src={"/digital-product-building-img-2.jpg"} alt='digital-product-building-img-2' height={800} width={750} className='rounded-t-lg'/>
                <div className='pt-10 px-6'>
                  <h6 className='text-lg text-white'>CUSTOMER STORY</h6>
                  <p className='lg:text-3xl pt-6'>USC Price: <i>Data drives stornger LA neighbouhoods.</i></p>
                  <button className='h-[40px] w-[150px] border-spacing-2 rounded-2xl bg-blue-600 hover:bg-blue-800 mt-6 px-4'>Read Story</button>
                </div>
            </div>
            <div className='bg-slate-900 h-[80%] lg:w-[50%] w-[100%] border-spacing-2 rounded-lg mt-20 pb-20'>
              <Image src={"/cloud-img-3.jpg"} alt='cloud-img-3' height={800} width={750} className='rounded-t-lg'/>
                <div className='pt-10 px-6'>
                  <h6 className='text-lg text-white'>CUSTOMER STORY</h6>
                  <p className='lg:text-3xl pt-6'>Hologic: <i>Using AI to advance cervical cancer screening for all.</i></p>
                  <button className='h-[40px] w-[150px] border-spacing-2 rounded-2xl bg-blue-600 hover:bg-blue-800 mt-6 px-4'>Read Story</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
