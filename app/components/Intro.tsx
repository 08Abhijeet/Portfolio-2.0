"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface IntroProps {
  onFinish: () => void;
}

export default function Intro({ onFinish }: IntroProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // hide intro after 2s
    }, 2100);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100 }}   // start smaller + left
          animate={{ opacity: 1, scale: 1, x: 0 }}        // move to center
          exit={{ opacity: 0, x: 100 }}                   // fade out + move right
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Image
            src="/intro-logo1.png"   // path from public folder
            alt="Intro Logo"
            width={200}             // adjust size as needed
            height={200}
            priority
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
