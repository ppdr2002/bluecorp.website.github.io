import React from "react";
import Header from "@/components/layout/header";
import Image from "next/image";

export default function IndustriesPage() {
    return(
        <div>
            <Header />
            <Image src={"/ecommerce-img.png"} alt="ecommerce-img" height={1000} width={1000} className="w-[100%]"/>
            {/* Section 1 */}
            <div className="py-10 lg:px-14 px-4">
                <h1 className="lg:text-7xl text-3xl md:pt-20 pt-6">Retail & <br className="lg:block hidden"/> Consumer Goods</h1>
                <p className="text-xl md:py-10 py-6 lg:w-[50%]">Customer expectations continue to evolve and today’s customers expect meaningful interactions wherever they shop or engage with a brand. That’s why Bluecorp’s retail experts work side by side with you to deliver seamless, scalable, customer-centric, omnichannel experiences.</p>
                <button></button>
            </div>
            {/* Section 2 */}
            <div className="lg:px-14 px-4 bg-blue-800 py-14 text-white text-lg">
                <h1 className="lg:text-4xl text-2xl md:w-[50%] font-bold">Types of Retail Software We Develop</h1>
                <div className="md:flex justify-evenly gap-14">
                    <div className="md:w-[50%] w-[100%]">
                        <p className="py-10">Step into the future of retail with our groundbreaking software services, meticulously crafted to elevate your business. As a reputed retail IT services and solutions provider, we design and develop retail software that address the multifaceted needs of modern retail, from enhancing operational efficiency to creating seamless customer experiences.</p>
                    </div>
                    <div className="md:w-[50%] w-[100%] py-10">
                    <ul className="">
                        <li>&#x2022; Retail Supply Chain Management Software</li>
                        <li>&#x2022; Retail Inventory Management Software</li>
                        <li>&#x2022; Retail Order Management Software</li>
                        <li>&#x2022; Retail CRM</li>
                        <li>&#x2022; Retail PoS System</li>
                    </ul>
                    </div>
                </div>
            </div>
            {/* Section 3 */}
            <div className="lg:py-20 py-10">
                <div className="flex flex-col gap-10">
                    <h1 className=" lg:text-4xl text-2xl md:w-[50%] w-[100%] font-bold lg:px-14 px-4">We Build Versatile Software Solutions for Different Retail Sectors</h1>
                    {/* Part 1 */}
                    <div className="lg:px-14 px-4 ">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-14 py-10 md:px-16 px-4">
                            <div className="w-[50%]">
                                <Image src={"/ecommerce.svg"} alt="" height={50} width={50}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">eCommerce<br/> Business</h1>
                            </div>
                            <div className="md:w-[50%] w-[100%] text-white md:text-lg">
                                <p className="">E-commerce has fundamentally reshaped the retail landscape, providing a seamless online shopping experience. Consumers can now browse through a vast selection of products, compare prices, and make purchases from the comfort of their homes. Businesses, in turn, can reach a global audience, expand their market reach, and reduce operational costs.
                                </p>
                                <p className="pt-6">E-commerce has fundamentally reshaped the retail landscape, providing a seamless online shopping experience. Consumers can now browse through a vast selection of products, compare prices, and make purchases from the comfort of their homes. Businesses, in turn, can reach a global audience, expand their market reach, and reduce operational costs.</p>
                                <p className="pt-6">Our experts design scalable for eCommerce businesses to optimize online sales and customer engagement.</p>
                            </div>
                        </div>
                    </div>
                    {/* Part 2 */}
                    <div className="lg:px-14 px-4 ">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-14 py-10 md:px-16 px-4">
                            <div className="w-[50%]">
                                <Image src={"/boutique.svg"} alt="" height={50} width={50}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Boutiques</h1>
                            </div>
                            <div className="md:w-[50%] w-[100%] text-white md:text-lg">
                                <p className="">Our team of skilled retail software developers crafts bespoke solutions designed to elevate your boutique's operations. From inventory management and point-of-sale systems to customer relationship management and online store integration, we provide the tools you need to streamline processes, enhance customer experiences, and drive sales. Our solutions are tailored to your unique needs, ensuring optimal efficiency and growth for your business.</p>
                                <p className="pt-6">Our expert team specializes in developing innovative retail software solutions that are specifically designed to meet the unique needs of boutique businesses. We understand the intricacies of running a boutique, from managing inventory and tracking sales to providing exceptional customer service. Our software empowers you to streamline operations, enhance customer experiences, and drive business growth.</p>
                            </div>
                        </div>
                    </div>
                    {/* Part 3 */}
                    <div className="lg:px-14 px-4">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-14 py-10 md:px-16 px-4">
                            <div className="w-[50%]">
                                <Image src={"/grocery-stores.svg"} alt="" height={40} width={40}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Grocery Stores</h1>
                            </div>
                            <div className="md:w-[50%] w-[100%] text-white md:text-lg">
                                <p>Our team of skilled software developers creates tailored solutions to optimize your grocery store's operations. From inventory management and point-of-sale systems to supply chain optimization and customer loyalty programs, our software empowers you to streamline processes, reduce costs, and enhance the shopping experience. With our efficient solutions, you can focus on what matters most: providing quality products and exceptional customer service.</p>
                                <p className="pt-6">Our team of expert software developers is dedicated to creating efficient and user-friendly solutions that transform your grocery store. Our software is designed to streamline operations, improve inventory management, enhance customer experiences, and boost your bottom line.</p>
                                <p className="pt-6">We accurately track stock levels, expiration dates, and supplier information to minimize waste and optimize ordering.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Part 4 */}
                    <div className="lg:px-14 px-4">
                        <div className="md:flex gap-4 bg-blue-800 rounded-xl md:py-14 py-10 md:px-16 px-4">
                            <div className="w-[50%]">
                                <Image src={"/grocery-stores.svg"} alt="" height={40} width={40}/>
                                <h1 className="pt-10 text-white lg:text-5xl text-2xl">Manufacturers</h1>
                            </div>
                            <div className="md:w-[50%] w-[100%] text-white md:text-lg">
                                <p>We provide tailored solutions to streamline your manufacturing operations. From production planning and scheduling to quality control and inventory management, our software empowers you to enhance efficiency, reduce costs, and improve product quality. By leveraging our advanced technology, you can achieve greater productivity and gain a competitive edge in the market.</p>
                                <p className="pt-6">We efficiently plan and schedule production runs to optimize resource utilization and meet delivery deadlines.Implement robust quality control measures to ensure product consistency and compliance with industry standards.Accurately track inventory levels, monitor stock movements, and minimize waste.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            {/* Section 4 */}
            <div>
                <Image src={"/retail-diagram.png"} alt="supply-chain-management-img-2" height={700} width={400} className="w-[100%] lg:px-14 px-4"/>
            </div>

            {/* Section 5 */}
            <div className="lg:px-14 px-4 py-20">
                <div className="md:w-[50%]">
                    <h1 className="lg:text-4xl md:text-2xl">Advanced Technologies Redefining Retail Software Development</h1>
                    <p className="py-10 lg:text-lg">Our custom retail software development innovations leverage the latest advancements to empower retailers to optimize operations, enhance customer experiences, and drive business growth. By integrating innovative technologies, we ensure your retail business remains competitive and adapts to the evolving digital landscape, thus achieving unparalleled success.</p>
                </div>
                <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col gap-5">
                    <div className="h-[600px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800">
                        <Image src={"/artificial-intelligence-img.jpg"} alt="artificial-intelligence-img" height={700} width={700} className="h-[50%] md:w-[100%] rounded-t-xl w-full"/>
                        <div className="p-8">
                            <h1 className="text-2xl">Artificial Inttelligence</h1>
                            <p className="py-4">As a leading AI and ML development compant, we integrate machine learning algorithms and advanced speech and image recognition technologies into your retail software to automate support, personalize shopping experiences, and forecast consumer behavior.</p>
                        </div>
                    </div>
                    <div className="h-[600px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800">
                        <Image src={"/block-chain-img.jpg"} alt="block-chain-img" height={350} width={700} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Blockchain</h1>
                            <p className="py-4">Leveraging blockchain technology, we secure transactions,enhance supply chain transparency, and enable seamless loyalty programs with decentralized, tamper-proof records, fostering trust and mitigating fraud in retail operations.</p>
                        </div>
                    </div>
                    <div className="h-[600px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800">
                        <Image src={"/cloud-img.jpg"} alt="cloud-img" height={650} width={300} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Cloud</h1>
                            <p className="py-4">As leaders in retail software development services, we build intuitive cloud solutions for the retail industry that facilitate seamless data integration across platforms, support real-time analytics, and enable remote access to critical business applications, ensuring flexibility and operational efficiency.</p>
                        </div>
                    </div>
                    <div className="h-[600px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800">
                        <Image src={"/retail-analytics.jpg"} alt="retail-analytics" height={550} width={350} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Retail Analytics</h1>
                            <p className="py-4">Through robust data annalytics capabilitites, we optimize retail operations by analyzing extensive datasets to improve inventory management, pricing strategies, and marketing initiatives, maximizing operational efficiency and revenue potential.</p>
                        </div>
                    </div>
                    <div className="h-[600px] lg:w-[450px] w-full border-spacing-2 rounded-xl bg-blue-800">
                        <Image src={"/retail-data-visualisation-img.jpg"} alt="supply-chain-management-img-3" height={700} width={450} className="h-[50%] w-[100%] rounded-t-xl"/>
                        <div className="px-8 py-8">
                            <h1 className="text-2xl">Retail Data Visualization</h1>
                            <p className="py-4">By employing cutting-edge data visualization techniques, we turn complex retail data into clear, interactive visuals. This approach helps retailers easily interpret key metrics, monitor performance trends, and make informed decisions.</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}