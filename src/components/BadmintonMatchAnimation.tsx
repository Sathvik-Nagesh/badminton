'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HumanAthlete = ({ isLeft, delay = 0, swingVariant }: { isLeft: boolean, delay?: number, swingVariant: any }) => {
  // Enhanced Contrast for Dark Underlay
  const jerseyColor = isLeft ? "var(--accent)" : "rgba(255,255,255,0.95)";
  
  return (
    <motion.g
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ 
        opacity: 1, 
        scale: 1.2,
        x: isLeft ? [180, 220, 180] : [420, 380, 420],
        y: isLeft ? [200, 180, 200] : [200, 200, 200] 
      }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {/* Dynamic Floor Shadow */}
      <motion.ellipse 
        animate={{ rx: [35, 55, 35], opacity: [0.2, 0.4, 0.2] }}
        cx="0" cy="65" rx="45" ry="12" 
        fill="rgba(0,0,0,0.8)" 
        filter="blur(10px)" 
      />

      {/* Anatomical Silhouette Construction */}
      <g style={{ filter: 'drop-shadow(0 0 15px rgba(0,255,119,0.3))' }}>
        {/* Head */}
        <ellipse cx="0" cy="-75" rx="10" ry="14" fill={jerseyColor} />
        
        {/* Torso */}
        <path d="M-18 -65 Q-22 -35 0 -10 Q22 -35 18 -65 Z" fill={jerseyColor} />
        
        {/* Racket Arm */}
        <motion.g
          animate={swingVariant}
          transition={{ duration: 3.5, repeat: Infinity, ease: [0.45, 0, 0.55, 1], delay }}
          style={{ originX: isLeft ? '18px' : '-18px', originY: '-60px' }}
        >
           <path d={isLeft ? "M18 -60 Q45 -50 55 -15" : "M-18 -60 Q-45 -50 -55 -15"} stroke={jerseyColor} strokeWidth="10" fill="none" strokeLinecap="round" />
           <g transform={`translate(${isLeft?55:-55}, -15) rotate(${isLeft?25:-25})`}>
              <line x1="0" y1="0" x2={isLeft?40:-40} y2="-40" stroke="var(--accent)" strokeWidth="4" />
              <ellipse cx={isLeft?55:-55} cy="-55" rx="20" ry="28" stroke="var(--accent)" strokeWidth="3" fill="rgba(0,255,119,0.2)" />
           </g>
        </motion.g>

        {/* Legs */}
        <path d={`M-12 -15 L${isLeft?-40:40} 60`} stroke={jerseyColor} strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d={`M12 -15 L${isLeft?40:-40} 60`} stroke={jerseyColor} strokeWidth="12" fill="none" strokeLinecap="round" />
      </g>
    </motion.g>
  );
};

const BadmintonMatchAnimation = () => {
  const shuttlePath = {
    x: [180, 299, 420, 299, 180],
    y: [140, 50, 140, 50, 140],
    rotate: [45, 135, 225, 315, 405] 
  };

  return (
    <div style={{ width: '100%', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
      <svg width="600" height="350" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
        
        {/* Tactical Court Grid */}
        <g opacity="0.05">
           <rect x="50" y="210" width="500" height="10" fill="var(--accent)" />
           {[...Array(10)].map((_, i) => (
             <line key={i} x1={50 + i * 55} y1="210" x2={50 + i * 55} y2="240" stroke="var(--accent)" strokeWidth="0.5" />
           ))}
        </g>

        {/* Center Net System */}
        <g opacity="0.3">
          <rect x="298" y="100" width="4" height="120" fill="var(--accent)" />
          <line x1="260" y1="100" x2="340" y2="100" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4" />
        </g>

        <HumanAthlete isLeft={true} swingVariant={{ rotate: [40, -110, 40] }} />
        <HumanAthlete isLeft={false} delay={1.75} swingVariant={{ rotate: [-20, 90, -20] }} />

        {/* High-Velocity Shuttlecock with Motion Vector */}
        <motion.g
          animate={shuttlePath}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
        >
          <g transform="rotate(-90)">
             <path d="M-5 -15 L0 0 L5 -15" stroke="var(--accent)" strokeWidth="2.5" fill="#FFF" />
             <circle r="4" fill="var(--accent)" />
          </g>
          
          {/* Motion Blur Trail */}
          <motion.g opacity={0.4}>
             {[...Array(3)].map((_, i) => (
               <motion.circle 
                 key={i}
                 initial={{ opacity: 0.8 }}
                 animate={{ opacity: 0, x: -30, scale: 0.5 }}
                 transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.1 }}
                 r="3" fill="var(--accent)" 
               />
             ))}
          </motion.g>
        </motion.g>

        {/* Dynamic Telemetry Lines */}
        <motion.path 
          d="M50 210 Q300 210 550 210" 
          stroke="var(--accent)" 
          strokeWidth="1" 
          opacity="0.1" 
          strokeDasharray="10 10" 
          animate={{ strokeDashoffset: [0, -100] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};

export default BadmintonMatchAnimation;
