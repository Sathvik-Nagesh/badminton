'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, MapPin, Phone, Share2, Zap, ArrowUpRight } from 'lucide-react';
import Button from './Button';

const footerLinks = [
  {
    title: 'Academy',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'Programs', href: '#programs' },
      { name: 'About Us', href: '#about' },
      { name: 'Facilities', href: '#facilities' }
    ]
  },
  {
    title: 'Community',
    links: [
      { name: 'Reviews', href: '#reviews' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Tournaments', href: '#programs' },
      { name: 'Events', href: '#programs' }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact', href: '#contact' },
      { name: 'FAQs', href: '#faq' },
      { name: 'Privacy Policy', href: '#contact' },
      { name: 'Terms', href: '#contact' }
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
              <span style={{ fontWeight: 950, fontSize: '1.5rem', letterSpacing: '-0.04em', color: 'var(--foreground)' }}>A+ BADMINTON</span>
            </div>
            <p style={{ maxWidth: '340px', lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--cream-muted)', marginBottom: '32px' }}>
              Training champions through discipline, passion, and expert coaching since 2014. Join Bengaluru's premier badminton academy.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
               {[Globe, Share2, Phone].map((Icon, i) => (
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
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <a 
                 href="https://maps.app.goo.gl/H6CauGXTtWR73Wt99" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--cream-muted)', fontSize: '0.9rem', lineHeight: 1.5, textDecoration: 'none' }}
                 className="interactive"
               >
                 <MapPin size={16} color="var(--accent)" style={{ marginTop: '4px' }} />
                 3rd Main Road, Laggere Main road, 1st Cross Rd, Bengaluru, 560058
               </a>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--cream-muted)', fontSize: '0.9rem' }}>
                 <Phone size={16} color="var(--accent)" />
                 +91 96866 65516
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--cream-muted)', fontSize: '0.9rem' }}>
                 <Mail size={16} color="var(--accent)" />
                 contact@aplusbadminton.com
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--cream-muted)', fontSize: '0.9rem' }}>
                 <Zap size={16} color="var(--accent)" />
                 Open Daily: 5:00 AM - 11:00 PM
               </div>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div style={{ width: '100%', height: '300px', borderRadius: '24px', overflow: 'hidden', marginBottom: '60px', border: '1px solid var(--glass-border)' }}>
          <iframe 
            className="map-embed"
            title="A+ Badminton Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.245464191079!2d77.5255474!3d13.0199748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d84b0000001%3A0x7d0a6c0c5d5e5e5e!2sA%2B%20Badminton%20Academy!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
          <div>© 2026 A+ BADMINTON ACADEMY. ALL RIGHTS RESERVED.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span>BENGALURU, INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
