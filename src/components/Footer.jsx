import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import logoImg from '../assets/watermark.png';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    device: '',
    task: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `*New Repair Booking*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Device Model:* ${formData.device}\n*Repair Task:* ${formData.task}\n*Notes:* ${formData.notes || 'None'}`;
    
    // 1. Send to WhatsApp
    const whatsappUrl = `https://wa.me/919654760770?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // 2. Send to Gmail via default mail client
    const mailtoUrl = `mailto:support@swamimobile.com?subject=${encodeURIComponent("Repair Booking: " + formData.device)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    
    // Reset form after submission
    setFormData({ name: '', phone: '', email: '', device: '', task: '', notes: '' });
  };

  return (
    <footer className="footer-section" id="contact">
      <div className="container contact-container">
        
        {/* Header Section */}
        <div className="contact-header">
          <span className="contact-badge">GET IN TOUCH</span>
          <h2 className="contact-title">Book a Repair or Contact Us</h2>
          <p className="contact-subtitle">
            Fill in the booking form to reserve a fast-track repair slot or request a custom quote. Our
            technicians will reach out within 15 minutes.
          </p>
        </div>

        {/* Content Layout */}
        <div className="contact-layout">
          
          {/* Left Column: Info & Map */}
          <div className="contact-info-col">
            
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <Phone className="contact-icon" size={20} />
              </div>
              <div className="contact-details">
                <span className="contact-label">PHONE HELPLINE</span>
                <strong className="contact-value">+91 9654 760 770</strong>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <Mail className="contact-icon" size={20} />
              </div>
              <div className="contact-details">
                <span className="contact-label">EMAIL SUPPORT</span>
                <strong className="contact-value">support@swamimobile.com</strong>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <MapPin className="contact-icon" size={20} />
              </div>
              <div className="contact-details">
                <span className="contact-label">WORKSHOP LOCATION</span>
                <strong className="contact-value">Shop No. 12, Main Market, Pune, MH</strong>
              </div>
            </div>

            {/* CSS Map Card */}
            <div className="contact-map-card">
              <div className="map-grid"></div>
              <div className="map-road map-road-1"></div>
              <div className="map-road map-road-2"></div>
              <div className="map-road map-road-3"></div>
              <div className="map-pin-container">
                <div className="map-pin"></div>
                <span className="map-pin-label">SWAMI MOBILE</span>
              </div>
              <button className="btn-get-directions" onClick={() => window.open('https://maps.google.com/?q=Pune', '_blank')}>
                Get Directions
              </button>
            </div>

          </div>

          {/* Right Column: Booking Form */}
          <div className="contact-form-col">
            <form className="booking-form" onSubmit={handleSubmit}>
              
              <div className="form-row">
                <div className="form-group">
                  <label>FULL NAME *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Aryan Sharma" required />
                </div>
                <div className="form-group">
                  <label>PHONE NUMBER *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. +91 98765 43210" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>EMAIL ADDRESS *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. aryan@gmail.com" required />
                </div>
                <div className="form-group">
                  <label>DEVICE MODEL *</label>
                  <input type="text" name="device" value={formData.device} onChange={handleChange} placeholder="e.g. iPhone 15 Pro Max" required />
                </div>
              </div>

              <div className="form-group">
                <label>SELECT REPAIR TASK *</label>
                <select name="task" value={formData.task} onChange={handleChange} required>
                  <option value="" disabled>-- Choose repair type --</option>
                  <option value="screen">Screen Replacement</option>
                  <option value="battery">Battery Replacement</option>
                  <option value="water">Water Damage</option>
                  <option value="software">Software Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>ADDITIONAL NOTES / SYMPTOMS (OPTIONAL)</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us what happened (e.g. dropped in sink, screen flashes green, etc.)"
                  rows="4"
                ></textarea>
              </div>

              <div className="form-footer">
                <span className="support-status">Support team is currently online.</span>
                <button type="submit" className="btn-submit">
                  <Send size={18} />
                  Submit Booking
                </button>
              </div>

            </form>
          </div>
          
        </div>

        <div className="footer-copyright" style={{ marginTop: '4rem', textAlign: 'center', color: '#6b7280', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Swami Mobile. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
