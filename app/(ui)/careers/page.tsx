import React from "react";
import Header from '@/components/layout/header';
import Image from "next/image";

export default function CareersPage() {
    return (
        <div>
            <Header />
            {/*Section 1*/}
            <div>
                <div>
                    <Image src={"/careers-img-1.jpg"} alt="careers-img-1" height={5200} width={3400}/>
                </div>
            </div>
            {/* Section 2 */}
            <div className="py-20 lg:px-14 px-4">
                <div>
                    <h1 className="lg:text-6xl text-4xl font-thin">The Bluecorp difference</h1>
                    <p className="text-lg mt-4">At Bluecorp, we&apos;re fiercely human. We bring our heads and hearts to everything we do. Together, we shape the future by making dreams come true for our customers and their customers around the world. </p>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-14 gap-10 mt-14 py-8">
                        <div className="flex flex-col gap-4">
                            <Image src={"/careers-section-2-icon.svg"} alt="careers-section-2-icon" height={100} width={100} className="w-24 mb-6"/>
                            <h1 className="text-xl font-semibold">People-first culture</h1>
                            <p className="text-xs md:text-base pr-14">Celebrate authenticity every day, as you engage, connect, and make an impact in your local team and community.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image src={"/careers-section-2-heart-icon.svg"} alt="careers-section-2-icon" height={100} width={100} className="w-24 mb-6"/>
                            <h1 className="text-xl font-semibold">Meaningful work</h1>
                            <p className="text-xs md:text-base pr-14">Love what you do. Pursue your passion with multiple career paths across geographies.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image src={"/careers-section-2-bulb-icon.svg"} alt="careers-section-2-icon" height={100} width={100} className="w-24 mb-6"/>
                            <h1 className="text-xl font-semibold">Personal growth</h1>
                            <p className="text-xs md:text-base pr-14">Stay curious and dream big. Customize your development with flexible, innovative, options for learning, coaching, and mentoring.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image src={"/careers-section-2-money-icon.svg"} alt="careers-section-2-icon" height={100} width={100} className="w-24 mb-6"/>
                            <h1 className="text-xl font-semibold">Performance-based pay</h1>
                            <p className="text-xs md:text-base pr-14">Earn competitive and equitable compensation that rewards your performance and allows you to share in the company&apos;s long-term success.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image src={"/careers-section-2-eye-icon.svg"} alt="careers-section-2-icon" height={100} width={100} className="w-24 mb-6"/>
                            <h1 className="text-xl font-semibold">Health and well-being focus</h1>
                            <p className="text-xs md:text-base pr-14">Thrive holistically with robust, individualized benefits that support your emotional, mental, financial, physical, and social well-being.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}