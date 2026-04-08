'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const GlassCard = ({ children, className = '', style = {} }: GlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Efficiently update CSS variables without triggering React re-renders
    cardRef.current.style.setProperty('--mouse-x', `${x}%`);
    cardRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`liquid-glass ${className}`}
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        ...style
      } as any}
    >
      {/* Subtle Background Glow for Mouse Interaction */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), var(--accent-muted) 0%, transparent 40%)`,
        opacity: 0.15,
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
