import React from 'react';
import Header from '@/components/layout/header';
import Image from 'next/image';

export default function IndustriesPage() {
  return (
    <div>
      <Header />
      <div>
       {/* Top Section */}
        <div>
          <div className='md:px-14 px-4 py-10'>
            <h1 className='text-5xl font-bold pb-10'>Industires We Serve</h1>
            <p className='w-[60%]'>Delivering Value to multiple industries, we innovate industry-specific technologies to scale and optimize operations and bottom line.</p>
          </div>
          {/* Section 1 */}
          <div>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-[110px] md:gap-12 gap-4 py-10 md:px-14 px-4'>
              {/* Logistic Section */}
              <div className='flex flex-col gap-4'>
                <Image src={"/industries-logistic-img.jpeg"} alt={"industries-img-1.jpeg"} width={650} height={550} className='rounded-xl md:h-[67%] h-full'/>
                <div className='flex items-center gap-8'>
                  <div className='p-1 bg-blue-600 w-fit h-fit rounded-xl'>
                  <Image src={"/industries-logistic.svg"} alt='industries-logistic' width={50} height={50}/>
                  </div>
                  <h1 className='text-2xl font-bold'>Logistics</h1>
                </div>
                <p> We develop cutting-edge software for the logistics industry, including supply chain software with AI/ML-enabled predictive analytics, helping them serve their customers across the globe. </p>
              </div>
              {/* HealthCare Section */}
              <div className='flex flex-col gap-4'>
                <Image src={"/industries-logistic-img.jpeg"} alt={"industries-img-1.jpeg"} width={650} height={550} className='rounded-xl md:h-[67%] h-full'/>
                <div className='flex items-center gap-8'>
                  <div className='p-1 bg-blue-600 w-fit h-fit rounded-xl'>
                  <Image src={"/industries-logistic.svg"} alt='industries-logistic' width={50} height={50}/>
                  </div>
                  <h1 className='text-2xl font-bold'>Logistics</h1>
                </div>
                <p> We develop cutting-edge software for the logistics industry, including supply chain software with AI/ML-enabled predictive analytics, helping them serve their customers across the globe. </p>
              </div>
              {/* Travel Section */}
              <div className='flex flex-col gap-4'>
                <Image src={"/industries-logistic-img.jpeg"} alt={"industries-img-1.jpeg"} width={650} height={550} className='rounded-xl md:h-[67%] h-full'/>
                <div className='flex items-center gap-8'>
                  <div className='p-1 bg-blue-600 w-fit h-fit rounded-xl'>
                  <Image src={"/industries-logistic.svg"} alt='industries-logistic' width={50} height={50}/>
                  </div>
                  <h1 className='text-2xl font-bold'>Logistics</h1>
                </div>
                <p> We develop cutting-edge software for the logistics industry, including supply chain software with AI/ML-enabled predictive analytics, helping them serve their customers across the globe. </p>
              </div>
              {/* Gaming Section */}
              <div className='flex flex-col gap-4'>
                <Image src={"/industries-logistic-img.jpeg"} alt={"industries-img-1.jpeg"} width={650} height={550} className='rounded-xl md:h-[67%] h-full'/>
                <div className='flex items-center gap-8'>
                  <div className='p-1 bg-blue-600 w-fit h-fit rounded-xl'>
                  <Image src={"/industries-logistic.svg"} alt='industries-logistic' width={50} height={50}/>
                  </div>
                  <h1 className='text-2xl font-bold'>Logistics</h1>
                </div>
                <p> We develop cutting-edge software for the logistics industry, including supply chain software with AI/ML-enabled predictive analytics, helping them serve their customers across the globe. </p>
              </div>
              {/* eCommerece Section */}
              <div className='flex flex-col gap-4'>
                <Image src={"/industries-logistic-img.jpeg"} alt={"industries-img-1.jpeg"} width={650} height={550} className='rounded-xl md:h-[67%] h-full'/>
                <div className='flex items-center gap-8'>
                  <div className='p-1 bg-blue-600 w-fit h-fit rounded-xl'>
                  <Image src={"/industries-logistic.svg"} alt='industries-logistic' width={50} height={50}/>
                  </div>
                  <h1 className='text-2xl font-bold'>Logistics</h1>
                </div>
                <p> We develop cutting-edge software for the logistics industry, including supply chain software with AI/ML-enabled predictive analytics, helping them serve their customers across the globe. </p>
              </div>
              {/* Finance Section */}
              <div className='flex flex-col gap-4'>
                <Image src={"/industries-logistic-img.jpeg"} alt={"industries-img-1.jpeg"} width={650} height={550} className='rounded-xl md:h-[67%] h-full'/>
                <div className='flex items-center gap-8'>
                  <div className='p-1 bg-blue-600 w-fit h-fit rounded-xl'>
                  <Image src={"/industries-logistic.svg"} alt='industries-logistic' width={50} height={50}/>
                  </div>
                  <h1 className='text-2xl font-bold'>Logistics</h1>
                </div>
                <p> We develop cutting-edge software for the logistics industry, including supply chain software with AI/ML-enabled predictive analytics, helping them serve their customers across the globe. </p>
              </div>
              {/* Automotive Section */}
              <div className='flex flex-col gap-4'>
                <Image src={"/industries-logistic-img.jpeg"} alt={"industries-img-1.jpeg"} width={650} height={550} className='rounded-xl md:h-[67%] h-full'/>
                <div className='flex items-center gap-8'>
                  <div className='p-1 bg-blue-600 w-fit h-fit rounded-xl'>
                  <Image src={"/industries-logistic.svg"} alt='industries-logistic' width={50} height={50}/>
                  </div>
                  <h1 className='text-2xl font-bold'>Logistics</h1>
                </div>
                <p> We develop cutting-edge software for the logistics industry, including supply chain software with AI/ML-enabled predictive analytics, helping them serve their customers across the globe. </p>
              </div>
              {/* eLearning Section */}
              <div className='flex flex-col gap-4'>
                <Image src={"/industries-logistic-img.jpeg"} alt={"industries-img-1.jpeg"} width={650} height={550} className='rounded-xl md:h-[67%] h-full'/>
                <div className='flex items-center gap-8'>
                  <div className='p-1 bg-blue-600 w-fit h-fit rounded-xl'>
                  <Image src={"/industries-logistic.svg"} alt='industries-logistic' width={50} height={50}/>
                  </div>
                  <h1 className='text-2xl font-bold'>Logistics</h1>
                </div>
                <p> We develop cutting-edge software for the logistics industry, including supply chain software with AI/ML-enabled predictive analytics, helping them serve their customers across the globe. </p>
              </div>
            </div>
          </div>
          {/* Section 2 */}
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-16 md:px-14 px-4 gap-8'>
            {/* Sports Section */}
            <div className='relative lg:w-[435px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-3'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1 className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
             {/* On-demand Section */}
            <div className='relative lg:w-[435px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1  className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
             {/* Events Section */}
            <div className='relative lg:w-[435px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1 className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
             {/* Agriculture Section */}
            <div className='relative lg:w-[425px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1 className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
             {/* Social Networking Section */}
            <div className='relative lg:w-[425px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1 className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
             {/* Wellness Section */}
            <div className='relative lg:w-[425px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1 className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
             {/* Entertainment Section */}
            <div className='relative lg:w-[425px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1 className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
            {/* Restaurant Section */}
            <div className='relative lg:w-[425px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1 className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
             {/* SaaS Section */}
            <div className='relative lg:w-[425px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1 className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
             {/* Politics & Governance Section */}
            <div className='relative lg:w-[425px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1 className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
             {/* Real Estate Section */}
            <div className='relative lg:w-[425px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1 className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
             {/* Electric Vehicle Section */}
            <div className='relative lg:w-[425px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1 className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
             {/* News Section */}
            <div className='relative lg:w-[425px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1 className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
             {/* Aviation Section */}
            <div className='relative lg:w-[425px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1 className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
             {/* OTT Section */}
            <div className='relative lg:w-[425px]'>
              <div>
                <Image src={"/industries-sports-img.jpeg"} alt='industries-sports-img' height={450} width={450} className='rounded-xl'/>
              </div>
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white to-black opacity-40 rounded-xl'></div>
              <div className='absolute bottom-8 z-20 left-3 p-3 flex flex-col gap-2'>
                <div className='p-3 bg-blue-600 h-fit w-fit rounded-lg'>
                  <Image src={"/industries-sports.png"} alt='industries-sports' width={25} height={25}/>
                </div>
                <h1 className='text-2xl font-bold'>Sports</h1>
                <p className='text-sm'>The sports industry requires immersive and engaging UI/UX that we excel in developing. We help leaders or scale sports businesses using our technology expertise in the industry.</p>
              </div>
            </div>
          </div>        
        </div>
      </div>
    </div>
  )
}
