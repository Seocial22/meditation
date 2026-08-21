import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { Kalam } from "next/font/google";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {

  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  title: "Meditation Treasures",
  description:
    "Discover guided meditation, Mental Silence, inner peace and spiritual growth with Meditation Treasures.",
  robots: {
    index: false,
    follow: false,
  },

};

export default function RootLayout({ children }) {
  return (
    <html className="bg-white " lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kalam.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        <div className="max-w-screen-3xl mx-auto">{children}</div>
        <div className="bg-[#F7F8ED]">
          <Footer />
        </div>
      </body>
    </html>
  );
}