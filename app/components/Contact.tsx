"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";

// This is a clean, reverted version of the contact form.
// It is fully responsive and uses a standard, modern form design.
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(''); // Clear previous message

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setResponseMessage('Success! Your message has been sent.');
        (event.target as HTMLFormElement).reset(); // Reset the form
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      // FIX: Replaced the apostrophe to fix the unescaped entities error.
      setResponseMessage('Oops! Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center pt-10 pb-16 sm:pt-14 sm:pb-16 px-4 relative z-10"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center justify-center mb-10 sm:mb-16 z-10 bg-black/50 backdrop-blur-2xl border border-white/10 px-6 py-4 sm:px-10 sm:py-6 rounded-3xl sm:rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.5)] w-fit max-w-[95vw] border-t-white/20 mx-auto mt-4 sm:mt-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2 sm:mb-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
          <span className="text-xs sm:text-sm font-medium text-gray-200 uppercase tracking-widest">Connect</span>
        </div>
        <h2 className="font-poppins text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight uppercase">
          Let&apos;s <span className="bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">Connect</span>
        </h2>
      </motion.div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center w-full max-w-6xl gap-10 lg:gap-12">
        {/* Left Side: Video */}
        <div className="flex justify-center items-center">
          <video
            className="h-full w-full max-w-lg aspect-square object-cover"
            src="/contact-video3.mp4"
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Side: Simple Form */}
        <div className="bg-black/80 backdrop-blur-xl border border-white p-8 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] w-full">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-300 text-lg font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={isSubmitting}
                className="w-full bg-black border border-white/20 rounded-3xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-300 text-lg font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isSubmitting}
                className="w-full bg-black border border-white/20 rounded-3xl py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
              />
            </div>
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block text-gray-300 text-lg font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                disabled={isSubmitting}
                className="w-full bg-black border border-white/20 rounded-3xl py-3 px-4 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full hover:cursor-pointer bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white transition-transform duration-300 ease-in-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
