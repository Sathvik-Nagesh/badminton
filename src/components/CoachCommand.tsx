'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Zap, ChevronRight } from 'lucide-react';

const coaches = [
  {
    name: 'Viktor K.',
    role: 'HEAD TACTICAL COACH',
    specialty: 'Asymmetric Footwork',
    stats: { precision: '98%', speed: '34km/h', experience: '15yr' },
    image: '/stitch/academy_advanced.png'
  },
  {
    name: 'Lin S.',
    role: 'ELITE STRATEGIST',
    specialty: 'Net Play & Geometry',
    stats: { precision: '95%', speed: '32km/h', experience: '12yr' },
    image: '/stitch/elite_mastery_advanced.png'
  },
  {
    name: 'Marcus G.',
    role: 'PHYSIO COMMANDER',
    specialty: 'Recovery & Power',
    stats: { precision: '92%', speed: '40km/h', experience: '10yr' },
    image: '/stitch/academy_programs_light.png'
  }
];

const CoachCommand = () => {
  return (
    <section id="coaches" style={{ padding: '120px 24px', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
          <div>
            <span className="section-tag">Elite Staff</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', marginBottom: '0' }}>Tactical Command</h2>
          </div>
          <p style={{ maxWidth: '380px', color: 'var(--cream-muted)', marginBottom: '10px' }}>
            Our staff consists of international tactical commanders bringing BWF-level precision to every training session.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px' }}>
          {coaches.map((coach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="liquid-glass"
              style={{ padding: '0', height: '520px' }}
            >
              <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                <img src={coach.image} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, var(--background))' }} />
              </div>
              <div style={{ padding: '40px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 950, color: 'var(--accent)', letterSpacing: '0.2em' }}>{coach.role}</span>
                <h3 style={{ fontSize: '1.8rem', margin: '15px 0' }}>{coach.name}</h3>
                <p style={{ color: 'var(--cream-muted)', fontSize: '0.9rem', marginBottom: '30px' }}>Specializing in {coach.specialty} with a focus on tectonic rhythm.</p>
                
                <div style={{ display: 'flex', gap: '30px', borderTop: '1px solid var(--glass-border)', paddingTop: '30px' }}>
                   {Object.entries(coach.stats).map(([label, val]) => (
                     <div key={label}>
                       <span style={{ display: 'block', fontSize: '0.6rem', fontWeight: 950, opacity: 0.5, textTransform: 'uppercase' }}>{label}</span>
                       <span style={{ fontSize: '1.1rem', fontWeight: 950 }}>{val}</span>
                     </div>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachCommand;
