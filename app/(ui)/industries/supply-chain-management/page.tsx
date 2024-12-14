import React from "react";
import Header from "@/components/layout/header";
import Image from "next/image";

export default function IndustriesPage() {
    return(
        <div>
            <Header />
            {/* Section 1 */}
            <div className="py-10">
                <Image src={"/supply-chain-management-img-1.jpeg"} alt="supply-chain-management-img-1" height={1000} width={2000}/>
                <h1 className="text-7xl text-center pt-20">Supply Chain Management</h1>
                <p className="text-center text-xl py-10">Stand up to always emerging market challenges with supply chain software development for more resilient, transparent, and<br></br> easier-to-track business operations. We develop custom solutions with attention to every link in the chain<br></br> to address your business needs.</p>
                <button></button>
            </div>
            {/* Section 2 */}
            <div className="px-44 bg-blue-800 ">
                <h1 >Supply Chain industry challenges</h1>
                <div className="flex justify-evenly">
                    <div className="w-[50%]">
                        <p className="py-10">U.S. retail operations have a supply chain accuracy of only 63%. And only 6% of businesses report the total visibility of their supply chain.</p>
                        <p className="">Meanwhile, the market expects impeccable operation flow and fast response from businesses, which is impossible if loads of data are handled manually. All this under the conditions of unpredictable consumer spending and complex logistics processes barely recovered from COVID-19.</p>
                    </div>
                    <div className="w-[50%]">
                    <p className="py-10">Supply chain software developed by professionals can help address these and many other concerns. Build your own SCM software to:</p>
                    <ul className="">
                        <li>Minimize transportation expenses</li>
                        <li>Keep up with the needs of the market</li>
                        <li>Source dependable, constant transport capacity</li>
                        <li>Meet the most recent technological demands</li>
                        <li>Pick up and deliver orders on time</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}