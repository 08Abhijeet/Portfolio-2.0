"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this component's bounding box
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Grow the active timeline line from top to bottom
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      date: "Dec 2025 – Feb 2026",
      role: "Full-Stack Developer Intern – Null Class",
      description: [
        "Completed a 2-month internship at Null Class, working on real-world, task-based development assignments.",
        "Developing and enhancing web applications using the MERN stack.",
        "Building responsive and reusable UI components using React.js.",
        "Integrating frontend components with backend REST APIs.",
        "Gaining hands-on experience with Git, debugging, and industry-level development workflows."
      ],
      side: "left",
    },
    {
      date: "July 2024 – Jan 2025",
      role: "Full-Stack Developer (Freelance)",
      description: [
        "Developed a production-level e-commerce clothing website using the MERN stack.",
        "Implemented secure authentication, role-based access, and order management features.",
        "Integrated a fully functional Stripe payment gateway for online transactions.",
        "Designed responsive UI layouts and optimized frontend performance.",
        "Worked as a Frontend Developer on MYRASA, a global perfume e-commerce platform."
      ],
      side: "right",
    },
  ];

  return (
    <section id="experience" className="w-full py-12 sm:py-24 flex flex-col items-center px-4 relative">
      {/* ── Section Heading ── */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center justify-center mb-10 sm:mb-20 z-10 bg-black/50 backdrop-blur-2xl border border-white/10 px-6 py-5 sm:px-10 sm:py-6 rounded-3xl sm:rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.5)] w-fit max-w-[95vw] border-t-white/20"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2 sm:mb-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
          <span className="text-xs sm:text-sm font-medium text-gray-200 uppercase tracking-widest">Journey</span>
        </div>
        <h2 className="font-poppins text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          My <span className="bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">Experience</span>
        </h2>
      </motion.div>

      {/* ── Timeline Container ── */}
      <div ref={containerRef} className="relative w-full max-w-5xl mx-auto flex flex-col gap-12 sm:gap-24">
        
        {/* Background Track Line (dim) */}
        <div className="absolute left-[30px] sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10 rounded-full" />

        {/* Foreground Fill Line (bright white) */}
        <motion.div
          style={{ height: fillHeight }}
          className="absolute left-[30px] sm:left-1/2 sm:-translate-x-1/2 top-0 w-[4px] -ml-[1px] bg-white rounded-full origin-top z-0 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        />

        {/* ── Timeline Items ── */}
        {experiences.map((item, i) => {
          const isLeft = item.side === "left";
          return (
            <div key={i} className="relative w-full flex justify-end sm:justify-start items-center">
              
              {/* Desktop layout: item on left or right */}
              <div 
                className={`w-[calc(100%-80px)] sm:w-[calc(50%-40px)] text-left ${isLeft ? "sm:mr-auto" : "sm:ml-auto"}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-3xl hover:border-white/30 transition-colors flex flex-col gap-1 sm:gap-2"
                >
                  <p className="font-bold text-sm sm:text-base text-gray-400">{item.date}</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{item.role}</h3>
                  <ul className="text-white/70 text-sm sm:text-base leading-relaxed mt-2 list-disc list-inside space-y-2">
                    {item.description.map((bullet, idx) => (
                      <li key={idx} className="marker:text-gray-500">{bullet}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Dot on the timeline */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute left-[30px] sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 rounded-full bg-white z-10 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              />

            </div>
          );
        })}

      </div>
    </section>
  );
}
