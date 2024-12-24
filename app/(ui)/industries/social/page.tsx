import React from "react";
import Header from "@/components/layout/header";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function SocialPage() {
    return(
        <div>
            <Header />
            
            {/* NAVIGATION LINKS */}
            <div className="py-5 lg:px-14 px-4 hidden md:flex items-center gap-2">
                <Link href={"/"} className="hover:text-blue-600">Home</Link>
                <div><MdOutlineKeyboardArrowRight size={20}/></div>
                <Link href={"/industries"} className="hover:text-blue-600">Industries</Link>
                <div><MdOutlineKeyboardArrowRight size={20}/></div>
                <div>Social</div>
            </div>

            {/* Section 1 */}
            <div className="flex flex-col items-center justify-center md:h-svh h-full">
                <div className="py-10 lg:px-14 px-4">
                    <h1 className="lg:text-7xl text-2xl text-center md:pt-20 pt-6">Social Media App <br /> Development Services</h1>
                    <p className="text-center md:text-xl text-sm md:py-10 py-6">In today&apos;s connected world, people yearn for meaningful interactions. They crave platforms that entertain, inform, and foster a sense of community. At Bluecorp Softwares, we help you build social media apps that deliver on these desires. Our expert development services transform your vision into a reality, creating engaging experiences that captivate users and build thriving online communities.</p>
                </div>
            </div>
            <Image src={"/social-front-img.png"} alt="social-front-img" height={1000} width={2000} className="w-[100%] "/>

            {/* Section 2 */}
            <div className="lg:px-14 px-4 bg-blue-800 py-14 text-white text-lg">
                <h1 className="lg:text-4xl text-2xl md:w-[50%] font-bold">Social Media App Development Challenges</h1>
                <div className="md:flex justify-evenly gap-14 md:text-lg text-sm">
                    <div className="md:w-[50%] w-[100%]">
                        <p className="py-10">The lack of supply chain visibility and accuracy is a major obstacle for U.S. retailers. Only 6% of companies have full visibility, while 37% experience significant inaccuracies, leading to potential disruptions, lost sales, and increased costs.</p>
                        <p className="">Consumer expectations for swift service are rising, while businesses contend with unpredictable demand and complex logistics. Manual data handling hinders the agility required to thrive in this challenging environment</p>
                    </div>
                    <div className="md:w-[50%] w-[100%]">
                        <p className="py-10">Developing a successful social media app presents several significant challenges:</p>
                    <ul className="">
                        <li>&#x2022; Standing Out in a Crowded Market</li>
                        <li>&#x2022; Building a Large and Engaged User Base</li>
                        <li>&#x2022; Ensuring Data Security and Privacy</li>
                        <li>&#x2022; Moderating Content and Maintaining a Healthy Community</li>
                        <li>&#x2022; Keeping Up with Rapid Technological Advancements</li>
                        <li>&#x2022; Monetization Strategies</li>
                        <li>&#x2022; Dealing with the Psychological Impact of Social Media</li>
                    </ul>
                    </div>
                </div>
            </div>

            {/* Section 3 */}
            <div className="lg:py-20 py-10 text-wrap">
                <div className="flex flex-col gap-10">
                    <h1 className=" lg:text-4xl text-2xl md:w-[50%] w-full font-bold lg:px-14 px-4">Benefits of social media app development from our experience</h1>
                    {/* Part 1 */}
                    <div className="lg:px-14 px-4">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-20 py-10 md:px-16 px-4">
                            <div className="md:w-[50%] w-full">
                                <Image src={"/monetization.svg"} alt="" height={35} width={35}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Social apps are easy to monetize</h1>
                            </div>
                            <div className="md:w-[50%] w-full text-white md:text-lg text-sm md:pt-0 pt-8">
                                <p>Monetizing an app demands creativity. Explore beyond in-app purchases and ads with subscriptions, freemium models, and sponsorships. Consider user-generated content platforms, licensing, and B2B solutions. Foster a strong community by engaging users and rewarding loyalty. Implement gamified rewards, personalized offers, and social sharing incentives. Adapt to market trends to build a sustainable and profitable app business.</p>
                            </div>
                        </div>
                    </div>
                    {/* Part 2 */}
                    <div className="lg:px-14 px-4">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-20 py-10 md:px-16 px-4">
                            <div className="md:w-[50%] w-full">
                                <Image src={"/popular.svg"} alt="" height={35} width={35}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Any concept may become extremely popular</h1>
                            </div>
                            <div className="md:w-[50%] w-[100%] text-white md:text-lg text-sm md:pt-0 pt-8">
                                <p> Any social media app concept has the potential for widespread popularity. Our experience underscores this. To maximize this potential, pinpoint your &quot;killer feature&quot;  the unique element that distinguishes your app. Is it innovative content formats (e.g., interactive videos, AI-powered voice messages), novel communication methods (e.g., live Q&A rooms, exclusive communities), or a groundbreaking discovery mechanism? This defining feature will be crucial for user engagement and building a loyal user base.</p>
                            </div>
                        </div>
                    </div>
                    {/* Part 3 */}
                    <div className="lg:px-14 px-4">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-20 py-10 md:px-16 px-4">
                            <div className="md:w-[50%] w-full">
                                <Image src={"/social.svg"} alt="" height={35} width={35}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Brands can go social</h1>
                            </div>
                            <div className="md:w-[50%] w-[100%] text-white md:text-lg text-sm md:pt-0 pt-8">
                                <p>Many brands strive to build communities across various social media platforms. However, a more focused approach, exemplified by Red Bull, is to create a dedicated app tailored to a specific niche. In Red Bull&apos;s case, they&apos;ve successfully built a community around athletes and their passions. This strategy fosters deeper engagement and loyalty within a targeted audience, demonstrating the power of a dedicated platform for community building.</p>
                            </div>
                        </div>
                    </div>
                    {/* Part 4 */}
                    <div className="lg:px-14 px-4">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-20 py-10 md:px-16 px-4">
                            <div className="md:w-[50%] w-full">
                                <Image src={"/targeting.svg"} alt="" height={35} width={35}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Targeting users are endless</h1>
                            </div>
                            <div className="md:w-[50%] w-[100%] text-white md:text-lg text-sm md:pt-0 pt-8">
                                <p>The &quot;Creative Catalyst&quot; app is designed to be a central hub for creatives. Key features include project boards for collaborative efforts, workshops to share skills, platforms to showcase portfolios, and engaging creative challenges. This platform strives to foster meaningful connections, inspire innovative ideas, and provide a supportive environment for artists, writers, musicians, and all other creative minds to flourish.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            {/* Section 4 */}
            <div className="lg:px-14 px-4 md:py-24 py-10 bg-blue-800 dark:bg-transparent flex flex-col justify-center gap-14 ">
                <h1 className="text-white md:text-5xl text-xl font-semibold">Features of social media apps</h1>
                <Image src={"/features-of-social-media-apps.png"} alt="features-of-social-media-apps" height={800} width={2400} className="w-[100%]"/>
            </div>

            {/* Section 5 */}
            <div className="lg:px-14 px-4 py-20">
                <div className="md:w-[50%]">
                    <h1 className="lg:text-4xl text-2xl">Experiment with your new concept</h1>
                    <p className="py-10 lg:text-lg text-sm">As a comprehensive social network app development firm, we offer a full suite of services for your convenience.</p>
                </div>
                <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col gap-5">
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800 text-white border">
                        <Image src={"/app-web-develop-process.png"} alt="app-web-develop-process" height={2000} width={800} className="h-[50%] md:w-[100%] rounded-t-xl w-full"/>
                        <div className="p-8">
                            <h1 className="text-2xl">Development, testing, and successful launch</h1>
                            <p className="py-4 md:text-lg text-sm">
                            Backend developers manage the website&apos;s core logic and data. Frontend developers translate design into interactive user interfaces. Throughout development, QA engineers rigorously test for flaws and vulnerabilities, ensuring a high-quality and secure product before release.
                            </p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800 text-white border">
                        <Image src={"/business-analysis.png"} alt="business-analysis" height={350} width={700} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Business Analysis</h1>
                            <p className="py-4 md:text-lg text-sm">
                            Business Analysis is crucial for achieving your desired outcome. We&apos;ll assist you in defining your business needs, objectives, and functional requirements. We&apos;ll focus on core features for your Minimum Viable Product, allowing you to test the market and gather valuable feedback for necessary improvements.
                            </p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800 text-white border">
                        <Image src={"/product-visual-concept.png"} alt="product-visual-concept" height={700} width={350} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Product Visual Concept</h1>
                            <p className="py-4 md:text-lg text-sm">
                            The visual concept of a product extends beyond mere aesthetics and user-friendliness. It embodies the core message and brand identity, answering the fundamental question: &quot;Who are we and how do we differentiate ourselves?&quot; within the product&apos;s design and presentation.
                            </p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800 text-white border">
                        <Image src={"/ui-ux.png"} alt="ui-ux" height={550} width={350} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">UX/UI</h1>
                            <p className="py-4 md:text-lg text-sm">
                            Given the anticipated user base of millions, we prioritize the design of social applications, ensuring a user-friendly and engaging experience for a large audience.
                            </p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800 text-white border">
                        <Image src={"/market-research.png"} alt="market-research" height={700} width={450} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Market Research</h1>
                            <p className="py-4 md:text-lg text-sm">
                            We can assist you in understanding your external business environment. Our services include defining your business model, conducting market and competitor analyses, and developing buyer personas to effectively target your desired audience.
                            </p>
                        </div>
                    </div>
                    <div className="h-[650px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800 text-white border">
                        <Image src={"/aso.png"} alt="aso" height={700} width={400} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">ASO</h1>
                            <p className="py-4 md:text-lg text-sm">
                            To significantly boost your app&apos;s visibility and downloads, consider incorporating app store optimization (ASO) services alongside our social media app development expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}