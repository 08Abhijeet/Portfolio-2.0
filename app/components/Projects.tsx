"use client";

import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Chatify",
      description: "A real-time chat application built with the MERN stack, featuring a fully functional theme section for a personalized user experience.",
      link: "https://chatifywebapp.onrender.com/", // Add your GitHub or live demo link here
    },
    {
      title: "Doc Cluster",
      description: "A multilingual article clustering tool developed using React and Python. It efficiently organizes large sets of articles into meaningful clusters.",
      link: "https://github.com/08Abhijeet/Multilingual-DocuCluster.git", // Add your GitHub or live demo link here
    },
    {
      title: "Fashion store",
      description: "An e-commerce website built with the MERN stack, integrated with Stripe for secure payment processing.",
      link: "https://github.com/08Abhijeet/Multilingual-DocuCluster.git", // Add your GitHub or live demo link here
    },
    {
      title: "Blogging",
      description: "A dynamic blogging platform built with Next.js, allowing users to read, write, and manage articles. Optimized for performance and SEO.",
      link: "https://medium-blogging-website-sigma.vercel.app/", // Add your GitHub or live demo link here
    },
    {
      title: "Fabrica",
      description: "An e-commerce website built with the MERN stack, integrated with Stripe for secure payment processing.",
      link: "https://fabrica-frontend.onrender.com/", // Add your GitHub or live demo link here
    },
        {
      title: "Sportify",
      description: "A sports website built with MERN Stack which contains a vast collection of sport shops.",
      link: "https://sportify-1-tkwr.onrender.com/", // Add your GitHub or live demo link here
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-transparent flex flex-col items-center px-4">
      <h2 className="font-poppins text-4xl font-bold mb-12">My Projects</h2>
      
      {/* --- FIX: Replaced the old container with a responsive Tailwind CSS grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            {/* Front Slide */}
            <div className={`${styles.slide} ${styles.slide1}`}>
              <div className={styles.content}>
                <span>{project.title}</span>
              </div>
            </div>

            {/* Back Slide */}
            <div className={`${styles.slide} ${styles.slide2}`}>
              <div className={styles.content}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h3>{project.title}</h3>
                </a>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

