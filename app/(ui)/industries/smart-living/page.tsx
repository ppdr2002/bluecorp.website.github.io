import React from "react";
import Header from "@/components/layout/header";
import Image from "next/image";

export default function SmartLivingPage() {
    return(
        <div>
            <Header />
            {/* Section 1 */}
            <div className="py-10 lg:px-14 px-4 flex md:flex-nowrap flex-wrap">
                <div className="md:w-2/4 w-full flex items-center justify-center">
                    <Image src={"/smart-living.png"}  alt="smart-living" width={607} height={450} className="h-fit w-[500px]"/>
                </div>
                <div className="md:w-2/4 w-full flex flex-col items-end">
                    <h1 className="lg:text-7xl text-3xl md:pt-20 pt-6">Smart Living</h1>
                    <p className="text-xl md:py-10 py-6 lg:w-[90%] text-end">If you are looking for a reliable and innovative partner to develop your smart living solution, Bluecorp is an excellent choice.Our expertise, user-centric approach, and commitment to excellence make them a leader in the smart living development space.</p>
                </div>                
            </div>
            <Image src={"/smart-living-front-img.png"} alt="smart-living-front-img" height={1000} width={2000} className="w-[100%]"/>

            {/* Section 2 */}
            <div className="lg:px-14 px-4 bg-blue-800 py-14 text-white text-lg">
                <h1 className="lg:text-4xl text-2xl md:w-[50%] font-bold">Challenges in the Smart<br/> Home Revolution</h1>
                <div className="md:flex justify-evenly gap-14">
                    <div className="md:w-[50%] w-[100%]">
                        <p className="py-10">Despite the promise of convenience and efficiency, smart living presents several challenges. Data privacy and security are major concerns, with the increasing number of connected devices collecting personal data. Interoperability between different smart devices and platforms remains a significant hurdle, hindering seamless integration and creating a fragmented user experience.</p>
                        <p className="">Cybersecurity threats are a growing concern, as hackers can exploit vulnerabilities in smart home networks to gain access to personal information and even control devices. Additionally, the high cost of adopting smart home technology can be a barrier for many, limiting its accessibility to a wider audience. Finally, the potential for &quot;smart home fatigue&quot; exists, as users may feel overwhelmed by the complexity of managing and maintaining a large number of connected devices.</p>
                    </div>
                    <div className="md:w-[50%] w-[100%]">
                    <p className="py-10">Smart Living Software developed by professionals can help address these and many other concerns:</p>
                    <ul className="">
                        <li>&#x2022; Enhanced Comfort and Convenience</li>
                        <li>&#x2022; Increased Energy Efficiency and Cost Savings</li>
                        <li>&#x2022; Improved Security and Safety</li>
                        <li>&#x2022; Enhanced Health and Wellness</li>
                        <li>&#x2022; Increased Home Value</li>
                    </ul>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="lg:py-20 py-10">
                <div className="flex flex-col gap-10">
                    <h1 className=" lg:text-4xl text-2xl md:w-[50%] w-[100%] font-bold lg:px-14 px-4">What we do as a Smart Living Software Company</h1>
                    {/* Part 1 */}
                    <div className="lg:px-14 px-4">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-14 py-10 md:px-16 px-4">
                            <div className="w-[50%]">
                                <Image src={"/home-automation.svg"} alt="" height={50} width={50}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Home Automation</h1>
                            </div>
                            <div className="md:w-[50%] w-full text-white md:text-lg">
                                <p className="">Experience the future of living with our cutting-edge home automation solutions. Seamlessly control your lights, thermostats, security systems, and more from anywhere in the world with your smartphone or voice commands. Enjoy unparalleled convenience, enhanced security, and a touch of luxury as you transform your home into a smart and intuitive living space.</p>
                                <p className="pt-6">Enhance your home security and enjoy peace of mind with our comprehensive home automation solutions. Integrate smart locks, security cameras, and motion sensors for enhanced protection against intruders. Receive instant alerts and remotely monitor your property, ensuring the safety and well-being of your loved ones, even when you&apos;re away.</p>
                            </div>
                        </div>
                    </div>
                    {/* Part 2 */}
                    <div className="lg:px-14 px-4 ">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-14 py-10 md:px-16 px-4">
                            <div className="w-[50%]">
                                <Image src={"/energy-management.svg"} alt="" height={50} width={50}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Energy Management</h1>
                            </div>
                            <div className="md:w-[50%] w-[100%] text-white md:text-lg">
                                <p className="">Take control of your energy costs with our expert energy management solutions. We analyze your energy consumption patterns, identify areas for improvement, and implement strategies to optimize energy efficiency. Reduce your energy bills significantly, improve your bottom line, and contribute to a more sustainable future.
                                </p>
                                <p className="pt-10">Join the sustainability movement with our comprehensive energy management services. We help you reduce your environmental impact by optimizing energy usage, minimizing waste, and implementing renewable energy solutions. Achieve your sustainability goals while improving your energy efficiency and reducing operating costs</p>
                            </div>
                        </div>
                    </div>
                    {/* Part 3 */}
                    <div className="lg:px-14 px-4">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-14 py-10 md:px-16 px-4">
                            <div className="w-[50%]">
                                <Image src={"/home-accessibillity.svg"} alt="" height={50} width={50}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Home Accessibility</h1>
                            </div>
                            <div className="md:w-[50%] w-[100%] text-white md:text-lg">
                                <p>We believe that everyone deserves to feel comfortable and safe in their own home. That&apos;s why we specialize in creating accessible living environments for individuals of all abilities. Whether you&apos;re looking to improve mobility, enhance safety features, or simply make your home more user-friendly, we can help.</p> 
                                <p className="py-6"> Our team of experienced professionals can assess your needs, recommend appropriate solutions, and implement a wide range of accessibility modifications, from installing ramps and widening doorways to creating customized bathroom solutions and optimizing kitchen layouts. We are committed to creating inclusive and accessible homes that promote independence, dignity, and quality of life.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            {/* Section 4 */}
            <div className="flex items-center justify-center">
                <Image src={"/smart-living-diagram.png"} alt="supply-chain-management-img-2" height={1000} width={2000} className="w-[70%] lg:px-14 px-4"/>
            </div>

            {/* Section 5 */}
            <div className="lg:px-14 px-4 py-20">
                <div className="md:w-[50%]">
                    <h1 className="lg:text-4xl md:text-2xl">Our Smart Living Solutions </h1>
                    <p className="py-10 lg:text-lg">Whether you dream of a fully automated home or need help with a specific smart device, we have the perfect solution for you.</p>
                </div>
                <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col gap-5">
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800 text-white">
                        <Image src={"/remote-control-img.jpg"} alt="remote-control-img" height={2000} width={800} className="h-[50%] md:w-[100%] rounded-t-xl w-full"/>
                        <div className="p-8">
                            <h1 className="text-2xl">Remote Control</h1>
                            <p className="py-6">Control lights, thermostats, appliances, and security systems remotely through a smartphone app or voice commands and Control your home&apos;s environment and devices remotely from anywhere in the world with your smartphone or voice commands.</p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800 text-white">
                        <Image src={"/renewable-energy-img.jpg"} alt="renewable-energy-img" height={350} width={700} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Renewable Energy Solution</h1>
                            <p className="py-6">Explore and implement renewable energy options, such as solar panels and wind turbines.Harness the power of the sun and wind with our expert guidance on installing and maintaining renewable energy systems for your home.
                            </p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800 text-white">
                        <Image src={"/home-survillence-img.jpg"} alt="home-survillence-img" height={700} width={450} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Home Surveillance</h1>
                            <p className="py-6">Provide remote access to live and recorded video feeds from home security cameras.Enhance your peace of mind with a comprehensive home surveillance system that deters intruders and provides valuable evidence in case of emergencies.</p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800 text-white">
                        <Image src={"/access-control-img.jpg"} alt="access-control-img" height={550} width={350} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Access Control</h1>
                            <p className="py-6">Implement smart locks, keyless entry systems, and other access control solutions.Enhance your home security and convenience with keyless entry systems, smart locks, and video doorbells that allow you to control access to your property remotely.</p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800 text-white">
                        <Image src={"/smart-home-entertainment-img.jpg"} alt="smart-home-entertainment-img" height={700} width={450} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Smart Home Entertainment</h1>
                            <p className="py-6">Integrate smart TVs, sound systems, and streaming services for a seamless entertainment experience.Transform your living room into a personalized entertainment hub with seamless integration of smart TVs, streaming devices, and surround sound systems.</p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800 text-white">
                        <Image src={"/emergency-response-service-img.jpg"} alt="emergency-response-service-img" height={700} width={400} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Emergency Response Services</h1>
                            <p className="py-6">Offer emergency response services, such as fire and carbon monoxide monitoring and alerts.Receive instant alerts and notifications in case of fire, carbon monoxide, or other emergencies, allowing you to take immediate action and ensure the safety of your family.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}