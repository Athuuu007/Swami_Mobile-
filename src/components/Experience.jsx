import React, { useRef } from 'react';
import { Wrench, Smartphone, Battery, Cpu, Headphones, ArrowRightLeft, Droplet, Camera } from 'lucide-react';
import { ParticleCard, GlobalSpotlight } from './MagicBento';
import './Experience.css';

const Experience = () => {
  const gridRef = useRef(null);

  return (
    <section className="section experience-section container bento-section" id="services" ref={gridRef}>
      <GlobalSpotlight gridRef={gridRef} glowColor="245, 158, 11" />
      
      <div className="services-header">
        <h2>Our Services</h2>
        <p className="text-secondary">Expert solutions for all your mobile needs</p>
      </div>

      <div className="services-grid">
        <ParticleCard glowColor="245, 158, 11" className="card service-card text-center magic-bento-card magic-bento-card--border-glow">
          <div className="icon-wrapper purple"><Wrench className="icon" /></div>
          <span className="badge">Hardware</span>
          <h4>Mobile Repair</h4>
          <p className="company">Expert Chip-Level Service</p>
        </ParticleCard>

        <ParticleCard glowColor="245, 158, 11" className="card service-card text-center magic-bento-card magic-bento-card--border-glow">
          <div className="icon-wrapper blue"><Smartphone className="icon" /></div>
          <span className="badge">Hardware</span>
          <h4>Display Replacement</h4>
          <p className="company">Original Quality & OLED Options</p>
        </ParticleCard>

        <ParticleCard glowColor="245, 158, 11" className="card service-card text-center magic-bento-card magic-bento-card--border-glow">
          <div className="icon-wrapper orange"><Battery className="icon" /></div>
          <span className="badge">Hardware</span>
          <h4>Battery Replacement</h4>
          <p className="company">Genuine & High-Capacity Cells</p>
        </ParticleCard>

        <ParticleCard glowColor="245, 158, 11" className="card service-card text-center magic-bento-card magic-bento-card--border-glow">
          <div className="icon-wrapper teal"><Cpu className="icon" /></div>
          <span className="badge">Software</span>
          <h4>Software Solutions</h4>
          <p className="company">Unlocking, Flashing, Data Recovery</p>
        </ParticleCard>

        <ParticleCard glowColor="245, 158, 11" className="card service-card text-center magic-bento-card magic-bento-card--border-glow">
          <div className="icon-wrapper yellow"><Headphones className="icon" /></div>
          <span className="badge">Sales</span>
          <h4>Accessories</h4>
          <p className="company">Premium Cables, Cases, Audios</p>
        </ParticleCard>

        <ParticleCard glowColor="245, 158, 11" className="card service-card text-center magic-bento-card magic-bento-card--border-glow">
          <div className="icon-wrapper green"><ArrowRightLeft className="icon" /></div>
          <span className="badge">Hardware / Software</span>
          <h4>Data Transfer</h4>
          <p className="company">Fast, Secure & All Devices</p>
        </ParticleCard>

        <ParticleCard glowColor="245, 158, 11" className="card service-card text-center magic-bento-card magic-bento-card--border-glow">
          <div className="icon-wrapper cyan"><Droplet className="icon" /></div>
          <span className="badge">Hardware</span>
          <h4>Water Damage Repair</h4>
          <p className="company">Deep Cleaning & Recovery</p>
        </ParticleCard>

        <ParticleCard glowColor="245, 158, 11" className="card service-card text-center magic-bento-card magic-bento-card--border-glow">
          <div className="icon-wrapper pink"><Camera className="icon" /></div>
          <span className="badge">Hardware</span>
          <h4>Camera Repair</h4>
          <p className="company">Lens & Sensor Replacement</p>
          <p className="company" style={{ fontSize: '0.8rem', marginTop: '-0.3rem', color: 'var(--text-secondary)' }}>(As per availability)</p>
        </ParticleCard>
      </div>
    </section>
  );
};

export default Experience;
