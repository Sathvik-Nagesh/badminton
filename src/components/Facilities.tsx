'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wind, Zap, Users, Award, ArrowUpRight, Droplets, Radio } from 'lucide-react';

const bentoItems = [
  {
    title: 'BWF-Elite Courts',
    desc: '8 Olympic-standard wooden courts with multilayered shock absorption and Yonex professional matting.',
    icon: <ShieldCheck size={24} />,
  },
  {
    title: 'Shadow-Free LED Bay',
    desc: '360° uniform lighting calibrated to 1000 lux, eliminating shuttlecock shadows for peak visibility.',
    icon: <Zap size={24} />,
  },
  {
    title: 'Air-Drag Neutralization',
    desc: 'Precision HVAC system maintaining a strictly zero-turbulence environment for perfect shuttle flight.',
    icon: <Wind size={24} />,
  },
  {
    title: 'Players\' Sanctuary',
    desc: 'Premium glass-fronted viewers gallery with professional recovery zone and electrolyte station.',
    icon: <Users size={24} />,
  },
  {
    title: 'National Tactical Lab',
    desc: 'Elite training lab featuring frame-by-frame video feedback and kinetic sensor analytics.',
    icon: <Award size={24} />,
  },
  {
    title: 'Kinetic Geometry',
    desc: 'Advanced footwork-optimized floor textures designed for rapid asymmetric movement.',
    icon: <ArrowUpRight size={24} />,
  },
  {
    title: 'Hydration Engine',
    desc: 'Bespoke electrolyte filtration hub providing temperature-calibrated hydration for peak match endurance.',
    icon: <Droplets size={24} />,
  },
  {
    title: 'Telemetry Lounge',
    desc: 'Architectural recovery viewing pod featuring live biomechanical data feeds and ultra-low noise acoustics.',
    icon: <Radio size={24} />,
  }
];

const Facilities = () => {
  return (
    <section id="facilities" style={{ padding: 'min(100px, 12vw) 24px', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '60px', maxWidth: '800px' }}>
             <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1, marginBottom: '20px' }}>
                Engineered <span style={{ color: 'var(--accent)' }}>for Mastery</span>
             </h2>
           <p style={{ fontSize: '1.05rem', color: 'var(--cream-muted)', maxWidth: '600px', lineHeight: 1.6 }}>
              A boutique athletic environment where every square inch is designed to elevate your game through kinetic precision.
           </p>
        </div>

        {/* Uniform Grid - Responsive alignment */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', 
          gap: '20px',
        }}>
          {bentoItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <div 
                className="liquid-glass"
                style={{ 
                  height: '320px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ 
                    marginBottom: '24px', 
                    background: 'var(--accent-muted)', 
                    width: '52px', height: '52px', 
                    borderRadius: '14px', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 950, 
                    marginBottom: '14px', 
                    letterSpacing: '-0.04em',
                    lineHeight: 1.2
                  }}>{item.title}</h3>
                  <p style={{ 
                    color: 'var(--cream-muted)', 
                    lineHeight: 1.5, 
                    fontSize: '0.95rem', 
                    opacity: 0.9 
                  }}>{item.desc}</p>
                </div>

                <div className="interactive" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: 'var(--accent)', 
                  fontWeight: 900, 
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em'
                }}>
                  EXPLORE <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
