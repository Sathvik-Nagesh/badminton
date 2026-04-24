'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Adults Batch',
    text: 'Priyadarshan Sir focuses heavily on fundamentals. My footwork and stamina have improved significantly since I joined.',
    avatar: 'RS'
  },
  {
    name: 'Anjali Gupta',
    role: 'Parent of Junior Student',
    text: 'A+ Badminton Academy is the best place for kids. The discipline and personal attention they give to each child is remarkable.',
    avatar: 'AG'
  },
  {
    name: 'Vikram Singh',
    role: 'Advanced Training',
    text: 'The best coaching center in Bengaluru! The environment is very friendly yet professional. Highly recommended for serious players.',
    avatar: 'VS'
  },
  {
    name: 'Suresh Kumar',
    role: 'Elite Member',
    text: 'Great infrastructure and excellent coaching. The fitness sessions are intensive and really help in match performance.',
    avatar: 'SK'
  },
  {
    name: 'Megha R.',
    role: 'Beginner Batch',
    text: 'Started as a complete beginner. The coaches are very patient and explain the techniques clearly. Love the atmosphere!',
    avatar: 'MR'
  }
];

const TestimonialMarquee = () => {
  return (
    <section style={{ padding: '80px 0', background: 'var(--background)', overflow: 'hidden' }}>
      <div id="reviews" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span className="section-tag">4.7 ★ (205 Google Reviews)</span>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 950 }}>What Our <span style={{ color: 'var(--accent)' }}>Students</span> Say</h2>
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
