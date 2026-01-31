'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageShowcase from '@/components/ImageShowcase';
import AboutUs from '@/components/AboutUs';
import ProductShowcase from '@/components/ProductShowcase';
import ProcessingFlow from '@/components/ProcessingFlow';
import Values from '@/components/Values';
import WhyChooseUs from '@/components/WhyChooseUs';
import QualitySection from '@/components/QualitySection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <ImageShowcase />
      <AboutUs />
      <ProductShowcase />
      <ProcessingFlow />
      <Values />
      <WhyChooseUs />
      <QualitySection />
      <Features />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
