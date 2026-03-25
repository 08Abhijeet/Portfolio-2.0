"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomeHero() {
  const text = "I build smooth, modern, and high-performance web applications. Passionate about transforming ideas into beautiful user experiences with clean design and robust code.";
  const letters = Array.from(text);

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        staggerChildren: 0.02,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="flex items-center justify-center w-full min-h-screen px-2 sm:px-4 pt-4 sm:pt-10 pb-8 sm:pb-16"
    >
      <div className="w-full max-w-7xl">
        <div className="w-full min-h-0 sm:min-h-[560px] md:min-h-[86vh] py-8 sm:py-0 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 rounded-3xl sm:rounded-[34px] border border-white/10 bg-black/60 backdrop-blur-2xl text-white p-4 sm:p-7 md:p-10 overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] sm:shadow-[0_20px_80px_rgba(0,0,0,0.5)] mt-4 sm:mt-0">
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            >
              Hi, I’m <span className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 bg-clip-text text-transparent">Abhijeet Kadam</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="mt-4 text-base sm:text-xl md:text-2xl text-white/85"
            >
              Full Stack Developer | Web Designer | Programmer
            </motion.h2>

            <motion.p
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
              className="mt-6 text-white/70 max-w-xl text-sm sm:text-base leading-relaxed"
            >
              {letters.map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black font-semibold rounded-full border border-transparent hover:bg-transparent hover:text-white hover:border-white/50 transition duration-300 text-sm sm:text-base"
              >
                View My Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center md:w-1/2 mt-6 md:mt-0"
          >
            <div className="relative w-72 h-72 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-[28px] overflow-hidden border border-white/20 shadow-[0_20px_60px_rgba(255,255,255,0.07)]">
              <Image
                src="/abhijeet.png"
                alt="Abhijeet Kadam"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

