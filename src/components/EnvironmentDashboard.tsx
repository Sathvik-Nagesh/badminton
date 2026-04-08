'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Wind, Droplets, Sun, Radio, Box } from 'lucide-react';

const MetricCard = ({ icon, label, value, unit, trend }: any) => (
  <div className="liquid-glass" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ color: 'var(--accent)', opacity: 0.8 }}>{icon}</div>
      <span style={{ fontSize: '0.65rem', fontWeight: 950, opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{trend}</span>
    </div>
    <div style={{ marginTop: '20px' }}>
      <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 950, opacity: 0.5, marginBottom: '4px' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
        <span style={{ fontSize: '1.8rem', fontWeight: 950 }}>{value}</span>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.6 }}>{unit}</span>
      </div>
    </div>
  </div>
);

const EnvironmentDashboard = () => {
  const [opticalLux, setOpticalLux] = useState(1024);
  const [airFlow, setAirFlow] = useState(0.12);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpticalLux(prev => prev + (Math.random() > 0.5 ? 1 : -1));
      setAirFlow(prev => parseFloat((0.10 + Math.random() * 0.05).toFixed(2)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ padding: '100px 24px', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', 
          gap: 'min(40px, 8vw)', 
          alignItems: 'center', 
          marginBottom: '60px' 
        }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px' }}>Atmospheric <br /> Precision Control</h2>
            <p style={{ color: 'var(--cream-muted)', lineHeight: 1.6 }}>
               Our facility is equipped with tectonic environmental sensors monitoring zero-turbulence airflow and BWF-grade optical integrity in real-time.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', 
            gap: '20px' 
          }}>
             <MetricCard icon={<Sun size={20} />} label="Optical Intensity" value={opticalLux} unit="LUX" trend="+1.2%" />
             <MetricCard icon={<Wind size={20} />} label="Zero-Turbulence" value={airFlow} unit="ms/s" trend="NOMINAL" />
             <MetricCard icon={<Droplets size={20} />} label="Hydration Target" value="48" unit="%" trend="STABLE" />
          </div>
        </div>

        {/* Visual Simulated Data Feed */}
        <div className="glass-card" style={{ padding: '40px', height: '400px', position: 'relative', display: 'flex', flexDirection: 'column', gap: '30px' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                 <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <div className="animate-pulse" style={{ width: '8px', height: '8px', background: '#f55', borderRadius: '50%' }} />
                    <span style={{ fontSize: '0.7rem', fontWeight: 950, letterSpacing: '0.1em' }}>LIVE_TELEMETRY</span>
                 </div>
                 <div style={{ width: '1px', height: '20px', background: 'var(--glass-border)' }} />
                 <span style={{ fontSize: '0.7rem', fontWeight: 800, opacity: 0.5 }}>COURT_STATUS: PRIME_ACTIVE</span>
              </div>
              <Radio size={18} color="var(--accent)" />
           </div>

           <div style={{ flexGrow: 1, border: '1px solid var(--glass-border)', borderRadius: '24px', background: 'rgba(27,67,50,0.02)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Radar Pattern */}
              <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(var(--accent) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ width: '300px', height: '300px', border: '1px solid var(--accent)', borderRadius: '50%', opacity: 0.2 }}
              />
              <div style={{ position: 'relative', textAlign: 'center' }}>
                 <Box size={48} color="var(--accent)" opacity={0.3} style={{ marginBottom: '15px' }} />
                 <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: 950, letterSpacing: '0.05em' }}>GRID SYNCING...</span>
                 <span style={{ fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>Optimizing Shuttle Dynamics for Chamber SYST-01</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentDashboard;
