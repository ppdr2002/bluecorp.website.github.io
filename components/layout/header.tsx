"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from 'next/navigation'

type NavItem = {
  icon?: string;
  label: string;
  href: string;
  submenu?: boolean;
  submenus?: NavItem[];
};

export default function Header() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems: NavItem[] = [
    {
      icon: "home",
      label: "Home",
      href: "/",
    },
    {
      icon: "devices",
      label: "Services",
      href: "/services",
      submenu: true,
      submenus: [
        {
          label: "Strategy",
          href: "/services/strategy",
        },
        {
          label: "Cloud",
          href: "/services/cloud",
        },
        {
          label: "Digital Product Building",
          href: "/services/digital-product-building",
        },
        {
          label: "Artificaial Intelligence",
          href: "/services/artificial-intelligence",
        },
        {
          label: "Experience Strategy And Design",
          href: "/services/experience-strategy-and-design",
        },
        {
          label: "Digital Transformation Services",
          href: "/services/digital-transformation-services",
        },
        {
          label: "Software Development",
          href: "/services/software-development",
        },
        {
          label: "Startup Software Development",
          href: "/services/startup-software-development",
        },
        {
          label: "SaaS Development",
          href: "/services/saas-development",
        },
        {
          label: "Supply Chain Management",
          href: "/services/supply-chain-development",
        }
      ],
    },
    {
      icon: "construction",
      label: "Industries",
      href: "/industries",
    },
    {
      icon: "co_present",
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      icon: "groups",
      label: "Who we are",
      href: "/who-we-are",
    },
    {
      icon: "school",
      label: "Careers",
      href: "/careers",
    },
  ];

  return (
    <nav className="bg-white dark:bg-black dark:text-white sticky top-0 z-50 lg:px-14 md:px-10 px-2">
      <div className="max-w-[1720px] container mx-auto md:px-2 py-2 flex justify-between items-center md:h-20">
        <div className="flex items-center">
          <div className="lg:hidden flex items-center ml-2 mr-4">
            <button onClick={toggleMenu} className="">
              {isOpen ? (
                <span className='material-symbols-outlined'>close</span>
              ) : (
                <span className='material-symbols-outlined'>menu</span>
              )}
            </button>
          </div>
          <Link href="/">
            <span className="text-3xl font-medium tracking-wider">bluecorp</span>
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-8 ml-auto">
          <div className="group px-4 py-2">
            <button className="link" type="button" onClick={() => router.push('/services')}>
              Services
            </button>
            <div className="group-hover:flex hidden items-start justify-between absolute my-8 mx-2 left-0 right-0 top-10 bottom-5 z-10 p-6 bg-white text-black h-[570px] border animate-dropdown-appear">

              {/* DROPDOWN 1st SECTION */}
              <div className="flex flex-col justify-between w-[280px] h-full">
                    <div className="flex flex-col gap-3 p-2">
                      <h1 className="text-3xl flex flex-wrap gap-2 font-semibold">Made to <p className="text-blue-600">Scale</p></h1>
                      <p className="text-wrap">Our software development services are built to evolve your business idea into a successful growth story</p>
                      <div className="border">
                        <Image src={"/l2img2.png"} alt="IMAGE" height={100} width={300}/>
                      </div>                      
                    </div>
                    {/* Startup Development Section */}
                    <div className="flex flex-col gap-3 font-bold">
                      <Link href="/#" className="block p-2 text-gray-800 hover:bg-gray-100">Startup Software Development</Link>
                      <Link href="/#" className="block p-2 text-gray-800 hover:bg-gray-100">SaaS Development</Link>
                      <Link href="/#" className="block p-2 text-gray-800 hover:bg-gray-100">Supply Chain Management</Link>
                    </div>                 
                  </div>

                  {/* DROPDOWN 2nd SECTION */}
                  <div className="flex flex-col justify-between w-[280px] h-full">
                    {/* Strategy Section */}
                    <div className="flex flex-col gap-3">
                      <Link href="/services/strategy" className="block px-2 py-2 text-gray-800 hover:bg-gray-100 font-bold"> Strategy </Link>
                      <p className="font-light text-sm px-2 py-1">Technology Strategy</p>
                      <p className="font-light text-sm px-2 py-1">Data Strategy</p>
                      <p className="font-light text-sm px-2 py-1">Innovation & Emerging Technology Strategy</p>
                    </div>

                    <div className="border opacity-70"></div>

                    {/* Cloud Section */}
                    <div className="flex flex-col gap-3">
                      <Link href="/services/cloud" className="block px-2 py-2 text-gray-800 hover:bg-gray-100 font-bold">Cloud</Link>
                      <p className="font-light text-sm px-2 py-1">Migrations & Modernization</p>
                      <p className="font-light text-sm px-2 py-1">Optimization</p>
                      <p className="font-light text-sm px-2 py-1">Infrastructure</p>
                    </div>

                    <div className="border opacity-70"></div>

                    {/* Digital Product Building Section */}
                    <div className="flex flex-col gap-3">
                      <Link href="/services/digital-product-building" className="block px-2 py-2 text-gray-800 hover:bg-gray-100 font-bold">Digital Product Building</Link>
                      <p className="font-light text-sm px-2 py-1">Product Engineering</p>
                      <p className="font-light text-sm px-2 py-1">Platform Engineering</p>
                      <p className="font-light text-sm px-2 py-1">Data Engineering</p>
                    </div>
                  </div>

                  {/* DROPDOWN 3rd SECTION */}                
                  <div className="flex flex-col gap-5 w-[280px] h-full">
                    {/* Artificial Intelligence Section */}
                    <div className="flex flex-col gap-3">
                      <Link href="/services/artificial-intelligence" className="block px-2 py-2 text-gray-800 hover:bg-gray-100 font-bold">
                        Artificial Intelligence
                      </Link>
                      <p className="font-light text-sm px-2 py-1">Machine Learning</p>
                      <p className="font-light text-sm px-2 py-1">Generative AI</p>
                      <p className="font-light text-sm px-2 py-1">Intelligent Products</p>
                    </div>

                    <div className="border opacity-70"></div>

                    {/* Experience Strategy and Design Section */}
                    <div className="flex flex-col gap-3">
                      <Link href="/services/experience-strategy-and-design" className="block px-2 py-2 text-gray-800 hover:bg-gray-100 font-bold">Experience Strategy and Design</Link>
                      <p className="font-light text-sm px-2 py-1">Customer & User Experience</p>
                      <p className="font-light text-sm px-2 py-1">Product Strategy, Design & Innovation</p>
                      <p className="font-light text-sm px-2 py-1">Service Design</p>
                      <p className="font-light text-sm px-2 py-1">Brand Strategy</p>
                    </div>
                  </div>

                  {/* DROPDOWN 4th SECTION */}            
                  <div className="flex flex-col gap-5 w-[280px] h-full">
                    {/* Software Development Section */}
                    <div className="flex flex-col gap-3">
                      <Link href="/services/software-development" className="block px-2 py-2 text-gray-800 hover:bg-gray-100 font-bold">Software Development</Link>
                      <p className="font-light text-sm px-2 py-1">UI/UX</p>
                      <p className="font-light text-sm px-2 py-1">Mobile Development</p>
                      <p className="font-light text-sm px-2 py-1">Web Development</p>
                    </div>

                    <div className="border opacity-70"></div>

                    {/* Digital Transformation Services Section */}
                    <div className="flex flex-col gap-3">
                      <Link href="/services/digital-transformation-services" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-bold">Digital Transformation Services</Link>
                      <p className="font-light text-sm px-2 py-1">Strategy & Journey</p>
                      <p className="font-light text-sm px-2 py-1">Digital Applications</p>
                      <p className="font-light text-sm px-2 py-1">AI Automation</p>
                      <p className="font-light text-sm px-2 py-1">Legacy Modernisation</p>
                    </div>
                  </div>
            </div>
          </div>
          <Link href="/industries">
            <span className="link">Industries</span>
          </Link>
          <Link href="/">
            <span className="link">Portfolio</span>
          </Link>
          <Link href="/about">
            <span className="link">Who we are</span>
          </Link>
          <Link href="/careers">
            <span className="link">Careers</span>
          </Link>
          <Link href="/contact">
            <span className="border-2 rounded-full px-6 py-2 hover:scale-105">Let’s launch</span>
          </Link>
          <Link href="/contact">
            <span className='material-symbols-outlined'>globe_asia</span>
          </Link>
        </div>
        <div className="lg:hidden flex items-center space-x-4 mr-2">
          <span className='material-symbols-outlined'>rocket_launch</span>
          <span className='material-symbols-outlined'>globe_asia</span>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-20 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 w-80 bg-neutral-100 text-neutral-800 shadow-lg transform transition-transform duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className="">
          <div className="flex flex-col px-2 space-y-2 my-2">
            {navItems.map((item, idx) => {
              return <MenuItem key={idx} item={item} />;
            })}
          </div>
          {/* <Link href="/">
            <div className="border-neutral-300 border-t border-b p-4">Privacy Policy</div>
          </Link> */}
          <div className="border-t border-neutral-300 p-4">
            <div className="text-lg font-semibold">Bluecorp Software Pvt. Ltd.</div>
            <div className="flex text-sm space-x-4 mt-2">
              <span className="underline">Privacy Policy</span>
              <span className="underline">Terms of Use</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const MenuItem = ({ item }: { item: NavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg w-full justify-between hover:bg-neutral-100 ${
              pathname.includes(item.href) ? "bg-neutral-100" : ""
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-semibold text-lg flex">{item.label}</span>
            </div>

            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.submenus?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.href}
                    className={`${
                      subItem.href === pathname ? "font-bold" : ""
                    }`}
                  >
                    <span>{subItem.label}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.href}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-neutral-100 ${
            item.href === pathname ? "bg-neutral-100" : ""
          }`}
        >
          <span className="material-symbols-outlined">{item.icon}</span>
          <span className="flex text-lg font-semibold">{item.label}</span>
        </Link>
      )}
    </div>
  );
};