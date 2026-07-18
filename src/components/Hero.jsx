import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from './BlurText';
import StarBorder from './StarBorder';
import logoImg from '../assets/watermark.png';
import './Hero.css';

const DotsScatter = () => {
  const dots = Array.from({ length: 24 });
  return (
    <div className="dots-scatter-container">
      {dots.map((_, i) => {
        const angle = (i / dots.length) * Math.PI * 2;
        const radius = 120 + Math.random() * 80;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
            animate={{ x, y, opacity: 0, scale: Math.random() + 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="scatter-dot"
          />
        );
      })}
    </div>
  );
};

const Hero = () => {
  // 0: Text, 1: Transition(Dots), 2: Image
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let timeout1, timeout2, timeout3;
    
    const runCycle = () => {
      // 1. Text is shown. Wait 5s, then switch to Dots.
      timeout1 = setTimeout(() => {
        setPhase(1); // Dots scatter
        
        // 2. Wait 1s for dots to scatter, then show Image.
        timeout2 = setTimeout(() => {
          setPhase(2); // Image zooms in
          
          // 3. Wait 4s for Image, then loop back to Text.
          timeout3 = setTimeout(() => {
            setPhase(0); // Text fades in
            runCycle();
          }, 4000);
          
        }, 1000);
        
      }, 5000);
    };

    runCycle();

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <section className="section hero-section" id="about">
      <div className="hero-content" style={{ position: 'relative', minHeight: '300px' }}>
        <div className="availability-badge" style={{ marginBottom: '2rem' }}>
          <span className="dot"></span>
          Available for new services
        </div>

        <div className="hero-animation-wrapper">
          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.div
                key="text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="hero-text-container"
              >
                <h1 className="hero-title" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.3em' }}>
                  <BlurText
                    text="Your Device,"
                    delay={100}
                    animateBy="words"
                    direction="bottom"
                  />
                  <BlurText
                    text="Our Responsibility."
                    delay={100}
                    animateBy="words"
                    direction="bottom"
                    className="text-gradient"
                  />
                </h1>
                <p className="hero-subtitle mt-4">
                  <strong>SWAMI MOBILE SHOPEE</strong> <br />
                  MOBILE | REPAIRING | ACCESSORIES
                </p>
                <div className="hero-buttons">
                  <StarBorder className="btn btn-outline hero-btn">View Services</StarBorder>
                  <StarBorder className="btn btn-outline hero-btn">Visit Store</StarBorder>
                </div>
              </motion.div>
            )}

            {phase === 1 && (
              <motion.div key="dots" className="dots-container">
                <DotsScatter />
              </motion.div>
            )}

            {phase === 2 && (
              <motion.div
                key="image"
                initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.2, filter: 'blur(20px)' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="hero-image-container"
              >
                <img 
                  src={logoImg} 
                  alt="Swami Mobile Shopee Logo" 
                  className="hero-logo-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x300.png?text=Swami+Mobile+Logo";
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
