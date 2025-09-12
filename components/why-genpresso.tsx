"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function WhyGenPresso() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      ref={ref}
      className={`text-center px-4 sm:px-6 mb-16 sm:mb-24 lg:mb-32 pt-12 sm:pt-16 lg:pt-20 relative transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-gradient-radial from-purple-500/30 via-purple-600/20 to-transparent rounded-full blur-xl"></div>
      </div>

      <div className="relative z-30">
        <h2
          className={`text-3xl sm:text-5xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 drop-shadow-[0_0_30px_rgba(168,85,247,0.8)] glow-text font-script transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Why GenPresso
        </h2>
        <div
          className={`max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto space-y-2 sm:space-y-4 transition-all duration-1000 ease-out delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed">Tired of endless loops? 🤯</p>
            <p className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-100 leading-relaxed">
              Genpresso takes creativity to the next level. 😉
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
