// app/components/Navbar.tsx

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // --- CHANGE 1: Set the default active link to 'about' ---
  const [activeLink, setActiveLink] = useState<string>('about');

  useEffect(() => {
    // ... (This useEffect for scrollspy remains the same)
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, { rootMargin: '-30% 0px -70% 0px' });
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);
  
  // ... (The other useEffect for navbar scaling remains the same)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- CHANGE 2: Remove "Home" from the links array ---
  const links: string[] = ["About", "Projects", "Skills", "Contact"];

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${isScrolled ? "scale-95" : "scale-100"}`}>
      <div className="border-white rounded-[40px] px-6 sm:px-10 py-3 flex items-center justify-between bg-black/30 backdrop-blur-md transition-all duration-500 min-w-[350px] sm:min-w-[500px] shadow-[0px_0px_20px_rgba(255,255,255,0.3)]">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer mr-4 sm:mr-6">
          <Link href="/">
            <Image src="/navbar-logo1.png" alt="Logo" width={70} height={30} className={`transition-transform duration-500 ${isScrolled ? "opacity-80 scale-95" : "opacity-100 scale-100"} hover:rotate-180`} priority />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden text-[17px] text-white md:flex space-x-10">
          {links.map((item) => (
            <li key={item}>
              {item === "Contact" ? (
                <Link href="/contact" className="hover-underline">{item}</Link>
              ) : (
                <a href={`/#${item.toLowerCase()}`} className={`hover-underline ${activeLink === item.toLowerCase() ? 'active' : ''}`}>
                  {item}
                </a>
              )}
            </li>
          ))}
        </ul>
        
        {/* ... (rest of the component is unchanged) ... */}
        <div className="flex md:hidden flex-1 justify-end">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none text-3xl" aria-label="Toggle Menu">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 border border-white rounded-xl bg-black/90 flex flex-col items-center space-y-6 py-6">
          {links.map((item) =>
            item === "Contact" ? (
              <Link key={item} href="/contact" onClick={() => setIsOpen(false)} className="text-white font-semibold text-lg hover:text-cyan-400 transition-colors duration-300">{item}</Link>
            ) : (
              <a key={item} href={`/#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className={`text-white font-semibold text-lg hover:text-cyan-400 transition-colors duration-300 ${activeLink === item.toLowerCase() ? 'text-cyan-400' : ''}`}>
                {item}
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
}