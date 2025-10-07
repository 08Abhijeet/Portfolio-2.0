"use client";
import React from "react"; // --- THIS LINE WAS ADDED ---
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import "./Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('about');
  const pathname = usePathname();

  useEffect(() => {
    // Only run the scrollspy if we are on the homepage
    if (pathname === '/') {
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
    }
  }, [pathname]); // Re-run effect if the path changes
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: string[] = ["About", "Projects", "Skills", "Contact"];

  const renderLink = (item: string, isMobile = false) => {
    const isHomePage = pathname === '/';
    const targetPath = `/#${item.toLowerCase()}`;
    const desktopClass = `hover-underline ${activeLink === item.toLowerCase() && isHomePage ? 'active' : ''}`;
    const mobileClass = `text-white font-semibold text-lg hover:text-cyan-400 transition-colors duration-300 ${activeLink === item.toLowerCase() && isHomePage ? 'text-cyan-400' : ''}`;

    if (item === "Contact") {
      return (
        <Link 
          href="/contact" 
          onClick={() => isMobile && setIsOpen(false)}
          className={isMobile ? mobileClass.replace('text-cyan-400', '') : desktopClass.replace('active', '')}
        >
          {item}
        </Link>
      );
    }
    
    // If on the homepage, use <a> for smooth scrolling.
    // If on another page, use <Link> for client-side navigation.
    return isHomePage ? (
      <a href={targetPath} onClick={() => isMobile && setIsOpen(false)} className={isMobile ? mobileClass : desktopClass}>
        {item}
      </a>
    ) : (
      <Link href={targetPath} onClick={() => isMobile && setIsOpen(false)} className={isMobile ? mobileClass : desktopClass}>
        {item}
      </Link>
    );
  };

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out w-[90%] md:w-auto ${isScrolled ? "scale-95" : "scale-100"}`}>
      <div className="border-white rounded-[40px] px-4 sm:px-10 py-3 flex items-center justify-between bg-black/30 backdrop-blur-md transition-all duration-500 shadow-[0px_0px_20px_rgba(255,255,255,0.3)]">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer mr-4 sm:mr-6">
          <Link href="/">
            <Image src="/navbar-logo1.png" alt="Logo" width={70} height={30} className={`transition-transform duration-500 ${isScrolled ? "opacity-80 scale-95" : "opacity-100 scale-100"} hover:rotate-180`} priority />
          </Link>
        </div>

        {/* --- FIX: Desktop Menu now uses the renderLink function --- */}
        <ul className="hidden text-[17px] text-white md:flex space-x-10">
          {links.map((item) => (
            <li key={item}>{renderLink(item)}</li>
          ))}
        </ul>
        
        {/* Mobile Hamburger */}
        <div className="flex md:hidden flex-1 justify-end">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none text-3xl" aria-label="Toggle Menu">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 border border-white rounded-xl bg-black/90 flex flex-col items-center space-y-6 py-6">
          {/* --- FIX: Mobile Menu now uses the renderLink function --- */}
          {links.map((item) => (
            <React.Fragment key={item}>{renderLink(item, true)}</React.Fragment>
          ))}
        </div>
      )}
    </nav>
  );
}

