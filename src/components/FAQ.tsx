'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "Do you offer trial classes for new students?",
    answer: "Yes! We offer a complimentary trial session for both kids and adults. It's a great way for you to experience our coaching style and for us to assess your current skill level."
  },
  {
    question: "What is the right age to start badminton coaching?",
    answer: "We recommend starting as early as 6 years old. At this age, children can begin developing hand-eye coordination and basic footwork. However, it's never too late for adults to start as well!"
  },
  {
    question: "What are the timings for coaching batches?",
    answer: "We have multiple batches throughout the day. Kids batches usually run in the evenings (4 PM - 7 PM), while adult batches are available in the early mornings and late evenings to accommodate working professionals."
  },
  {
    question: "What do I need to bring for my first class?",
    answer: "Please bring a pair of non-marking indoor sports shoes, a water bottle, and a sports towel. If you don't have a racket, we provide them for trial sessions."
  },
  {
    question: "Do you have batches for working professionals?",
    answer: "Yes! We have early morning batches (5 AM - 7 AM) and late evening batches (6:30 PM - 8:30 PM) specifically designed for working professionals."
  },
  {
    question: "Do I need to bring my own racket for the trial class?",
    answer: "While we recommend having your own gear, we provide rackets for trial classes. You just need to bring non-marking court shoes and comfortable sports attire."
  },
  {
    question: "Is there personal 1-on-1 coaching available?",
    answer: "Yes, we offer personalized 1-on-1 coaching sessions for players who want rapid improvement or focused training on specific aspects of their game."
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
             COMMON <span style={{ color: 'var(--accent)' }}>QUESTIONS</span>
          </h2>
          <p style={{ color: 'var(--cream-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', opacity: 0.6 }}>
             Everything you need to know about joining A+ Badminton Academy.
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
