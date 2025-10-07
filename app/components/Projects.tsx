"use client";

import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Chatify",
<<<<<<< HEAD
      description: "A real-time chat application built with the MERN stack, featuring a fully functional theme section for a personalized user experience.",
      link: "https://chatifywebapp.onrender.com/",
      image: "/chatify.png", 
    },
    {
      title: "Doc Cluster",
      description: "A multilingual article clustering tool developed using React and Python. It efficiently organizes large sets of articles into meaningful clusters.",
=======
  
      description: "A real-time chat application with instant messaging, user authentication, profile management, and a personalized theme section. Built for seamless use on any device.",
      link: "https://chatifywebapp.onrender.com/",
      image: "/chatify.png",
    },
    {
      title: "Doc Cluster",

      description: "An intelligent tool that organizes articles into meaningful clusters. It supports multilingual document analysis and efficiently processes large data sets through a clean UI.",
>>>>>>> b53f250c9b4a543d20b494d7c9400499cca234af
      link: "https://github.com/08Abhijeet/Multilingual-DocuCluster.git",
      image: "/clustering.png",
    },
    {
<<<<<<< HEAD
      title: "Fashion store",
      description: "An e-commerce website built with the MERN stack, integrated with Stripe for secure payment processing.",
=======
      title: "Fashion Store",

      description: "A full e-commerce website with product listings and secure payment processing via Stripe. Features a user-friendly cart, checkout, and an admin panel for management.",
>>>>>>> b53f250c9b4a543d20b494d7c9400499cca234af
      link: "https://vesteria-frontend.onrender.com/",
      image: "/vesteria.png",
    },
    {
<<<<<<< HEAD
      title: "Blogging",
      description: "A dynamic blogging platform built with Next.js, allowing users to read, write, and manage articles. Optimized for performance and SEO.",
=======
      title: "Blogging Platform",
  
      description: "A dynamic and SEO-optimized blogging platform where users can read, write, and manage articles. Built with a clean, intuitive reading experience in mind.",
>>>>>>> b53f250c9b4a543d20b494d7c9400499cca234af
      link: "https://medium-blogging-website-sigma.vercel.app/",
      image: "/blogging.png",
    },
    {
      title: "Fabrica",
<<<<<<< HEAD
      description: "An e-commerce website built with the MERN stack, integrated with Stripe for secure payment processing.",
=======
   
      description: "A modern e-commerce platform for fabrics with secure Stripe integration. Allows users to browse products, add to cart, and complete purchases seamlessly.",
>>>>>>> b53f250c9b4a543d20b494d7c9400499cca234af
      link: "https://fabrica-frontend.onrender.com/",
      image: "/fabrica.png",
    },
    {
      title: "Sportify",
<<<<<<< HEAD
      description: "A sports website built with MERN Stack which contains a vast collection of sport shops.",
=======
   
      description: "A sports-focused e-commerce website featuring a vast collection of sports equipment and apparel, a full cart system, and built for scalability.",
>>>>>>> b53f250c9b4a543d20b494d7c9400499cca234af
      link: "https://sportify-1-tkwr.onrender.com/",
      image: "/sportify.png",
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-transparent flex flex-col items-center px-4">
      <h2 className="font-poppins text-4xl font-bold mb-12">My Projects</h2>
<<<<<<< HEAD
      
      {/* --- FIX: Updated the grid for better responsiveness and centering --- */}
      <div className="grid w-full grid-cols-1 md:gap-18 gap-8 md:grid-cols-2 md:max-w-3xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={`${styles.slide} ${styles.slide1}`}>
              <div className={styles.content}>
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill" 
                  objectFit="cover"
                  className="rounded-lg"
                />
=======

      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={`${styles.slide} ${styles.slide1}`}>
              <div className={styles.imageWrapper}>
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
>>>>>>> b53f250c9b4a543d20b494d7c9400499cca234af
              </div>
            </div>
            <div className={`${styles.slide} ${styles.slide2}`}>
              <div className={styles.content}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h3>{project.title}</h3>
                </a>
               
                {/* --- FIX: Replaced the list with a paragraph --- */}
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

