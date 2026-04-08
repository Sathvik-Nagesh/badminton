'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { CheckCircle2, Calendar, Clock, MapPin, CreditCard, ArrowRight, Loader2 } from 'lucide-react';

const ReservePage = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const simulateProcessing = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsDone(true);
    }, 2500);
  };

  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <BackgroundAnimation />
      <Navbar />

      <div style={{ padding: '180px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <AnimatePresence mode="wait">
          {!isDone ? (
            <motion.div
              key="booking-form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card"
              style={{ padding: '60px', borderRadius: '40px' }}
            >
              <div style={{ marginBottom: '40px' }}>
                 <p style={{ color: 'var(--accent)', fontWeight: 950, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>Operational Protocol // 01</p>
                 <h1 style={{ fontSize: '3rem', fontWeight: 950, lineHeight: 1.1, letterSpacing: '-0.04em' }}>Finalize Your Session Authorization</h1>
              </div>

              <div style={{ display: 'grid', gap: '30px', marginBottom: '60px' }}>
                 <div style={{ padding: '24px', background: 'var(--accent-muted)', borderRadius: '20px', border: '1px solid var(--glass-border)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Calendar size={24} color="var(--accent)" />
                    <div>
                       <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 900, opacity: 0.5, textTransform: 'uppercase' }}>Target Date</span>
                       <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>October 24, 2026</span>
                    </div>
                 </div>
                 <div style={{ padding: '24px', background: 'var(--accent-muted)', borderRadius: '20px', border: '1px solid var(--glass-border)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Clock size={24} color="var(--accent)" />
                    <div>
                       <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 900, opacity: 0.5, textTransform: 'uppercase' }}>Synchronized Time</span>
                       <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>06:00 PM - 07:00 PM</span>
                    </div>
                 </div>
                 <div style={{ padding: '24px', background: 'var(--accent-muted)', borderRadius: '20px', border: '1px solid var(--glass-border)', display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <MapPin size={24} color="var(--accent)" />
                    <div>
                       <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 900, opacity: 0.5, textTransform: 'uppercase' }}>Designated Chamber</span>
                       <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>SYST-01 (Elite Pro Surface)</span>
                    </div>
                 </div>
              </div>

              <Button 
                onClick={simulateProcessing} 
                disabled={isLoading}
                style={{ width: '100%', padding: '28px', fontSize: '1rem' }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    SYNCHRONIZING WITH CORE CORE...
                  </>
                ) : (
                  <>
                    CONFIRM & INITIALIZE ACCESS <ArrowRight size={18} />
                  </>
                )}
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card"
              style={{ padding: '80px', borderRadius: '40px', textAlign: 'center' }}
            >
              <div style={{ 
                width: '100px', height: '100px', borderRadius: '50%', background: 'var(--accent)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 40px',
                boxShadow: '0 0 50px var(--accent-muted)'
              }}>
                 <CheckCircle2 size={50} color="var(--accent-foreground)" />
              </div>
              <h2 style={{ fontSize: '3.5rem', fontWeight: 950, marginBottom: '24px', letterSpacing: '-0.04em' }}>ACCESS GRANTED</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--cream-muted)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 48px' }}>
                Your elite session is now locked into the AeroElite grid. A digital decryption key has been dispatched to your terminal.
              </p>
              
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <Button onClick={() => window.location.href = '/'} type="outline" style={{ padding: '18px 40px' }}>
                  RETURN TO SYSTEM
                </Button>
                <Button style={{ padding: '18px 40px' }}>
                  DOWNLOAD PASS
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default ReservePage;
