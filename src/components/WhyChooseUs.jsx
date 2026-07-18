import React from 'react';
import { Shield, Wrench, Clock } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import './WhyChooseUs.css';

const reasons = [
  {
    id: 1,
    icon: <Shield className="reason-icon" size={60} />,
    title: "Quality Work",
    desc: "Expert chip-level service and original quality parts for all repairs.",
    color: "#b45309" // Amber 700
  },
  {
    id: 2,
    icon: <Wrench className="reason-icon" size={60} />,
    title: "Trusted Service",
    desc: "Years of trusted repairs and satisfied customers. Your Device, Our Responsibility.",
    color: "#d97706" // Amber 600
  },
  {
    id: 3,
    icon: <Clock className="reason-icon" size={60} />,
    title: "Customer Satisfaction",
    desc: "We ensure your device is perfectly repaired with fast, secure, and reliable service.",
    color: "#92400e" // Amber 800
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section why-section container" id="why-choose">
      <div className="why-header" style={{ marginBottom: 0 }}>
        <h2 className="why-title">Why Choose Swami Mobile</h2>
        <p className="why-subtitle">
          We bring a unique blend of technical expertise, genuine parts, and customer-first approach to every service.
        </p>
      </div>

      <ScrollStack useWindowScroll={true} itemDistance={100} itemStackDistance={40}>
        {reasons.map((reason) => (
          <ScrollStackItem key={reason.id}>
            <div 
              style={{
                backgroundColor: reason.color,
                width: '100%',
                height: '100%',
                minHeight: '400px',
                borderRadius: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                padding: '3rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                {reason.icon}
              </div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 600 }}>{reason.title}</h3>
              <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '600px' }}>{reason.desc}</p>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};

export default WhyChooseUs;
