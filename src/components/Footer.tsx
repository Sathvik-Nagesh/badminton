'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, MapPin, Phone, Share2, Zap, ArrowUpRight } from 'lucide-react';
import Button from './Button';

const footerLinks = [
  {
    title: 'Experience',
    links: [
      { name: 'Chamber Selection', href: '#booking' },
      { name: 'Academy Protocol', href: '#academy' },
      { name: 'Infrastructure', href: '#facilities' },
      { name: 'Elite Tiers', href: '#pricing' }
    ]
  },
  {
    title: 'Ecosystem',
    links: [
      { name: 'Athletic Telemetry', href: '#' },
      { name: 'Kinetic Lab', href: '#' },
      { name: 'Recovery Lounge', href: '#' },
      { name: 'Pro-Shop Chassis', href: '#' }
    ]
  },
  {
    title: 'Legal / Archive',
    links: [
      { name: 'Terms of Access', href: '#' },
      { name: 'Data Protocol', href: '#' },
      { name: 'Brand Identity', href: '#' },
      { name: 'Global Network', href: '#' }
    ]
  }
];

const Footer = () => {
  return (
    <footer style={{ 
      padding: '80px 24px 60px', 
      background: 'var(--background)', 
      borderTop: '1px solid var(--glass-border)',
      color: 'var(--foreground)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Pattern */}
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, var(--accent-muted) 0%, transparent 70%)', opacity: 0.2, filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '60px', marginBottom: '80px' }}>
          
          {/* Brand Column */}
          <div style={{ gridColumn: 'span min(1, 2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--accent)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-foreground)' }}>
                <Globe size={22} />
              </div>
              <span style={{ fontWeight: 950, fontSize: '1.5rem', letterSpacing: '-0.04em', color: 'var(--foreground)' }}>AEROELITE</span>
            </div>
            <p style={{ maxWidth: '340px', lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--cream-muted)', marginBottom: '32px' }}>
              Redefining the elite badminton environment through kinetic precision and architectural luxury.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
               {[Globe, Share2, Zap].map((Icon, i) => (
                 <motion.a 
                    key={i}
                    href="#" 
                    whileHover={{ scale: 1.1, color: 'var(--accent)' }}
                    style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--accent-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--foreground)', transition: 'all 0.3s ease' }}
                 >
                   <Icon size={16} />
                 </motion.a>
               ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h4 style={{ fontSize: '0.7rem', fontWeight: 950, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '24px' }}>
                {section.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <motion.a 
                      href={link.href} 
                      whileHover={{ x: 6, color: 'var(--accent)' }}
                      style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--cream-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.3s ease' }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Col */}
          <div style={{ minWidth: '200px' }}>
            <h4 style={{ fontSize: '0.7rem', fontWeight: 950, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '24px' }}>
              Inbound Access
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--cream-muted)', fontSize: '0.9rem' }}>
                 <Mail size={16} color="var(--accent)" />
                 protocol@aeroelite.co
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--cream-muted)', fontSize: '0.9rem' }}>
                 <MapPin size={16} color="var(--accent)" />
                 Neutral Zone, District 9
               </div>
               <Button 
                 type="outline" 
                 onClick={() => {
                   const msg = encodeURIComponent("Hi AeroElite! I'm reaching out via the Command Center. I'd like to learn more about your elite badminton architectural systems.");
                   window.open(`https://wa.me/911234567890?text=${msg}`, '_blank');
                 }}
                 style={{ borderRadius: '100px', padding: '12px 20px', fontSize: '0.75rem', width: 'max-content' }}
               >
                  Open Command Center
               </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          paddingTop: '32px', 
          borderTop: '1px solid var(--glass-border)', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          fontSize: '0.75rem',
          color: 'var(--cream-muted)',
          fontWeight: 700,
          opacity: 0.6
        }}>
          <div>© 2026 AEROELITE INTELLIGENCE SYSTEMS.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>V2.04.2-STABLE</span>
            <span style={{ color: 'var(--accent)' }}>UPTIME: 99.9%</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
