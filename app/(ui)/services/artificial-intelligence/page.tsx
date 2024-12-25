import React from 'react';
import Header from '@/components/layout/header';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function ArtificialIntelligencePage() {
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
        <div>Artificial Intelligence</div>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1720px] m-auto gap-x-6 gap-y-4 px-4 md:px-14 my-20'>
        <div className='page-header'>
          <span className='flex justify-center items-center text-3xl md:text-5xl h-16 md:h-32 w-16 md:w-[140px] rounded-xl mb-4 md:mb-0 bg-cyan-400 text-black'>Ai</span>
          <span className='page-header-title'>Artificial Intelligence</span>
        </div>
        <div className=''>
          <div className='page-title'>AI dares us to rethink the impossible.</div>
          <div>Together, we can solve tomorrow&apos;s challenges with AI. We can help you use AI to automate repetitive processes, challenge conventional constraints, and reimagine user experiences in a responsible and ethical way that keeps people doing what only humans can: think creatively and innovate boldly.</div>
        </div>
      </div>
      {/* This div for any background color */}
      <div className='bg-neutral-800'>
        <div className=''>
        <Image src={"/artificial-intelligence-img-1.jpg"} alt='artificial-intelligence-img-1.jpg' width={5990} height={4000} className='w-full h-fit'/>
        </div>
      </div>
      <div className='bg-cyan-400 text-black'>
        <div className='max-w-[1720px] m-auto md:px-14 px-4 py-16'>
          <div className='section-header'>Our Artificial Intelligence <i>expertise</i></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16'>
            <div>
              <div className='section-block-title'>Machine learning</div>
              <div>From upskilling your people to building out data models, machine learning (ML) is an essential component of every modern business. Our experts can help build and optimize your ML capability to streamline operations, simplify complex decisions, and build on what you already know.</div>
            </div>
            <div>
              <div className='section-block-title'>Generative AI</div>
              <div>With generative AI, we&apos;re using artificial intelligence to augment human potential. It&apos;s not pattern recognition—it&apos;s pattern generation. When used responsibly to empower your teams, generative AI can help you analyze vast amounts of data, capitalize on customer feedback, and make predictions about the future. </div>
            </div>
            <div>
              <div className='section-block-title'>Intelligent products</div>
              <div>Combining technology, intelligence, experiences, and operations, our experts use AI, ML, and automation to build intelligent products that help organizations scale and grow. We can help improve the quality and value of your data, delight users with targeted experiences, and create a foundation for scalable solutions.</div>
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
              <Image src={"/artificial-intelligence-img-2.png"} alt='artificial-intelligence-img-2' height={800} width={750} className='rounded-t-lg'/>
              <div className='pt-10 px-6'>
                <p className='lg:text-3xl pt-6'>Jaja Finance: <i>Responding faster to customer s with GenAI.</i></p>
                <button className='h-[40px] w-[150px] border-spacing-2 rounded-2xl bg-blue-600 hover:bg-blue-800 mt-6 px-4'>Read Story</button>
              </div>
            </div>
            <div className='bg-slate-900 h-[80%] lg:w-[50%] w-[100%] border-spacing-2 rounded-lg mt-20 pb-20'>
              <Image src={"/artificial-intelligence-img-3.png"} alt='artificial-intelligence-img-3' height={800} width={750} className='rounded-t-lg'/>
                <div className='pt-10 px-6'>
                <p className='lg:text-3xl pt-6'>Xero: <i>Opening new ways to meet customers where they are</i></p>
                <button className='h-[40px] w-[150px] border-spacing-2 rounded-2xl bg-blue-600 hover:bg-blue-800 mt-6 px-4'>Read Story</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
