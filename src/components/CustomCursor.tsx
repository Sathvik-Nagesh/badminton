'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      // Only set to visible if it's not already
      // This avoided triggering React state updates on every mouse move
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      setIsHovering(!!isInteractive);
    };

    // Use mouseleave on document to detect when mouse leaves the actual viewport
    const handleDocumentLeave = () => setIsVisible(false);
    const handleDocumentEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleDocumentLeave);
    document.addEventListener('mouseenter', handleDocumentEnter);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleDocumentLeave);
      document.removeEventListener('mouseenter', handleDocumentEnter);
    };
  }, [mouseX, mouseY, isVisible]); // We still need isVisible here because of the closure inside handleMouseMove, 
  // but we can optimize it by using a ref if we want to avoid re-runs.
  // Actually, even better:

  useEffect(() => {
    // Hidden internal state to track visibility without re-running effect
    let localVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!localVisible) {
        localVisible = true;
        setIsVisible(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      setIsHovering(!!isInteractive);
    };

    const handleDocumentLeave = () => {
      localVisible = false;
      setIsVisible(false);
    };

    const handleDocumentEnter = () => {
      localVisible = true;
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleDocumentLeave);
    document.addEventListener('mouseenter', handleDocumentEnter);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleDocumentLeave);
      document.removeEventListener('mouseenter', handleDocumentEnter);
    };
  }, [mouseX, mouseY]); // No more isVisible dependency

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        pointerEvents: 'none', 
        zIndex: 9999, 
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out'
      }}
    >
      {/* Outer Glow */}
      <motion.div
        style={{
          position: 'absolute',
          x: springX,
          y: springY,
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          background: 'radial-gradient(circle, rgba(27, 67, 50, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          translateX: '-50%',
          translateY: '-50%',
          transition: 'width 0.3s, height 0.3s',
        }}
      />
      
      {/* Core Dot */}
      <motion.div
        style={{
          position: 'absolute',
          x: springX,
          y: springY,
          width: 8,
          height: 8,
          background: 'var(--accent)',
          borderRadius: '50%',
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 15px rgba(27, 67, 50, 0.3)',
        }}
      />
    </div>
  );
};

export default CustomCursor;
