"use client";

import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Chatify",
      description: "A real-time chat application built with the MERN stack, featuring a fully functional theme section for a personalized user experience. Users can send and receive messages instantly with a responsive interface.",
    
    },
    {
      title: "Doc Cluster",
      description: "A multilingual article clustering tool developed using React and Python. It efficiently organizes large sets of articles into meaningful clusters for easier analysis and exploration.",
    
    },
    {
      title: "Fashion store",
      description: "An e-commerce website built with the MERN stack, integrated with Stripe for secure payment processing. Users can browse products, add to cart, and complete purchases seamlessly.",
     
    },
    {
      title: "Blogging",
      description: "A dynamic blogging platform built with Next.js, allowing users to read, write, and manage articles. Optimized for performance and SEO, offering a clean and intuitive reading experience.",
    
    },
      {
      title: "Fabrica",
      description: "An e-commerce website built with the MERN stack, integrated with Stripe for secure payment processing. Users can browse products, add to cart, and complete purchases seamlessly.",
    
    },
  ];

  return (
    <section className="w-full py-20 bg-transparent flex flex-col items-center">
    <h2 className="font-poppins text-4xl font-bold mb-7">My Projects</h2>
     <div className={styles.container}>
  {projects.map((project, index) => (
    <div key={index} className={styles.card}>
      {/* Front Slide */}
      <div className={`${styles.slide} ${styles.slide1}`}>
        <div className={styles.content}>
          {/* Optional text or icon */}
          <span>{project.title}</span>
        </div>
      </div>

      {/* Back Slide */}
      <div className={`${styles.slide} ${styles.slide2}`}>
        <div className={styles.content}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
