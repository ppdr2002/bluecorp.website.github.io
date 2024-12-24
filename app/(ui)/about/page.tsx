"use client";
import Header from "@/components/layout/header";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { PiDotDuotone } from "react-icons/pi";

export default function AboutPage() {
    const router = useRouter();

    return (
        <div>
            <Header />

            {/* SECTION 1 */}
            <div className="md:px-14 px-4 text-center mt-10 flex flex-col justify-center items-center gap-6 h-svh">
                <h1 className="md:text-5xl text-2xl">About Us</h1>
                <p className="lg:px-80  px-4 text-wrap">At Bluecorp Softwares Pvt. Ltd. , we are passionate about crafting innovative and user-centric digital experiences. We are a leading service provider specializing in web application development and Android app development, dedicated to delivering high-quality, robust, and scalable solutions that meet the unique needs of our clients.</p>
            </div>

            {/* SECTION 2 */}
            <div className="md:px-14 px-4">
                <h1 className="md:text-5xl text-2xl">Our Values</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-20 md:gap-12 gap-6 my-10 md:my-20">
                    <div className="flex flex-col md:gap-4 gap-2">
                        <Image src="/about-us-img/innovation.svg" alt="Innovation" width={100} height={100} className="md:w-24 w-12"/>
                        <h1 className="md:text-2xl text-xs md:mt-8 mt-3">Innovation</h1>
                        <p className="md:text-sm text-[6px]">We embrace new technologies and explore creative solutions to address complex challenges.</p>
                    </div>
                    <div className="flex flex-col md:gap-4 gap-2">
                        <Image src="/about-us-img/quality.svg" alt="Quality" width={100} height={100} className="md:w-24 w-12"/>
                        <h1 className="md:text-2xl text-xs md:mt-8 mt-3">Quality</h1>
                        <p className="md:text-sm text-[6px]">We prioritize delivering exceptional quality in every aspect of our work, from design and development to testing and deployment.</p>
                    </div>
                    <div className="flex flex-col md:gap-4 gap-2">
                        <Image src="/about-us-img/satisfaction.svg" alt="Client Satisfaction" width={100} height={100} className="md:w-24 w-12"/>
                        <h1 className="md:text-2xl text-xs md:mt-8 mt-3">Client Satisfaction</h1>
                        <p className="md:text-sm text-[6px]">We are dedicated to understanding our clients' unique needs and exceeding their expectations</p>
                    </div>
                    <div className="flex flex-col md:gap-4 gap-2">
                        <Image src="/about-us-img/transparency.svg" alt="Transparency" width={100} height={100} className="md:w-24 w-12"/>
                        <h1 className="md:text-2xl text-xs md:mt-8 mt-3">Transparency</h1>
                        <p className="md:text-sm text-[6px]">We maintain open and honest communication with our clients throughout the entire project lifecycle</p>
                    </div>
                    <div className="flex flex-col md:gap-4 gap-2">
                        <Image src="/about-us-img/collaboration.svg" alt="Collaboration" width={100} height={100} className="md:w-24 w-12"/>
                        <h1 className="md:text-2xl text-xs md:mt-8 mt-3">Collaboration</h1>
                        <p className="md:text-sm text-[6px]">We foster a collaborative environment with our clients and team members to ensure successful project outcomes.</p>
                    </div>
                </div>
                
            </div>

            {/* SECTION 3 */}
            <div className="md:px-14 px-4 flex flex-col gap-6">
                <h1 className="md:text-5xl text-2xl">Why Choose Bluecorp?</h1>
                <p className="text-wrap text-base flex gap-2 items-center"><PiDotDuotone /><b className="text-lg">Experienced Team :</b> Our team comprises highly skilled and experienced developers, designers, and project managers.</p>
                <p className="text-wrap text-base flex gap-2 items-center"><PiDotDuotone /><b className="text-lg">Agile Methodology :</b> We follow agile development principles to ensure flexibility, adaptability, and client involvement.</p>
                <p className="text-wrap text-base flex gap-2 items-center"><PiDotDuotone /><b className="text-lg">Cutting-edge Technology :</b> We utilize the latest technologies and tools to deliver cutting-edge solutions.</p>
                <p className="text-wrap text-base flex gap-2 items-center"><PiDotDuotone /><b className="text-lg">Competitive Pricing :</b> We offer competitive pricing without compromising on quality.</p>
                <p className="text-wrap text-base flex gap-2 items-center"><PiDotDuotone /><b className="text-lg">Customer-centric Approach :</b> We prioritize client satisfaction and build long-term relationships.</p>
            </div>

            {/* SECTION 4 */}
            <div className="md:px-14 px-4 md:my-20 my-10 flex w-full justify-center items-center">
                <div className="border-2 p-8 rounded-lg border-blue-800 flex flex-col gap-6 items-center justify-center w-fit">
                    <p className="text-center text-wrap">Join us in transforming your business with innovative technology solutions. Contact us today for a free consultation.</p>
                    <button  type="button" onClick={() => router.push('/contact')} className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-4 py-2 rounded-lg ">Contact us</button>
                </div>
            </div>
        </div>
    );
}