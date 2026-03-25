"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from 'next/navigation';
import { Poppins, Geist } from 'next/font/google';
import { AnimatePresence } from "framer-motion";
import "./globals.css";

import AppSidebar from "./components/AppSidebar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import SpeederLoader from "./components/SpeederLoader";
import Particles from "./components/Particles";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
      }, 900);

      // Update the ref to the new path
      previousPathname.current = pathname;

      // Cleanup the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${poppins.variable} antialiased bg-gray-950 text-gray-100 h-screen overflow-hidden`}>
        <AnimatePresence mode="wait">
          {isLoading && <SpeederLoader />}
        </AnimatePresence>

        {/* Your existing layout content */}
        {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

        {!showIntro && (
          <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
            <Particles
              particleColors={["#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
              pixelRatio={1}
            />
          </div>
        )}

        {!showIntro && (
          <div className="relative z-10 flex h-screen flex-col-reverse sm:flex-row">
            <AppSidebar />
            <div className="flex h-full sm:h-screen flex-1 flex-col overflow-hidden">
              <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
                {children}
                <Footer />
              </main>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
