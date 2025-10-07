"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-transparent text-gray-300 mt-30 w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
        {/* Left Section: Brand */}
        <div className="text-center md:text-left flex flex-col md:flex-1">
          <h2 className="text-2xl font-bold text-white mb-2">Abhijeet Kadam</h2>
          <p className="text-gray-400">
            Full Stack Developer | Web Designer | Programmer
          </p>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex gap-6 text-2xl justify-center md:justify-end flex-wrap">
          <a
            href="https://github.com/08Abhijeet"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abhijeet-kadam-087809259/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
      
          <a
            href="https://www.instagram.com/_abhi_.kadam/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 mt-6">
        <p className="text-center text-gray-500 text-sm py-4">
          &copy; {new Date().getFullYear()} Abhijeet Kadam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
