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
    icon: <Award className="w-6 h-6" />,
    title: 'FSSC 22000 Certified',
    description: 'International food safety certified facility.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'High-Volume Capacity',
    description: 'Efficient large-scale processing & supply.',
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: '100% Traceability',
    description: 'Batch & grade-wise transparency.',
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: 'Custom Packaging',
    description: 'Private labeling & flexible packing.',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Eco-Friendly',
    description: 'Solar-powered & sustainable operations.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Community Focus',
    description: 'Empowering rural communities.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative pt-0 pb-3 md:pb-4 bg-gray-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Why Choose R R Cashew Industries
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Certified quality, sustainable practices, and reliable service.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-5 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-3 group-hover:scale-110 transition">
                {benefit.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600">
                {benefit.description}
              </p>

              <div className="mt-3 pt-3 border-t text-purple-600 text-xs font-semibold flex items-center gap-2">
                <CheckCircle size={14} />
                Verified
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Sustainability & Ethics',
              items: [
                'Solar-powered processing unit',
                'Rainwater harvesting system',
                'Environmental restoration projects',
                'Ethical business practices',
              ],
            },
            {
              title: 'Quality Assurance',
              items: [
                '3-stage quality inspection',
                'Advanced sorting machinery',
                'Just-in-time delivery',
                'Farm-to-fork traceability',
              ],
            },
          ].map((section, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex gap-2 text-sm text-gray-800">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-purple-50 rounded-2xl p-8 text-center border">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Experience Premium Cashew Quality
          </h3>
          <p className="text-sm text-gray-600 mb-5">
            Trusted by businesses across India.
          </p>
          <button className="bg-purple-600 hover:bg-pink-500 text-white px-6 py-2 rounded-md text-sm font-semibold transition">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}
