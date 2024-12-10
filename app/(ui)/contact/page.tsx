import Header from "@/components/layout/header"
import Image from "next/image";

export default function contactpage(){
    return(
        <div>
            <Header />
            <div className="flex flex-wrap md:px-14 px-4 md:py-16 py-6 md:gap-16">
            <div className="md:w-[45%] w-full">
                <div className="flex items-end gap-5 mb-4">
                    <h1 className="text-3xl font-bold text-center">Let&apos;s Talk</h1>
                    <Image src={"/contact-talk-white.svg"} alt='contact-talk-white' width={40} height={40} className="dark:hidden block" />
                    <Image src={"/contact-talk-dark.svg"} alt='contact-talk-dark' width={40} height={40} className="hidden dark:block"/>
                </div>
                <p className="mb-4">We&apos;d love to hear from you! </p>
                    <p>Fill out the form and let&apos;s connect to bring your ideas to life!</p>
            </div>
            <div className="md:w-[50%] w-full">
                <form>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div  className="col-span-2">
                            <label htmlFor="firstName" className="block text-sm font-medium">
                                First Name
                            </label>
                            <input type="text" id="firstName" name="firstName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black" />
                        </div>
                        <div  className="col-span-2">
                            <label htmlFor="lastName" className="block text-sm font-medium ">
                                Last Name
                            </label>
                            <input type="text" id="lastName" name="lastName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black" />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black"/>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="phone" className="block text-sm font-medium">
                                Phone (Optional)
                            </label>
                            <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black"/>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="howDidYouHear" className="block text-sm font-medium">
                                How did you hear about us?
                            </label>
                            <select id="howDidYouHear" name="howDidYouHear" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black">
                                <option value="">Select an option</option>
                                <option value="Google">Google</option>
                                <option value="Social Media">Social Media</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="budget" className="block text-sm font-medium">
                                What is your budget?
                            </label>
                            <select id="budget" name="budget" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black">
                                <option value="">Select an option</option>
                                <option value="100-500">₹100 - ₹500</option>
                                <option value="500-1000">₹500 - ₹1000</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="projectDetails" className="block text-sm font-medium">
                                Tell us about your project
                            </label>
                            <textarea id="projectDetails" name="projectDetails"  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black"></textarea>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Send Message →
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}