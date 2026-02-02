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
    description: 'Pure, unroasted cashew kernels with maximum nutrition.',
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
    description: 'Perfectly roasted with premium sea salt.',
    image: '/images/cashew-salted.jpg',
  },
  {
    id: 3,
    name: 'Premium Roasted',
    category: 'Gourmet',
    price: 19.99,
    rating: 5.0,
    reviews: 287,
    description: 'Delicate honey coating with natural sweetness.',
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
    description: 'Sustainable packaging with premium quality.',
    image: '/images/packaging.jpg',
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="pt-0 pb-12 md:pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Our Premium Collections
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            Handpicked cashew varieties crafted for quality and taste.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-44 bg-gray-100">
                {product.badge && (
                  <span className="absolute top-2 right-2 z-10 bg-purple-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
                    {product.badge}
                  </span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col h-full">
                <span className="text-xs font-semibold text-purple-600 mb-1 uppercase">
                  {product.category}
                </span>

                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {product.name}
                </h3>

                <p className="text-xs text-gray-600 mb-3">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={
                        i < Math.round(product.rating)
                          ? 'fill-purple-600 text-purple-600'
                          : 'text-gray-300'
                      }
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-3 border-t">
                  <span className="text-lg font-bold text-purple-600">
                    ${product.price}
                  </span>

                  <button className="p-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white transition">
                    <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 border border-purple-600 text-purple-600 rounded-md text-sm font-semibold hover:bg-purple-600 hover:text-white transition">
            View All Products
          </button>
        </div>

      </div>
    </section>
  );
}
