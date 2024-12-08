import React from 'react';
import Header from '@/components/layout/header';
import Image from 'next/image';

export default function ExperienceStrategyAndDesignPage() {
  return (
    <div>
      <div className='text-neutral-900'>
        <Header />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1720px] m-auto gap-x-8 gap-y-4 px-4 md:px-10 my-20'>
        <div className='page-header'>
          <span className='page-icon-header bg-purple-400'>Ex</span>
          <span className='page-header-title'>Experience Strategy & Design</span>
        </div>
        <div className=''>
          <div className='page-title'>We put people first, always.</div>
          <div>Trends and technologies change, but the fundamental drivers of effective experience and design remain the same. It’s all about people. As a consulting and technology firm that built these capabilities organically based on client needs, Slalom gives you an integrated, end-to-end approach to creating experiences people love.</div>
        </div>
      </div>
      {/* This div for any background color */}
      <div className='bg-neutral-800'>
        <div className='max-w-[1720px] m-auto px-2 h-[800px]'>
        <Image src={"/strategy-img-1.webp"} alt='strategy-img-1.webp' width={100} height={100} className='w-full absolute left-0 h-[800px]'/>
        </div>
      </div>
      <div className='bg-purple-400'>
        <div className='max-w-[1720px] m-auto px-10 py-12'>
          <div className='section-header'>Our experience strategy and design<i>expertise</i></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16'>
            <div>
              <div className='section-block-title'>Customer & employee experience</div>
              <div>To design differentiated experiences, we employ rigorous research methodologies to gain a deep understanding of the people you serve. Because while you can't predict the future in terms of technology, knowing what people need empowers you to make the right decisions over time.</div>
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
              <div>A well-defined brand strategy is critical for delivering on your brand’s promise, and it’s most powerful when inspired by your customers. At Slalom, we focus on deeply understanding both your customers and the marketplace to help you shape a winning brand perception.</div>
            </div>
            <div>
              <div className='section-block-title'>Contact center transformation</div>
              <div>We offer a mix of deep contact center industry experience, technical know-how, and functional expertise. Our advisors help your team embrace new ways of working, powered by the latest technological solutions, and motivated by doing what’s right for both your customers and employees.</div>
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
