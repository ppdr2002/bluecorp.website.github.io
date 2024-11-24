import Link from "next/link";

export default function Footer() {
    return (
        <div>
            {/* FOOTER */}
            <footer className="px-14 py-8">
                <div className="flex items-start gap-4 justify-between w-full">
                    <div className="py-5 flex flex-col gap-4 lg:w-1/4 w-full">
                        <h1>bluecorp software</h1>                        
                        <p>Let’s make it happen! Whether it’s an app, website, branding, or SEO, we’re here to bring your ideas to life and help you reach the next level.</p>
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
                        <Link href="#"><img src="/facebook-svgrepo-com.svg" alt="i1" width={28} /></Link>
                        <Link href="#"><img src="/instagram-svgrepo-com.svg" alt="i2" width={20} /></Link>
                        <Link href="#"><img src="/global-svgrepo-com.svg" alt="i3" width={20} /></Link>
                        <Link href="#"><img src="/twitter.png" alt="i4" width={20} /></Link>
                        <Link href="#"><img src="/linkedin-linked-in-svgrepo-com.svg" alt="i5" width={20} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}