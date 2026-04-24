'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Button from './Button';
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
      padding: 'clamp(140px, 20vw, 220px) 5% 100px', 
      background: 'var(--background)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Background Decorative Elements */}
      <div style={{ 
        position: 'absolute', 
        top: '10%', 
        right: '-5%', 
        width: '40%', 
        height: '60%', 
        background: 'radial-gradient(circle, var(--accent-muted) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: 0
      }} />

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 'min(80px, 8vw)',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Left: Content Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-tag">A+ BADMINTON ACADEMY</div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              lineHeight: 0.95,
              marginBottom: '32px',
              letterSpacing: '-0.05em',
              fontWeight: 950,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <span style={{ color: 'var(--foreground)' }}>TRAIN LIKE A</span> 
              <span className="text-gradient">CHAMPION</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 1.6vw, 1.5rem)',
              maxWidth: '560px',
              lineHeight: 1.6,
              opacity: 0.8,
              marginBottom: '48px',
              letterSpacing: '-0.01em',
              fontWeight: 400
            }}>
              Master the fundamentals, elevate your fitness, and refine your technique with expert coaching led by Priyadarshan Sir. Join Bengaluru's premier badminton destination.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                <Button onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })} style={{ padding: '20px 48px', fontSize: '1.1rem', borderRadius: '100px' }}>
                  Join Coaching <ArrowRight size={18} />
                </Button>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                <Button 
                  type="secondary" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                  style={{ padding: '20px 48px', fontSize: '1.1rem', borderRadius: '100px' }}
                >
                  Enquire Now
                </Button>
              </motion.div>
            </div>

            <div style={{ marginTop: '64px', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 950, color: 'var(--accent)' }}>4.7 ★</span>
                <span style={{ fontSize: '0.8rem', opacity: 0.6, fontWeight: 700 }}>205+ Google Reviews</span>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'var(--glass-border)' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 950, color: 'var(--accent)' }}>10+</span>
                <span style={{ fontSize: '0.8rem', opacity: 0.6, fontWeight: 700 }}>Years of Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Premium Visual */}
        <div style={{ position: 'relative', height: 'min(700px, 80vh)' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              width: '100%',
              height: '100%',
              borderRadius: '40px',
              overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(0,0,0,0.1)',
              border: '1px solid var(--glass-border)',
              position: 'relative'
            }}
          >
            <img 
              src="/hero.png" 
              alt="A+ Badminton Academy" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(to top, rgba(var(--accent-rgb), 0.2), transparent)',
              pointerEvents: 'none'
            }} />
          </motion.div>

          {/* Floating Accents */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '-10%',
              zIndex: 10
            }}
          >
            <div className="glass-card" style={{ padding: '20px 32px', borderRadius: '24px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--accent)', display: 'block', marginBottom: '4px' }}>EXPERT COACHING</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 950 }}>Priyadarshan Sir</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
