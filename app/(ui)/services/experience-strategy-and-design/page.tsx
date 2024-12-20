import React from 'react';
import Header from '@/components/layout/header';
import Image from 'next/image';

export default function ExperienceStrategyAndDesignPage() {
  return (
    <div>
      <div className='text-neutral-900'>
        <Header />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1720px] m-auto gap-x-8 gap-y-4 px-4 md:px-14 my-20'>
        <div className='page-header'>
          <span className='flex justify-center items-center text-3xl md:text-5xl h-16 md:h-32 md:w-32 lg:w-[220px] w-16 rounded-xl mb-4 md:mb-0 bg-indigo-400 text-black'>Ex</span>
          <span className='page-header-title'>Experience Strategy & Design</span>
        </div>
        <div className=''>
          <div className='page-title'>We put people first, always.</div>
          <div>Trends and technologies change, but the fundamental drivers of effective experience and design remain the same. It&apos;s all about people. As a consulting and technology firm that built these capabilities organically based on client needs, Bluecorp gives you an integrated, end-to-end approach to creating experiences people love.</div>
        </div>
      </div>
      {/* This div for any background color */}
      <div className='bg-neutral-800'>
        <div className=''>
        <Image src={"/experience-strategy-and-design-img-1.jpg"} alt='experience-strategy-and-design-img-1' width={7300} height={4900} className='w-full h-fit'/>
        </div>
      </div>
      <div className='bg-indigo-400 text-black'>
        <div className='max-w-[1720px] m-auto md:px-14 px-4 py-12'>
          <div className='section-header'>Our experience strategy and design<i>expertise</i></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16'>
            <div>
              <div className='section-block-title'>Customer & employee experience</div>
              <div>To design differentiated experiences, we employ rigorous research methodologies to gain a deep understanding of the people you serve. Because while you can&apos;t predict the future in terms of technology, knowing what people need empowers you to make the right decisions over time.</div>
            </div>
            <div>
              <div className='section-block-title'>Product strategy, design & innovation</div>
              <div>Blending creativity with pragmatism and real-world experience, Slalom helps you evolve to meet customer needs, solve their challenging problems, and impact your bottom line. We set a clear product vision and support your product teams as they become more focused, thoughtfully organized, and agile.</div>
            </div>
            <div>
              <div className='section-block-title'>Advertising & marketing transformation</div>
              <div>A transformative shift to the cloud, along with tough new data privacy laws, has meant unprecedented change—and significant opportunities—across advertising and marketing. Our team identifies the capabilities, solutions, and infrastructure you need to make the most of this shifting landscape. </div>
            </div>
            <div>
              <div className='section-block-title'>Service design</div>
              <div>We help you leverage smart service design to enhance customer experiences, improve operational efficiency, and stay competitive. Together, we address user needs and differentiate services to boost customer satisfaction and drive loyalty—which are key to your business growth over the long term.</div>
            </div>
            <div>
              <div className='section-block-title'>Brand strategy</div>
              <div>A well-defined brand strategy is critical for delivering on your brand&apos;s promise, and it&apos;s most powerful when inspired by your customers. At Slalom, we focus on deeply understanding both your customers and the marketplace to help you shape a winning brand perception.</div>
            </div>
            <div>
              <div className='section-block-title'>Contact center transformation</div>
              <div>We offer a mix of deep contact center industry experience, technical know-how, and functional expertise. Our advisors help your team embrace new ways of working, powered by the latest technological solutions, and motivated by doing what&apos;s right for both your customers and employees.</div>
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
