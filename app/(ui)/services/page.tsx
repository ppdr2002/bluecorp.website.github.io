"use client";
import React from 'react';
import Header from '@/components/layout/header';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';

export default function ServicesPage() {
  const router = useRouter();
  return (
    <div>
      <Header />
      {/* This div for any background color or images */}
      <div className="flex items-center bg-blue-600 dark:bg-transparent h-dvh">
        <div className='relative w-full md:px-14 px-4'>
          <div className='flex items-center justify-center'>
            <div className='mt-12 text-center space-y-8'>
              <div className='headline1 text-white'>Discover, Develop, Deploy</div>
              <div className='headline2 text-white'>Maximize your business potential with our cutting-edge digital transformation services.</div>
              <div>
                <button type="button" className="py-4 px-8 font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-blue-200 hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-700 dark:bg-white-800 dark:text-black dark:border-blue-600 dark:hover:text-white dark:hover:bg-blue-700">Let&apos;s Discuss Opportunities</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* This div for any background color */}
      <div>
        <div className='md:px-14 px-4 md:py-20 py-10'>
          <h1 className='text-6xl md:py-10 py-5'>Explore our <i>services</i></h1>
          <p className='text-xl pb-5'>Our services are broad, deep, and infinitely customizable, so you get exactly what you&apos;re looking for.</p>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 md:py-10 py-5'>
            <button type="button" onClick={() => router.push('/services/strategy')} className='flex items-center h-fit border'>
              <div className='p-4 lg:text-4xl md:text-3xl text-xl bg-purple-300 text-black'>St</div>
              <div className='px-4 lg:text-xl md:text-base text-sm'> Strategy </div>
            </button>
            <button type="button" onClick={() => router.push('/services/cloud')} className='flex items-center h-fit border'>
              <div className='p-4 lg:text-4xl md:text-3xl text-xl bg-violet-400 text-black'>Cl</div>
              <div className='px-4 lg:text-xl md:text-base text-sm'> Cloud </div>
            </button>
            <button type="button" onClick={() => router.push('/services/digital-product-building')} className='flex items-center h-fit border'>
              <div className='p-4 lg:text-4xl md:text-3xl text-xl bg-green-300 text-black'>Dp</div>
              <div className='px-4 lg:text-xl md:text-base text-sm'> Digital Product Building </div>
            </button>
            <button type="button" onClick={() => router.push('/services/artificial-intelligence')} className='flex items-center h-fit border'>
              <div className='p-4 lg:text-4xl md:text-3xl text-xl bg-cyan-400 text-black'>Ai</div>
              <div className='px-4 lg:text-xl md:text-base text-sm'> Artificial Intelligence </div>
            </button>
            <button type="button" onClick={() => router.push('/services/experience-strategy-and-design')} className='flex items-center h-fit border'>
              <div className='p-4 lg:text-4xl md:text-3xl text-xl bg-pink-400 text-black'>Ex</div>
              <div className='px-4 lg:text-xl md:text-base text-sm'> Experience Strategy and Design </div>
            </button>
            <button type="button" onClick={() => router.push('/services/software-development')} className='flex items-center h-fit border'>
              <div className='p-4 lg:text-4xl md:text-3xl text-xl bg-indigo-400 text-black'>Sd</div>
              <div className='px-4 lg:text-xl md:text-base text-sm'> Software Development </div>
            </button>
            <button type="button" onClick={() => router.push('/services/digital-transformation-services')} className='flex items-center h-fit border'>
              <div className='p-4 lg:text-4xl md:text-3xl text-xl bg-amber-400 text-black'>Di</div>
              <div className='px-4 lg:text-xl md:text-base text-sm'> Digital Transformation Service </div>
            </button>
            <button type="button" onClick={() => router.push('/services/startup-software-development')} className='flex items-center h-fit border'>
              <div className='p-4 lg:text-4xl md:text-3xl text-xl bg-red-400 text-black'>Ss</div>
              <div className='px-4 lg:text-xl md:text-base text-sm'> Startup Software Development </div>
            </button>
            <button type="button" onClick={() => router.push('/services/saas-development')} className='flex items-center h-fit border'>
              <div className='p-4 lg:text-4xl md:text-3xl text-xl bg-orange-300 text-black'>Sa</div>
              <div className='px-4 lg:text-xl md:text-base text-sm'> SaaS Development </div>
            </button>
            <button type="button" onClick={() => router.push('/services/supply-chain-development')} className='flex items-center h-fit border'>
              <div className='p-4 lg:text-4xl md:text-3xl text-xl bg-yellow-300 text-black'>Sc</div>
              <div className='px-4 lg:text-xl md:text-base text-sm'> Supply Chain Management </div>
            </button>
          </div>
        </div>
      </div>

      <div className='md:px-14 px-4 md:py-20 py-10 flex flex-wrap gap-8 items-center justify-between'>
        <h1 className='md:text-5xl text-lg'>Let&apos;s solve <i>together.</i></h1>
        <button  type="button" onClick={() => router.push('/contact')} className="flex items-center gap-2 bg-transparent hover:bg-blue-700 hover:text-white font-semibold px-7 py-3 rounded-full border">Get in touch <FaArrowRight /></button>
      </div>
    </div>
  )
}
