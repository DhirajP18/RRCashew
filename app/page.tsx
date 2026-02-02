'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageShowcase from '@/components/ImageShowcase';
import AboutUs from '@/components/AboutUs';
import ProductShowcase from '@/components/ProductShowcase';
import ProcessingFlow from '@/components/ProcessingFlow';




import Testimonials from '@/components/Testimonials';

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
      
    
    
      
      <Testimonials />
      
      <Footer />
    </main>
  );
}
