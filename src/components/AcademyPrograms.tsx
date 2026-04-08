'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'Kinetic Foundation',
    level: 'L1-ELEMENTARY',
    desc: 'Mastering the fundamental asymmetric footwork and basic kinetic energy transfer.',
    image: '/stitch/academy_programs_light.png',
    tags: ['Core', 'Footwork', 'Endurance']
  },
  {
    title: 'Tactical Precision',
    level: 'L2-INTERMEDIATE',
    desc: 'High-speed decision making and precision stroke placement in match simulations.',
    image: '/stitch/academy_advanced.png',
    tags: ['Speed', 'Strategy', 'Precision']
  },
  {
    title: 'Elite Chassis',
    level: 'L3-PROFESSIONAL',
    desc: 'Maximum performance training. 1:1 coaching with national level tactical telemetry.',
    image: '/stitch/elite_mastery_advanced.png',
    tags: ['Mastery', 'Pro', 'Elite']
  }
];

const AcademyPrograms = () => {
  return (
    <section id="academy" style={{ padding: 'min(120px, 15vw) 24px', background: 'rgba(27, 67, 50, 0.02)', overflow: 'hidden', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '80px', maxWidth: '800px' }}>
          <span className="section-tag" style={{ display: 'inline-block' }}>High Precision Training</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '24px' }}>
               Academy <span style={{ color: 'var(--accent)' }}>Programs</span>
            </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', maxWidth: '600px', lineHeight: 1.6 }}>
            Our training methodologies are built on the principles of kinetic precision and asymmetric movement, ensuring every athlete reaches their peak potential.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '32px' }}>
          {programs.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-card"
              style={{ overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '300px', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={program.image} 
                  alt={program.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, filter: 'grayscale(100%) brightness(0.8)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, var(--background))' }} />
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {program.tags.map((tag, i) => (
                    <span key={i} style={{ 
                      fontSize: '0.65rem', 
                      fontWeight: 900, 
                      padding: '8px 12px', 
                      borderRadius: '100px', 
                      background: 'rgba(255,255,255,0.05)', 
                      backdropFilter: 'blur(5px)',
                      border: '1px solid var(--glass-border)',
                      letterSpacing: '0.05em'
                    }}>{tag}</span>
                  ))}
                </div>
              </div>

              <div style={{ padding: '40px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                   <span style={{ fontSize: '0.7rem', fontWeight: 950, color: 'var(--accent)', letterSpacing: '0.2em' }}>{program.level}</span>
                   <h3 style={{ fontSize: '1.8rem', fontWeight: 950, margin: '15px 0', letterSpacing: '-0.04em' }}>{program.title}</h3>
                   <p style={{ color: 'var(--cream-muted)', lineHeight: 1.6, fontSize: '1rem', marginBottom: '32px' }}>{program.desc}</p>
                </div>
                
                <div className="interactive" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--foreground)', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  VIEW SYLLABUS <ArrowRight size={14} color="var(--accent)" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyPrograms;
