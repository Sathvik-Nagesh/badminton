'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, ShieldCheck, Clock } from 'lucide-react';
import Reveal from './Reveal';

const features = [
  {
    icon: <Trophy size={32} />,
    title: "Tournament Prep",
    desc: "We don't just teach play; we prepare you for the competitive arena with match-play strategies."
  },
  {
    icon: <Users size={32} />,
    title: "Personalized Focus",
    desc: "Small batch sizes ensure every student gets the correction and attention they deserve."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Safe Environment",
    desc: "A disciplined yet friendly atmosphere where safety and sportsmanship are prioritized."
  },
  {
    icon: <Clock size={32} />,
    title: "Flexible Batches",
    desc: "Morning and evening slots designed to fit into the busy lives of students and professionals."
  }
];

const WhyUs = () => {
  return (
    <section style={{ padding: 'min(100px, 12vw) 24px', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass-card" style={{ padding: '40px', borderRadius: '32px', height: '100%', border: '1px solid var(--glass-border)' }}>
                <div style={{ color: 'var(--accent)', marginBottom: '24px' }}>{f.icon}</div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 950, marginBottom: '16px', letterSpacing: '-0.02em' }}>{f.title}</h4>
                <p style={{ color: 'var(--cream-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
