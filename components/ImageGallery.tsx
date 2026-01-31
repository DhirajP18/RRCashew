'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageItem {
  src: string;
  alt: string;
  title: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  title?: string;
}

export default function ImageGallery({
  images,
  autoSlide = true,
  autoSlideInterval = 5000,
  title,
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoSlide || isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, images.length, isHovering]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center animate-fadeInUp">
          {title}
        </h3>
      )}

      <div
        className="relative group rounded-3xl overflow-hidden shadow-2xl"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Main Image Container */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] bg-black overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === currentIndex}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition-all duration-300 transform hover:scale-125 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-primary/80 hover:bg-primary text-white p-3 rounded-full transition-all duration-300 transform hover:scale-125 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Title */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <h4 className="text-2xl md:text-3xl font-bold text-white text-balance">
              {images[currentIndex].title}
            </h4>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 p-6 bg-white">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-primary/30 w-3 hover:bg-primary/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-slide Indicator */}
        {autoSlide && (
          <div className="absolute bottom-24 right-6 text-xs font-semibold text-primary bg-white/90 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Auto-sliding
          </div>
        )}
      </div>
    </div>
  );
}
