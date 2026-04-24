'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const schedule = [
  {
    day: 'Weekdays (Mon-Fri)',
    slots: [
      { time: '05:00 AM - 07:00 AM', type: 'Advanced/Elite' },
      { time: '04:30 PM - 06:30 PM', type: 'Kids Batch' },
      { time: '06:30 PM - 08:30 PM', type: 'Adults/Intermediate' }
    ]
  },
  {
    day: 'Weekends (Sat-Sun)',
    slots: [
      { time: '06:00 AM - 09:00 AM', type: 'Intensive Coaching' },
      { time: '10:00 AM - 12:00 PM', type: 'Junior Beginners' },
      { time: '04:00 PM - 07:00 PM', type: 'Match Play Session' }
    ]
  }
];

const Timetable = () => {
  return (
    <section id="schedule" style={{ padding: 'min(100px, 12vw) 24px', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag">Batch Timings</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 950, marginBottom: '24px', lineHeight: 1.1 }}>
            Find Your <span style={{ color: 'var(--accent)' }}>Perfect Slot</span>
          </h2>
          <p style={{ color: 'var(--cream-muted)', maxWidth: '600px', margin: '0 auto' }}>
            We offer multiple batches throughout the day to accommodate students, working professionals, and elite athletes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>
          {schedule.map((dayPlan, idx) => (
            <Reveal key={idx} delay={idx * 0.2}>
              <div className="glass-card" style={{ padding: '40px', borderRadius: '40px', border: '1px solid var(--glass-border)', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
                  <div style={{ background: 'var(--accent-muted)', color: 'var(--accent)', padding: '12px', borderRadius: '14px' }}>
                    <Calendar size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>{dayPlan.day}</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {dayPlan.slots.map((slot, i) => (
                    <div 
                      key={i} 
                      style={{ 
                        padding: '20px', 
                        borderRadius: '20px', 
                        background: 'rgba(255,255,255,0.03)', 
                        border: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--accent)', textTransform: 'uppercase' }}>{slot.type}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                          <Clock size={14} opacity={0.5} />
                          {slot.time}
                        </div>
                      </div>
                      <CheckCircle2 size={20} color="var(--accent)" opacity={0.3} />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div style={{ 
            marginTop: '60px', 
            textAlign: 'center', 
            padding: '32px', 
            borderRadius: '24px', 
            background: 'var(--accent-muted)', 
            border: '1px solid var(--glass-border)' 
          }}>
            <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem' }}>
              💡 <span style={{ color: 'var(--accent)' }}>Don't see a suitable slot?</span> Contact us for personalized 1-on-1 coaching at your preferred time.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Timetable;
