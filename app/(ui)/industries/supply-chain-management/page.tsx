import React from "react";
import Header from "@/components/layout/header";
import Image from "next/image";
import Link from "next/link";

export default function IndustriesPage() {
    return(
        <div>
            <Header />
            {/* NAVIGATION LINKS */}
            <div className="py-5 lg:px-14 px-4 flex items-center gap-2">
                <Link href={"/"} className="hover:text-blue-600">Home</Link>
                <div><Image src={"/right-arrow.svg"} alt="right-arrow" width={18} height={18} className="h-5 w-5"/></div>
                <Link href={"/industries"} className="hover:text-blue-600">Industries</Link>
                <div><Image src={"/right-arrow.svg"} alt="right-arrow" width={18} height={18} className="h-5 w-5"/></div>
                <div className="hover:text-blue-600">Supply Chain Management</div>
            </div>
            
            {/* Section 1 */}
            <div className="py-10 lg:px-14 px-4">
                <h1 className="lg:text-7xl text-3xl text-center md:pt-20 pt-6">Supply Chain Management</h1>
                <p className="text-center text-xl md:py-10 py-6">Stand up to always emerging market challenges with supply chain software development for more resilient, transparent, and<br></br> easier-to-track business operations. We develop custom solutions with attention to every link in the chain<br></br> to address your business needs.</p>
                <button></button>
            </div>
            <Image src={"/supply-chain-management-header-img.png"} alt="supply-chain-management-img-1" height={1000} width={2000} className="w-[100%]"/>

            {/* Section 2 */}
            <div className="lg:px-14 px-4 bg-blue-800 py-14 text-white text-lg">
                <h1 className="lg:text-4xl text-2xl md:w-[50%] font-bold">Supply Chain industry<br></br> challenges</h1>
                <div className="md:flex justify-evenly gap-14">
                    <div className="md:w-[50%] w-[100%]">
                        <p className="py-10">U.S. retail operations have a supply chain accuracy of only 63%. And only 6% of businesses report the total visibility of their supply chain.</p>
                        <p className="">Meanwhile, the market expects impeccable operation flow and fast response from businesses, which is impossible if loads of data are handled manually. All this under the conditions of unpredictable consumer spending and complex logistics processes 
                        barely recovered from COVID-19.</p>
                    </div>
                    <div className="md:w-[50%] w-[100%]">
                    <p className="py-10">Supply chain software developed by professionals can help address these and many other concerns. Build your own SCM software to:</p>
                    <ul className="">
                        <li>&#x2022; Minimize transportation expenses</li>
                        <li>&#x2022; Keep up with the needs of the market</li>
                        <li>&#x2022; Source dependable, constant transport capacity</li>
                        <li>&#x2022; Meet the most recent technological demands</li>
                        <li>&#x2022; Pick up and deliver orders on time</li>
                    </ul>
                    </div>
                </div>
            </div>
            {/* Section 3 */}
            <div className="lg:py-20 py-10">
                <div className="flex flex-col gap-10">
                    <h1 className=" lg:text-4xl text-2xl md:w-[50%] w-[100%] font-bold lg:px-14 px-4">What we do as a supply chain software company</h1>
                    {/* Part 1 */}
                    <div className="lg:px-14 px-4">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-20 py-10 md:px-16 px-4">
                            <div className="w-[50%]">
                                <Image src={"/supply-chain-management-settings.svg"} alt="" height={35} width={35}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Custom<br></br> development and implementation</h1>
                            </div>
                            <div className="md:w-[50%] w-full text-white md:text-lg">
                                <p className="pt-6">Tell us what kind of software you need, and in collaboration with you, we design and develop a programming solution to address your request. It can be <b>supply chain management software (SCMS), transportation management software (TMS), warehouse management software</b>, and more.</p>
                                <p className="pt-6">We acknowledge that an SCM software implementation can be a challenge. The software has to cover every branch of the company and coordinate them seamlessly with each other, which takes additional organizational realignment and engineering effort. Systems by Anadea are built with regard to this. We find the smartest architecture solutions to assure the durability and maintainability of your software.</p>
                            </div>
                        </div>
                    </div>
                    {/* Part 2 */}
                    <div className="lg:px-14 px-4 ">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-20 py-10 md:px-16 px-4">
                            <div className="w-[50%]">
                                <Image src={"/supply-chain-management-technology-consulting.svg"} alt="" height={35} width={35}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Technology<br></br> Consulting</h1>
                            </div>
                            <div className="md:w-[50%] w-[100%] text-white md:text-lg">
                                <p className="pt-6"> you are in two minds about the quality of your current software or simply looking to bring your business to the next level, opt for a <b>technology consulting service</b> from Bluecorp. We will thoroughly analyze the technological solutions you now employ and the tech stack that powers your company in order to find any possible flaws and then suggest strategies to fix them.
                                </p>
                                <p className="pt-10">In case you would like to benefit from custom SCM development upon consulting, such as the addition of new features or certain technological changes, we will offer a project proposal for these services.</p>
                            </div>
                        </div>
                    </div>
                    {/* Part 3 */}
                    <div className="lg:px-14 px-4">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-20 py-10 md:px-16 px-4">
                            <div className="w-[50%]">
                                <Image src={"/supply-chain-management-settings.svg"} alt="" height={35} width={35}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Legacy software<br></br> modernization</h1>
                            </div>
                            <div className="md:w-[50%] w-[100%] text-white md:text-lg">
                                <p>It appears that your existing software may require an upgrade as it is not meeting modern requirements. Industry experts suggest that any software that is over a decade old, given the pace of innovation, is considered legacy. If you are experiencing issues with software support such as unresolved security breaches or unavailability of developers, your software is likely legacy. Similarly, if developers propose temporary fixes due to concerns about impairing other parts of the software, it may be considered legacy.</p>
                                <p className="pt-6">As software is a critical source of data for businesses, such shortcomings can have a significant impact on operations. A single link in the chain can affect the entire system, making unstable legacy systems a significant risk factor.</p>
                                <p className="pt-6">If you're facing any of these issues, feel free to contact us, and we'll explore ways to improve your software.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            {/* Section 4 */}
            <div>
                <Image src={"/supply-chain-management-img-2.svg"} alt="supply-chain-management-img-2" height={100} width={100} className="w-[100%] lg:px-14 px-4"/>
            </div>

            {/* Section 5 */}
            <div className="lg:px-14 px-4 py-20">
                <div className="md:w-[50%]">
                    <h1 className="lg:text-4xl md:text-2xl">Custom Supply Chain<br></br> solutions we deliver </h1>
                    <p className="py-10 lg:text-lg">Whether you need an all-in-one system to cover every aspect of<br></br> supply chain management or a tool to perform a specific task,<br></br> there is a solution for you.</p>
                </div>
                <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col gap-5">
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800">
                        <Image src={"/demand-management-software.png"} alt="demand-management-software-img" height={2000} width={800} className="h-[50%] md:w-[100%] rounded-t-xl w-full"/>
                        <div className="p-8">
                            <h1 className="text-2xl">Demand Management software</h1>
                            <ul className="py-4">
                                <li>&#x2022; Demand forecasting</li>
                                <li>&#x2022; Client analytics</li>
                                <li>&#x2022; Stock optimization</li>
                                <li>&#x2022; Planning for sales and operations</li>
                                <li>&#x2022; Tracking of prices and promotions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800">
                        <Image src={"/warehouse-management-software.jpg"} alt="supply-chain-management-img-3" height={350} width={700} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Warehouse Management software</h1>
                            <ul className="py-4">
                                <li>&#x2022; Warehouse operations automation</li>
                                <li>&#x2022; Inventory tracking across warehouses</li>
                                <li>&#x2022; Tracking using barcodes, serial Nos or RFIDs</li>
                                <li>&#x2022; Asset administration</li>
                                <li>&#x2022; Forecasting of future inventories and prices</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800">
                        <Image src={"/logistic-management.jpg"} alt="supply-chain-management-img-3" height={700} width={350} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Logistics Management Tools</h1>
                            <ul className="py-4">
                                <li>&#x2022; Fleet management</li>
                                <li>&#x2022; Packaging management</li>
                                <li>&#x2022; Coordinating deliveries across logistic channels</li>
                                <li>&#x2022; Route improvement</li>
                                <li>&#x2022; Rate evaluation</li>
                                <li>&#x2022; Labor estimation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800">
                        <Image src={"/procurement-management-tools.jpg"} alt="supply-chain-management-img-3" height={550} width={350} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Procurement Management Tools</h1>
                            <ul className="py-4">
                                <li>&#x2022; Purchasing raw materials
                                </li>
                                <li>&#x2022; Lot sizing and replenishment planning</li>
                                <li>&#x2022; Coordinating deliveries across logistic channels</li>
                                <li>&#x2022;Supply-side market analysis </li>
                                <li>&#x2022; Cost evaluation</li>
                                <li>&#x2022; Spending tracking</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800">
                        <Image src={"/supply-chain-planning.jpg"} alt="supply-chain-management-img-3" height={700} width={450} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Supply Chain Planning Tools</h1>
                            <ul className="py-4">
                                <li>&#x2022; Creating custom alerts</li>
                                <li>&#x2022; Scenario-based forecasting</li>
                                <li>&#x2022; Resource optimization</li>
                                <li>&#x2022; Supply forecasting</li>
                                <li>&#x2022; Optimization of labor and materials</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800">
                        <Image src={"/work-management-system.jpg"} alt="supply-chain-management-img-3" height={700} width={400} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Order Management System</h1>
                            <ul className="py-4">
                                <li>&#x2022; Improved order fulfillment</li>
                                <li>&#x2022; Return and refund management</li>
                                <li>&#x2022; Coordinating deliveries across logistic channels</li>
                                <li>&#x2022; Creating purchase orders</li>
                                <li>&#x2022; Delivery scheduling</li>
                                <li>&#x2022; Creating product prices and configurations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}