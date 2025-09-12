"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function OneSparkSection() {
  const headerAnimation = useScrollAnimation(0.2)
  const browseAnimation = useScrollAnimation(0.2)
  const storyboardAnimation = useScrollAnimation(0.2)
  const photosAnimation = useScrollAnimation(0.2)
  const sketchAnimation = useScrollAnimation(0.2)

  return (
    <section className="text-center px-4 sm:px-6 mb-16 sm:mb-24 lg:mb-32 relative pt-16 sm:pt-24 lg:pt-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="wave-animation"></div>
      </div>

      <h2
        ref={headerAnimation.ref}
        className={`text-2xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-12 tracking-tight relative z-10 transition-all duration-1000 ease-out ${
          headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        ✨ One Spark - Endless Paths ✨
      </h2>

      <div
        ref={browseAnimation.ref}
        className={`relative z-10 mb-12 sm:mb-16 lg:mb-24 transition-all duration-1000 ease-out delay-200 ${
          browseAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/browse-interface.png"
            alt="Browse Interface - Content Library with Cat-themed Videos"
            className="w-full shadow-2xl"
          />
        </div>
      </div>

      <div className="max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto space-y-12 sm:space-y-16 lg:space-y-24 relative z-10">
        <div
          ref={storyboardAnimation.ref}
          className={`demo-showcase-container transition-all duration-1000 ease-out ${
            storyboardAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="demo-header mb-6 sm:mb-8 lg:mb-12">
            <div className="demo-title-badge inline-block px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full bg-black/20 border border-white/20 shadow-2xl drop-shadow-lg mb-3 sm:mb-4 lg:mb-6">
              <h3 className="demo-title text-lg sm:text-2xl lg:text-4xl font-bold text-white bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] drop-shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110 hover:drop-shadow-2xl cursor-pointer">
                Storyboard to video
              </h3>
            </div>
            <p className="demo-description text-sm sm:text-lg lg:text-xl text-white leading-relaxed max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto">
              Plan, storyboard, and create any video — all in one place.
            </p>
          </div>
          <div className="video-showcase-wrapper relative">
            <div className="video-glow-effect absolute inset-0 bg-gradient-to-r from-[#6F0FFA]/30 via-[#472AB9]/25 to-[#8A64EA]/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl animate-pulse"></div>
            <div className="video-glow-effect absolute inset-0 bg-gradient-to-br from-[#472AB9]/25 via-[#8A64EA]/30 to-[#46179C]/25 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl animate-pulse delay-1000"></div>
            <div className="video-glow-effect absolute inset-0 bg-gradient-to-tl from-[#8A64EA]/20 via-[#46179C]/25 to-[#472AB9]/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl animate-pulse delay-2000"></div>
            <div className="video-container relative bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="video-media w-full aspect-video object-cover rounded-xl sm:rounded-2xl"
                controls
                autoPlay
                muted
                loop
                poster="/placeholder.svg?height=360&width=640&text=Storyboard+Demo"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product-storyboard-IipKlnKAJT3pfe4C1SKMVndteXiVss.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div
          ref={photosAnimation.ref}
          className={`demo-showcase-container transition-all duration-1000 ease-out ${
            photosAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="demo-header mb-6 sm:mb-8 lg:mb-12">
            <div className="demo-title-badge inline-block px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full bg-black/20 border border-white/20 shadow-2xl drop-shadow-lg mb-3 sm:mb-4 lg:mb-6">
              <h3 className="demo-title text-lg sm:text-2xl lg:text-4xl font-bold text-white bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] drop-shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110 hover:drop-shadow-2xl cursor-pointer">
                One photos → endless content
              </h3>
            </div>
            <p className="demo-description text-sm sm:text-lg lg:text-xl text-white leading-relaxed max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto">
              Endless content from one photo - no repetitive edits required.
            </p>
          </div>
          <div className="video-showcase-wrapper relative">
            <div className="video-glow-effect absolute inset-0 bg-gradient-to-r from-[#46179C]/30 via-[#BB23FD]/25 to-[#6F0FFA]/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl animate-pulse delay-700"></div>
            <div className="video-glow-effect absolute inset-0 bg-gradient-to-br from-[#8A64EA]/25 via-[#472AB9]/25 to-[#46179C]/25 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl animate-pulse delay-1700"></div>
            <div className="video-glow-effect absolute inset-0 bg-gradient-to-tl from-[#BB23FD]/20 via-[#46179C]/25 to-[#472AB9]/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl animate-pulse delay-2700"></div>
            <div className="video-container relative bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="video-media w-full aspect-video object-cover rounded-xl sm:rounded-2xl"
                controls
                autoPlay
                muted
                loop
                poster="/placeholder.svg?height=360&width=640&text=Fashion+Demo"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product-fasion-U9Cwl2wEjfFncZXtkFGifTggZ1rJgA.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div
          ref={sketchAnimation.ref}
          className={`demo-showcase-container transition-all duration-1000 ease-out ${
            sketchAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="demo-header mb-6 sm:mb-8 lg:mb-12">
            <div className="demo-title-badge inline-block px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full bg-black/20 border border-white/20 shadow-2xl drop-shadow-lg mb-3 sm:mb-4 lg:mb-6">
              <h3 className="demo-title text-lg sm:text-2xl lg:text-4xl font-bold text-white bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] drop-shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110 hover:drop-shadow-2xl cursor-pointer">
                From sketch to 3D
              </h3>
            </div>
            <p className="demo-description text-sm sm:text-lg lg:text-xl text-white leading-relaxed max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto">
              Watch your imagination grow from sketch into 3D — easily and quickly.
            </p>
          </div>
          <div className="video-showcase-wrapper relative">
            <div className="video-glow-effect absolute inset-0 bg-gradient-to-r from-[#8A64EA]/30 via-[#472AB9]/25 to-[#46179C]/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl animate-pulse delay-1400"></div>
            <div className="video-glow-effect absolute inset-0 bg-gradient-to-br from-[#6F0FFA]/25 via-[#8A64EA]/30 to-[#BB23FD]/25 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl animate-pulse delay-2400"></div>
            <div className="video-glow-effect absolute inset-0 bg-gradient-to-tl from-[#BB23FD]/20 via-[#46179C]/25 to-[#472AB9]/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl animate-pulse delay-3400"></div>
            <div className="video-container relative bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="video-media w-full aspect-video object-cover rounded-xl sm:rounded-2xl"
                controls
                autoPlay
                muted
                loop
                poster="/placeholder.svg?height=360&width=640&text=3D+Design+Demo"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8C%E1%85%A6%E1%84%91%E1%85%AE%E1%86%B7-OxrLuFRgSGeE0HjV3utzqUlvJd7LVr.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
