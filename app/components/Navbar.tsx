"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="md:px-14 px-4 md:py-8 py-4 flex items-center justify-between relative">
        {/* Mobile menu button */}
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center justify-center text-sm text-white rounded-lg md:hidden"
          aria-controls="navbar-solid-bg"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Logo */}
        <Link href={"/"}>
          LOGO
        </Link>

        {/* Desktop menu */}
        <div className="flex">
          <div className={`md:flex hidden items-center gap-4`}>
            <div>
              <div className="group px-4 py-2">
                Services
                <div className="group-hover:grid grid-cols-3 hidden absolute my-8 mx-14 left-0 right-0 top-14 bottom-5 z-10 p-6 bg-blue-900 text-white h-fit gap-8">
                  {/* Strategy Section */}
                  <div className="flex flex-col gap-4">
                    <Link href="/strategy" className="hover:underline font-bold text-base"> Strategy </Link>
                    <p className="font-light text-sm">Technology Strategy</p>
                    <p className="font-light text-sm">Data Strategy</p>
                    <p className="font-light text-sm">
                      Innovation & Emerging Technology Strategy
                    </p>
                  </div>

                  {/* Cloud Section */}
                  <div className="flex flex-col gap-4">
                    <Link href="/#" className="hover:underline font-bold text-base">
                      Cloud
                    </Link>
                    <p className="font-light text-sm">Migrations & Modernization</p>
                    <p className="font-light text-sm">Optimization</p>
                    <p className="font-light text-sm">Infrastructure</p>
                  </div>

                  {/* Digital Product Building Section */}
                  <div className="flex flex-col gap-4">
                    <Link href="/#" className="hover:underline font-bold text-base">
                      Digital Product Building
                    </Link>
                    <p className="font-light text-sm">Product Engineering</p>
                    <p className="font-light text-sm">Platform Engineering</p>
                    <p className="font-light text-sm">Data Engineering</p>
                  </div>

                  {/* Artificial Intelligence Section */}
                  <div className="flex flex-col gap-4">
                    <Link href="/#" className="hover:underline font-bold text-base">
                      Artificial Intelligence
                    </Link>
                    <p className="font-light text-sm">Machine Learning</p>
                    <p className="font-light text-sm">Generative AI</p>
                    <p className="font-light text-sm">Intelligent Products</p>
                  </div>

                  {/* Experience Strategy and Design Section */}
                  <div className="flex flex-col gap-4">
                    <Link
                      href="/#"
                      className="hover:underline font-bold text-base"
                    >
                      Experience Strategy and Design
                    </Link>
                    <p className="font-light text-sm">Customer & User Experience</p>
                    <p className="font-light text-sm">Product Strategy, Design & Innovation</p>
                    <p className="font-light text-sm">Service Design</p>
                    <p className="font-light text-sm">Brand Strategy</p>
                  </div>

                  {/* Digital Transformation Services Section */}
                  <div className="flex flex-col gap-4">
                    <Link href="/#" className="hover:underline font-bold text-base">
                      Digital Transformation Services
                    </Link>
                    <p className="font-light text-sm">Strategy & Journey</p>
                    <p className="font-light text-sm">Digital Applications</p>
                    <p className="font-light text-sm">AI Automation</p>
                    <p className="font-light text-sm">Legacy Modernisation</p>
                  </div>

                  {/* Startup Development Section */}
                  <div className="flex flex-col gap-4 font-bold">
                    <Link href="/#" className="hover:underline">Startup Software Development</Link>
                    <Link href="/#" className="hover:underline">SaaS Development</Link>
                    <Link href="/#" className="hover:underline">Supply Chain Management</Link>
                  </div>

                  {/* Software Development Section */}
                  <div className="flex flex-col gap-4">
                    <Link href="/#" className="hover:underline font-bold text-base">
                      Software Development
                    </Link>
                    <p className="font-light text-sm">UI/UX</p>
                    <p className="font-light text-sm">Mobile Development</p>
                    <p className="font-light text-sm">Web Development</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link href="#" className="px-4 py-2">
                Industries
              </Link>
            </div>
            <div>
              <Link href="#" className="px-4 py-2">
                Who we are
              </Link>
            </div>
            <div>
              <Link href="#" className="px-4 py-2">
                Careers
              </Link>
            </div>
          </div>

          {/* Contact Us button */}
          <div className="md:ml-10">
            <Link
              href="#"
              className="px-4 py-2 flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              <h6 className="md:text-base text-sm">Contact Us</h6>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white md:hidden`}
        >
          <div className="flex flex-col items-start p-4 space-y-2">
            {/* Services with Dropdown */}
            <div className="w-full">
              <button
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-2">
                  <Link
                    href="/strategy"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Strategy
                  </Link>
                  <Link
                    href="/#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Cloud
                  </Link>
                  <Link
                    href="/#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Digital Product Building
                  </Link>
                  <Link
                    href="/#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Artificial Intelligence
                  </Link>
                  <Link
                    href="/#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Experience Strategy and Design
                  </Link>
                  <Link
                    href="/#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Digital Transformation Services
                  </Link>
                  <Link
                    href="/#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Startup Software Development
                  </Link>
                  <Link
                    href="/#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    SaaS Development
                  </Link>
                  <Link
                    href="/#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Supply Chain Management
                  </Link>
                  <Link
                    href="/#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Software Development
                  </Link>
                </div>
              )}
            </div>
            {/* Other Menu Links */}
            <Link
              href="#"
              className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Industries
            </Link>
            <Link
              href="#"
              className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Who we are
            </Link>
            <Link
              href="#"
              className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Careers
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
