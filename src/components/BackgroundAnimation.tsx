'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const leafAnimations = React.useMemo(() => [...Array(6)].map(() => ({
    opacity: [0, 0.08, 0],
    scale: [1, 1.2, 1],
    x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
    y: [Math.random() * 100 + '%', Math.random() * 100 + '%']
  })), []);

  const shuttlecockPositions = React.useMemo(() => [...Array(12)].map(() => ({
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * -20,
    rotate: Math.random() * 360
  })), []);

  if (!mounted) {
    return (
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          background: 'var(--background)',
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.04,
            backgroundImage: `
              linear-gradient(to right, var(--accent) 1px, transparent 1px),
              linear-gradient(to bottom, var(--accent) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
          }}
        />
      </div>
    );
  }

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        background: 'var(--background)',
        overflow: 'hidden',
        pointerEvents: 'none'
      }}
    >
      {/* 1. Underlying Architectural Grid */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage: `
            linear-gradient(to right, var(--accent) 1px, transparent 1px),
            linear-gradient(to bottom, var(--accent) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
        }}
      />

      {/* 2. Floating Kinetic Shuttlecocks (Reduced Count for Performance) */}
      {shuttlecockPositions.slice(0, 6).map((pos, i) => (
        <motion.div
           key={`shuttle-${i}`}
           initial={{ 
             opacity: 0, 
             x: `${pos.initialX}%`, 
             y: `${pos.initialY}%`,
             rotate: pos.rotate 
           }}
           animate={{ 
             y: [`${pos.initialY}%`, `${pos.initialY - 10}%`, `${pos.initialY}%`],
             opacity: [0, 0.05, 0],
             rotate: [pos.rotate, pos.rotate + 20, pos.rotate]
           }}
           transition={{ 
             duration: pos.duration, 
             repeat: Infinity, 
             delay: pos.delay,
             ease: 'linear' 
           }}
           style={{
             position: 'absolute',
             width: '60px',
             height: '60px',
             color: 'var(--accent)',
             filter: 'blur(1px)',
             willChange: 'transform'
           }}
        >
          <svg viewBox="0 0 40 40" fill="currentColor">
            <path d="M20 5 L28 25 L12 25 Z" opacity="0.2" />
            <circle cx="20" cy="30" r="3" />
          </svg>
        </motion.div>
      ))}

      {/* 3. Soft Botanical Shadows (Optimized) */}
      {[...Array(3)].map((_, i) => (
        <motion.div
           key={`leaf-${i}`}
           initial={{ opacity: 0 }}
           animate={{ opacity: [0, 0.04, 0] }}
           transition={{ duration: 30 + i * 10, repeat: Infinity, ease: 'easeInOut' }}
           style={{
             position: 'absolute',
             width: '400px',
             height: '400px',
             background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
             filter: 'blur(60px)',
             borderRadius: '50%',
             left: (i * 30) + '%',
             top: (i * 20) + '%',
             willChange: 'transform'
           }}
        />
      ))}

      {/* 5. Shimmering Dust Motes (Minimalist) */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`mote-${i}`}
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`, 
            opacity: 0 
          }}
          animate={{ 
            opacity: [0, 0.2, 0]
          }}
          transition={{ 
            duration: 10 + Math.random() * 10, 
            repeat: Infinity, 
            delay: Math.random() * 5 
          }}
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            background: 'var(--accent)',
            borderRadius: '50%',
            willChange: 'opacity'
          }}
        />
      ))}

      {/* 6. Subtle Noise Overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
