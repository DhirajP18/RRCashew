'use client';

import { Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-fadeInUp">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-lg p-2">
                <Leaf className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Sar Sar Kashy Industries</h3>
                <p className="text-sm text-white/60">Premium Cashew Processing</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Located in Kolhapur, Maharashtra, we deliver premium cashew nuts with exceptional quality and care from our state-of-the-art processing facility.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'Products', 'About Us', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              {['Raw Kernels', 'Roasted & Salted', 'Honey Roasted', 'Cashew Butter'].map((product) => (
                <li key={product}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {['Nutrition Guide', 'Recipes', 'FAQs', 'Sustainability', 'Certifications'].map((resource) => (
                <li key={resource}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="grid md:grid-cols-2 gap-8 py-12 border-t border-white/10 mb-12 animate-fadeInUp">
          <div>
            <h4 className="font-bold text-lg mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-white/60 text-sm">
              Get exclusive deals, recipes, and updates delivered to your inbox.
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary hover:bg-accent text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Sar Sar Kashy Industries. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
