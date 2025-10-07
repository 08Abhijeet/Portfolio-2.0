"use client";

import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Chatify",
      technologies: ["MERN Stack", "Socket.IO"],
      description: "A real-time chat application with instant messaging, user authentication, profile management, and a personalized theme section. Built for seamless use on any device.",
      link: "https://chatifywebapp.onrender.com/",
      image: "/chatify.png",
    },
    {
      title: "Doc Cluster",
      technologies: ["React", "Python", "Flask"],
      description: "An intelligent tool that organizes articles into meaningful clusters. It supports multilingual document analysis and efficiently processes large data sets through a clean UI.",
      link: "https://github.com/08Abhijeet/Multilingual-DocuCluster.git",
      image: "/clustering.png",
    },
    {
      title: "Fashion Store",
      technologies: ["MERN Stack", "Stripe"],
      description: "A full e-commerce website with product listings and secure payment processing via Stripe. Features a user-friendly cart, checkout, and an admin panel for management.",
      link: "https://vesteria-frontend.onrender.com/",
      image: "/vesteria.png",
    },
    {
      title: "Blogging Platform",
      technologies: ["PERN Stack", "Next.js"],
      description: "A dynamic and SEO-optimized blogging platform where users can read, write, and manage articles. Built with a clean, intuitive reading experience in mind.",
      link: "https://medium-blogging-website-sigma.vercel.app/",
      image: "/blogging.png",
    },
    {
      title: "Fabrica",
      technologies: ["MERN Stack", "Stripe"],
      description: "A modern e-commerce platform for fabrics with secure Stripe integration. Allows users to browse products, add to cart, and complete purchases seamlessly.",
      link: "https://fabrica-frontend.onrender.com/",
      image: "/fabrica.png",
    },
    {
      title: "Sportify",
      technologies: ["MERN Stack"],
      description: "A sports-focused e-commerce website featuring a vast collection of sports equipment and apparel, a full cart system, and built for scalability.",
      link: "https://sportify-1-tkwr.onrender.com/",
      image: "/sportify.png",
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-transparent flex flex-col items-center px-4">
      <h2 className="font-poppins text-5xl font-bold mb-12">My Projects</h2>

      {/* --- FIX: Simplified the grid classes for better responsive behavior --- */}
      <div className="grid  max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-28">
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={`${styles.slide} ${styles.slide1}`}>
              <div className={styles.imageWrapper}>
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className={`${styles.slide} ${styles.slide2}`}>
              <div className={styles.content}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <h3>{project.title}</h3>
                </a>
             
                <p className={styles.description}>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

