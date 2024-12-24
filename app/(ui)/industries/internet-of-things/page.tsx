import React from "react";
import Header from "@/components/layout/header";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function InternetOfThingsPage() {
    return(
        <div>
            <Header />
            {/* NAVIGATION LINKS */}
            <div className="py-5 lg:px-14 px-4 hidden md:flex items-center gap-2">
                <Link href={"/"} className="hover:text-blue-600">Home</Link>
                <div><MdOutlineKeyboardArrowRight size={20}/></div>
                <Link href={"/industries"} className="hover:text-blue-600">Industries</Link>
                <div><MdOutlineKeyboardArrowRight size={20}/></div>
                <div>IoT</div>
            </div>

            {/* Section 1 */}
            <div className="flex flex-col items-center justify-center md:h-svh h-full">
                <div className="py-10 lg:px-14 px-4 flex md:flex-nowrap flex-wrap-reverse">
                    <div className="md:w-2/4 w-full">
                        <h1 className="lg:text-7xl text-2xl md:pt-20 pt-6">Internet of Things</h1>
                        <p className="md:text-xl text-sm md:py-10 py-6">Revolutionizing industries through Custom IoT software & Application development services that promote seamless integration and limitless innovation.</p>
                    </div>
                    <div className="md:w-2/4 w-full flex items-center justify-center">
                        <Image src={"/internet-of-things.png"}  alt="internet-of-things" width={537} height={450} className="md:h-[450px] md:w-[450px] w-full"/>
                    </div>
                </div>
            </div>
            <Image src={"/internet-of-things-front-img.png"} alt="internet-of-things-front-img" height={500} width={1000} className="w-[100%]"/>

            {/* Section 2 */}
            <div className="lg:px-14 px-4 bg-blue-800 py-14 text-white md:text-lg text-sm">
                <h1 className="lg:text-4xl text-2xl md:w-[50%] font-bold">Why Choose Bluecorp as <br className="md:hidden"/> Your IoT<br className="hidden md:block"/> Development Company</h1>
                <div className="md:flex justify-evenly gap-14">
                    <div className="md:w-[50%] w-[100%]">
                        <p className="py-10">With each IoT development project, we, a globally-renowned IoT software development company, keep data governance and security best practices at the top of our minds in order to ensure the seamless functionality of your IoT app.</p>
                        <p className="">As a trusted IoT application development company, we have proven ourselves as the leading IoT application development company by providing user-centric applications for top brands. Being a premium IoT software development company, we focus on bridging the gap between the real and digital world and providing our clients with the most innovative and usable IoT environment.</p>
                    </div>
                    <div className="md:w-[50%] w-[100%]">
                    <ol>
                        <li className="py-10">Since connectivity is essential for IoT applications, we, being the top-ranked IoT app development company, utilize the right networking protocols, guaranteeing a trouble-free experience with high-quality connectivity.</li>
                        <li>
                        As a leader in IoT app development services, we include your input when working on your custom IoT project and adhere to UI/UX design best practices. Our proficient designers, skilled developers, and IoT solution providers combine their expertise to create highly interactive and user-friendly custom IoT consulting solutions.
                        </li>
                    </ol>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="lg:py-20 py-10">
                <div className="flex flex-col gap-10">
                    <h1 className=" lg:text-4xl text-2xl md:w-[50%] w-[100%] font-bold lg:px-14 px-4">What we do as a IoT company</h1>
                    {/* Part 1 */}
                    <div className="lg:px-14 px-4">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-14 py-10 md:px-16 px-4">
                            <div className="w-[50%]">
                                <Image src={"/identifying-the-issue.svg"} alt="" height={40} width={40} className="pt-6"/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Identifying the Issue</h1>
                            </div>
                            <div className="md:w-[50%] w-full text-white md:text-lg text-sm">
                                <p className="pt-6">Being one of the top-tiered IoT applications development companies, our first initiative is to identify the issue or need that the application is meant to solve. This entails comprehending the needs, problems, and obstacles that the user has and how IoT custom software development can address them.</p>
                                <p className="pt-6">As a leading IoT application development company, we prioritize a thorough understanding of your unique challenges. By closely collaborating with you, we delve deep into your specific needs, identifying the root problems that hinder your operations. We meticulously analyze your existing processes, infrastructure, and data to pinpoint areas where IoT solutions can optimize efficiency and drive innovation. This comprehensive assessment allows us to tailor our approach and develop customized IoT solutions that seamlessly integrate with your existing systems, delivering measurable results and a significant return on investment.</p>
                            </div>
                        </div>
                    </div>
                    {/* Part 2 */}
                    <div className="lg:px-14 px-4 ">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-14 py-10 md:px-16 px-4">
                            <div className="w-[50%]">
                                <Image src={"/defining-the-solution.svg"} alt="" height={50} width={50}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Defining the Solution</h1>
                            </div>
                            <div className="md:w-[50%] w-[100%] text-white md:text-lg text-sm">
                                <p className="pt-6">As a key component of our Internet of Things application development services, we focus on defining tailored solutions once a problem or need is identified. This involves selecting the appropriate sensors, devices, functionalities, and platforms required to build effective and innovative IoT applications.
                                </p>
                                <p className="pt-10">Once we&apos;ve pinpointed the specific problem or opportunity, our team of IoT experts meticulously crafts a tailored solution. This involves a comprehensive analysis of your existing infrastructure and business objectives, followed by a meticulous selection of the most suitable technologies and components.</p>
                            </div>
                        </div>
                    </div>
                    {/* Part 3 */}
                    <div className="lg:px-14 px-4">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-14 py-10 md:px-16 px-4">
                            <div className="w-[50%]">
                                <Image src={"/creating-a-design.svg"} alt="" height={35} width={35}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Creating the Design</h1>
                            </div>
                            <div className="md:w-[50%] w-[100%] text-white md:text-lg text-sm">
                                <p className="pt-6">As one of the most exceptional IoT product development companies, we ensure that our design team creates highly intuitive, clickable architectural prototypes that users can navigate. This stage also involves making choices regarding the app&apos;s hosting, data storage methods, and interoperability with other hardware.</p>
                                <p className="pt-10">Our team leverages cutting-edge IoT platforms and development frameworks to build robust and scalable applications. We consider factors like security, scalability, and ease of integration.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            {/* Section 4 */}
            <div className="flex items-center justify-center">
                <Image src={"/internet-of-things-diagram.png"} alt="supply-chain-management-img-2" height={1000} width={2000} className="md:w-[40%] w-full lg:px-14 px-4"/>
            </div>

            {/* Section 5 */}
            <div className="lg:px-14 px-4 py-20">
                <div className="md:w-[50%]">
                    <h1 className="lg:text-4xl text-2xl">Unleash the Full Potential of IoT with Our Agile Development Approach</h1>
                    <p className="py-10 lg:text-lg text-sm">Over the years, our Internet of Things developers have contributed to scaling up the efficiency and productivity of businesses across different industries. Our IoT software development services have benefited numerous industries with tailored solutions that enhance automation, improve data-driven decision-making, optimize resource management, and drive operational efficiency.</p>
                </div>

                <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col gap-5">
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-700 text-white">
                        <Image src={"/health-care.jpg"} alt="healtj-care-img" height={2000} width={800} className="h-[50%] md:w-[100%] rounded-t-xl w-full"/>
                        <div className="p-8">
                            <h1 className="text-2xl">HealthCare</h1>
                            <p className="py-4 text-sm md:text-base">As a leading healthcare app development company, we build IoT-backed healthcare solutions that improve patient care with remote monitoring systems, allowing patients to connect with caregivers through smart medical devices.</p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-700 text-white">
                        <Image src={"/finance-img.jpg"} alt="financce-img" height={350} width={700} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Finance</h1>
                            <p className="py-4 text-sm md:text-base">Our IoT-powered FinTech solutions help organizations automate processes with fraud detection sensors, data analytics platforms, and smart payment systems that reduce instances of breaches and boost customer experience.</p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-700 text-white">
                        <Image src={"/automotive-img.jpg"} alt="automotive-img" height={700} width={350} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Automotive</h1>
                            <p className="py-4 text-sm md:text-base">As industry leaders in automotive application development, we build custom IoT solutions for the automotive industry, thus enabling real-time monitoring of fleets, tracking traffic conditions, and managing route optimization systems.</p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-700 text-white">
                        <Image src={"/oil-gas-img.jpg"} alt="oil-gas-img" height={550} width={350} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Oil & Gas</h1>
                            <p className="py-4 text-sm md:text-base">As a reputable oil and gas development service provider, we excel at empowering the energy sector to monitor and optimize energy consumption effectively, manage consumption patterns, mitigate wastage, ensure sustainable operations, and achieve cost savings.</p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-700 text-white">
                        <Image src={"/gaming-img.jpg"} alt="gaming-img" height={700} width={450} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Gaming</h1>
                            <p className="py-4 text-sm md:text-base">As a leading provider of IoT gaming solutions, we create immersive and interactive gaming experiences that blur the lines between physical and digital worlds. Our IoT-enabled gaming devices and platforms leverage AR to deliver engaging gameplay and social interactions.</p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-700 text-white">
                        <Image src={"/manufacturing-img.jpg"} alt="manufacturing-img" height={700} width={400} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Manufacturing</h1>
                            <p className="py-4 text-sm md:text-base">Our scalable IoT-powered manufacturing solutions empower businesses with robust inventory tracking systems, predictive maintenance applications, and supply chain tools; helping organizations optimize their processes effectively, resulting in exceptional business outcomes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}