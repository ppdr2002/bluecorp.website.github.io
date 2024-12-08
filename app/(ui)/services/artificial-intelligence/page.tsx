import React from 'react';
import Header from '@/components/layout/header';
import Image from 'next/image';

export default function ArtificialIntelligencePage() {
  return (
    <div>
      <div className='text-neutral-900'>
        <Header />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1720px] m-auto gap-x-6 gap-y-4 px-4 md:px-10 my-20'>
        <div className='page-header'>
          <span className='page-icon-header bg-pink-400'>Ai</span>
          <span className='page-header-title'>Artificial Intelligence</span>
        </div>
        <div className=''>
          <div className='page-title'>AI dares us to rethink the impossible.</div>
          <div>Together, we can solve tomorrow&apos;s challenges with AI. We can help you use AI to automate repetitive processes, challenge conventional constraints, and reimagine user experiences in a responsible and ethical way that keeps people doing what only humans can: think creatively and innovate boldly.</div>
        </div>
      </div>
      {/* This div for any background color */}
      <div className='bg-neutral-800'>
        <div className='max-w-[1720px] m-auto px-2 h-[800px]'>
        <Image src={"/strategy-img-1.webp"} alt='strategy-img-1.webp' width={100} height={100} className='w-full absolute left-0 h-[800px]'/>
        </div>
      </div>
      <div className='bg-pink-400'>
        <div className='max-w-[1720px] m-auto px-10 py-16'>
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
      <div>
        <div className='max-w-[1720px] m-auto px-4'>Section #02</div>
      </div>
    </div>
  )
}
