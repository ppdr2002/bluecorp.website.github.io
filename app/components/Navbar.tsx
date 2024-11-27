import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="px-14 py-8 flex items-center justify-between">
        <Link href={"/"} className="">
          <Image src={"/logo.png"} alt={"LOGO"} width={10} height={10}/>
        </Link>
        <div>
          <div className="flex items-center gap-4">
            <div>
              <Link href="#" className="group px-4 py-2">Services
                <div className="group-hover:grid grid-cols-3 hidden absolute my-8 mx-14 left-0 right-0 top-14 bottom-5 z-10 p-6 bg-blue-900">
                  <div className="flex flex-col gap-4">
                    <Link href={"/strategy"} className="hover:underline font-bold text-base">Strategy</Link>
                    <p className="font-light text-sm">Technology Strategy</p>
                    <p className="font-light text-sm">Data Strategy</p>
                    <p className="font-light text-sm">Innovation & Emerging Technology Strategy</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link href={"/#"} className="hover:underline font-bold text-base">Cloud</Link>
                    <p className="font-light text-sm">Migrations & Modernization</p>
                    <p className="font-light text-sm">Optimization</p>
                    <p className="font-light text-sm">Infrastructure</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link href={"/#"} className="hover:underline font-bold text-base">Digital Product building</Link>
                    <p className="font-light text-sm">Product Engineering</p>
                    <p className="font-light text-sm">Platform Engineering</p>
                    <p className="font-light text-sm">Data Engineering</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link href={"/#"} className="hover:underline font-bold text-base">Artificial Intelligence</Link>
                    <p className="font-light text-sm">Machine Learning</p>
                    <p className="font-light text-sm">Generative AI</p>
                    <p className="font-light text-sm">Intelligent Products</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link href={"/#"} className="hover:underline font-bold text-base">Experience Strategy and Design</Link>
                    <p className="font-light text-sm">Customer & User experience</p>
                    <p className="font-light text-sm">Product strategy, design & Innovation</p>
                    <p className="font-light text-sm">Service Design</p>
                    <p className="font-light text-sm">Brand Strategy</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link href={"/#"} className="hover:underline font-bold text-base">Digital Transformation Services</Link>
                    <p className="font-light text-sm">Strategy & Journey</p>
                    <p className="font-light text-sm">Digital Applications</p>
                    <p className="font-light text-sm">AI Automation</p>
                    <p className="font-light text-sm">Legacy Modernisation</p>
                  </div>
                  <div className="flex flex-col gap-4 font-bold">
                    <Link href={"#"}>Startup Software Development</Link>
                    <Link href={"#"}>SaaS Development</Link>
                    <Link href={"#"}>Supply Chain Management</Link>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link href={"/#"} className="hover:underline font-bold text-base">Software Development</Link>
                    <p className="font-light text-sm">UI/UX</p>
                    <p className="font-light text-sm">Mobile Development</p>
                    <p className="font-light text-sm">Web Development</p>
                  </div>
                </div>
              </Link>
            </div>
            <div ><Link href="#" className="px-4 py-2">Industries</Link></div>
            {/* <div href="#"><div href="#" className="px-4 py-2">Portfolio</Link></div> */}
            <div><Link href="#" className="px-4 py-2">Who we are</Link></div>
            <div><Link href="#" className="px-4 py-2">Careers</Link></div>
            <div><Link href="#" className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700">Contact</Link></div>
          </div>
        </div>
      </nav>
    </div>
  );
}
