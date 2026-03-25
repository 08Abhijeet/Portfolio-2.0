"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const [email, setEmail] = useState("");

  const revealTransition = (delay = 0) => ({
    duration: 0.7,
    ease: "easeOut" as const,
    delay,
  });

  return (
    <footer ref={ref} className="footer-root">
      {/* ── Top Section ── */}
      <motion.div
        className="footer-top"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={revealTransition(0)}
      >
        {/* Left nav links */}
        <div className="footer-nav">
          <div className="footer-nav-col">
            <a href="#about"    className="footer-link">About</a>
            <a href="#skills"   className="footer-link">Skills</a>
          </div>
          <div className="footer-nav-col">
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#contact"  className="footer-link">Contact</a>
          </div>
        </div>

        {/* Right: email CTA */}
        <div className="footer-cta">
          <p className="footer-cta-title">Still have questions?</p>
          <div className="footer-email-row">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer-email-input"
            />
            <a
              href={`mailto:abhijeetkadam2004@gmail.com?subject=Hello Abhijeet&body=${encodeURIComponent(email)}`}
              className="footer-send-btn"
            >
              Send&nbsp;→
            </a>
          </div>

          {/* Social icons */}
          <div className="footer-socials">
            <a href="https://github.com/08Abhijeet" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/abhijeet-kadam-087809259/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.instagram.com/_abhi_.kadam/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </motion.div>

      {/* ── Big Name — revealed from bottom ── */}
      <div className="footer-name-wrap">
        <motion.div
          className="footer-name-inner"
          initial={{ y: "105%" }}
          animate={isInView ? { y: "0%" } : { y: "105%" }}
          transition={{ duration: 0.9, ease: "easeOut" as const, delay: 0.15 }}
        >
          <span className="footer-name-text">Abhijeet</span>
        </motion.div>
      </div>

      {/* ── Bottom Bar ── */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={revealTransition(0.35)}
      >
        <p className="footer-copy">© {new Date().getFullYear()} Abhijeet Kadam. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="https://github.com/08Abhijeet" target="_blank" rel="noopener noreferrer" className="footer-bottom-link">GitHub</a>
          <a href="https://www.linkedin.com/in/abhijeet-kadam-087809259/" target="_blank" rel="noopener noreferrer" className="footer-bottom-link">LinkedIn</a>
        </div>
      </motion.div>

      <style>{`
        .footer-root {
          position: relative;
          width: 100%;
          background: rgba(10, 10, 10, 0.35);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
          padding-top: 3rem;
          margin-top: 0;
        }

        /* ── Top ── */
        .footer-top {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
          padding: 0 4vw 2.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        /* Nav */
        .footer-nav {
          display: flex;
          gap: 4rem;
        }
        .footer-nav-col {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .footer-link {
          color: rgba(255,255,255,0.55);
          font-family: Poppins, sans-serif;
          font-size: 0.95rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #fff; }

        /* CTA */
        .footer-cta {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 440px;
        }
        .footer-cta-title {
          font-family: Poppins, sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        .footer-email-row {
          display: flex;
          gap: 0.6rem;
          align-items: center;
        }
        .footer-email-input {
          flex: 1;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 999px;
          padding: 0.6rem 1.1rem;
          color: #fff;
          font-family: Poppins, sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .footer-email-input::placeholder { color: rgba(255,255,255,0.35); }
        .footer-email-input:focus { border-color: rgba(255,255,255,0.4); }

        .footer-send-btn {
          background: #c6f135;
          color: #0a0a0a;
          font-family: Poppins, sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          border: none;
          border-radius: 999px;
          padding: 0.6rem 1.4rem;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: opacity 0.2s, transform 0.2s;
          display: inline-flex;
          align-items: center;
        }
        .footer-send-btn:hover { opacity: 0.88; transform: scale(1.04); }

        /* Socials */
        .footer-socials {
          display: flex;
          gap: 1rem;
          margin-top: 0.2rem;
        }
        .footer-social-link {
          color: rgba(255,255,255,0.45);
          font-size: 1.25rem;
          text-decoration: none;
          transition: color 0.2s, transform 0.2s;
        }
        .footer-social-link:hover { color: #fff; transform: translateY(-3px); }

        /* ── Big Name ── */
        .footer-name-wrap {
          overflow: hidden;
          /* Extra bottom padding so descender of 'j' is visible */
          padding: 1.5rem 1.5vw 0.35em;
          margin-top: 1rem;
          text-align: center;
        }
        .footer-name-inner {
          will-change: transform;
        }
        @keyframes shine-text {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .footer-name-text {
          display: inline-block;
          font-family: Poppins, Arial, sans-serif;
          font-size: clamp(72px, 15vw, 210px);
          font-weight: 900;
          background: linear-gradient(90deg, #18181A 0%, #333333 40%, #FFFFFF 50%, #333333 60%, #18181A 100%);
          background-size: 200% auto;
          animation: shine-text 5s linear infinite;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 0.06em;
          /* Shift text up slightly so full descender of j is visible */
          position: relative;
          top: -0.05em;
          white-space: nowrap;
          user-select: none;
          line-height: 1;
        }

        /* ── Bottom Bar ── */
        .footer-bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 4vw 1.4rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .footer-copy {
          font-family: Poppins, sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
          margin: 0;
        }
        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }
        .footer-bottom-link {
          font-family: Poppins, sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-bottom-link:hover { color: #fff; }

        @media (max-width: 640px) {
          .footer-top { flex-direction: column; }
          .footer-nav { gap: 2rem; }
          .footer-email-row { flex-direction: column; align-items: stretch; }
          .footer-send-btn { text-align: center; justify-content: center; }
        }
      `}</style>
    </footer>
  );
}
