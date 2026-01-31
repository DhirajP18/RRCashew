'use client';

import { CheckCircle } from 'lucide-react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: 'Harvesting',
    description: 'Premium cashew apples are hand-selected from the finest orchards during peak season.',
    icon: '🌾',
  },
  {
    number: 2,
    title: 'Processing',
    description: 'Advanced machinery separates and cleans the nuts with precision to maintain quality.',
    icon: '⚙️',
  },
  {
    number: 3,
    title: 'Roasting',
    description: 'Controlled temperature roasting brings out rich flavors while preserving nutrients.',
    icon: '🔥',
  },
  {
    number: 4,
    title: 'Packaging',
    description: 'Sealed in eco-friendly packaging to ensure freshness from our facility to your home.',
    icon: '📦',
  },
];

export default function ProcessingFlow() {
  return (
    <section id="process" className="relative py-16 md:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ====== Header ====== */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            From Farm to Table
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our meticulous processing ensures every cashew maintains its nutritional value and exceptional taste.
          </p>
        </div>

        {/* ====== Background Blobs ====== */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-1000 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-3000 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-5000 pointer-events-none" />

        {/* ====== Process Steps ====== */}
        <div className="relative">
          {/* Timeline Vertical Line */}
          <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-[calc(100%-5rem)] bg-gradient-to-b from-purple-400 via-pink-300 to-cyan-400 rounded-full" />

          {/* Steps */}
          <div className="grid md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-center animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Icon */}
                <div className={`relative flex flex-col items-center z-10 ${index % 2 === 1 ? 'md:flex-row-reverse md:ml-6' : 'md:mr-6'}`}>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 via-pink-300 to-cyan-300 flex items-center justify-center text-4xl shadow-xl transition-transform duration-500 transform hover:scale-125 hover:shadow-2xl cursor-pointer">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block w-1 h-16 bg-gradient-to-b from-pink-300 to-transparent mt-2" />
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 p-6 md:p-8 bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl md:text-4xl font-bold text-purple-600">{String(step.number).padStart(2, '0')}</span>
                    <CheckCircle className="text-purple-400" size={22} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 hover:text-purple-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ====== Quality Guarantee ====== */}
        <div className="mt-20 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-200 shadow-lg animate-fadeInUp">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-purple-600 mb-2">100%</p>
              <p className="text-gray-600">Natural Ingredients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600 mb-2">Zero</p>
              <p className="text-gray-600">Added Chemicals</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600 mb-2">ISO</p>
              <p className="text-gray-600">Certified Facility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
