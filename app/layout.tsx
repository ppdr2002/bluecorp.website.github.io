import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
import './material-icons.css';
import Footer from "@/components/layout/footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "500"
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Bluecorp Software | Digital Transformation | Professional Service",
  description: "Bluecorp Software leading the future with innovative business and tech solutions that put people first.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <main className="font-[family-name:var(--font-poppins)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
