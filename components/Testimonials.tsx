'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Nutrition Coach',
    content: 'The quality of these cashews is exceptional. My clients love them, and I trust the purity and sourcing.',
    rating: 5,
    initials: 'SM',
  },
  {
    name: 'James Chen',
    role: 'Restaurant Owner',
    content: 'We use PremiumCash nuts in our restaurant. The consistency and quality are unmatched.',
    rating: 5,
    initials: 'JC',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Health Enthusiast',
    content: 'Finally found cashews that are truly organic and delicious. The packaging is eco-friendly too.',
    rating: 5,
    initials: 'ER',
  },
  {
    name: 'Michael Thompson',
    role: 'Corporate Buyer',
    content: 'Bulk ordering is seamless. Fast delivery, excellent pricing, and consistent quality.',
    rating: 5,
    initials: 'MT',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Improved spacing and alignment */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Don't just take our word for it. Here is what our community of chefs, 
            nutritionists, and snack-lovers have to say.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-4 md:px-12">
          
          <div className="relative min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full max-w-2xl bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col md:flex-row gap-8 items-center md:items-start"
              >
                {/* Visual Accent */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-200">
                    {testimonials[currentIndex].initials}
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <Quote className="text-indigo-200 mb-4 mx-auto md:mx-0" size={40} />
                  
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-slate-700 italic font-medium leading-snug mb-6">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-indigo-600 font-medium">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls - Properly positioned */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 transition-all rounded-full ${
                    currentIndex === i ? 'w-8 bg-indigo-600' : 'w-2 bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Trust Stats - Improved Card Design */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '10K+', label: 'Happy Customers' },
            { value: '98%', label: 'Retention Rate' },
          ].map((stat, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white border border-slate-100 text-center hover:border-indigo-200 transition-colors duration-300"
            >
              <p className="text-3xl md:text-4xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {stat.value}
              </p>
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}