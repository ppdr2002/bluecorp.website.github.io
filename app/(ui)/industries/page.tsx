import React from 'react';
import Header from '@/components/layout/header';
import Image from 'next/image';
import Link from 'next/link';

export default function IndustriesPage() {
  return (
    <div>
      <Header />
      <div>
        <Image src={"/industries-front-img.png"} alt='industries-front-img' height={1000} width={2000} className='h-[100%] w-[100%] mt-10'/>
        {/* Top Section */}
        <div>
          <div className='md:px-14 px-4 py-10'>
            <h1 className='text-5xl font-bold pb-10 pt-10'>Industires We Serve</h1>
            <p className='md:w-[60%] w-full text-lg'>Delivering Value to multiple industries, we innovate industry-specific technologies to scale and optimize operations and bottom line.</p>
          </div>

          {/* Section 1 */}
          <div>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-[110px] md:gap-12 gap-10 py-10 md:px-14 px-4'>
              {/* Supply Chain Management Section */}
              <div className='flex flex-col gap-4'>
                <Image src={"/industries-supply-chain-management-img.jpeg"} alt={"industries-supply-chain-management"} width={650} height={550} className='rounded-xl md:h-[67%] h-full'/>
                <div className='flex items-center gap-6'>
                  <div className='p-3 bg-blue-600 w-fit h-fit rounded-xl'>
                  <Image src={"/industries-supply-chain-management.svg"} alt='industries-supply-chain-management' width={30} height={30}/>
                  </div>
                  <h1 className='text-2xl font-bold'>Supply Chain Management</h1>
                </div>
                <p>In today&apos;s complex global marketplace, efficient and effective supply chain management is the cornerstone of business success.Our company is dedicated to helping organizations streamline their operations, reduce costs, and enhance customer satisfaction. <Link href={"/industries/supply-chain-management"} className='hover:underline text-blue-700'>Learn More</Link> </p>
              </div>
              {/* Retail Section */}
              <div className='flex flex-col gap-4'>
                <Image src={"/industries-retail-img.jpeg"} alt={"industries-retail-img"} width={650} height={550} className='rounded-xl md:h-[67%] h-full'/>
                <div className='flex items-center gap-6'>
                  <div className='p-3 bg-blue-600 w-fit h-fit rounded-xl'>
                  <Image src={"/industries-retail.svg"} alt='industries-retail' width={30} height={30}/>
                  </div>
                  <h1 className='text-2xl font-bold'>Retail</h1>
                </div>
                <p>Our company is a leading retail company committed to providing exceptional shopping experiences. With a focus on innovation, quality, and customer satisfaction, we offer a diverse range of products and services to meet the evolving needs of our customers. <Link href={"/industries/retail"} className='hover:underline text-blue-700'>Learn More</Link> </p>
              </div> 
            </div>
          </div>

          {/* Section 2 */}
          <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 py-4 md:px-14 px-4 gap-8'>
            {/* iOT Section */}
            <div className='relative lg:w-[435px] md:w-[220px]'>
              <div>
                <Image src={"/industries-iot-img.jpg"} alt='industries-iot-img' height={550} width={450} className='rounded-xl h-[100%]'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-10 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-3'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-iot.svg"} alt='industries-sports' width={30} height={30} className="lg:w-[25px] md:w-[12px]"/>
                </div>
                <h1 className='lg:text-2xl md:text-base font-bold text-xl text-white'>IOT</h1>
                <p className='lg:text-sm md:text-[8px] text-sm text-white'>Our experts provide strategic guidance and technical expertise to help you leverage IoT to its full potential. We design and develop custom IoT devices tailored to specific needs and we build robust and scalable IoT platforms to manage and analyze data from your connected devices. <Link href={"/industries/internet-of-things"} className='hover:underline text-blue-700'>Learn More</Link></p>
              </div>
            </div>
             {/* Social Section */}
            <div className='relative lg:w-[435px] md:w-[220px]'>
              <div>
                <Image src={"/industries-social-img.jpg"} alt='industries-social-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-10 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-social.svg"} alt='industries-social' width={30} height={30} className="lg:w-[25px] md:w-[12px]"/>
                </div>
                <h1  className='lg:text-2xl md:text-base font-bold text-xl text-white'>Social</h1>
                <p className='lg:text-sm text-[8px] text-white'>We are your partner in navigating the dynamic world of social media. We help businesses and individuals harness the power of social platforms to connect with their audience, build brand awareness, and drive engagement.We develop comprehensive social media strategies tailored to your specific goals. <Link href={"/industries/social"} className='hover:underline text-blue-700'>Learn More</Link></p>
              </div>
            </div>
            {/* Smart Living */}
            <div className='relative lg:w-[435px] md:w-[220px]'>
              <div>
                <Image src={"/me.jpeg"} alt='industries-event-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-10 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-smart-living.svg"} alt='industries-smart-liviing' width={30} height={30} className="lg:w-[25px] md:w-[12px]"/>
                </div>
                <h1 className='lg:text-2xl md:text-base font-bold text-xl text-white'>Smart Living</h1>
                <p className='lg:text-sm text-[8px] text-white'>Our company dedicated to transforming your living spaces into intelligent environments. Our innovative smart home solutions offer convenience, security, and energy efficiency, enhancing your daily life.Seamlessly control your lights, thermostats, and other devices through voice commands or a user-friendly app. <Link href={"/industries/smart-living"} className='hover:underline text-blue-700'>Learn More</Link></p>
              </div>
            </div>           
          </div>

          {/* Section 3 */}
          <div className='flex w-full justify-center py-10 lg:px-24 px-8'>
            <div className='flex flex-col gap-8 items-center lg:w-[60%] md:w-[70%] w-full border-2 border-blue-600 md:py-16 py-6 lg:px-24 md:px-10 text-center rounded-xl'>
              <h1 className='lg:text-3xl md:text-sm font-bold'>You&apos;re one step away from transforming your business growth trajectory</h1>
              <button className='px-5 py-2 bg-blue-600 rounded-xl text-white'>Talk to our experts </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
