"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function HeroVideo() {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      ref={ref}
      className={`px-4 sm:px-6 mb-12 sm:mb-24 pt-24 sm:pt-32 lg:pt-40 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto">
        <div className="relative z-50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6F0FFA]/30 via-[#472AB9]/25 to-[#8A64EA]/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#46179C]/25 via-[#BB23FD]/30 to-[#6F0FFA]/25 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-[#8A64EA]/20 via-[#6F0FFA]/25 to-[#472AB9]/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl animate-pulse delay-2000"></div>

          <div className="relative bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/4KNM8Lw69LY?autoplay=1&mute=1&loop=1&playlist=4KNM8Lw69LY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
                title="GenPresso AI Demo"
                className="w-full h-full rounded-xl sm:rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
