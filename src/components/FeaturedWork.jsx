import React from 'react';
import { Wrench, Smartphone, Headphones, ExternalLink, Activity } from 'lucide-react';
import GlareHover from './GlareHover';
import './FeaturedWork.css';

const FeaturedWork = () => {
  return (
    <section className="section featured-section container" id="products">
      <div className="featured-header">
        <h2 className="featured-title">Featured Services & Products</h2>
        <p className="featured-subtitle">
          A selection of our recent repair work, premium accessories, and smartphones available in store.
        </p>
      </div>

      <div className="featured-grid">
        <GlareHover className="feature-card">
          <div className="feature-card-header">
            <Activity className="icon-small" />
            <Wrench className="icon-large purple" />
            <ExternalLink className="icon-small" />
          </div>
          <h3 className="feature-card-title">Hardware Repair</h3>
          <p className="feature-card-desc">Expert hardware repairing including screen and battery replacements.</p>
          <ul className="feature-card-list">
            <li>Screen & Battery Replacements.</li>
            <li>Motherboard repair & Water damage fixing.</li>
            <li>Charging port and camera repairs.</li>
          </ul>
          <div className="feature-card-tags">
            <span>Hardware</span> <span>Screen</span> <span>Battery</span>
          </div>
        </GlareHover>

        <GlareHover className="feature-card">
          <div className="feature-card-header">
            <Activity className="icon-small" />
            <Smartphone className="icon-large purple" />
            <ExternalLink className="icon-small" />
          </div>
          <h3 className="feature-card-title">Software Solutions</h3>
          <p className="feature-card-desc">Complete software troubleshooting, flashing, and recovery services.</p>
          <ul className="feature-card-list">
            <li>OS Flashing and update fixing.</li>
            <li>Device unlocking and passcode recovery.</li>
            <li>Data backup and recovery services.</li>
          </ul>
          <div className="feature-card-tags">
            <span>Software</span> <span>Flashing</span> <span>Recovery</span>
          </div>
        </GlareHover>

        <GlareHover className="feature-card">
          <div className="feature-card-header">
            <Activity className="icon-small" />
            <Headphones className="icon-large purple" />
            <ExternalLink className="icon-small" />
          </div>
          <h3 className="feature-card-title">Quality Accessories</h3>
          <p className="feature-card-desc">Enhance your device experience with genuine accessories.</p>
          <ul className="feature-card-list">
            <li>TWS Earbuds & Headphones.</li>
            <li>Fast chargers and durable cables.</li>
            <li>Protective cases and tempered glass.</li>
          </ul>
          <div className="feature-card-tags">
            <span>Audio</span> <span>Chargers</span> <span>Cases</span>
          </div>
        </GlareHover>

      </div>
    </section>
  );
};

export default FeaturedWork;
