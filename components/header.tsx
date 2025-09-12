"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { WaitlistModal } from "@/components/waitlist-modal"

interface HeaderProps {
  isModalOpen: boolean
  setIsModalOpen: (open: boolean) => void
  email: string
  setEmail: (email: string) => void
  handleSubmit: (e: React.FormEvent) => void
  isLoading: boolean
  isSuccess: boolean
}

export function Header({
  isModalOpen,
  setIsModalOpen,
  email,
  setEmail,
  handleSubmit,
  isLoading,
  isSuccess,
}: HeaderProps) {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Tell me your idea — I'll make it with you!"

  useEffect(() => {
    const startTyping = () => {
      let index = 0
      setDisplayedText("")

      const timer = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1))
          index++
        } else {
          clearInterval(timer)
        }
      }, 150)

      return timer
    }

    const initialTimer = startTyping()
    const repeatInterval = setInterval(() => {
      startTyping()
    }, 15000)

    return () => {
      clearInterval(initialTimer)
      clearInterval(repeatInterval)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white transition-all duration-300 font-bold text-sm sm:text-lg cursor-pointer"
              >
                <span className="hover:text-white/80 hover:scale-105 transition-all duration-300 inline-block">
                  Home
                </span>
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-white transition-all duration-300 font-bold text-sm sm:text-lg cursor-pointer"
              >
                <span className="hover:text-white/80 hover:scale-105 transition-all duration-300 inline-block">
                  Features
                </span>
              </button>
              <button
                onClick={() => scrollToSection("explore")}
                className="text-white transition-all duration-300 font-bold text-sm sm:text-lg cursor-pointer"
              >
                <span className="hover:text-white/80 hover:scale-105 transition-all duration-300 inline-block">
                  Explore
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="text-center pt-32 sm:pt-48 lg:pt-64 pb-12 sm:pb-24 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#6F0FFA]/5 via-[#472AB9]/3 to-transparent pointer-events-none" />

        <div className="absolute top-24 sm:top-32 lg:top-48 left-0 right-0 z-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="mb-2 sm:mb-4">
                  <p className="text-xs sm:text-sm lg:text-base font-semibold text-purple-200 tracking-wider font-sans">
                    OpenBeta Available in November
                  </p>
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-9xl font-black text-white leading-none drop-shadow-2xl">
                  GenPresso
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl rounded-lg -z-10" />
              </div>
              <div className="mt-2 sm:mt-4">
                <p className="text-sm sm:text-lg lg:text-2xl font-medium text-white tracking-wide uppercase">
                  All-in-one Agentic AI Design Platform
                </p>
                <div className="w-16 sm:w-24 lg:w-32 h-0.5 bg-gradient-to-r from-purple-500 to-transparent mt-2 mx-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl relative z-10">
          <div className="mb-8 sm:mb-12 mt-32 sm:mt-48 lg:mt-64"></div>

          <div className="relative z-40 mb-8 sm:mb-16">
            <WaitlistModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              email={email}
              setEmail={setEmail}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              isSuccess={isSuccess}
            />
          </div>

          <div className="-mt-8 sm:-mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent blur-xl"></div>
            <img
              src="/images/node-group.png"
              alt="AI Generated Design Examples"
              className="w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto opacity-10 hover:opacity-100 transition-opacity duration-500 relative z-10 rounded-3xl"
            />
            <div className="mt-4 sm:mt-8 flex justify-center relative">
              <div className="relative">
                <div className="absolute -top-16 sm:-top-24 lg:-top-32 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="relative">
                    <div className="absolute -top-8 sm:-top-12 lg:-top-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 shadow-2xl border border-white/30 whitespace-nowrap min-w-max before:absolute before:inset-0 before:rounded-xl sm:before:rounded-2xl before:bg-gradient-to-br before:from-white/30 before:via-transparent before:to-transparent before:opacity-50 before:pointer-events-none">
                      <p className="text-white font-medium text-center whitespace-nowrap drop-shadow-lg relative z-10 text-xs sm:text-sm lg:text-base">
                        {displayedText}
                        <span className="animate-pulse">|</span>
                      </p>
                    </div>
                    <img
                      src="/images/agent.png"
                      alt="AI Agent"
                      className="w-16 sm:w-20 lg:w-28 h-auto animate-bounce object-contain rounded-3xl"
                      style={{ animationDuration: "2s" }}
                    />
                  </div>
                </div>
                <img
                  src="/images/chat-bar.png"
                  alt="Chat Interface"
                  className="max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
