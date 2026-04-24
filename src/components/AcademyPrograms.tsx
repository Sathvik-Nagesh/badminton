'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'Kids Academy',
    level: 'BEGINNER & INTERMEDIATE',
    desc: 'Focusing on fundamentals, discipline, and physical agility in a fun, engaging environment for young athletes.',
    image: '/kids_coaching.png',
    tags: ['Ages 6-14', 'Fundamentals', 'Discipline']
  },
  {
    title: 'Adults Batch',
    level: 'ALL SKILL LEVELS',
    desc: 'Perfect for working professionals looking to improve their game, stay fit, and join a vibrant sporting community.',
    image: '/adults_coaching.png',
    tags: ['Fitness', 'Technique', 'Social']
  },
  {
    title: 'Advanced Training',
    level: 'PROFESSIONAL / TOURNAMENT',
    desc: 'Intensive sessions focused on match strategy, advanced strokes, and high-performance physical conditioning.',
    image: '/advanced_coaching.png',
    tags: ['Elite', 'Tournament Ready', 'Conditioning']
  },
  {
    title: 'Personal Coaching',
    level: '1:1 EXPERT ATTENTION',
    desc: 'Customized training plans tailored to your specific goals, focusing on rapid skill acquisition and tactical mastery.',
    image: '/personal_coaching.png',
    tags: ['Tailored', '1:1 Focus', 'Fast Progress']
  }
];

const AcademyPrograms = () => {
  return (
    <section id="programs" style={{ padding: 'min(120px, 15vw) 24px', background: 'rgba(27, 67, 50, 0.02)', overflow: 'hidden', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '80px', maxWidth: '800px' }}>
          <span className="section-tag" style={{ display: 'inline-block' }}>Master the Game</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '24px' }}>
               Coaching <span style={{ color: 'var(--accent)' }}>Programs</span>
            </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', maxWidth: '600px', lineHeight: 1.6 }}>
            Our structured coaching methodology is designed to build champions. From basic fundamentals to elite match strategies, we cover every aspect of the game.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '32px' }}>
          {programs.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-card"
              style={{ overflow: 'hidden', padding: '0', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '300px', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={program.image} 
                  alt={program.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, filter: 'grayscale(100%) brightness(0.8)' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, var(--background))' }} />
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {program.tags.map((tag, i) => (
                    <span key={i} style={{ 
                      fontSize: '0.65rem', 
                      fontWeight: 900, 
                      padding: '8px 12px', 
                      borderRadius: '100px', 
                      background: 'rgba(255,255,255,0.05)', 
                      backdropFilter: 'blur(5px)',
                      border: '1px solid var(--glass-border)',
                      letterSpacing: '0.05em'
                    }}>{tag}</span>
                  ))}
                </div>
              </div>

              <div style={{ padding: '40px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                   <span style={{ fontSize: '0.7rem', fontWeight: 950, color: 'var(--accent)', letterSpacing: '0.2em' }}>{program.level}</span>
                   <h3 style={{ fontSize: '1.8rem', fontWeight: 950, margin: '15px 0', letterSpacing: '-0.04em' }}>{program.title}</h3>
                   <p style={{ color: 'var(--cream-muted)', lineHeight: 1.6, fontSize: '1rem', marginBottom: '32px' }}>{program.desc}</p>
                </div>
                
                <div className="interactive" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--foreground)', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  VIEW SYLLABUS <ArrowRight size={14} color="var(--accent)" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademyPrograms;
