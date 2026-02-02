'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Play, Pause } from 'lucide-react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const steps: ProcessStep[] = [
  { number: 1, title: 'Harvest Glow', description: 'Sun-kissed cashews plucked at dawn’s first light.', icon: '🌅', color: 'from-orange-500 to-red-500' },
  { number: 2, title: 'Pure Pulse', description: 'Gentle whirl of air and light cleanses each nut.', icon: '💨', color: 'from-blue-500 to-indigo-500' },
  { number: 3, title: 'Flame Dance', description: 'Soft embers awaken hidden depths of flavor.', icon: '🕯️', color: 'from-amber-500 to-yellow-500' },
  { number: 4, title: 'Seal Whisper', description: 'Nature’s wrap: fresh, forever, in your hands.', icon: '🌿', color: 'from-green-500 to-emerald-500' },
];

export default function ProcessingFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<Array<{ left: number; top: number; delay: number; duration: number }>>([]);

  // Generate particles only on client (prevents hydration mismatch)
  useEffect(() => {
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 5 + Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
      setProgress((prev) => (prev + 25) % 101);
    }, 2200);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
    if (!isPlaying) setProgress(25);
  };

  return (
    <section
      id="process"
      className="relative py-12 md:py-20 lg:py-28 bg-gradient-to-br from-sky-50 via-amber-50 to-emerald-50 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Floating particles – only rendered after mount */}
      {particles.length > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-white/30 rounded-full animate-float"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light bg-gradient-to-r from-orange-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent mb-3 md:mb-4">
            The Enchanted Journey
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl lg:max-w-3xl mx-auto italic">
            Watch nature's alchemy unfold — one cashew at a time
          </p>
        </div>

        {/* Main content – centered on desktop */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12">
          {/* Progress ring + controls */}
          <div className="relative flex-shrink-0 mb-6 lg:mb-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-4 border-white/50 bg-gradient-to-r from-orange-500/20 to-green-500/20 flex items-center justify-center shadow-xl animate-spin-slow">
              <div className="relative w-20 w-24 sm:w-28 lg:w-32 h-20 sm:h-24 lg:h-32 bg-white/85 rounded-full flex items-center justify-center shadow-inner">
                <div className="text-2xl sm:text-3xl font-mono text-gray-800">
                  {Math.floor(progress)}%
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-green-500 rounded-full -m-1 animate-progress-ring"
                  style={{ clipPath: `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0% 100%)` }}
                />
              </div>
            </div>

            <button
              onClick={togglePlay}
              className="absolute -top-3 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 lg:-top-4 z-20 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
              ) : (
                <Play className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 ml-1" />
              )}
            </button>
          </div>

          {/* Steps */}
          <div className="w-full lg:flex-1 max-w-4xl">
            <div className="flex flex-col md:flex-row md:flex-wrap md:gap-6 lg:gap-8 justify-center">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`
                    w-full md:w-[calc(50%-1.5rem)] lg:w-80 flex-shrink-0
                    bg-white/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-xl border border-white/50
                    transition-all duration-500 cursor-pointer hover:scale-[1.03] hover:shadow-2xl
                    ${activeStep === index
                      ? 'ring-4 ring-orange-400/50 scale-[1.03] shadow-orange-500/30'
                      : 'opacity-80'}
                  `}
                >
                  <div className={`h-2 bg-gradient-to-r ${step.color} rounded-t-2xl lg:rounded-t-3xl`} />

                  <div className="p-5 lg:p-7">
                    <div className="flex items-start justify-between mb-4 lg:mb-5">
                      <div
                        className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl lg:text-4xl shadow-md`}
                      >
                        {step.icon}
                      </div>
                      <span className="text-3xl lg:text-4xl font-bold text-gray-300/80">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2 lg:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-green-600 text-sm lg:text-base">
                      <CheckCircle size={18} />
                      <span>Quality assured</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="md:hidden text-center text-sm text-gray-500 mt-6 italic animate-pulse">
              Tap cards to explore • Play for slideshow
            </p>
          </div>
        </div>

        {/* Footer stats */}
        <div className="mt-12 lg:mt-20 flex flex-wrap justify-center gap-6 sm:gap-10 text-center">
          {[
            { num: '∞', label: 'Timeless Purity' },
            { num: '✨', label: 'Handcrafted Magic' },
            { num: '🌍', label: "Earth's Finest" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-1">{stat.num}</div>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes progress-ring {
          from { transform: rotate(0deg) scaleX(1); }
          to { transform: rotate(360deg) scaleX(0); }
        }
        .animate-float { animation: float 12s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 28s linear infinite; }
        .animate-progress-ring { animation: progress-ring 2s linear infinite; }
      `}</style>
    </section>
  );
}