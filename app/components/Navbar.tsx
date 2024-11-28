import Link from "next/link";
import Image from "next/image";
// import { Collapse } from 'flowbite';
// import type { CollapseOptions, CollapseInterface } from 'flowbite';
// import type { InstanceOptions } from 'flowbite';

// const $targetEl: HTMLElement = document.getElementById('targetEl');

// const $triggerEl: HTMLElement = document.getElementById('triggerEl');

// const options: CollapseOptions = {
//     onCollapse: () => {
//         console.log('element has been collapsed');
//     },
//     onExpand: () => {
//         console.log('element has been expanded');
//     },
//     onToggle: () => {
//         console.log('element has been toggled');
//     },
// };

// const instanceOptions: InstanceOptions = {
//   id: 'targetEl',
//   override: true
// };

// const collapse: CollapseInterface = new Collapse(
//     $targetEl,
//     $triggerEl,
//     options,
//     instanceOptions
// );

// collapse.expand();

export default function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="md:px-14 px-4 md:py-8 py-4 flex items-center justify-between">

      <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>

        <Link href={"/"} className="">
          <Image src={"/logo.png"} alt={"LOGO"} width={10} height={10}/>
        </Link>
        
        <div className="flex">
          <div className="md:flex hidden items-center gap-4" id="navbar-solid-bg">
            <div>
              <Link href="#" className="group px-4 py-2">Services
                <div className="group-hover:grid grid-cols-3 hidden absolute my-8 mx-14 left-0 right-0 top-14 bottom-5 z-10 p-6 bg-blue-900">
                  <div className="flex flex-col gap-4">
                    <Link href={"/strategy"} className="hover:underline font-bold text-base">Strategy</Link>
                    <p className="font-light text-sm">Technology Strategy</p>
                    <p className="font-light text-sm">Data Strategy</p>
                    <p className="font-light text-sm">Innovation & Emerging Technology Strategy</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link href={"/#"} className="hover:underline font-bold text-base">Cloud</Link>
                    <p className="font-light text-sm">Migrations & Modernization</p>
                    <p className="font-light text-sm">Optimization</p>
                    <p className="font-light text-sm">Infrastructure</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link href={"/#"} className="hover:underline font-bold text-base">Digital Product building</Link>
                    <p className="font-light text-sm">Product Engineering</p>
                    <p className="font-light text-sm">Platform Engineering</p>
                    <p className="font-light text-sm">Data Engineering</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link href={"/#"} className="hover:underline font-bold text-base">Artificial Intelligence</Link>
                    <p className="font-light text-sm">Machine Learning</p>
                    <p className="font-light text-sm">Generative AI</p>
                    <p className="font-light text-sm">Intelligent Products</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link href={"/#"} className="hover:underline font-bold text-base">Experience Strategy and Design</Link>
                    <p className="font-light text-sm">Customer & User experience</p>
                    <p className="font-light text-sm">Product strategy, design & Innovation</p>
                    <p className="font-light text-sm">Service Design</p>
                    <p className="font-light text-sm">Brand Strategy</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link href={"/#"} className="hover:underline font-bold text-base">Digital Transformation Services</Link>
                    <p className="font-light text-sm">Strategy & Journey</p>
                    <p className="font-light text-sm">Digital Applications</p>
                    <p className="font-light text-sm">AI Automation</p>
                    <p className="font-light text-sm">Legacy Modernisation</p>
                  </div>
                  <div className="flex flex-col gap-4 font-bold">
                    <Link href={"#"}>Startup Software Development</Link>
                    <Link href={"#"}>SaaS Development</Link>
                    <Link href={"#"}>Supply Chain Management</Link>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link href={"/#"} className="hover:underline font-bold text-base">Software Development</Link>
                    <p className="font-light text-sm">UI/UX</p>
                    <p className="font-light text-sm">Mobile Development</p>
                    <p className="font-light text-sm">Web Development</p>
                  </div>
                </div>
              </Link>
            </div>
            <div><Link href="#" className="px-4 py-2">Industries</Link></div>
            {/* <div href="#"><div href="#" className="px-4 py-2">Portfolio</Link></div> */}
            <div><Link href="#" className="px-4 py-2">Who we are</Link></div>
            <div><Link href="#" className="px-4 py-2">Careers</Link></div>
        </div>
          <div className="md:ml-10">
            <Link href="#" className="px-4 py-2 flex items-center gap-2  rounded-lg bg-blue-600 hover:bg-blue-700">
            {/* <Image src={"/call.svg"} alt={"call"} width={14} height={14} /> */}
            <h6 className="md:text-base text-sm">Contact Us</h6></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
