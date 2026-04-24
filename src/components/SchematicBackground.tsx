'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SchematicDiagrams = () => {
  return (
    <div className="court-mesh-pattern" style={{ 
      position: 'fixed', 
      inset: 0, 
      zIndex: -1, 
      opacity: 0.4, 
      pointerEvents: 'none' 
    }} />
  );
};

export default SchematicDiagrams;
