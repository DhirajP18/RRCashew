'use client';

import React from "react"

import { Zap, Heart, Globe, Truck } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Healthy & Nutritious',
    description: 'Rich in magnesium, copper, and antioxidants. Natural source of healthy fats and proteins for optimal wellness.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Hygienic Processing',
    description: 'Advanced processing methods without any preservatives. Pure, natural quality from farm to your table.',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Sustainable Practices',
    description: 'Solar-powered facility, rainwater harvesting, and eco-friendly operations for environmental responsibility.',
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Just-In-Time Delivery',
    description: 'Organized distribution network ensuring fresh cashews reach you with consistent quality and on-time delivery.',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Makes Our Cashews Special
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the unique benefits of our carefully selected and processed cashew nuts.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white border border-border hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Nutrition Facts Card */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/20 animate-fadeInUp">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Nutritional Excellence
          </h3>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              { name: 'Protein', amount: '5.2g' },
              { name: 'Fiber', amount: '3.3g' },
              { name: 'Copper', amount: '600μg' },
              { name: 'Magnesium', amount: '82mg' },
              { name: 'Calories', amount: '155' },
            ].map((nutrient, index) => (
              <div
                key={index}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-3xl font-bold text-primary mb-1">{nutrient.amount}</p>
                <p className="text-sm text-muted-foreground">{nutrient.name} per oz</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
