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
    icon: <Handshake className="w-8 h-8" />,
    title: 'Credibility',
    description: 'To be the most valued and trusted business partner to all our customers and suppliers.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Adaptability',
    description: 'Continuous innovation and improvement to meet evolving customer needs and market demands.',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Speed',
    description: 'Efficient operations and timely delivery to meet customer requirements with precision.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Excellence',
    description: 'Promoting teamwork and maintaining a safe, healthy working environment for all employees.',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Ethical Standards',
    description: 'Conducting business with total integrity, fairness, and adherence to all quality standards.',
  },
  {
    icon: <Sprout className="w-8 h-8" />,
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices and creating a better future for communities.',
  },
];

export default function Values() {
  return (
    <section className="relative py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ====== Header ====== */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Our Values & Commitment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built on principles of excellence, integrity, and dedication to delivering the finest cashew kernels.
          </p>
        </div>

        {/* ====== Light Background Blobs ====== */}
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-1000 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-3000 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-5000 pointer-events-none" />

        {/* ====== Values Grid ====== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-pink-100 opacity-0 group-hover:opacity-40 rounded-3xl transition-opacity duration-500 pointer-events-none" />

              {/* Icon with Animated Background */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 group-hover:text-pink-500 group-hover:scale-125 transition-all duration-500 shadow-lg">
                {value.icon}
              </div>

              {/* Title & Description */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 leading-relaxed transition-colors duration-300">
                  {value.description}
                </p>
              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:w-1/2 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
