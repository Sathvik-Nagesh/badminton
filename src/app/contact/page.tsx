'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import SchematicBackground from '@/components/SchematicBackground';
import FloatWhatsApp from '@/components/FloatWhatsApp';

export default function ContactPage() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <SchematicBackground />
      <Navbar />
      
      <div style={{ paddingTop: '160px' }}>
        <ContactForm />
      </div>

      <FloatWhatsApp />
      <Footer />
    </main>
  );
}
