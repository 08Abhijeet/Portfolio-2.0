"use client";

import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Chatify",
      description: "A real-time chat application built with the MERN stack, featuring a fully functional theme section for a personalized user experience.",
      link: "https://chatifywebapp.onrender.com/",
      image: "/chatify.png", 
    },
    {
      title: "Doc Cluster",
      description: "A multilingual article clustering tool developed using React and Python. It efficiently organizes large sets of articles into meaningful clusters.",
      link: "https://github.com/08Abhijeet/Multilingual-DocuCluster.git",
      image: "/clustering.png",
    },
    {
      title: "Fashion store",
      description: "An e-commerce website built with the MERN stack, integrated with Stripe for secure payment processing.",
      link: "https://vesteria-frontend.onrender.com/",
      image: "/vesteria.png",
    },
    {
      title: "Blogging",
      description: "A dynamic blogging platform built with Next.js, allowing users to read, write, and manage articles. Optimized for performance and SEO.",
      link: "https://medium-blogging-website-sigma.vercel.app/",
      image: "/blogging.png",
    },
    {
      title: "Fabrica",
      description: "An e-commerce website built with the MERN stack, integrated with Stripe for secure payment processing.",
      link: "https://fabrica-frontend.onrender.com/",
      image: "/fabrica.png",
    },
    {
      title: "Sportify",
      description: "A sports website built with MERN Stack which contains a vast collection of sport shops.",
      link: "https://sportify-1-tkwr.onrender.com/",
      image: "/sportify.png",
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-transparent flex flex-col items-center px-4">
      <h2 className="font-poppins text-4xl font-bold mb-12">My Projects</h2>
      
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

