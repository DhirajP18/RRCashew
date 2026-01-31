'use client';

import React from "react";
import { Award, Leaf, Shield } from 'lucide-react';

interface Certification {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const certifications: Certification[] = [
  {
    icon: <Award className="w-10 h-10 text-white" />,
    title: 'FSSC 22000 Certified',
    description: 'International food safety certified processing facility.',
  },
  {
    icon: <Leaf className="w-10 h-10 text-white" />,
    title: 'Eco-Friendly Processing',
    description: 'Sustainable, preservative-free, natural cashew production.',
  },
  {
    icon: <Shield className="w-10 h-10 text-white" />,
    title: '3-Stage Quality Control',
    description: 'Rigorous inspection ensuring superior quality in every batch.',
  },
];

export default function QualitySection() {
  return (
    <section id="quality" className="relative py-20 md:py-32 bg-gradient-to-b from-green-50 via-white to-green-50 overflow-hidden">

      {/* Background Floating Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-900 mb-4">
            Quality You Can Trust
          </h2>
          <p className="text-lg text-green-800 max-w-2xl mx-auto">
            Every cashew from R R Cashew Industries is backed by strict quality checks, certified processes, and eco-friendly practices.
          </p>
        </div>

        {/* Certifications Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-3xl bg-gradient-to-tr from-green-400 via-green-300 to-green-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-600/30 backdrop-blur-md mb-6 group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3 group-hover:text-green-700 transition-colors duration-300">{cert.title}</h3>
              <p className="text-green-800 leading-relaxed">{cert.description}</p>
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-300 opacity-20 rounded-3xl blur-3xl group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid md:grid-cols-4 gap-6 text-center mb-20">
          {[
            { number: '10+', label: 'Years Established' },
            { number: '500+', label: 'Tons Daily Capacity' },
            { number: '50+', label: 'Distribution Partners' },
            { number: '100%', label: 'Traceability' },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group animate-fadeInUp cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-3xl md:text-4xl font-extrabold text-green-700 mb-2 group-hover:text-green-900 transition-colors duration-300">
                {item.number}
              </p>
              <p className="text-green-800 group-hover:text-green-900 transition-colors duration-300">{item.label}</p>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-200 opacity-10 rounded-3xl blur-2xl pointer-events-none group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-fadeInUp">
          <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
            Experience Premium Cashew Quality
          </h3>
          <p className="text-green-800 mb-8 max-w-2xl mx-auto">
            Partner with R R Cashew Industries for unmatched quality, traceability, and sustainability.
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
