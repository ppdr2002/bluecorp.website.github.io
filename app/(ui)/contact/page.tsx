import Header from "@/components/layout/header"
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function contactpage(){
    return(
        <div>
            <Header />
            <div className="flex flex-wrap md:px-14 px-4 md:py-16 py-6 md:gap-16 gap-8">
            <div className="md:w-[45%] w-full">
                <div className="flex items-end gap-5 mb-4">
                    <h1 className="text-3xl font-bold text-center">Let&apos;s Talk</h1>
                    <Image src={"/contact/contact-talk-white.svg"} alt='contact-talk-white' width={40} height={40} className="dark:hidden block" />
                    <Image src={"/contact/contact-talk-dark.svg"} alt='contact-talk-dark' width={40} height={40} className="hidden dark:block"/>
                </div>
                <p className="mb-4">We&apos;d love to hear from you! </p>
                    <p>Fill out the form and let&apos;s connect to bring your ideas to life!</p>
            </div>
            <div className="md:w-[50%] w-full">
                <form >
                    <div className="mb-5">
                        <label htmlFor="firstName" className="text-sm font-medium flex items-center gap-1">Full Name <p className="text-gray-500">(required)</p></label>
                        <input type="text" id="firstName" name="firstName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black" />
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-5">
                        <div>
                            <label htmlFor="email" className=" flex items-center gap-1 text-sm font-medium"> Email <p className="text-gray-500">(required)</p></label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className=" flex items-center gap-1 text-sm font-medium"> Phone  <p className="text-gray-500">(required)</p>
                            </label>
                            <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black"/>
                        </div>
                        <div>
                            <label htmlFor="company" className=" flex items-center gap-1 text-sm font-medium"> Company <p className="text-gray-500">(required)</p></label>
                            <input type="company" id="company" name="company" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black"/>
                        </div>
                        <div>
                            <label htmlFor="job-title" className=" flex items-center gap-1 text-sm font-medium"> Job Title <p className="text-gray-500">(required)</p>
                            </label>
                            <input type="job-title" id="job-title" name="job-title" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black"/>
                        </div>
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium">Country</label>
                            <select id="country" name="country" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black">
                                <option value="united-states">United States</option>
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="germany">Germany</option>
                                <option value="ireland">Ireland</option>
                                <option value="india">India</option>
                                <option value="japan">Japan</option>
                                <option value="netherlands">Netherlands</option>
                                <option value="new-zealand">New Zealand</option>
                                <option value="singapore">Singapore</option>
                                <option value="united-kingdom">United Kingdom</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="city" className=" flex items-center gap-1 text-sm font-medium"> City <p className="text-gray-500">(required)</p></label>
                            <input type="city" id="city" name="company" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black"/>
                        </div>
                    </div>                        
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium">Message</label>
                        <textarea id="message" name="message" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black"></textarea>
                    </div>

                    <div className="mt-8">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-3">
                            Send Message <FaLongArrowAltRight />
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}