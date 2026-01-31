'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  color: string;
}

const items: CarouselItem[] = [
  {
    id: 1,
    title: 'Premium Raw Cashews',
    description: 'Handpicked from the finest farms',
    color: 'from-primary/20 to-accent/20',
  },
  {
    id: 2,
    title: 'Organic & Natural',
    description: 'Zero chemicals, pure nutrition',
    color: 'from-accent/20 to-primary/20',
  },
  {
    id: 3,
    title: 'Quality Assured',
    description: 'Certified international standards',
    color: 'from-primary/30 to-accent/10',
  },
  {
    id: 4,
    title: 'Fresh & Delicious',
    description: 'Delivered to your doorstep',
    color: 'from-accent/30 to-primary/10',
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-3xl group">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className={`w-full h-full bg-gradient-to-br ${item.color} rounded-3xl flex flex-col items-center justify-center p-8 relative overflow-hidden`}>
              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="text-6xl md:text-7xl mb-6 animate-bounce-in" style={{ animationDelay: `${0.1}s` }}>
                  🥜
                </div>
                <h3 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fadeInUp`}>
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'bg-white w-8 h-3 shadow-lg'
                : 'bg-white/40 w-3 h-3 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Auto-play Indicator */}
      <div className="absolute top-4 right-4 z-20 text-white/60 text-xs backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full">
        {autoPlay ? 'Auto-playing' : 'Paused'}
      </div>
    </div>
  );
}
