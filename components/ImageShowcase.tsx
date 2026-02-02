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
  { src: '/images/cashew-premium.jpg', alt: 'Premium roasted cashews', category: 'Products', title: 'Premium Roasted' },
  { src: '/images/cashew-raw.jpg', alt: 'Raw natural cashews', category: 'Products', title: 'Raw & Natural' },
  { src: '/images/cashew-salted.jpg', alt: 'Salted roasted cashews', category: 'Products', title: 'Salted Varieties' },
  { src: '/images/factory-processing.jpg', alt: 'Factory processing facility', category: 'Facility', title: 'Processing Plant' },
  { src: '/images/quality-control.jpg', alt: 'Quality control testing', category: 'Quality', title: 'Quality Testing' },
  { src: '/images/packaging.jpg', alt: 'Premium packaging', category: 'Products', title: 'Eco Packaging' },
  { src: '/images/cashew-nutrition.jpg', alt: 'Healthy nutrition', category: 'Lifestyle', title: 'Healthy Living' },
  { src: '/images/farm-harvest.jpg', alt: 'Farm harvest', category: 'Facility', title: 'Sustainable Farm' },
];

export default function ImageShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Products', 'Facility', 'Quality', 'Lifestyle'];

  const filteredImages =
    selectedCategory === 'All'
      ? showcaseImages
      : showcaseImages.filter(img => img.category === selectedCategory);

  return (
    <section className="pt-0 pb-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

       {/* ===== Compact Styled Header ===== */}
<div className="text-center mt-2 mb-6">
  <span
    className="inline-block mb-1 px-3 py-0.5 rounded-full text-[11px] font-semibold tracking-wide
               bg-purple-100 text-purple-700"
  >
    OUR GALLERY
  </span>

  <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-1">
    Our Visual Journey
  </h2>

  <p className="text-sm text-gray-600 max-w-xl mx-auto mb-3">
    Discover our products, facilities, and uncompromised quality standards.
  </p>
</div>

{/* ===== Compact Premium Tabs ===== */}
<div className="flex flex-wrap justify-center gap-2 mb-6">
  {categories.map((category) => {
    const active = selectedCategory === category;

    return (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
          ${
            active
              ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }
        `}
      >
        {category}
      </button>
    );
  })}
</div>


        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[200px]">
          {filteredImages.map((image, index) => (
            <div
              key={`${selectedCategory}-${index}`}
              className={`relative group overflow-hidden rounded-xl ${
                index % 5 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Image fills entire card */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark gradient overlay (ONLY over image) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Text */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-semibold text-primary mb-1">
                  {image.category}
                </span>
                <h3 className="text-sm font-semibold text-white">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
