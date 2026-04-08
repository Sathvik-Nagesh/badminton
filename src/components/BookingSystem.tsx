'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { Calendar, ArrowRight, CheckCircle2, Download } from 'lucide-react';
import { generateTicket } from '@/utils/TicketService';

const COURTS = [
  { id: 1, name: 'SYST-01', level: 'ELITE', img: '/stitch/elite_selection_advanced.png' },
  { id: 2, name: 'SYST-02', level: 'ELITE', img: '/stitch/elite_selection_light.png' },
  { id: 3, name: 'ACAD-01', level: 'ACADEMY', img: '/stitch/academy_advanced.png' },
  { id: 4, name: 'ACAD-02', level: 'ACADEMY', img: '/stitch/academy_programs_light.png' },
  { id: 5, name: 'PERK-01', level: 'SPECIAL', img: '/stitch/perks_tiers_light.png' },
  { id: 6, name: 'PERK-02', level: 'SPECIAL', img: '/stitch/elite_perks_advanced.png' },
  { id: 7, name: 'ELTE-01', level: 'PRO', img: '/stitch/elite_mastery_advanced.png' },
  { id: 8, name: 'ELTE-02', level: 'PRO', img: '/stitch/hero_availability_light.png' }
];

const BookingSystem = () => {
  const [selectedCourt, setSelectedCourt] = useState<number | null>(1);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [criteria, setCriteria] = useState({ level: 'PRO', matches: 'SINGLES' });
  const [isConfirming, setIsConfirming] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [availability, setAvailability] = useState<Record<string, string>>({});

  // Unified "Availability Scan" Protocol
  const checkAvailability = useCallback(() => {
    setIsScanning(true);
    // Simulate tactical scan of the grid
    setTimeout(() => {
      const newAvailability: Record<string, string> = {};
      COURTS.forEach(court => {
        // Pseudo-random availability based on date/time sync
        newAvailability[court.id] = Math.random() > 0.3 ? 'AVAILABLE' : 'RESERVED';
      });
      setAvailability(newAvailability);
      setIsScanning(false);
    }, 1200);
  }, []);

  useEffect(() => {
    checkAvailability();
  }, [selectedDate, selectedSlot, criteria.level, checkAvailability]);

  const handleDownload = () => {
    try {
      console.log('Initiating Ticket Generation...');
      generateTicket({
        court: COURTS.find(c => c.id === selectedCourt)?.name || 'CORE_01',
        date: selectedDate,
        time: selectedSlot || '10:00 AM',
        level: criteria.level,
        ref: Math.random().toString(36).substring(7).toUpperCase()
      });
      console.log('Ticket Generated Successfully.');
    } catch (err) {
      console.error('Ticket Generation Failed:', err);
    }
  };

  const timeSlots = Array.from({ length: 12 }, (_, i) => `${(i + 6) % 12 || 12}:00 ${(i + 6) >= 12 ? 'PM' : 'AM'}`);
  const activeCourt = COURTS.find(c => c.id === selectedCourt);

  // Generate next 7 days for the date selector
  const next7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      full: d.toISOString().split('T')[0],
      day: d.toLocaleDateString('en-US', { weekday: 'short' }),
      date: d.getDate()
    };
  });

  return (
    <section id="booking" style={{ padding: 'min(140px, 15vw) 5%', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 950, letterSpacing: '-0.04em', lineHeight: 1.1 }}>
            Sync Your <span style={{ color: 'var(--accent)' }}>Athletic Protocol</span>
          </h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', 
          gap: 'min(40px, 6vw)', 
          alignItems: 'start' 
        }}>
          
          {/* Left Pod: Unit Inventory Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
               <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {['PRO', 'ELITE', 'ACADEMY'].map(lvl => (
                    <button 
                      key={lvl}
                      onClick={() => setCriteria({...criteria, level: lvl})}
                      style={{ 
                        padding: '10px 20px', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 950,
                        background: criteria.level === lvl ? 'var(--foreground)' : 'var(--accent-muted)',
                        color: criteria.level === lvl ? 'var(--background)' : 'var(--foreground)',
                        border: '1px solid var(--glass-border)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {lvl}
                    </button>
                  ))}
               </div>
               <span style={{ fontSize: '0.6rem', fontWeight: 950, opacity: 0.4 }}>GRID_SCAN // ACTIVE</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
               {COURTS.filter(c => c.level === criteria.level || criteria.level === 'PRO').map(court => {
                 const status = isScanning ? 'SCANNING' : (availability[court.id] || 'READY');
                 const isSelected = selectedCourt === court.id;
                 
                 return (
                   <motion.div
                     key={court.id}
                     onClick={() => !isScanning && setSelectedCourt(court.id)}
                     className="glass-card interactive"
                     style={{
                       padding: '0',
                       cursor: isScanning ? 'wait' : 'pointer',
                       border: isSelected ? '2px solid var(--accent)' : '1px solid var(--glass-border)',
                       background: isSelected ? 'rgba(var(--accent-rgb), 0.03)' : 'var(--glass)',
                       opacity: isScanning ? 0.6 : 1,
                       height: '240px',
                       display: 'flex',
                       flexDirection: 'column'
                     }}
                   >
                      <div style={{ height: '140px', position: 'relative', overflow: 'hidden', background: '#000' }}>
                         <img 
                           src={court.img} 
                           alt={court.name}
                           style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isSelected ? 0.8 : 0.5, filter: 'grayscale(100%) contrast(1.2)' }}
                         />
                         <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
                         <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                            <div style={{ 
                               fontSize: '0.65rem', fontWeight: 950, padding: '6px 12px', borderRadius: '4px',
                               background: status === 'AVAILABLE' ? 'var(--accent)' : status === 'RESERVED' ? '#ef4444' : 'rgba(255,255,255,0.1)',
                               color: status === 'AVAILABLE' ? 'var(--background)' : '#FFF',
                               boxShadow: status === 'AVAILABLE' ? '0 0 15px var(--accent)' : 'none'
                            }}>
                               {status}
                            </div>
                         </div>
                      </div>
                      <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                         <div>
                            <span style={{ fontSize: '0.6rem', fontWeight: 950, color: 'var(--accent)', letterSpacing: '0.1em' }}>{court.level}_UNIT</span>
                            <h4 style={{ fontSize: '1.4rem', fontWeight: 950, marginTop: '4px', letterSpacing: '-0.02em' }}>{court.name}</h4>
                         </div>
                         <ArrowRight size={18} opacity={isSelected ? 1 : 0.3} color="var(--accent)" />
                      </div>
                   </motion.div>
                 );
               })}
            </div>
          </div>

          {/* Right Pod: Temporal Control Controller */}
          <div className="liquid-glass" style={{ 
            padding: 'min(40px, 8vw)', 
            position: 'sticky', 
            top: '120px', 
            height: 'max-content',
            zIndex: 5
          }}>
             
             {/* Dynamic Date Grid */}
             <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                   <Calendar size={14} color="var(--accent)" />
                   <span style={{ fontSize: '0.65rem', fontWeight: 950, letterSpacing: '0.1em', opacity: 0.6 }}>TEMPORAL_WINDOW</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                   {next7Days.map((d) => (
                     <button
                       key={d.full}
                       onClick={() => setSelectedDate(d.full)}
                       style={{
                         padding: '12px 6px',
                         borderRadius: '12px',
                         background: selectedDate === d.full ? 'var(--foreground)' : 'var(--accent-muted)',
                         color: selectedDate === d.full ? 'var(--background)' : 'var(--foreground)',
                         border: '1px solid var(--glass-border)',
                         textAlign: 'center',
                         transition: 'all 0.2s ease',
                       }}
                     >
                        <div style={{ fontSize: '0.5rem', fontWeight: 950, opacity: 0.6 }}>{d.day.toUpperCase()}</div>
                        <div style={{ fontSize: '1rem', fontWeight: 950 }}>{d.date}</div>
                     </button>
                   ))}
                </div>
             </div>

             {/* Chrono Slot Matrix */}
             <div style={{ marginBottom: '40px' }}>
                <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 950, opacity: 0.6, marginBottom: '20px', letterSpacing: '0.1em' }}>CHRONO_SLOTS // {selectedDate}</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      style={{
                        padding: '12px 10px',
                        borderRadius: '12px',
                        background: selectedSlot === slot ? 'var(--accent)' : 'rgba(0,0,0,0.03)',
                        color: selectedSlot === slot ? 'var(--accent-foreground)' : 'var(--foreground)',
                        border: '1px solid var(--glass-border)',
                        fontWeight: 900, fontSize: '0.65rem',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
             </div>

             {/* Functional Checkout */}
             <AnimatePresence mode="wait">
                {selectedSlot ? (
                  <motion.div
                    key="checkout-active"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '32px' }}
                  >
                     <div style={{ marginBottom: '24px' }}>
                        <span style={{ fontSize: '0.55rem', fontWeight: 950, color: 'var(--accent)', display: 'block' }}>READY_FOR_INITIALIZATION</span>
                        <h4 style={{ fontSize: '1.4rem', fontWeight: 950, marginTop: '4px' }}>{activeCourt?.name} SESSION</h4>
                        <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>{selectedSlot} • {selectedDate}</p>
                     </div>
                     <Button
                        onClick={() => setIsConfirming(true)}
                        style={{ width: '100%', padding: '20px', fontSize: '0.9rem', background: 'var(--foreground)', color: 'var(--background)' }}
                     >
                        INITIALIZE ARCHIVE <ArrowRight size={16} />
                     </Button>
                  </motion.div>
                ) : (
                  <div key="select-prompt" style={{ textAlign: 'center', padding: '32px', opacity: 0.3, border: '1px dashed var(--glass-border)', borderRadius: '24px' }}>
                     <span style={{ fontSize: '0.7rem', fontWeight: 900 }}>AWAITING PROTOCOL SELECTION</span>
                  </div>
                )}
             </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isConfirming && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(27, 67, 50, 0.4)', backdropFilter: 'blur(10px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="liquid-glass"
              style={{ padding: '60px', textAlign: 'center', maxWidth: '500px', width: '100%' }}
            >
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px',
                boxShadow: '0 0 30px var(--accent-muted)'
              }}>
                <CheckCircle2 size={40} color="var(--accent-foreground)" />
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', fontWeight: 950 }}>CHAMBER RESERVED</h2>
              <p style={{ color: 'var(--cream-muted)', marginBottom: '32px', fontSize: '1rem', lineHeight: 1.6 }}>Your elite session has been synchronized with our core system.</p>
              
              <div style={{ display: 'flex', gap: '16px' }}>
                <Button 
                  onClick={handleDownload} 
                  style={{ flexGrow: 1, padding: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <Download size={18} /> DOWNLOAD PASS
                </Button>
                <Button 
                  type="secondary"
                  onClick={() => setIsConfirming(false)} 
                  style={{ flexGrow: 1, padding: '18px' }}
                >
                  DISMISS
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BookingSystem;
