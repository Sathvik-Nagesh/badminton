'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "What is the mandatory footwear protocol?",
    answer: "To maintain our BWF Grade-A wooden surfaces, all athletes must wear non-marking court shoes. Regular outdoor sports shoes are strictly prohibited within the tactical chambers."
  },
  {
    question: "How does the 'Chrono Slot' booking system work?",
    answer: "Our system operates on a high-precision temporal grid. Slots are available in 60-minute blocks. Members have a 14-day advance booking window, while guests have a 48-hour tactical window."
  },
  {
    question: "Are private coaching sessions available for all levels?",
    answer: "Yes. Our Academy Protocols range from L1-Foundation to L3-Elite Chassis. Each program is calibrated to the athlete's current kinetic performance and long-term diagnostic goals."
  },
  {
    question: "What is the guest policy for Elite Members?",
    answer: "Elite Members can bring up to 3 guests per session. All guests must be synchronized with the membership ID at the Command Center upon arrival."
  },
  {
    question: "Can I upgrade my membership tier mid-cycle?",
    answer: "Synchronized upgrades are available via the Command Center or through our WhatsApp Assistant. Pro-rated adjustments to your metabolic and access tiers will be applied instantaneously."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick, index }: any) => {
  return (
    <motion.div 
      initial={false}
      style={{ 
        overflow: 'hidden',
        background: isOpen ? 'rgba(var(--accent-rgb), 0.05)' : 'var(--glass)',
        backdropFilter: 'blur(10px)',
        border: isOpen ? '1px solid var(--accent)' : '1px solid var(--glass-border)',
        borderRadius: '32px',
        marginBottom: '16px',
        boxShadow: isOpen ? '0 20px 40px rgba(0,0,0,0.1)' : '0 4px 20px rgba(0,0,0,0.02)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      whileHover={{ 
        borderColor: 'var(--accent)',
        transform: 'translateY(-2px)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: '100%',
          padding: '32px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '24px'
        }}
      >
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ 
            width: '40px', height: '40px', 
            borderRadius: '12px', 
            background: isOpen ? 'var(--accent)' : 'var(--accent-muted)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.7rem', fontWeight: 950, color: isOpen ? 'var(--accent-foreground)' : 'var(--accent)',
            fontFamily: 'monospace',
            transition: 'all 0.3s ease'
          }}>
            0{index + 1}
          </div>
          <span style={{ 
            fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)', 
            fontWeight: 900, 
            color: 'var(--foreground)', 
            letterSpacing: '-0.02em',
            opacity: isOpen ? 1 : 0.9,
            transition: 'opacity 0.3s ease'
          }}>
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          style={{ color: 'var(--accent)', opacity: 0.6 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ 
              paddingLeft: '104px',
              paddingRight: '64px',
              paddingBottom: '40px', 
              color: 'var(--cream-muted)', 
              lineHeight: 1.7, 
              fontSize: '1.05rem', 
              maxWidth: '900px'
            }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: 'min(140px, 15vw) 24px', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 950, marginBottom: '24px', letterSpacing: '-0.04em' }}>
             FREQUENTLY <span style={{ color: 'var(--accent)' }}>ASKED</span> QUESTIONS
          </h2>
          <p style={{ color: 'var(--cream-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', opacity: 0.6 }}>
             Calibrating your expectations for the elite AeroElite experience.
          </p>
        </div>

        <div style={{ background: 'transparent', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {FAQS.map((faq, idx) => (
            <FAQItem
              key={idx}
              index={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
