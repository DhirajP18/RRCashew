'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

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
    content:
      'The quality of these cashews is exceptional. My clients love them, and I trust the purity and sourcing. Best cashews I have ever tried!',
    rating: 5,
    initials: 'SM',
  },
  {
    name: 'James Chen',
    role: 'Restaurant Owner',
    content:
      'We use PremiumCash nuts in our restaurant. The consistency and quality are unmatched. Our customers always ask about them specifically.',
    rating: 5,
    initials: 'JC',
  },
  {
    name: 'Emma Rodriguez',
    role: 'Health Enthusiast',
    content:
      'Finally found cashews that are truly organic and delicious. The packaging is eco-friendly too. Highly recommend to everyone!',
    rating: 5,
    initials: 'ER',
  },
  {
    name: 'Michael Thompson',
    role: 'Corporate Buyer',
    content:
      'Bulk ordering is seamless. Fast delivery, excellent pricing, and consistent quality. Our offices are obsessed with these cashews!',
    rating: 5,
    initials: 'MT',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const itemsPerView = 4;

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by Our Customers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real customers who have experienced the PremiumCash difference.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-12">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-20 bg-primary hover:bg-accent text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 z-20 bg-primary hover:bg-accent text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonials Grid with Carousel Effect */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
            {testimonials.map((testimonial, index) => {
              const isVisible = index === currentIndex;
              return (
                <div
                  key={index}
                  className={`group p-8 rounded-2xl bg-secondary/50 border transition-all duration-500 transform animate-fadeInUp ${
                    isVisible
                      ? 'opacity-100 scale-100 border-primary shadow-lg'
                      : 'opacity-60 scale-95 border-border'
                  }`}
                  style={{ animationDelay: `${(index % itemsPerView) * 0.1}s` }}
                >
                  {/* Quote Icon */}
                  <Quote className={`mb-4 transition-all duration-300 ${isVisible ? 'text-primary/40' : 'text-primary/20'} group-hover:text-primary/50`} size={24} />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} size={16} className="fill-primary text-primary" />
                      ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Testimonial Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: '4.9★', label: 'Average Rating' },
            { number: '10,000+', label: 'Reviews' },
            { number: '98%', label: 'Would Recommend' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border animate-fadeInUp hover:shadow-lg hover:border-primary/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-4xl font-bold text-primary mb-2 animate-gradient-shift">{stat.number}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
