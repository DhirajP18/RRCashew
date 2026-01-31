'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Process', href: '#process' },
    { label: 'Quality', href: '#quality' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo Area – clean circular display */}
          <div className="flex items-center gap-3 sm:gap-4 cursor-pointer group">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 border-2 border-amber-200/70 flex items-center justify-center bg-amber-50">
              <img
                src="/logo.jpg"               // Your logo file – best if transparent PNG, square or circular
                alt="RR Cashew Industries"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="leading-tight">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-900 tracking-tight">
                RR Cashew Industries
              </h1>
              <p className="text-sm sm:text-base font-medium text-amber-700">
                Premium Quality Cashews
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-amber-800 font-medium text-base lg:text-lg transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-amber-700 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-amber-800 hover:bg-amber-900 text-white px-7 py-2.5 lg:px-8 lg:py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-900 hover:text-amber-700 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-6 space-y-4 border-t border-amber-100 animate-fadeIn">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-amber-50 rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4">
              <button className="w-full bg-amber-800 text-white py-3 rounded-full font-semibold hover:bg-amber-900 transition-colors shadow">
                Order Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}