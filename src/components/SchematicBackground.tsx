'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SchematicDiagrams = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.05, pointerEvents: 'none', overflow: 'hidden' }}>
      
      {/* Shuttlecock Wireframe (Right Side) */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', right: '-10%', top: '30%', width: '600px', height: '600px', border: '1px dashed var(--foreground)', borderRadius: '50%' }}
      >
         <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '1px', background: 'var(--foreground)', transform: 'translate(-50%, -50%) rotate(45deg)' }} />
         <div style={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '1px', background: 'var(--foreground)', transform: 'translate(-50%, -50%) rotate(-45deg)' }} />
      </motion.div>

      {/* Court Dimension Lines (Left Side) */}
      <div style={{ position: 'absolute', left: '5%', top: '60%', width: '400px', height: '800px', borderLeft: '1px solid var(--foreground)', borderTop: '1px solid var(--foreground)' }}>

         <div style={{ position: 'absolute', top: '400px', left: 0, width: '100%', height: '1px', background: 'var(--foreground)' }} />
      </div>

    </div>
  );
};

export default SchematicDiagrams;
