// app/layout.tsx

"use client";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { Poppins } from 'next/font/google'; // 1. Import Poppins
import "./globals.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

// 2. Configure the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins', // 3. Assign a CSS variable
  weight: ['400', '500', '600', '700'] // Add the weights you need
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showIntro, setShowIntro] = useState(true);
  const pathname = usePathname();

  return (
    <html lang="en">
      {/* 4. Apply the font variable to the body */}
      <body className={`${poppins.variable} antialiased bg-gray-950 text-gray-100`}>
        {/* The rest of your layout code remains the same... */}
        {showIntro && <Intro onFinish={() => setShowIntro(false)} />}

        {!showIntro && pathname === '/' && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="fixed top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/navbar-video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
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