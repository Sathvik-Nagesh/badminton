'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  "EXPERT COACHING",
  "FITNESS & STAMINA",
  "KIDS & ADULTS BATCHES",
  "FUNDAMENTALS FOCUS",
  "STATE-OF-THE-ART COURTS",
  "PERSONAL ATTENTION",
  "FRIENDLY ENVIRONMENT",
  "TRAIN LIKE A CHAMPION",
  "DISCIPLINED TRAINING"
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
