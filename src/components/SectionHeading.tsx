'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({ title, subtitle, align = 'center' }: SectionHeadingProps) => {
  return (
    <div 
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
      style={{ display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start' }}
    >
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: '48px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          height: '4px',
          background: 'var(--accent)',
          borderRadius: '10px',
          marginBottom: '24px',
          boxShadow: '0 0 15px var(--accent-muted)'
        }}
      />
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
          fontWeight: 900,
          color: 'var(--cream)',
          marginBottom: '16px',
          letterSpacing: '-0.04em',
          lineHeight: 1.1
        }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: '1.2rem',
            color: 'var(--cream-muted)',
            maxWidth: '650px',
            lineHeight: 1.6,
            fontWeight: 500
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
