'use client';

import React from "react"

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-foreground/5 via-background to-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Have questions about our products or want to place a bulk order? We are here to help and excited to hear from you.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Phone', value: '9765643137', isLink: true },
                { icon: MapPin, label: 'Address', value: 'Manpur, Kagal Taluka, Kolhapur District, Maharashtra', isLink: false },
                { icon: Mail, label: 'GST No.', value: '27BDDPT2171A1ZU', isLink: false },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group/contact animate-fadeInUp p-4 rounded-lg transition-all duration-300 hover:bg-primary/5 cursor-pointer" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white flex-shrink-0 transition-all duration-300 group-hover/contact:scale-125 group-hover/contact:shadow-lg group-hover/contact:bg-accent transform">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className={`${item.isLink ? 'hover:text-primary' : ''} text-muted-foreground group-hover/contact:text-foreground transition-colors duration-300`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12 animate-fadeInUp">
              <p className="font-semibold text-foreground mb-4">Follow Us</p>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social, i) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary hover:text-white text-primary transition-all duration-300 flex items-center justify-center font-semibold text-xs transform hover:scale-125 hover:shadow-lg active:scale-95 relative overflow-hidden group"
                    style={{ animationDelay: `${(i + 3) * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">{social[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="animate-slideInRight">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 border border-border shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Name */}
                <div className="group/input">
                  <label className="block text-sm font-semibold text-foreground mb-2 group-hover/input:text-primary transition-colors duration-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-secondary/50 hover:bg-secondary/80"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="group/input">
                  <label className="block text-sm font-semibold text-foreground mb-2 group-hover/input:text-primary transition-colors duration-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-secondary/50 hover:bg-secondary/80"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="group/input">
                  <label className="block text-sm font-semibold text-foreground mb-2 group-hover/input:text-primary transition-colors duration-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-secondary/50 hover:bg-secondary/80"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Message */}
                <div className="group/input">
                  <label className="block text-sm font-semibold text-foreground mb-2 group-hover/input:text-primary transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-secondary/50 hover:bg-secondary/80 resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 mt-6 relative overflow-hidden group/btn"
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  <Send size={18} className="relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                We will get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
