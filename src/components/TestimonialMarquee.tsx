'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun M.',
    role: 'National Ranking #4',
    text: 'The BWF-spec surfaces here are unparalleled. My footwork precision increased by 15% in just 3 weeks.',
    avatar: 'AM'
  },
  {
    name: 'Sara Khan',
    role: 'Elite Member',
    text: 'AeroElite isn’t just a club; it’s a high-performance laboratory. The atmosphere is purely kinetic.',
    avatar: 'SK'
  },
  {
    name: 'David Low',
    role: 'Head of Coaching',
    text: 'Finally, a facility that treats badminton with the architectural respect it deserves.',
    avatar: 'DL'
  },
  {
    name: 'Elena R.',
    role: 'Professional Circuit',
    text: 'The zero-turbulence airflow is a game changer. The shuttlecock trajectory is 100% predictable.',
    avatar: 'ER'
  },
  {
    name: 'Kevin J.',
    role: 'Junior Champion',
    text: 'Training here feels like years ahead of any other academy. The tech integration is insane.',
    avatar: 'KJ'
  }
];

const TestimonialMarquee = () => {
  return (
    <section style={{ padding: '80px 0', background: 'var(--background)', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span className="section-tag">Social Proof</span>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 950 }}>Elite Endorsements</h2>
      </div>

      <div style={{ display: 'flex', position: 'relative', width: '100%' }}>
        {/* Double the list for seamless loop */}
        <motion.div
          className="testimonial-marquee-track"
          animate={{ x: [0, '-50%'] }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{ display: 'flex', gap: '30px', padding: '10px' }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                minWidth: '400px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                borderRadius: '32px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--accent)" stroke="none" />)}
                </div>
                <Quote size={24} opacity={0.1} />
              </div>
              <p style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.5, color: 'var(--foreground)' }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '10px' }}>
                <div style={{ 
                  width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.8rem', fontWeight: 950, color: 'var(--accent-foreground)'
                }}>
                  {t.avatar}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 950, margin: 0 }}>{t.name}</h4>
                  <span style={{ fontSize: '0.75rem', opacity: 0.5, fontWeight: 700 }}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;
