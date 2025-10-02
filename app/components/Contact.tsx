"use client";

import React, { useState } from 'react';

const ContactUs = () => {
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
      setResponseMessage('Oops! Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black/70 backdrop-blur-lg mt-10 font-poppins text-white flex flex-col items-center min-h-screen p-4 sm:p-8 pt-24 md:pt-32">
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">CONTACT US</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch w-full max-w-6xl flex-1">
        <div className="flex justify-center items-center">
          <video className="h-full aspect-square object-cover" src="/contact-video5.mp4" autoPlay loop muted playsInline>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-[#000000] p-8 shadow-lg w-full">
          <form onSubmit={handleSubmit}>
            {/* Form Inputs (same as before) */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 text-md font-medium mb-2">Your Name</label>
              <input type="text" id="name" name="name" required className="w-full bg-[#000000] border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 text-md font-medium mb-2">Your Email</label>
              <input type="email" id="email" name="email" required className="w-full bg-[#000000] border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300" />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-300 text-md font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full bg-[#000000] border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full hover:cursor-pointer bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white transition-transform duration-300 ease-in-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;