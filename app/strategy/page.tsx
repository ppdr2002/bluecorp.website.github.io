import Image from "next/image";

export default function StrategyPage() {
    return (
        <div className="lg:px-14 md:px-6 px-4 py-8">

            {/* Layout 1 */}
            {/* SECTION 1 */}
            <div className="grid md:gap-12 lg:grid-cols-2 grid-cols-1 items-start py-10">
                <div className="flex items-center gap-4">
                    <div className="md:p-6 p-3 bg-blue-400">
                        <h1 className="md:text-4xl text-2xl">St</h1>
                    </div>
                    <div className="md:text-6xl text-4xl font-thin">Strategy</div>
                </div>
                <div className="flex flex-col md:gap-6 gap-2 pr-6">
                    <b className="font-semibold md:text-xl text-sm">Create the vision. Then make it real.</b>
                    <p className="font-normal md:text-xl text-xs">At Slalom, we work to deeply understand your organization and develop detailed, executable roadmaps—so you know exactly what to do next, where to grow, and how to transform. Beyond helping you establish your vision, we have the technology and delivery capabilities to make sure you get there. </p>
                </div>
            </div>

            {/* SECTION 2 */}
            <div className="md:py-10 py-5">
                <h1 className="md:text-6xl text-4xl mt-10">Our strategy <i className="">expertise</i></h1>
                <div className="md:mt-20 mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:gap-10 lg:gap-8">
                    <div className="flex flex-col gap-4 pr-8 md:pr-12">
                        <h2 className="font-extrabold md:text-base text-xs">Technology strategy </h2>
                        <p className="font-extralight md:text-base text-xs">Today, tech leaders are struggling to drive transformation while remaining steady in a climate of rapid change. Slalom s deep knowledge of current technologies and strong relationships with over 700 leading solution providers empower a strategic approach that helps you do both.</p>
                    </div>
                    <div className="flex flex-col gap-4 pr-8 md:pr-12">
                        <h2 className="font-extrabold md:text-base text-xs">Data strategy </h2>
                        <p className="font-extralight md:text-base text-xs">You need a solid strategy before you can put data to work to drive decision making and realize its value. Our goal is to help you identify, acquire, and grow the strategic data assets that will improve and transform your business performance.</p>
                    </div>
                    <div className="flex flex-col gap-4 pr-8 md:pr-12">
                        <h2 className="font-extrabold md:text-base text-xs">Innovation & emerging technology strategy </h2>
                        <p className="font-extralight md:text-base text-xs">We help you push the boundaries of what s possible to create your future. Our hands-on approach to emerging technologies means we don t just talk about innovation, we encourage you to experience it first-hand and build that creative energy into your business s DNA. </p>
                    </div>
                </div>
            </div>

            {/* Layout 2 */}
            {/* SECTION 3 */}
            <div className="md:py-10 py-5 lg:px-32">
                <div className="md:w-[50%] w-full flex flex-col gap-4">
                    <h4 className="font-bold lg:text-4xl md:text-3xl text-2xl">AI software development services</h4>
                    <p className="lg:text-2xl md:text-base text-sm">It s time to take the leap Anadea s AI development services are the perfect entry point for innovation. </p>
                </div>
                <div className="border w-full opacity-30 my-8"></div>
                <div className="flex md:flex-nowrap flex-wrap items-start justify-between md:gap-9 gap-4">
                    <Image src="/l2img1.png" alt="img" width={350} height={100} className="rounded-xl lg:block md:hidden"/>
                    <Image src="/l2img1.png" alt="img" width={240} height={100} className="rounded-xl lg:hidden md:block hidden"/>
                    <h1 className="lg:w-[215px] md:w-[150px] w-full lg:text-3xl md:text-base text-xl font-semibold">AI consulting</h1>
                    <p className="lg:w-[480px] md:w-[300px] w-full pr-2 lg:text-base md:text-sm text-xs">Get Anadea s expert guidance on how AI can benefit your specific business goals. We will help you identify the right AI solutions and develop a strategic roadmap for implementation. </p>
                </div>
                <div className="border w-full opacity-30 my-8"></div>
                <div className="flex flex-wrap items-start justify-between md:gap-8 gap-4">
                <Image src="/l2img2.png" alt="img" width={350} height={100} className="rounded-xl lg:block md:hidden"/>
                <Image src="/l2img2.png" alt="img" width={240} height={100} className="rounded-xl lg:hidden md:block hidden"/>
                    <h1 className="lg:w-[215px] md:w-[150px] w-full lg:text-3xl md:text-base text-xl font-semibold text-wrap">Model training, deployment & integration</h1>
                    <p className="lg:w-[480px] md:w-[300px] w-full pr-2 lg:text-base md:text-sm text-xs">We convert your business requirements into tasks, whether it involves pre-trained solutions, fine-tuning them to meet your requirements, or building models from scratch to further integrate them with your systems. </p>
                </div>
                <div className="border w-full opacity-30 my-8"></div>
            </div>
        </div>
    );
}