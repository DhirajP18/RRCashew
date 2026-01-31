'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ShowcaseImage {
  src: string;
  alt: string;
  category: string;
  title: string;
}

const showcaseImages: ShowcaseImage[] = [
  {
    src: '/images/cashew-premium.jpg',
    alt: 'Premium roasted cashews',
    category: 'Products',
    title: 'Premium Roasted',
  },
  {
    src: '/images/cashew-raw.jpg',
    alt: 'Raw natural cashews',
    category: 'Products',
    title: 'Raw & Natural',
  },
  {
    src: '/images/cashew-salted.jpg',
    alt: 'Salted roasted cashews',
    category: 'Products',
    title: 'Salted Varieties',
  },
  {
    src: '/images/factory-processing.jpg',
    alt: 'Factory processing facility',
    category: 'Facility',
    title: 'Processing Plant',
  },
  {
    src: '/images/quality-control.jpg',
    alt: 'Quality control testing',
    category: 'Quality',
    title: 'Quality Testing',
  },
  {
    src: '/images/packaging.jpg',
    alt: 'Premium packaging',
    category: 'Products',
    title: 'Eco-Packaging',
  },
  {
    src: '/images/cashew-nutrition.jpg',
    alt: 'Healthy nutrition',
    category: 'Lifestyle',
    title: 'Healthy Living',
  },
  {
    src: '/images/farm-harvest.jpg',
    alt: 'Farm harvest',
    category: 'Facility',
    title: 'Sustainable Farm',
  },
];

export default function ImageShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Products', 'Facility', 'Quality', 'Lifestyle'];

  const filteredImages =
    selectedCategory === 'All'
      ? showcaseImages
      : showcaseImages.filter((img) => img.category === selectedCategory);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Visual Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the quality and innovation behind every cashew from our facility
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-secondary/50 text-foreground hover:bg-secondary border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid with Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
          {filteredImages.map((image, index) => (
            <div
              key={`${selectedCategory}-${index}`}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer animate-scaleIn ${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{ animationDelay: `${(index % 4) * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-80 lg:h-96 bg-black overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold text-accent mb-2">{image.category}</p>
                <h3 className="text-xl font-bold text-white">{image.title}</h3>
              </div>

              {/* Border Shine Effect */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-300 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
