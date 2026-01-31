'use client';

import React from "react";
import { CheckCircle, Leaf, Zap, Box, Award, Users } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'FSSC 22000 Certified',
    description: 'Food safety certified processing facility meeting international standards.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'High-Volume Capacity',
    description: 'Well-equipped to handle large-scale supplies and orders efficiently.',
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: '100% Traceability',
    description: 'Complete batch and grade-wise sorting with full supply chain transparency.',
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: 'Customizable Solutions',
    description: 'Flexible packaging options and private label packing services available.',
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Eco-Conscious Operations',
    description: 'Solar-powered facility with rainwater harvesting and sustainability practices.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community Empowerment',
    description: 'Creating opportunities and empowering rural communities through fair practices.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== Header ===== */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose R R Cashew Industries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium quality, certified standards, and customer-centric service that sets us apart.
          </p>
        </div>

        {/* ===== Background Blobs ===== */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-1000 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-3000 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-5000 pointer-events-none" />

        {/* ===== Benefits Grid ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fadeInUp cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 group-hover:text-pink-500 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300 mb-5">
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {benefit.description}
              </p>

              {/* Bottom Check */}
              <div className="mt-4 pt-4 border-t border-gray-200 group-hover:border-purple-300 transition-colors duration-300">
                <div className="flex items-center gap-2 text-purple-600 text-sm font-semibold">
                  <CheckCircle size={16} className="group-hover:animate-pulse-slow" />
                  Certified & Verified
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Highlights Section ===== */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 relative z-10">
          {/* Left Column */}
          <div className="animate-slideInLeft">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Sustainability & Ethics</h3>
            <div className="space-y-4">
              {[
                'Solar-powered processing facility reducing carbon footprint',
                'Advanced rainwater harvesting system for water conservation',
                'In-house water table restoration and environmental projects',
                'Total adherence to ethical business practices and standards',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors duration-300 group cursor-pointer">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-900 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="animate-slideInRight">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Assurance</h3>
            <div className="space-y-4">
              {[
                '3-stage inspection process for superior quality control',
                'Batch and grade-wise sorting with advanced machinery',
                'Just-in-time delivery with organized distribution network',
                'Comprehensive traceability from farm to fork',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors duration-300 group cursor-pointer">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-900 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== CTA Section ===== */}
        <div className="mt-20 relative z-10 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-12 text-center border border-purple-200 shadow-lg animate-fadeInUp">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience Premium Quality?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust R R Cashew Industries for their premium cashew needs.
          </p>
          <button className="bg-purple-600 hover:bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
