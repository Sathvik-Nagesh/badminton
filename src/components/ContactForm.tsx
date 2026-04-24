'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic for form submission would go here
  };

  return (
    <section id="contact" style={{ padding: 'min(100px, 12vw) 24px', background: 'var(--background)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px' }}>
          
          {/* Left: Contact Info */}
          <div>
            <span className="section-tag">Get in Touch</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '32px' }}>
              Start Your <span style={{ color: 'var(--accent)' }}>Journey</span> Today
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--cream-muted)', lineHeight: 1.6, marginBottom: '48px' }}>
              Have questions about our programs or want to schedule a trial session? Reach out to us and we'll get back to you within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--accent-muted)', color: 'var(--accent)', padding: '12px', borderRadius: '12px' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '8px' }}>Our Location</h4>
                  <a 
                    href="https://maps.app.goo.gl/H6CauGXTtWR73Wt99" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.95rem', opacity: 0.7, lineHeight: 1.5, maxWidth: '300px', display: 'block', textDecoration: 'none', color: 'inherit' }}
                  >
                    3rd Main Road, Laggere Main road, 1st Cross Rd, near police chowki, Bengaluru, Karnataka 560058
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--accent-muted)', color: 'var(--accent)', padding: '12px', borderRadius: '12px' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '8px' }}>Call Us</h4>
                  <p style={{ fontSize: '0.95rem', opacity: 0.7, marginBottom: '12px' }}>+91 96866 65516</p>
                  <button 
                    onClick={() => window.open('tel:+919686665516')}
                    style={{ background: 'var(--accent)', color: 'var(--background)', border: 'none', padding: '8px 20px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 900, cursor: 'pointer' }}
                  >
                    Call Now
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--accent-muted)', color: 'var(--accent)', padding: '12px', borderRadius: '12px' }}>
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '8px' }}>WhatsApp</h4>
                  <p style={{ fontSize: '0.95rem', opacity: 0.7, marginBottom: '12px' }}>Instant response for enquiries</p>
                  <button 
                    onClick={() => window.open('https://wa.me/919686665516')}
                    style={{ background: '#25D366', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 900, cursor: 'pointer' }}
                  >
                    Message on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card" style={{ padding: '48px', borderRadius: '40px' }}>
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
              >
                <div style={{ color: 'var(--accent)', marginBottom: '24px' }}><CheckCircle size={64} /></div>
                <h3 style={{ fontSize: '2rem', fontWeight: 950, marginBottom: '16px' }}>Enquiry Sent!</h3>
                <p style={{ color: 'var(--cream-muted)', lineHeight: 1.6 }}>Thank you for reaching out. We will contact you shortly to discuss your training needs.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: '32px', background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)', padding: '12px 32px', borderRadius: '100px', fontWeight: 900, cursor: 'pointer' }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 900, opacity: 0.6 }}>YOUR NAME</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      style={{ background: 'var(--accent-muted)', border: '1px solid var(--glass-border)', padding: '16px', borderRadius: '12px', fontSize: '1rem', color: 'var(--foreground)' }} 
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 900, opacity: 0.6 }}>PHONE NUMBER</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      style={{ background: 'var(--accent-muted)', border: '1px solid var(--glass-border)', padding: '16px', borderRadius: '12px', fontSize: '1rem', color: 'var(--foreground)' }} 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 900, opacity: 0.6 }}>STUDENT AGE</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 12" 
                      style={{ background: 'var(--accent-muted)', border: '1px solid var(--glass-border)', padding: '16px', borderRadius: '12px', fontSize: '1rem', color: 'var(--foreground)' }} 
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 900, opacity: 0.6 }}>SKILL LEVEL</label>
                    <select style={{ background: 'var(--accent-muted)', border: '1px solid var(--glass-border)', padding: '16px', borderRadius: '12px', fontSize: '1rem', color: 'var(--foreground)' }}>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Not sure</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 900, opacity: 0.6 }}>MESSAGE</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your goals..." 
                    style={{ background: 'var(--accent-muted)', border: '1px solid var(--glass-border)', padding: '16px', borderRadius: '12px', fontSize: '1rem', color: 'var(--foreground)', resize: 'none' }} 
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  style={{ background: 'var(--accent)', color: 'var(--background)', border: 'none', padding: '20px', borderRadius: '100px', fontSize: '1.1rem', fontWeight: 950, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '12px' }}
                >
                  Send Enquiry <Send size={20} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
