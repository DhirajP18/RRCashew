'use client';

import React from "react";
import { Lightbulb, Zap, Clock, Users, Handshake, Sprout } from 'lucide-react';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: <Handshake className="w-9 h-9 sm:w-10 sm:h-10" />,
    title: 'Credibility',
    description: 'To be the most valued and trusted business partner to all our customers and suppliers.',
  },
  {
    icon: <Zap className="w-9 h-9 sm:w-10 sm:h-10" />,
    title: 'Adaptability',
    description: 'Continuous innovation and improvement to meet evolving customer needs and market demands.',
  },
  {
    icon: <Clock className="w-9 h-9 sm:w-10 sm:h-10" />,
    title: 'Speed',
    description: 'Efficient operations and timely delivery to meet customer requirements with precision.',
  },
  {
    icon: <Users className="w-9 h-9 sm:w-10 sm:h-10" />,
    title: 'Team Excellence',
    description: 'Promoting teamwork and maintaining a safe, healthy working environment for all employees.',
  },
  {
    icon: <Lightbulb className="w-9 h-9 sm:w-10 sm:h-10" />,
    title: 'Ethical Standards',
    description: 'Conducting business with total integrity, fairness, and adherence to all quality standards.',
  },
  {
    icon: <Sprout className="w-9 h-9 sm:w-10 sm:h-10" />,
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices and creating a better future for communities.',
  },
];

export default function Values() {
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header – tighter spacing */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4">
            Our Values & Commitment
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Built on principles of excellence, integrity, and dedication to delivering the finest cashew kernels.
          </p>
        </div>

        {/* Values Grid – reduced gaps & padding for less empty space */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl bg-white shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon – smaller on mobile */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 rounded-full bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center text-purple-600 group-hover:text-purple-700 group-hover:scale-105 transition-all duration-300 shadow-sm">
                {value.icon}
              </div>

              {/* Content – tighter text spacing */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}