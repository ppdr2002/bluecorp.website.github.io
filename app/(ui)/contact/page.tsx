import Header from "@/components/layout/header"

export default function contactpage(){
    return(
        <div>
            <Header />
            <div className="flex flex-wrap px-10 py-16 gap-16">
            <div>
                <h1 className="text-3xl font-bold mb-6">Let&apos;s Talk</h1>
                <p className="mb-12">We&apos;d love to hear from you! Fill out the form and let&apos;s connect to bring your ideas to life!</p>
            </div>
            <div>
                <form>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium">
                                First Name
                            </label>
                            <input type="text" id="firstName" name="firstName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-black" />
                        </div>
                        <div>
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
                        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                            Send Message →
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}