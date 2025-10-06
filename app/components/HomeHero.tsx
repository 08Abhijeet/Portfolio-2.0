"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import UiverseButton from './UiverseButton'; // Import the new button

export default function HomeHero() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section
      id="home"
      className="flex items-center justify-center w-full min-h-screen md:min-h-[calc(100vh-80px)] px-4 md:px-12 mt-25   md:mb-30 sm:mt-30"
    >
      <div
        className="w-full max-w-7xl cursor-pointer perspective md:mt-5"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-[calc(100vh-80px)] transition-transform duration-700 transform ${flipped ? "rotate-y-180" : ""}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side */}
          <div className="italic absolute p-6 w-full h-full flex items-center justify-center rounded-[50px] bg-black/50 backdrop-blur-md text-white text-2xl sm:text-3xl md:text-4xl font-bold   backface-hidden neon-border">
            
            <div className="flex items-center gap-3">
              {/* --- The text for the button has been changed here --- */}
              <UiverseButton text="Click me ?"  />
            </div>

          </div>

          {/* Back Side */}
          <div className="absolute w-full min-h-[100vh] md:h-full flex flex-col md:flex-row items-center justify-center gap-8 rounded-[50px] bg-black/50 backdrop-blur-md text-white p-6 transform rotate-y-180 backface-hidden neon-border">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Hi, I’m <span className="text-white">Abhijeet Kadam</span>
              </h1>
              <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl text-white/90">
                Full Stack Developer | Web Designer | Programmer
              </h2>
              <p className="mt-6 text-white/80 max-w-lg text-sm sm:text-base md:text-base">
                I build smooth, modern, and high-performance web applications.
                Passionate about transforming ideas into beautiful user experiences
                with clean design and robust code.
              </p>

               <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
                {/* --- THIS BUTTON'S HOVER EFFECT HAS BEEN CHANGED --- */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition duration-300 text-sm sm:text-base"
                >
                  View My Resume
                </a>
               
              </div>
            </motion.div>

            {/* Right: Circular Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex justify-center md:w-1/2 mt-8 md:mt-0"
            >
              <div className="relative w-46 h-46 sm:w-44 sm:h-44 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg shadow-cyan-500/40 neon-border">
                <Image
                  src="/abhijeet.jpeg"
                  alt="Abhijeet Kadam"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .neon-border {
          box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.3);
          animation: neonGlow 2s infinite alternate;
        }

     
      `}</style>
    </section>
  );
}

