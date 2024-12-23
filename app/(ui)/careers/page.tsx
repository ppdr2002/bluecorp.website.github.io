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
                    <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-10">
                        <div className="pt-20">
                            <Image src={"/careers-section-2-icon.svg"} alt="careers-section-2-icon" height={100} width={100} />
                            <h1 className="mt-4 text-xl">People-first culture</h1>
                            <p className="mt-2">Celebrate authenticity every day, as you engage, connect, and make an impact in your local team and community.</p>
                        </div>
                        <div className="pt-20">
                            <Image src={"/careers-section-2-heart-icon.svg"} alt="careers-section-2-icon" height={100} width={100} />
                            <h1 className="mt-4 text-xl">Meaningful work</h1>
                            <p className="mt-2">Love what you do. Pursue your passion with multiple career paths across geographies.</p>
                        </div>
                        <div className="pt-20">
                            <Image src={"/careers-section-2-bulb-icon.svg"} alt="careers-section-2-icon" height={100} width={100} />
                            <h1 className="mt-4 text-xl">Personal growth</h1>
                            <p className="mt-2">Stay curious and dream big. Customize your development with flexible, innovative, options for learning, coaching, and mentoring.</p>
                        </div>
                        <div className="pt-20">
                            <Image src={"/careers-section-2-money-icon.svg"} alt="careers-section-2-icon" height={100} width={100} />
                            <h1 className="mt-4 text-xl">Performance-based pay</h1>
                            <p className="mt-2">Earn competitive and equitable compensation that rewards your performance and allows you to share in the company&apos;s long-term success.</p>
                        </div>
                        <div className="pt-20">
                            <Image src={"/careers-section-2-eye-icon.svg"} alt="careers-section-2-icon" height={100} width={100} />
                            <h1 className="mt-4 text-xl">Health and well-being focus</h1>
                            <p className="mt-2">Thrive holistically with robust, individualized benefits that support your emotional, mental, financial, physical, and social well-being.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}