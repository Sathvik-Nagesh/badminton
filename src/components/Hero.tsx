'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Button from './Button';
import BadmintonMatchAnimation from './BadmintonMatchAnimation';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const Typewriter = ({ text, delay = 0.05, speed = 0.05 }: { text: string, delay?: number, speed?: number }) => {
  const characters = Array.from(text);
  
  return (
    <span style={{ display: 'inline-block' }}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1,
            delay: delay + index * speed,
            ease: "easeOut"
          }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      padding: 'min(160px, 20vw) 5% 100px', 
      background: 'var(--background)',
      overflow: 'hidden'
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 'min(80px, 8vw)',
        alignItems: 'center'
      }}>
        
        {/* Left: Tactical Copy Column */}
        <div style={{ zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 style={{
              fontSize: 'clamp(2rem, 7vw, 5rem)',
              lineHeight: 0.95,
              marginBottom: '40px',
              letterSpacing: '-0.04em',
              fontWeight: 950,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Typewriter text="KINETIC" /> 
              <span className="text-gradient" style={{ display: 'inline-block', width: 'max-content', maxWidth: '100%', overflow: 'visible' }}>
                <Typewriter text="MASTERCLASS" delay={0.6} />
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.4rem)',
              maxWidth: '560px',
              lineHeight: 1.6,
              opacity: 0.7,
              marginBottom: '60px',
              letterSpacing: '-0.01em',
              fontWeight: 400
            }}>
              Experience the zenith of athletic architectural precision. AeroElite: Where kinetic design meets championship performance.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
                <Button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} style={{ padding: '20px 48px', fontSize: '1rem', borderRadius: '100px' }}>
                  Book Chassis <ArrowRight size={18} />
                </Button>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
                <Button 
                  type="secondary" 
                  onClick={() => {
                    const msg = encodeURIComponent("Hi AeroElite! I'm interested in joining the Academy. Can I get more metadata on the L1-Kinetic Foundation course?");
                    window.open(`https://wa.me/911234567890?text=${msg}`, '_blank');
                  }} 
                  style={{ padding: '20px 48px', fontSize: '1rem', borderRadius: '100px' }}
                >
                  Join Academy
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right: High-End Liquid Visuals - Transformed into Kinetic Hub */}
        <div style={{ position: 'relative', height: 'min(800px, 70vh)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
              style={{ 
                position: 'absolute', 
                inset: 0, 
                zIndex: 2, 
                borderRadius: 'min(60px, 8vw)',
                overflow: 'hidden',
                y: y2,
                scale: useTransform(scrollY, [0, 500], [1, 1.05]),
                rotate: rotate,
                border: '1px solid var(--glass-border)',
                boxShadow: '0 40px 120px rgba(0,0,0,0.1)'
              }}
            >
               <img 
                 src="/hero_texture.png" 
                 alt="Elite Kinetic Texture" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 1, filter: 'brightness(0.9) contrast(1.1)' }} 
               />
               <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 30%, var(--background) 100%)', opacity: 0.6 }} />
            </motion.div>
 
           {/* Centered High-Fidelity Match Observation Pod - Darkened for Contrast */}
           <motion.div
             initial={{ opacity: 0, scale: 0.9, y: 40 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ delay: 1.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
             style={{
               position: 'relative',
               zIndex: 20,
               padding: 'min(40px, 6vw)',
               borderRadius: 'min(48px, 6vw)',
               background: '#1B4332', // Deep Tactical Green
               border: '1px solid rgba(255,255,255,0.1)',
               width: 'min(520px, 95%)',
               boxShadow: '0 50px 150px rgba(0,0,0,0.4)',
               overflow: 'hidden',
               color: '#FFF'
             }}
           >
              {/* Telemetry Accents */}
              <div style={{ position: 'absolute', top: '24px', left: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                 <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }} />
                 <span style={{ fontSize: '0.65rem', fontWeight: 950, opacity: 0.8, letterSpacing: '0.2em', color: 'var(--accent)' }}>TACTICAL_OBSERVATION_GRID</span>
              </div>
              <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
                 <span style={{ fontSize: '0.65rem', fontWeight: 950, opacity: 0.4 }}>REF_SYS_2.4.0</span>
              </div>

              <div style={{ background: 'rgba(0,0,0,0.1)', border: '1px solid var(--glass-border)', borderRadius: '32px', padding: '20px', marginTop: '20px' }}>
                 <BadmintonMatchAnimation />
              </div>
              
              <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                       <span style={{ fontSize: '0.5rem', opacity: 0.5, fontWeight: 900 }}>LOAD_STATE_ACTV</span>
                       <span style={{ fontSize: '0.8rem', fontWeight: 950 }}>STABLE</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                       <span style={{ fontSize: '0.5rem', opacity: 0.5, fontWeight: 900 }}>HEART_RATE_AVG</span>
                       <span style={{ fontSize: '0.8rem', fontWeight: 950 }}>172 BPM</span>
                    </div>
                 </div>
                 <div style={{ padding: '8px 16px', background: 'rgba(27, 67, 50, 0.1)', borderRadius: '100px', border: '1px solid var(--accent)', color: 'var(--accent)', fontSize: '0.6rem', fontWeight: 950 }}>
                    LIVE_ANALYTICS
                 </div>
              </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
