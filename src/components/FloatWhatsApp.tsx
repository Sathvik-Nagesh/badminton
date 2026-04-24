'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const FloatWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform scroll to visibility (Show past 300px)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };

    // Idle timer (Show after 7s even if no scroll)
    const idleTimer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    // Tooltip timer (Show after 10s)
    const tooltipTimer = setTimeout(() => {
      if (isVisible) setShowTooltip(true);
    }, 12000);

    // Auto-hide tooltip after 5s
    let hideTooltipTimer: NodeJS.Timeout;
    if (showTooltip) {
      hideTooltipTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(idleTimer);
      clearTimeout(tooltipTimer);
      if (hideTooltipTimer) clearTimeout(hideTooltipTimer);
    };
  }, [isVisible, showTooltip]);

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 2000, display: 'flex', alignItems: 'center', gap: '16px' }}>
      {/* Help Bubble Expansion */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.8 }}
            style={{
              background: '#F5F5F0',
              color: '#0B0B0F',
              padding: '12px 20px',
              borderRadius: '16px 16px 4px 16px',
              fontSize: '0.85rem',
              fontWeight: 800,
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              border: '1px solid rgba(0,0,0,0.05)',
              whiteSpace: 'nowrap',
              pointerEvents: 'none'
            }}
          >
            Join Coaching?
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Icon */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
            }}
            transition={{ 
              delay: 1.5,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <motion.button
              onClick={() => {
                const msg = encodeURIComponent("Hi A+ Badminton Academy! I'm interested in joining the coaching programs. Could you share more details?");
                window.open(`https://wa.me/919686665516?text=${msg}`, '_blank');
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                scale: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{
                width: 'clamp(56px, 10vw, 64px)',
                height: 'clamp(56px, 10vw, 64px)',
                borderRadius: '50%',
                background: '#F5F5F0',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                color: '#0B0B0F',
                position: 'relative'
              }}
            >
              <MessageCircle size={28} strokeWidth={2.5} />
              
              {/* Subtle Indicator */}
              <div style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                width: '10px',
                height: '10px',
                background: '#1B4332',
                borderRadius: '50%',
                border: '2px solid #F5F5F0'
              }} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatWhatsApp;
