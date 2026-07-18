import React from 'react';
import { Smartphone, Battery, Plug, Cpu, Wifi, Volume2, ExternalLink, Activity } from 'lucide-react';
import GlareHover from './GlareHover';
import './FeaturedWork.css';

const FeaturedWork = () => {
  return (
    <section className="section featured-section container" id="products">
      <div className="featured-header">
        <h2 className="featured-title">Expert Mobile Repairs!</h2>
        <p className="featured-subtitle" style={{ fontSize: '1.2rem', marginTop: '0.5rem', color: '#f59e0b' }}>
          तुमच्या विश्वासाचे मोबाईल दुरुस्ती केंद्र! (Your trusted destination for mobile repairs)
        </p>
      </div>

      <div className="featured-grid">
        <GlareHover className="feature-card">
          <div className="feature-card-header">
            <Activity className="icon-small" />
            <Smartphone className="icon-large purple" />
            <ExternalLink className="icon-small" />
          </div>
          <h3 className="feature-card-title">Screen & Display</h3>
          <p className="feature-card-desc" style={{ color: '#f59e0b' }}>स्क्रीन आणि डिस्प्ले</p>
          <ul className="feature-card-list">
            <li>Broken glass, blank screens, touch not working, or flashing lights.</li>
            <li style={{ fontSize: '0.85rem', opacity: 0.8 }}>फुटलेला डिस्प्ले, ब्लॅक डिस्प्ले, टच काम न करणे किंवा लाईट्स फ्लॅश होणे.</li>
          </ul>
        </GlareHover>

        <GlareHover className="feature-card">
          <div className="feature-card-header">
            <Activity className="icon-small" />
            <Battery className="icon-large purple" />
            <ExternalLink className="icon-small" />
          </div>
          <h3 className="feature-card-title">Battery & Power</h3>
          <p className="feature-card-desc" style={{ color: '#f59e0b' }}>बॅटरी आणि पॉवर</p>
          <ul className="feature-card-list">
            <li>Fast draining, battery swelling, phone heating up, or turning off randomly.</li>
            <li style={{ fontSize: '0.85rem', opacity: 0.8 }}>बॅटरी लवकर उतरणे, बॅटरी फुगणे, फोन गरम होणे किंवा अचानक बंद पडणे.</li>
          </ul>
        </GlareHover>

        <GlareHover className="feature-card">
          <div className="feature-card-header">
            <Activity className="icon-small" />
            <Plug className="icon-large purple" />
            <ExternalLink className="icon-small" />
          </div>
          <h3 className="feature-card-title">Charging Issues</h3>
          <p className="feature-card-desc" style={{ color: '#f59e0b' }}>चार्जिंगच्या समस्या</p>
          <ul className="feature-card-list">
            <li>Loose charging ports, phone not charging, or slow charging.</li>
            <li style={{ fontSize: '0.85rem', opacity: 0.8 }}>ढीले चार्जिंग पोर्ट, फोन चार्ज न होणे किंवा हळू चार्ज होणे.</li>
          </ul>
        </GlareHover>

        <GlareHover className="feature-card">
          <div className="feature-card-header">
            <Activity className="icon-small" />
            <Cpu className="icon-large purple" />
            <ExternalLink className="icon-small" />
          </div>
          <h3 className="feature-card-title">Motherboard & Chip (IC)</h3>
          <p className="feature-card-desc" style={{ color: '#f59e0b' }}>मदरबोर्ड आणि आयसी दुरुस्ती</p>
          <ul className="feature-card-list">
            <li>Advanced micro-soldering for dead phones, water damage, and power failures.</li>
            <li style={{ fontSize: '0.85rem', opacity: 0.8 }}>डेड फोन्स, पाणी लागून खराब होणे आणि पॉवर फेल्युअरसाठी प्रगत मायक्रो-सोल्डरिंग.</li>
          </ul>
        </GlareHover>

        <GlareHover className="feature-card">
          <div className="feature-card-header">
            <Activity className="icon-small" />
            <Wifi className="icon-large purple" />
            <ExternalLink className="icon-small" />
          </div>
          <h3 className="feature-card-title">Signal & Network</h3>
          <p className="feature-card-desc" style={{ color: '#f59e0b' }}>सिग्नल आणि नेटवर्क</p>
          <ul className="feature-card-list">
            <li>No network bars, Wi-Fi not connecting, or dropped calls.</li>
            <li style={{ fontSize: '0.85rem', opacity: 0.8 }}>नेटवर्क बार्स नसणे, वाय-फाय कनेक्ट न होणे किंवा कॉल कट होणे.</li>
          </ul>
        </GlareHover>

        <GlareHover className="feature-card">
          <div className="feature-card-header">
            <Activity className="icon-small" />
            <Volume2 className="icon-large purple" />
            <ExternalLink className="icon-small" />
          </div>
          <h3 className="feature-card-title">Sound & Audio</h3>
          <p className="feature-card-desc" style={{ color: '#f59e0b' }}>आवाज आणि ऑडिओ</p>
          <ul className="feature-card-list">
            <li>Mic not working, silent loudspeakers, or low sound during calls.</li>
            <li style={{ fontSize: '0.85rem', opacity: 0.8 }}>माईक काम न करणे, सायलेंट लाउडस्पीकर किंवा कॉल्सदरम्यान कमी आवाज येणे.</li>
          </ul>
        </GlareHover>
      </div>
    </section>
  );
};

export default FeaturedWork;
