import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div>
            {/* FOOTER */}
            <footer className="px-14 py-8">
                <div className="flex flex-wrap items-start gap-4 justify-between">
                    <div className="py-5 flex flex-col gap-4 lg:w-[45%] w-full">
                        <h1 className="text-3xl">bluecorp software</h1>                        
                        <p className="lg:pr-52">Lets make it happen! Whether it s an app, website, branding, or SEO, we are here to bring your ideas to life and help you reach the next level.</p>
                        <button className="px-6 py-2 w-fit bg-blue-700 rounded-full">start a project</button>
                        <Link href={"/#"} className="underline text-sm">Download Presentation</Link>
                    </div>
                    <div className="py-5 flex flex-col gap-4 lg:w-fit w-full">
                        <h1 className="text-gray-600">Company</h1>
                        <ul className="flex flex-col gap-2">
                            <Link href={"/#"} className="hover:underline"><li>Home</li></Link>
                            <Link href={"/#"} className="hover:underline"><li>About</li></Link>
                            <Link href={"/#"} className="hover:underline"><li>Services</li></Link>
                            <Link href={"/#"} className="hover:underline"><li>Work</li></Link>
                            <Link href={"/#"} className="hover:underline"><li>Insights</li></Link>
                            <Link href={"/#"} className="hover:underline"><li>FAQs</li></Link>
                            <Link href={"/#"} className="hover:underline"><li>Contact</li></Link>
                        </ul>                    
                    </div> 
                    <div className="py-5 flex flex-col gap-4 lg:w-fit w-full">
                        <h1 className="text-gray-600">Explore</h1>
                        <ul className="flex flex-col gap-2">
                            <Link href={"/#"} className="hover:underline"><li>Websites</li></Link>
                            <Link href={"/#"} className="hover:underline"><li>Apps</li></Link>
                            <Link href={"/#"} className="hover:underline"><li>SEO</li></Link>
                            <Link href={"/#"} className="hover:underline"><li>Branding</li></Link>
                            <Link href={"/#"} className="hover:underline"><li>Refer & Earn</li></Link>
                            <Link href={"/#"} className="hover:underline"><li>All</li></Link>
                        </ul> 
                    </div> 
                    <div className="py-5 flex flex-col gap-8 lg:w-fit w-full">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-gray-600">Contact</h1>
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-1 items-center"><span className="mr-2"><Image src="/mail.svg" alt="mail" width={20} height={20} /></span>hello@bluecorpsoftwares.com</div>
                                <div className="flex gap-1 items-center"><span className="mr-2"><Image src="/call.svg" alt="call" width={20} height={20} /></span>+91 9876543210</div>
                                <Link href={"/# "} className="flex gap-1 items-center"><span className="mr-2"><Image src="/calender.svg" alt="calender" width={20} height={20} /></span>Book a meeting</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-gray-600">Office</h1>
                            <ul className="flex flex-col gap-2">
                                <li>Hyderabad</li>
                            </ul>
                        </div>
                    </div>        
                </div>              
                
            </footer>

            <div className="px-14 py-8">
                <div className="border w-full opacity-30 my-8"></div>

                {/* PRIVACY POLICY */}
                <div className="flex items-center justify-between">
                    <p className="text-sm">© 2023 bluecorpsoftwares. All Rights Reserved</p>
                    <Link href={"/#"} className="text-sm">Privacy Policy</Link>
                    <div className="flex items-center gap-5">
                        <Link href="#"><Image src="/facebook.svg" alt="i1" width={28} height={28}/></Link>
                        <Link href="#"><Image src="/instagram.svg" alt="i2" width={20} height={28}/></Link>
                        <Link href="#"><Image src="/global.svg" alt="i3" width={20} height={28}/></Link>
                        <Link href="#"><Image src="/twitter.png" alt="i4" width={20} height={28}/></Link>
                        <Link href="#"><Image src="/linkedin.svg" alt="i5" width={20} height={28}/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}