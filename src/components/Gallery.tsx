'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const images = [
  { id: 1, src: '/gallery1.png', title: 'Kids Training Session', category: 'Coaching' },
  { id: 2, src: '/gallery2.png', title: 'Professional BWF Courts', category: 'Facility' },
  { id: 3, src: '/gallery3.png', title: 'Elite Match Play', category: 'Action' },
  { id: 4, src: '/gallery4.png', title: 'Our Badminton Community', category: 'Academy' },
  { id: 5, src: '/hero.png', title: 'Training Like a Champion', category: 'Academy' },
  { id: 6, src: '/gallery1.png', title: 'Fundamentals Focus', category: 'Coaching' },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<any>(null);

  return (
    <section id="gallery" style={{ padding: 'min(100px, 12vw) 24px', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <span className="section-tag">Academy Life</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '24px' }}>
            Experience <span style={{ color: 'var(--accent)' }}>A+ Badminton</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            A glimpse into our training sessions, professional facilities, and the vibrant community of athletes at our academy.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px'
        }}>
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              layoutId={`img-${img.id}`}
              onClick={() => setSelectedImg(img)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ 
                position: 'relative', 
                borderRadius: '24px', 
                overflow: 'hidden', 
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '1px solid var(--glass-border)',
                aspectRatio: '4/3'
              }}
              whileHover={{ y: -10 }}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '24px',
                opacity: 1,
                transition: 'opacity 0.3s'
              }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>{img.category}</span>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 950, color: '#fff', margin: 0 }}>{img.title}</h4>
              </div>
              <div style={{ 
                position: 'absolute', 
                top: '20px', 
                right: '20px', 
                background: 'rgba(255,255,255,0.2)', 
                backdropFilter: 'blur(10px)',
                padding: '8px', 
                borderRadius: '50%',
                color: '#fff'
              }}>
                <Maximize2 size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ 
              position: 'fixed', 
              inset: 0, 
              background: 'rgba(0,0,0,0.95)', 
              zIndex: 3000, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              padding: '40px' 
            }}
            onClick={() => setSelectedImg(null)}
          >
            <button 
              style={{ position: 'absolute', top: '40px', right: '40px', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </button>
            <motion.div
              layoutId={`img-${selectedImg.id}`}
              style={{ maxWidth: '1200px', width: '100%', height: '80vh', position: 'relative' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg.src} 
                alt={selectedImg.title} 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
              <div style={{ position: 'absolute', bottom: '-60px', left: 0, right: 0, textAlign: 'center', color: '#fff' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 950 }}>{selectedImg.title}</h3>
                <p style={{ opacity: 0.6 }}>{selectedImg.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
