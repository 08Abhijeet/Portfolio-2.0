"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from 'next/navigation';
import { Poppins } from 'next/font/google';
import "./globals.css";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import SpeederLoader from "./components/SpeederLoader";
const poppins = Poppins({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showIntro, setShowIntro] = useState(true);
  const pathname = usePathname();
  
  // 2. Add state for the loading animation
  const [isLoading, setIsLoading] = useState(false);
  const previousPathname = useRef(pathname);

  // 3. Add effect to detect page changes and trigger the loader
  useEffect(() => {
    if (previousPathname.current !== pathname) {
      setIsLoading(true);
      // Hide the loader after a delay to let the animation play
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 600); // 1.5 seconds, adjust as needed

      // Update the ref to the new path
      previousPathname.current = pathname;

      // Cleanup the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-gray-950 text-gray-100`}>
        {/* 4. Conditionally render the loader */}
        {isLoading && <SpeederLoader />}

        {/* Your existing layout content */}
        {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

        {!showIntro && pathname === '/' && (
          <video autoPlay loop muted playsInline className="fixed top-0 left-0 w-full h-full object-cover z-0">
            <source src="/navbar-video1.mp4" type="video/mp4" />
          </video>
        )}

        {!showIntro && (
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
