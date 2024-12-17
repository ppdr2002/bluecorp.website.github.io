import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='flex flex-col items-center text-white font-[family-name:var(--font-poppins)]'>
      <div className='w-full bg-blue-600 px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12'>
        <div className='max-w-[1720px] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 px-4'>
          <div>
            <div className='text-2xl font-medium mb-6'>Bluecorp Software</div>
            <div className='flex space-x-4'>
              <Link href="#" aria-label='LinkedIn'>
                <Image aria-hidden src="/social/linkedin.svg" alt="Bluecorp Software - LinkedIn" width={24} height={24}/>
              </Link>
              <Link href="#" aria-label='X'>
                <Image src="/social/x.svg" alt="Bluecorp Software - X" width={24} height={24}/>
              </Link>
            </div>
          </div>
          <div>
            <div className='text-xl font-medium mb-6'>Services</div>
            <ul className='text-base space-y-2'>
              <li>iOS Development</li>
              <li>Android Development</li>
              <li>Software Development</li>
              <li>Digital Transformation</li>
              <li>
                <a href="/services" className='link-hover'>more...</a>
              </li>
            </ul>
          </div>
          <div>
            <div className='text-xl font-medium mb-6'>Technology</div>
            <ul className='text-base space-y-2'>
              <li>Gen AI</li>
              <li>Internet of Things</li>
              <li>Robot Process Automation</li>
              <li>Cloud Computing</li>
              <li>
                <a href="/technologies" className='link-hover'>more...</a>
              </li>
            </ul>
          </div>
          <div>
            <div className='text-xl font-medium mb-6'>About</div>
            <ul className='text-base space-y-2'>
              <li>
                <a href="/team" className='link-hover'>Core Team</a>
              </li>
              <li>
                <a href="/careers" className='link-hover'>Careers</a>
              </li>
              <li>
                <a href="/contact" className='link-hover'>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full bg-blue-800 px-4 md:px-8 lg:px-12 py-4 md:py-6'>
        <div className='max-w-[1720px] m-auto text-sm uppercase grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 px-4'>
          <div className='flex justify-center lg:justify-start'>
            <span>{new Date().getFullYear()}&nbsp;</span>
            <span>&copy; Bluecorp Software Pvt. Ltd. All rights reserved.</span>
          </div>
          <div className='flex flex-wrap justify-center lg:justify-end items-center space-x-8'>
            <a href="/privacy-policy" className='link-hover'>Privacy Policy</a>
            <a href="/terms-of-use" className='link-hover'>Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer