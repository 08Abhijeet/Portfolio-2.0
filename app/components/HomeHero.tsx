"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import UiverseButton from "./UiverseButton";

export default function HomeHero() {
  const [flipped, setFlipped] = useState(false);

  // Text for the typewriter animation
  const text = "I build smooth, modern, and high-performance web applications. Passionate about transforming ideas into beautiful user experiences with clean design and robust code.";
  const letters = Array.from(text);

  // Framer Motion variants for the sentence container
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8, // Start this animation after the title
        staggerChildren: 0.02, // Time between each letter's animation
      },
    },
  };

  // Framer Motion variants for each letter
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about" // Corrected ID for navbar scrollspy
      className="flex items-center justify-center w-full min-h-screen px-4 pt-32 pb-16"
    >
      <div
        className="w-full max-w-7xl cursor-pointer perspective"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-[600px] sm:h-[700px] md:h-[90vh] transition-transform duration-700 transform ${
            flipped ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side */}
          <div className="italic absolute p-4 w-full h-full md:h-[90vh] flex items-center justify-center rounded-[50px] bg-black/50 backdrop-blur-md text-white text-center text-xl sm:text-3xl md:text-4xl font-bold backface-hidden neon-border">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <UiverseButton text="Click me ?" />
            </div>
          </div>

          {/* Back Side */}
<<<<<<< HEAD
          <div className="absolute w-full min-h-[80vh] md:h-full flex flex-col md:flex-row items-center justify-center gap-8 rounded-[50px] bg-black/50 backdrop-blur-md text-white p-6 transform rotate-y-180 backface-hidden neon-border">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2"
            >
               <motion.h1
=======
          <div className="absolute w-full h-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 rounded-[50px] bg-black/50 backdrop-blur-md text-white p-4 sm:p-6 md:p-8 transform rotate-y-180 backface-hidden neon-border overflow-y-auto">
            {/* Left: Text */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
              <motion.h1
>>>>>>> b53f250c9b4a543d20b494d7c9400499cca234af
                initial={{ opacity: 0, y: -50 }}
                animate={flipped ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                Hi, I’m <span className="text-white">Abhijeet Kadam</span>
              </motion.h1>
<<<<<<< HEAD
<<<<<<< HEAD
=======

              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={flipped ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="mt-4 text-lg sm:text-2xl md:text-3xl text-white/90"
              >
                Web Developer | Problem Solver | Programmer
              </motion.h2>
              <p className="mt-6 text-white/80 max-w-lg text-sm sm:text-base md:text-base">
                I build smooth, modern, and high-performance web applications.
                Passionate about transforming ideas into beautiful user experiences
                with clean design and robust code.
              </p>
>>>>>>> b6b08a6180d38b3de7b36a7e00a3ad327c5e466c
=======
>>>>>>> b53f250c9b4a543d20b494d7c9400499cca234af

              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={flipped ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="mt-4 text-lg sm:text-2xl md:text-3xl text-white/90"
              >
                Full Stack Developer | Problem Solver | Programmer
              </motion.h2>

              <motion.p
                variants={sentenceVariants}
                initial="hidden"
                animate={flipped ? "visible" : "hidden"}
                className="mt-6 text-white/80 max-w-lg text-sm sm:text-base"
              >
                {letters.map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={flipped ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }} // Delayed to start after typewriter
                className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start"
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition duration-300 text-sm sm:text-base"
                >
                  View My Resume
                </a>
             
              </motion.div>
            </div>

            {/* Right: Circular Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                flipped ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
              className="flex justify-center md:w-1/2 mt-8 md:mt-0"
            >
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg shadow-cyan-500/40 neon-border">
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

