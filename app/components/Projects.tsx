"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconMessageCircle, IconFileText, IconHanger, IconChartBar, IconTexture, IconBallBasketball } from "@tabler/icons-react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Chatify",
      technologies: ["MERN Stack", "Socket.IO"],
      description: "A real-time chat application with instant messaging, user authentication, profile management, and a personalized theme section. Built for seamless use on any device.",
      link: "https://chatifywebapp.onrender.com/",
      image: "/chatify.png",
      icon: <IconMessageCircle size={90} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />,
    },
    {
      title: "Doc Cluster",
      technologies: ["React", "Python", "Flask"],
      description: "An intelligent tool that organizes articles into meaningful clusters. It supports multilingual document analysis and efficiently processes large data sets through a clean UI.",
      link: "https://github.com/08Abhijeet/Multilingual-DocuCluster.git",
      image: "/clustering.png",
      icon: <IconFileText size={90} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />,
    },
    {
      title: "Fashion Store",
      technologies: ["MERN Stack", "Stripe"],
      description: "A full e-commerce website with product listings and secure payment processing via Stripe. Features a user-friendly cart, checkout, and an admin panel for management.",
      link: "https://vesteria-frontend.onrender.com/",
      image: "/vesteria.png",
      icon: <IconHanger size={90} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />,
    },
    {
      title: "InsightForge",
      technologies: ["Next.js", "FastAPI", "Python", "LangChain"],
      description: "An AI-powered analytics platform that transforms raw datasets into insights, visualizations, and business recommendations. Features an automated pipeline for data preprocessing and a modern frontend dashboard for non-technical users.",
      link: "#",
      image: "/insightforge.png",
      icon: <IconChartBar size={90} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />,
    },
    {
      title: "Fabrica",
      technologies: ["MERN Stack", "Stripe"],
      description: "A modern e-commerce platform for fabrics with secure Stripe integration. Allows users to browse products, add to cart, and complete purchases seamlessly.",
      link: "https://fabrica-frontend.onrender.com/",
      image: "/fabrica.png",
      icon: <IconTexture size={90} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />,
    },
    {
      title: "Sportify",
      technologies: ["MERN Stack"],
      description: "A sports-focused e-commerce website featuring a vast collection of sports equipment and apparel, a full cart system, and built for scalability.",
      link: "https://sportify-1-tkwr.onrender.com/",
      image: "/sportify.png",
      icon: <IconBallBasketball size={90} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />,
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-transparent flex flex-col items-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center justify-center mb-16 z-10 bg-black/50 backdrop-blur-2xl border border-white/10 px-6 py-5 sm:px-10 sm:py-6 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.5)] w-fit max-w-[95vw] border-t-white/20 mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
          <span className="text-sm font-medium text-gray-200 uppercase tracking-widest">Portfolio</span>
        </div>
        <h2 className="font-poppins text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          Featured <span className="bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">Projects</span>
        </h2>
      </motion.div>

      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 pt-10 justify-items-center">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="container-image">
              <div className="image-circle flex-col gap-2 items-center justify-center w-full">
                {project.icon}
                <span className="font-poppins text-sm sm:text-base font-bold text-white tracking-widest uppercase text-center px-4 max-w-[190px] break-words drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
                  {project.title}
                </span>
              </div>
            </div>
            <div className="content">
              <div className="detail">
                <span>{project.title}</span>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                  <button>Visit</button>
                </a>
              </div>
              <div className="product-image">
                <div className="box-image">
                  <img src={project.image} alt={`${project.title} mock`} className="img-product object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

