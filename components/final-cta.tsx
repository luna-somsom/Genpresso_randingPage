"use client"

import type React from "react"
import { WaitlistModal } from "@/components/waitlist-modal"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface FinalCTAProps {
  isModalOpen: boolean
  setIsModalOpen: (open: boolean) => void
  email: string
  setEmail: (email: string) => void
  handleSubmit: (e: React.FormEvent) => void
  isLoading: boolean
  isSuccess: boolean
}

export function FinalCTA({
  isModalOpen,
  setIsModalOpen,
  email,
  setEmail,
  handleSubmit,
  isLoading,
  isSuccess,
}: FinalCTAProps) {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      ref={ref}
      className={`text-center px-4 sm:px-6 py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-background to-card/30 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
        <h2
          className={`text-xl sm:text-2xl lg:text-3xl font-semibold text-white transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Fast. Seamless. Limitless.
        </h2>
        <h3
          className={`text-2xl sm:text-3xl lg:text-4xl text-white font-light transition-all duration-1000 ease-out delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          A New Way to Create with AI
        </h3>
        <div
          className={`relative transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-500/30 to-purple-600/30 blur-2xl sm:blur-3xl rounded-full"></div>
          <h1 className="relative text-4xl sm:text-6xl lg:text-9xl font-bold text-white mb-8 sm:mb-12 lg:mb-16 drop-shadow-lg">
            GenPresso
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 ease-out delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <WaitlistModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            email={email}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            isSuccess={isSuccess}
            buttonText="Join waitlist"
            buttonClassName="glass-button px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl font-bold text-white rounded-2xl sm:rounded-3xl"
          />
        </div>
      </div>
    </section>
  )
}
