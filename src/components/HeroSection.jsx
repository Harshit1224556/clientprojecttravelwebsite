import React from 'react';
import { Phone } from 'lucide-react';
import './HeroSection.css';

const HeroSection = ({ title, subtitle, bgImage }) => {
  const defaultBg = "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1200&auto=format&fit=crop";
  const backgroundUrl = bgImage || defaultBg;

  return (
    <div 
      className="hero" 
      style={{
        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.8)), url(${backgroundUrl})`
      }}
    >
      <div className="container hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        
        <div className="hero-actions">
          <a href="tel:+919090913111" className="btn btn-gold hero-btn">
            <Phone size={20} style={{ marginRight: '8px' }} />
            Book Now: +91 9090913111
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
