'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, LayoutDashboard, MoveRight } from 'lucide-react';

const tiers = [
  {
    name: "Classic",
    price: "$50",
    desc: "Experience the basics of elite sporting culture.",
    perks: ["4 Court hours / month", "Access to shared equipment", "Standard locker facilities", "Mobile app scheduling"],
    icon: LayoutDashboard,
  },
  {
    name: "Mastery",
    price: "$150",
    desc: "The standard for serious athletes and competitors.",
    perks: ["12 Court hours / month", "Premium equipment locker", "Cold immersion recovery", "Elite academy discounts"],
    icon: Shield,
    isPopular: true,
  },
  {
    name: "Elite Elite",
    price: "$450",
    desc: "Undefined luxury. The ultimate athletic experience.",
    perks: ["Unlimited court access", "Private equipment suite", "Professional physiotherapy", "Private academy access"],
    icon: Star,
  }
];

const PerksAndTiers = () => {
  return (
    <section id="pricing" style={{ padding: 'min(120px, 15vw) 24px', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '80px', maxWidth: '800px' }}>
          <span className="section-tag" style={{ display: 'inline-block' }}>Memberships</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1, marginBottom: '24px' }}>
             Perks & <span style={{ color: 'var(--accent)' }}>Tiers</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', maxWidth: '600px', lineHeight: 1.6 }}>
             Choose your level of engagement with the AeroElite ecosystem. From standard access to private mastery.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '32px' }}>
          {tiers.map((tier, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-card"
              style={{ 
                padding: '48px', 
                position: 'relative', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '600px'
              }}
            >
              {tier.isPopular && (
                <div style={{ 
                  position: 'absolute', 
                  right: '-40px', 
                  top: '30px', 
                  background: 'var(--accent)', 
                  color: 'var(--accent-foreground)', 
                  padding: '10px 100px', 
                  transform: 'rotate(45deg)', 
                  fontSize: '0.7rem', 
                  fontWeight: 950, 
                  letterSpacing: '0.1em'
                }}>
                  MOST ELITE
                </div>
              )}

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
                  <div style={{ 
                    width: '56px', height: '56px', 
                    background: 'var(--accent-muted)', 
                    borderRadius: '16px', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)'
                  }}>
                    <tier.icon size={26} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 950, marginBottom: '4px', letterSpacing: '-0.04em' }}>{tier.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                       <span style={{ fontSize: '1.4rem', fontWeight: 950, color: 'var(--accent)' }}>{tier.price}</span>
                       <span style={{ fontSize: '0.8rem', fontWeight: 700, opacity: 0.5 }}>/ mo</span>
                    </div>
                  </div>
                </div>

                <p style={{ color: 'var(--cream-muted)', marginBottom: '40px', lineHeight: 1.5, fontSize: '0.95rem' }}>
                  {tier.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                  {tier.perks.map((perk, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'var(--accent-muted)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                         <div style={{ width: '4px', height: '4px', background: 'var(--accent)', borderRadius: '50%' }} />
                      </div>
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--foreground)', opacity: 0.8 }}>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  background: 'var(--accent)', 
                  color: 'var(--accent-foreground)',
                  borderColor: 'var(--accent)',
                  boxShadow: '0 10px 40px var(--accent-muted)'
                }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  width: '100%', 
                  padding: '18px', 
                  borderRadius: '100px', 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  border: '1px solid var(--glass-border)', 
                  color: 'var(--foreground)', 
                  fontWeight: 900, 
                  fontSize: '0.8rem', 
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                Choose Project {tier.name} <MoveRight size={14} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerksAndTiers;
