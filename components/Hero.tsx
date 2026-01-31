'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const images = [
  'https://images.unsplash.com/photo-1686721635333-d71af2f1084b?w=1600&q=80',
  'https://images.pexels.com/photos/4663476/pexels-photo-4663476.jpeg',
  'https://media.istockphoto.com/id/518856308/photo/cashew-fruit-hanging-on-tree.webp?a=1&b=1&s=612x612&w=0&k=20&c=mrgIj0ZWk-1ryOVEZTCwV_IArqxpdl1vyIHrm0ChHAg=',
   'https://images.pexels.com/photos/16032283/pexels-photo-16032283.jpeg',
  'https://media.istockphoto.com/id/484775618/photo/brazilian-cashew-fruit.webp?a=1&b=1&s=612x612&w=0&k=20&c=12GJ99iHsgiiCNUW0yof39JXTRkcZ4KUoT3U5P-thJQ=',
  'https://images.unsplash.com/photo-1649103989985-e8d5b778f5c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNhc2hld3xlbnwwfHwwfHx8MA%3D%3D',
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',     // fills entire viewport
            backgroundPosition: 'center',// centers the photo
            backgroundRepeat: 'no-repeat'
          }}
        />
      ))}

      {/* Hero content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white animate-fadeUp max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            Nature’s Finest <span className="text-yellow-300">Cashew Nuts</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 drop-shadow-md">
            Harvested from the richest soils and processed with precision for uncompromised quality, taste, and nutrition.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-xl font-semibold">
              Explore Collection <ArrowRight size={20}/>
            </button>
            <button className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
