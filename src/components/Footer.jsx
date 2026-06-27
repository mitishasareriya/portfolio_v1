import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import logoImg from '../assets/logo/m_logo.png';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border bg-surface/40 backdrop-blur-xl overflow-hidden mt-20">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-primary/10 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 py-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Side: Logo + Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <motion.a 
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
              aria-label="Home"
            >
              <img 
                src={logoImg} 
                alt="Mitisha Sareriya" 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </motion.a>
            <div className="hidden md:block w-[1px] h-6 bg-border"></div>
            <p className="text-sm text-textSecondary font-medium">
              &copy; {new Date().getFullYear()} Mitisha Sareriya. All rights reserved.
            </p>
          </div>
          
          {/* Right Side: Socials */}
          <div className="flex gap-6">
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-textSecondary hover:text-primary transition-colors duration-300 drop-shadow-none hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
            >
              <Github size={22} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-textSecondary hover:text-secondary transition-colors duration-300 drop-shadow-none hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]"
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a 
              href="mailto:mitisha.sareriya@gmail.com" 
              aria-label="Send Email"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-textSecondary hover:text-accent transition-colors duration-300 drop-shadow-none hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            >
              <Mail size={22} />
            </motion.a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
