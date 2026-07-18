import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GooeyNav from './GooeyNav';
import StaggeredMenu from './StaggeredMenu';
import logoImg from '../assets/watermark.png';
import './Navbar.css';

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
];

const mobileNavItems = [
  ...navItems.map(item => ({ label: item.label, link: item.href })),
  { label: "Contact Us", link: "#contact" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="desktop-nav-wrapper">
        <motion.nav 
          className={`navbar-container ${scrolled ? 'scrolled' : ''}`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="navbar">
            <div className="navbar-top">
              <div className="logo">
                <img src={logoImg} alt="Swami Mobile Logo" style={{ height: '36px', objectFit: 'contain' }} />
              </div>
            </div>
            <div className="nav-content show">
              <div className="nav-links">
                <GooeyNav items={navItems} initialActiveIndex={0} />
              </div>
              <div className="nav-action">
                <a href="#contact" className="btn contact-nav-btn">Contact Us</a>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>

      <div className="mobile-nav-wrapper">
        <StaggeredMenu
          position="right"
          items={mobileNavItems}
          displaySocials={false}
          logoUrl={logoImg}
          colors={['#111827', '#030712']}
          accentColor="#f59e0b"
          isFixed={true}
        />
      </div>
    </>
  );
};

export default Navbar;
