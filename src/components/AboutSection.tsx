'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" style={{ padding: 'min(120px, 15vw) 24px', background: 'var(--background)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">About the Academy</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '32px' }}>
              Where <span style={{ color: 'var(--accent)' }}>Discipline</span> Meets <span style={{ color: 'var(--accent)' }}>Passion</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', lineHeight: 1.8, marginBottom: '40px' }}>
              Founded by Priyadarshan Sir, A+ Badminton Academy is more than just a training center. It's a community dedicated to the pursuit of excellence in badminton. Our philosophy centers on mastering the fundamentals, building elite physical fitness, and fostering a disciplined yet friendly environment.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ color: 'var(--accent)' }}><Target size={24} /></div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 900 }}>Fundamentals First</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: 1.5 }}>We believe a strong foundation is key to long-term success on the court.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ color: 'var(--accent)' }}><Heart size={24} /></div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 900 }}>Fitness & Stamina</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: 1.5 }}>Integrated fitness sessions to ensure our players are match-ready and injury-free.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ color: 'var(--accent)' }}><Award size={24} /></div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 900 }}>Expert Coaching</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: 1.5 }}>Learn from the best with personalized attention from Priyadarshan Sir.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ color: 'var(--accent)' }}><User size={24} /></div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 900 }}>Supportive Community</h4>
                <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: 1.5 }}>A friendly environment where players of all ages support each other's growth.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual/Coach Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            <div 
              className="glass-card" 
              style={{ 
                padding: '48px', 
                borderRadius: '40px', 
                background: 'var(--accent)', 
                color: 'var(--background)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '60%', height: '60%', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(50px)' }} />
              
              <h3 style={{ fontSize: '2rem', fontWeight: 950, marginBottom: '24px', position: 'relative', zIndex: 1 }}>Meet Our Head Coach</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 950 }}>P</div>
                <div>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: 950, margin: 0 }}>Priyadarshan Sir</h4>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>Founder & Head Coach</p>
                </div>
              </div>
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <span style={{ fontSize: '0.8rem', opacity: 0.6, fontWeight: 700, display: 'block', marginBottom: '4px' }}>EXPERIENCE</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>10+ Years of Professional Coaching</span>
                  </div>
                  <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <span style={{ fontSize: '0.8rem', opacity: 0.6, fontWeight: 700, display: 'block', marginBottom: '4px' }}>SPECIALIZATION</span>
                    <span style={{ fontSize: '1.1rem', fontWeight: 900 }}>Technique Refinement & Match Strategy</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '40px', padding: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', position: 'relative', zIndex: 1 }}>
                <p style={{ fontStyle: 'italic', opacity: 0.9, lineHeight: 1.6, fontSize: '1rem' }}>
                  "My goal is to see every student walk out of this academy not just as a better player, but as a more disciplined and confident individual."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
