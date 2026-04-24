'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import Reveal from './Reveal';

const BottomCTA = () => {
  return (
    <section style={{ padding: 'min(100px, 15vw) 24px', background: 'var(--accent)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, var(--background) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <Reveal>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 950, color: 'var(--background)', marginBottom: '24px', letterSpacing: '-0.04em', lineHeight: 1 }}>
            READY TO LEVEL UP YOUR GAME?
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--background)', opacity: 0.8, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
            Join Bengaluru's premier badminton academy today. Book your free trial session and start training like a champion.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              type="primary" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'var(--background)', color: 'var(--accent)', padding: '20px 48px', fontSize: '1.1rem' }}
            >
              Book Free Trial
            </Button>
            <Button 
              type="outline" 
              onClick={() => window.open('https://wa.me/919686665516', '_blank')}
              style={{ borderColor: 'var(--background)', color: 'var(--background)', padding: '20px 48px', fontSize: '1.1rem' }}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default BottomCTA;
