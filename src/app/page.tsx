'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SchematicBackground from '@/components/SchematicBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import KineticTicker from '@/components/KineticTicker';
import BookingSystem from '@/components/BookingSystem';
import AcademyPrograms from '@/components/AcademyPrograms';
import TestimonialMarquee from '@/components/TestimonialMarquee';
import Facilities from '@/components/Facilities';
import LocationSection from '@/components/LocationSection';
import PerksAndTiers from '@/components/PerksAndTiers';
import FAQ from '@/components/FAQ';
import FloatWhatsApp from '@/components/FloatWhatsApp';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <SchematicBackground />
      <Navbar />

      <Hero />

      <KineticTicker />

      <div id="experience" style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
        <div key="booking-section">
          <div style={{ width: '1px', height: '100px', background: 'var(--accent)', margin: '0 auto', opacity: 0.3 }} />
          <BookingSystem />
        </div>

        <div key="academy-section">
          <AcademyPrograms />
        </div>

        <TestimonialMarquee />

        <div key="facilities-section">
          <Facilities />
        </div>

        <div key="membership-section">
          <PerksAndTiers />
        </div>
      </div>

      <div key="location-section">
        <FAQ />
        <LocationSection />
      </div>

      <FloatWhatsApp />
      <Footer />
    </main>
  );
}
