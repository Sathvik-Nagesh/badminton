'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import Button from './Button';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const PLANS = [
  {
    name: 'Standard Slot',
    price: '$25',
    period: '/ hour',
    features: ['1 BWF-spec wooden court', 'Professional locker access', 'Shadow-free lighting', 'Standard guest list (4 players)'],
    button: 'Book Now',
    type: 'outline' as const
  },
  {
    name: 'Elite Training',
    price: '$85',
    period: '/ hour',
    features: ['Professional court booking', '1-on-1 private coaching session', 'Video analysis playback', 'Recovery shake & electrolytes'],
    button: 'Join Program',
    type: 'primary' as const,
    popular: true
  },
  {
    name: 'Academy Pass',
    price: '$450',
    period: '/ month',
    features: ['20 hours of court time', 'Priority booking status', 'Free racket stringing (2x)', '10% off pro-shop gear'],
    button: 'Get Membership',
    type: 'outline' as const
  }
];

const Pricing = () => {
  return (
    <section id="pricing" style={{ padding: '200px 24px', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <SectionHeading 
          title="Premium Access" 
          subtitle="Transparent, world-class court rates and membership options designed for consistent athletic performance."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: 'min(40px, 8vw)' }}>
          {PLANS.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard 
                className="h-full flex flex-col items-center relative" 
                style={{ padding: 'min(64px, 10vw)', borderRadius: '40px', borderColor: 'rgba(245, 245, 240, 0.05)' }}
              >
                {plan.popular && (
                  <div style={{ 
                    position: 'absolute',
                    top: '-16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--accent)', 
                    color: '#000', 
                    fontSize: '0.8rem', 
                    fontWeight: 900, 
                    padding: '10px 24px', 
                    borderRadius: '100px', 
                    textTransform: 'uppercase',
                    boxShadow: '0 0 30px var(--accent-muted)',
                    letterSpacing: '0.15em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <Star size={14} fill="currentColor" /> Recommended
                  </div>
                )}
                
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>{plan.name}</h3>
                
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', marginBottom: '48px' }}>
                  <span style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--cream)', lineHeight: 1, letterSpacing: '-0.06em' }}>{plan.price}</span>
                  <span style={{ color: 'var(--cream-muted)', fontSize: '1.2rem', paddingBottom: '16px', fontWeight: 700 }}>{plan.period}</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '64px', width: '100%', flex: 1 }}>
                  {plan.features.map((feature, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--cream-muted)', fontSize: '1.05rem', fontWeight: 600 }}>
                      <div style={{ background: 'rgba(57, 255, 20, 0.1)', borderRadius: '50%', padding: '4px' }}>
                        <Check size={18} color="var(--accent)" strokeWidth={3} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button type={plan.type} style={{ width: '100%', padding: '24px', borderRadius: '100px' }}>
                  {plan.button}
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
