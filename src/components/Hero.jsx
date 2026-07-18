import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from './BlurText';
import StarBorder from './StarBorder';
import ThreeCenterpiece from './ThreeCenterpiece';
import './Hero.css';

const Hero = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    // Simulating font load for the animation trigger
    const timer = setTimeout(() => {
      setFontsLoaded(true);
    }, 100);
    
    // 7-second animation loop: 
    // Wait 4 seconds, fade out text & zoom out circle for 3 seconds, then repeat.
    const loopInterval = setInterval(() => {
      setIsTextVisible(false);
      
      // Bring back after 3 seconds
      setTimeout(() => {
        setIsTextVisible(true);
      }, 3000);
    }, 7000);

    return () => {
      clearTimeout(timer);
      clearInterval(loopInterval);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="hero-section-new"
    >
      <ThreeCenterpiece isZoomed={!isTextVisible} />

      <div className="hero-content-new">
        
        {/* Profile Picture / Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={fontsLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={fontsLoaded ? {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          } : { duration: 0 }}
          className="profile-container"
        >
          <div className="profile-glow"></div>
          <img 
            src="/logo.png" 
            alt="Swami Mobile Shopee" 
            className="profile-img"
            onError={(e) => {
              e.target.onerror = null;
              // Fallback if no logo
              e.target.style.display = 'none';
            }}
          />
        </motion.div>
        
        {/* The orchestrating wrapper for fading out the text elements */}
        <AnimatePresence mode="wait">
          {isTextVisible && (
            <motion.div
              key="hero-text-content"
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={fontsLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={fontsLoaded ? { 
                  duration: 1.2, 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  repeatDelay: 5,
                  ease: "easeOut" 
                } : { duration: 0 }}
                className="availability-badge-new"
              >
                <span className="availability-text">
                  Available for new services
                </span>
              </motion.div>

              <h1 className="hero-title-new">
                <span>Your Device,</span>
                <span className="blur-gradient-accent">Our Responsibility.</span>
              </h1>

              <div className="subtitle-container">
                <p className="subtitle-text">
                  Welcome to Swami Mobile Shopee. Your one-stop destination for mobile sales, expert repairs, and premium accessories.
                </p>
              </div>
              
              <div className="hero-buttons-new">
                <div onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>
                  <StarBorder className="btn btn-outline hero-btn">
                    View Services
                  </StarBorder>
                </div>
                <div onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  <StarBorder className="btn btn-outline hero-btn">
                    Contact Us
                  </StarBorder>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Hero;
