'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SchematicBackground from '@/components/SchematicBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import KineticTicker from '@/components/KineticTicker';
import AcademyPrograms from '@/components/AcademyPrograms';
import TestimonialMarquee from '@/components/TestimonialMarquee';
import AboutSection from '@/components/AboutSection';
import WhyUs from '@/components/WhyUs';
import Timetable from '@/components/Timetable';
import ContactForm from '@/components/ContactForm';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import Reveal from '@/components/Reveal';
import BottomCTA from '@/components/BottomCTA';
import ScrollToTop from '@/components/ScrollToTop';
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
        <Reveal>
          <div key="programs-section">
            <AcademyPrograms />
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <AboutSection />
        </Reveal>

        <WhyUs />

        <Timetable />

        <Reveal>
          <TestimonialMarquee />
        </Reveal>

        <Reveal>
          <Gallery />
        </Reveal>

        <Reveal>
          <ContactForm />
        </Reveal>
      </div>

      <Reveal>
        <div key="location-section">
          <FAQ />
        </div>
      </Reveal>

      <BottomCTA />

      <ScrollToTop />
      <FloatWhatsApp />
      <Footer />
    </main>
  );
}
