import React from "react";
import Header from "@/components/layout/header";
import Image from "next/image";

export default function IndustriesPage() {
    return(
        <div>
            <Header />
            {/* Section 1 */}
            <div className="py-10">
                <Image src={"/supply-chain-management-img-1.jpg"} alt="supply-chain-management-img-1" height={1000} width={2000} className="w-[100%]"/>
                <h1 className="text-7xl text-center pt-20">Supply Chain Management</h1>
                <p className="text-center text-xl py-10">Stand up to always emerging market challenges with supply chain software development for more resilient, transparent, and<br></br> easier-to-track business operations. We develop custom solutions with attention to every link in the chain<br></br> to address your business needs.</p>
                <button></button>
            </div>
            {/* Section 2 */}
            <div className="md:px-14 px-4 bg-blue-800 py-20 text-white text-lg">
                <h1 className="text-4xl w-[50%]">Supply Chain industry<br></br> challenges</h1>
                <div className="flex justify-evenly gap-14">
                    <div className="w-[50%]">
                        <p className="py-10">U.S. retail operations have a supply chain accuracy of only 63%. And only 6% of businesses report the total visibility of their supply chain.</p>
                        <p className="">Meanwhile, the market expects impeccable operation flow and fast response from businesses, which is impossible if loads of data are handled manually. All this under the conditions of unpredictable consumer spending and complex logistics processes 
                        barely recovered from COVID-19.</p>
                    </div>
                    <div className="w-[50%]">
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
            <div className="py-20">
                <div className="">
                    <h1 className="py-10 text-4xl w-[50%] font-bold px-14">What we do as a supply chain software company</h1>
                    {/* Part 1 */}
                    <div className="px-14">
                        <div className="flex gap-4 bg-blue-800 rounded-xl py-20 px-20">
                            <div className="w-[50%]">
                                <Image src={"/supply-chain-management-settings.svg"} alt="" height={35} width={35}/>
                                <h1 className="pt-10 text-white text-5xl">Custom<br></br> development and implementation</h1>
                            </div>
                            <div className="w-[50%] text-white text-lg">
                                <p>Tell us what kind of software you need, and in collaboration with you, we design and develop a programming solution to address your request. It can be <b>supply chain management software (SCMS), transportation management software (TMS), warehouse management software</b>, and more.</p>
                                <p className="pt-10">We acknowledge that an SCM software implementation can be a challenge. The software has to cover every branch of the company and coordinate them seamlessly with each other, which takes additional organizational realignment and engineering effort. Systems by Anadea are built with regard to this. We find the smartest architecture solutions to assure the durability and maintainability of your software.</p>
                            </div>
                        </div>
                    </div>
                    {/* Part 2 */}
                    <div className="px-14 py-10">
                        <div className="flex gap-4 bg-blue-800 rounded-xl py-20 px-20">
                            <div className="w-[50%]">
                                <Image src={"/supply-chain-management-technology-consulting.svg"} alt="" height={35} width={35}/>
                                <h1 className="pt-10 text-white text-5xl">Technology<br></br> Consulting</h1>
                            </div>
                            <div className="w-[50%] text-white text-lg">
                                <p> you are in two minds about the quality of your current software or simply looking to bring your business to the next level, opt for a technology consulting service from Anadea. We will thoroughly analyze the technological solutions you now employ and the tech stack that powers your company in order to find any possible flaws and then suggest strategies to fix them.
                                </p>
                                <p className="pt-10">In case you would like to benefit from custom SCM development upon consulting, such as the addition of new features or certain technological changes, we will offer a project proposal for these services.</p>
                            </div>
                        </div>
                    </div>
                    {/* Part 3 */}
                    <div className="px-14 py-10">
                        <div className="flex gap-4 bg-blue-800 rounded-xl py-20 px-20">
                            <div className="w-[50%]">
                                <Image src={"/supply-chain-management-settings.svg"} alt="" height={35} width={35}/>
                                <h1 className="pt-10 text-white text-5xl">Custom<br></br> development and implementation</h1>
                            </div>
                            <div className="w-[50%] text-white text-lg">
                                <p>Tell us what kind of software you need, and in collaboration with you, we design and develop a programming solution to address your request. It can be <b>supply chain management software (SCMS), transportation management software (TMS), warehouse management software</b>, and more.</p>
                                <p className="pt-10">We acknowledge that an SCM software implementation can be a challenge. The software has to cover every branch of the company and coordinate them seamlessly with each other, which takes additional organizational realignment and engineering effort. Systems by Anadea are built with regard to this. We find the smartest architecture solutions to assure the durability and maintainability of your software.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div>
                <Image src={"/supply-chain-management-img-2.svg"} alt="supply-chain-management-img-2" height={100} width={100} className="w-[100%] px-14"/>
            </div>
        </div>
    )
}