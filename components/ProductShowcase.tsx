'use client';

import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  badge?: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Raw Cashew Kernels',
    category: 'Natural',
    price: 18.99,
    rating: 4.9,
    reviews: 324,
    description: 'Pure, unroasted cashew kernels with maximum nutrition',
    badge: 'Best Seller',
    image: '/images/cashew-raw.jpg',
  },
  {
    id: 2,
    name: 'Roasted & Salted',
    category: 'Classic',
    price: 16.99,
    rating: 4.8,
    reviews: 412,
    description: 'Perfectly roasted with premium sea salt blend',
    image: '/images/cashew-salted.jpg',
  },
  {
    id: 3,
    name: 'Premium Roasted',
    category: 'Gourmet',
    price: 19.99,
    rating: 5.0,
    reviews: 287,
    description: 'Delicate honey coating with natural sweetness',
    badge: 'Premium',
    image: '/images/cashew-premium.jpg',
  },
  {
    id: 4,
    name: 'Eco-Packaged',
    category: 'Spreads',
    price: 14.99,
    rating: 4.7,
    reviews: 198,
    description: 'Sustainable packaging with premium quality',
    image: '/images/packaging.jpg',
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Premium Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked varieties crafted for every palate. From raw and natural to artisan blends, discover your perfect cashew experience.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-secondary/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer h-full flex flex-col border border-border hover:border-primary/50 transform hover:scale-105 relative">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-primary/10 to-accent/10 transition-opacity duration-500" />

                {/* Image Area */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10 animate-bounce-in shadow-lg">
                      {product.badge}
                    </div>
                  )}
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < Math.round(product.rating) ? 'fill-primary text-primary' : 'text-border'}
                          />
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border relative z-10">
                    <span className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      ${product.price}
                    </span>
                    <button className="bg-primary hover:bg-accent text-white p-2 rounded-lg transition-all duration-300 transform hover:scale-125 hover:shadow-lg active:scale-95 relative overflow-hidden group/btn">
                      <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <ShoppingCart size={18} className="relative z-10" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fadeInUp">
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
