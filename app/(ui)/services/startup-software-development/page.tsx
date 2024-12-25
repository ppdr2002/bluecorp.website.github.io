import React from 'react';
import Header from '@/components/layout/header';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

export default function StartupSoftwareDevelopmentPage() {
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
        <div>Startup Software Development</div>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1720px] m-auto gap-x-8 gap-y-4 px-4 md:px-14 my-20'>
        <div className='page-header'>
          <span className='flex justify-center items-center text-3xl md:text-5xl h-16 md:h-32 md:w-[210px] w-16 rounded-xl mb-4 md:mb-0 bg-red-400 text-black'>Ss</span>
          <span className='page-header-title'>Startup Software Development</span>
        </div>
        <div className=''>
          <div className='page-title'>Create the vision. Then make it real.</div>
          <div>At Slalom, we work to deeply understand your organization and develop detailed, executable roadmaps—so you know exactly what to do next, where to grow, and how to transform. Beyond helping you establish your vision, we have the technology and delivery capabilities to make sure you get there.</div>
        </div>
      </div>

      {/* This div for any background color */}
      <div className='bg-neutral-800'>
        <div className=''>
          <Image src={"/startup-software-development-img-1.jpg"} alt='strategy-img-1' width={6000} height={4000} className='w-[100%]'/>
        </div>
      </div>
      <div className='bg-red-400 text-black'>
        <div className='max-w-[1720px] m-auto md:px-14 px-4 py-16'>
          <div className='section-header'>Our Modus <i>Operandi</i></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16'>
            <div>
              <div className='section-block-title'>Discovery Workshop</div>
              <div>We believe discovery workshops are the most efficient way to handle any project. We conduct product discovery workshops to define the business goals, prioritize core functionalities, understand target audiences, and formulate user personas. In order to carry out a streamlined custom software development for startups, we conduct a workshop that fosters a shared sense of understanding and helps us steer the project in the right direction collectively.</div>
            </div>
            <div>
              <div className='section-block-title'>Scoping Sessions</div>
              <div>We articulate your custom startup software development idea into a well-defined Scope of Work and release your product faster in the market. After understanding your goals and vision, our experts infer your value propositions, characterize your product, and define the project&apos;s scope.Each one of our software development services for startups is backed with a detailed Statement of Work (SOW), a report where we underline the project scope, and a ballpark estimation of the project budget and 1  timeline.</div>
            </div>
            <div>
              <div className='section-block-title'>Business Analysis</div>
              <div>Our business analysts work closely with you to turn your app idea into a viable product. For your startup business mobile app development, they act as intermediaries, managing your interests and performing strategic analysis. Besides conducting stakeholder and competitor analysis, our software developers for startups examine the feasibility of options and only validate requirement-based solutions with your approval.</div>
            </div>
            <div>
              <div className='section-block-title'>Product Design Sprint</div>
              <div>Following a 5-day product design sprint methodology, our experts transform an idea into a functionally designed prototype. The startup software developer at Appinventiv conducts months of designing, prototyping, and testing to validate assumptions with real users and assess the gaps in the process. This design sprint yields invaluable insights to our team on how an end user engages with a product and helps us filter what works for them and what doesn’t.</div>
            </div>
            <div>
              <div className='section-block-title'>MVP</div>
              <div>An MVP is the first version of a digital product. Intact with the core functionalities, it is built to garner valuable feedback from its end users. As a startup app development agency, we strive to develop a delightful, usable, valuable, and feasible product from day one. Backed by real data and not speculations, an MVP for startups helps in decision-making and sets the scope for future iterations.</div>
            </div>
            <div>
              <div className='section-block-title'>Evolve</div>
              <div>As a reputed startup web app development agency, we continue improving, iterating, and upgrading your startup product. We provide long-term support for the app that you build with us and offer due consultation whenever needed. Our pre-release testing and post-release support ensure you relentlessly improve your product&apos;s quality and retain your end users. As a leading company offering software development for startups, we believe in stabilizing and scaling your product for long-term success.</div>
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
  );
}
