'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button = ({
  children,
  onClick,
  type = 'primary',
  className = '',
  disabled = false,
  style = {},
}: ButtonProps) => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const addRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
    
    if (onClick) onClick(e);
  };

  const baseStyles = {
    padding: '14px 32px',
    borderRadius: '14px',
    fontWeight: '700',
    fontSize: '1rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    border: 'none',
    opacity: disabled ? 0.6 : 1,
    position: 'relative' as const,
    overflow: 'hidden' as const,
    letterSpacing: '0.02em',
  };

  const primaryStyles = {
    ...baseStyles,
    background: 'var(--foreground)',
    color: 'var(--background)',
    border: '1px solid var(--foreground)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  };

  const secondaryStyles = {
    ...baseStyles,
    background: 'rgba(0,0,0,0)',
    color: 'var(--foreground)',
    border: '1px solid var(--glass-border)',
  };

  const outlineStyles = {
    ...baseStyles,
    background: 'rgba(0,0,0,0)',
    border: '2px solid var(--accent)',
    color: 'var(--accent)',
  };

  const getStyles = () => {
    const base = (() => {
      switch (type) {
        case 'secondary': return secondaryStyles;
        case 'outline': return outlineStyles;
        default: return primaryStyles;
      }
    })();
    return { ...base, ...style };
  };

  return (
    <motion.button
      whileHover={!disabled ? { 
        scale: 1.05, 
        y: -3,
        background: 'var(--accent)',
        color: 'var(--accent-foreground)',
        borderColor: 'var(--accent)',
        boxShadow: `0 15px 35px var(--accent-muted)` 
      } : {}}
      whileTap={!disabled ? { 
        scale: 0.95,
        background: 'var(--accent)',
        color: 'var(--accent-foreground)',
      } : {}}
      onClick={addRipple}
      disabled={disabled}
      className={className}
      style={getStyles() as React.CSSProperties}
    >
      <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: '8px' }}>
        {children}
      </span>
      
      {/* Ripple Layer */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              top: ripple.y,
              left: ripple.x,
              width: '20px',
              height: '20px',
              background: type === 'primary' ? 'rgba(255, 255, 255, 0.8)' : 'var(--accent)',
              borderRadius: '50%',
              userSelect: 'none',
              pointerEvents: 'none',
              zIndex: 1,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};

export default Button;
