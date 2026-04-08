'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { Globe, Menu, X, ArrowRight, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Academy', href: '#academy' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Membership', href: '#pricing' },
    { name: 'Location', href: '#location' },
    { name: 'System', href: '#booking' },
  ];

  const isMobile = windowWidth < 960;

  const { scrollYProgress } = useScroll();

  return (
    <nav 
      style={{
        position: 'fixed',
        top: isScrolled ? '15px' : '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: '95%',
        maxWidth: '1200px',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Scroll Progress Indicator */}
      <motion.div 
        style={{
          scaleX: scrollYProgress,
          height: '2px',
          background: 'var(--accent)',
          position: 'absolute',
          bottom: '-12px',
          left: '40px',
          right: '40px',
          transformOrigin: 'left',
          borderRadius: '10px',
          opacity: isScrolled ? 0.8 : 0,
          transition: 'opacity 0.3s'
        }}
      />
      <div 
        className="glass-card"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isScrolled ? '10px 24px' : '16px 32px',
          borderRadius: '100px',
          background: isScrolled ? 'var(--glass)' : 'rgba(255, 255, 255, 0.1)',
          borderColor: isScrolled ? 'var(--glass-border)' : 'transparent',
          backdropFilter: 'blur(30px) saturate(150%)',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '28px', height: '28px', background: 'var(--accent)', borderRadius: '6px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-foreground)',
            boxShadow: '0 0 15px var(--accent-muted)'
          }}>
            <Globe size={16} strokeWidth={3} />
          </div>
          <span style={{ fontWeight: 950, fontSize: '1.1rem', letterSpacing: '-0.06em', color: 'var(--foreground)' }}>
            AEROELITE
          </span>
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
            style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
          >
            {navItems.map((item) => (
              <motion.a 
                key={item.name} 
                href={item.href}
                initial="initial"
                whileHover="hover"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 0.6, y: 0 },
                  initial: { opacity: 0.6 },
                  hover: { opacity: 1 }
                }}
                className="interactive"
                style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: 800, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  color: 'var(--foreground)',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '8px 0'
                }}
              >
                {item.name}
                {/* Kinetic Underline */}
                <motion.div
                  variants={{
                    initial: { width: 0, opacity: 0 },
                    hover: { width: '100%', opacity: 1 }
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    height: '2px',
                    background: 'var(--accent)',
                    position: 'absolute',
                    bottom: 0,
                    left: 0
                  }}
                />
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <ThemeToggle />
          
          {isMobile && (
            <div 
              className="interactive"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: 'var(--foreground)', display: 'flex', alignItems: 'center', padding: '8px' }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
          )}

          <div 
            onClick={() => {
              const msg = encodeURIComponent("Hi AeroElite! I'd like to book a tactical unit session. What are the available slots for today?");
              window.open(`https://wa.me/911234567890?text=${msg}`, '_blank');
            }}
            style={{ 
              background: 'var(--accent)', 
              color: 'var(--background)', 
              border: 'none', 
              padding: '10px 24px', 
              borderRadius: '100px', 
              fontWeight: 950, 
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              display: isMobile ? 'none' : 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 24px var(--accent-muted)'
            }}
            className="interactive"
          >
            RESERVE_UNIT <ArrowRight size={14} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              marginTop: '10px',
              padding: '24px',
              borderRadius: '24px',
              zIndex: 999
            }}
            className="glass-card"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: 900, 
                    color: 'var(--foreground)',
                    textDecoration: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  {item.name} <ArrowRight size={18} opacity={0.3} />
                </a>
              ))}
              <div style={{ height: '1px', background: 'var(--glass-border)', margin: '10px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                 <button 
                  style={{ 
                    background: 'var(--accent)', 
                    color: '#fff', 
                    border: 'none', 
                    padding: '12px 24px', 
                    borderRadius: '100px', 
                    fontWeight: 900, 
                    fontSize: '0.8rem',
                  }}
                >
                  RESERVE NOW
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
