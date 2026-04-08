'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" style={{ padding: 'min(120px, 15vw) 24px', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', 
          gap: 'min(80px, 8vw)', 
          alignItems: 'center' 
        }}>
          
          {/* Content side */}
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1, marginBottom: '32px', fontWeight: 950 }}>
              Located in the <br />
              <span className="text-gradient">Heart of the City</span>
            </h2>
            
            <p style={{ fontSize: '1.2rem', color: 'var(--cream-muted)', marginBottom: '48px', maxWidth: '500px', lineHeight: 1.6 }}>
              AeroElite Kinetic Atelier is strategically positioned for maximum accessibility, merging urban energy with elite performance.
            </p>

            <div style={{ display: 'grid', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ padding: '12px', background: 'var(--accent-muted)', borderRadius: '12px', color: 'var(--accent)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '4px' }}>PHYSICAL ADDRESS</h4>
                  <p style={{ opacity: 0.6, fontWeight: 700 }}>128 Kinetic Avenue, Sector 7, Innovation District</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ padding: '12px', background: 'var(--accent-muted)', borderRadius: '12px', color: 'var(--accent)' }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '4px' }}>OPERATIONAL HOURS</h4>
                  <p style={{ opacity: 0.6, fontWeight: 700 }}>Open 24/7 for Elite Members | 6:00 AM - 11:00 PM Public</p>
                </div>
              </div>
            </div>
          </div>

          {/* Real Google Maps Integration side */}
          <div style={{ position: 'relative', height: 'min(600px, 80vw)', minHeight: '350px' }}>
            <motion.div 
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              className="liquid-glass"
              style={{ 
                height: '100%', 
                width: '100%', 
                overflow: 'hidden',
                borderRadius: 'min(48px, 8vw)',
                background: 'rgba(27, 67, 50, 0.05)',
                position: 'relative'
              }}
            >
               <iframe
                title="AeroElite Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=Singapore+Badminton+Hall&t=&z=15&ie=UTF8&iwloc=&output=embed"
                style={{ filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
              />

              {/* Floating Map Detail Pod (Overlay) */}
              <motion.div
                key="map-hud"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ 
                  position: 'absolute', 
                  bottom: 'min(30px, 4vw)', 
                  right: 'min(30px, 4vw)',
                  padding: '12px 20px',
                  background: 'var(--accent)',
                  color: 'var(--accent-foreground)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: 950,
                  fontSize: '0.7rem',
                  letterSpacing: '0.05em',
                  boxShadow: '0 10px 30px rgba(27,67,50,0.3)'
                }}
              >
                <Navigation size={14} /> HQ_01
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
