'use client'

import { Leaf, Droplets, Sun, Award, Truck, ShieldCheck } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-hidden bg-gradient-to-b from-white via-amber-50/40 to-white">

      {/* ================= LIGHT EFFECTS ================= */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-6000" />

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1686721635333-d71af2f1084b?w=1600&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl text-white animate-fadeUp">
          <span className="inline-block mb-4 px-5 py-1 rounded-full bg-yellow-400 text-black text-sm font-semibold">
            Premium Cashew Manufacturer
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            About <span className="text-yellow-400">R R Cashew Industries</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90">
            Delivering nature’s finest cashews with purity, trust, and excellence.
          </p>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="animate-slideInLeft">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Who We Are
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established in Kolhapur, Maharashtra, <strong>R R Cashew Industries</strong>
              has been delivering premium-quality cashew kernels for over a decade.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our cashews are sourced from the finest coastal farms and processed in
              a modern hygienic facility using advanced techniques that preserve
              nutrition, freshness, and natural taste.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in long-term partnerships, ethical practices, and delivering
              consistent quality every single time.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6 animate-slideInRight">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Daily Capacity (Tons)' },
              { value: '50+', label: 'Business Partners' },
              { value: '100%', label: 'Quality Assurance' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white shadow-lg border border-yellow-100 hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                <p className="text-5xl font-extrabold text-yellow-500 mb-2">
                  {item.value}
                </p>
                <p className="font-semibold text-gray-800">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

     

    </main>
  )
}
