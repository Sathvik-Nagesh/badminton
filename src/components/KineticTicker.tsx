'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  "BWF CERTIFIED WOOD",
  "HYGROMETRIC SENSING",
  "SMASH VELOCITY: 426 KPH",
  "KINETIC TELEMETRY",
  "BWF GRADE 1 FEATHERAGE",
  "BG80 PRECISION STRUNG",
  "HIGH MODULUS GRAPHITE",
  "ACADEMY PROTOCOL V4",
  "OPTIMAL STRING TENSION: 28LBS"
];

const KineticTicker = () => {
  return (
    <div style={{ 
      width: '100%', 
      overflow: 'hidden', 
      background: 'var(--glass)', 
      borderTop: '1px solid var(--glass-border)',
      borderBottom: '1px solid var(--glass-border)',
      padding: '24px 0',
      position: 'relative',
      zIndex: 10
    }}>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content' }}
      >
        {[...stats, ...stats].map((stat, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '32px', paddingRight: '60px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 950, color: 'var(--foreground)', letterSpacing: '0.3em' }}>
              {stat}
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent)" opacity="0.6">
               <path d="M12 2 L18 18 L12 22 L6 18 Z" opacity="0.3" />
               <circle cx="12" cy="7" r="2" />
            </svg>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default KineticTicker;
