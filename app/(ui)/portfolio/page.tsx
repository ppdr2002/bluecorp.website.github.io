import Header from "@/components/layout/header";
import { PiDotOutlineFill } from "react-icons/pi";

export default function PortfolioPage() {
    return (
        <div>
            <Header />
            {/* SECTION 1 */}
            <div className="md:px-14 px-4">
                <div className="text-center mt-10 flex flex-col justify-center items-center gap-6 h-[400px]">
                    <h6 className="md:text-xl text-base">Bluecorp Case Studies</h6>
                    <div className="flex items-end lg:text-7xl md:text-4xl text-2xl gap-2">
                        <h1 className="flex items-end">Optimize<PiDotOutlineFill  /></h1>                        
                        <h1 className="flex items-end">Innovate<PiDotOutlineFill  /></h1>                        
                        <h1>Disrupt</h1>
                    </div>
                    <p className="text-sm">Discover how Bluecorp can help your business succeed. Explore our case studies and see the impact we&apos;ve made.</p>
                </div>
            </div>

            {/* SECTION 2 */}
            
        </div>
    );
}