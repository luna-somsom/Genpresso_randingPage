"use client"

import { Lightbulb, Settings, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function FeaturesSection() {
  const agenticAI = useScrollAnimation(0.2)
  const nodeInterface = useScrollAnimation(0.2)
  const teamCollaboration = useScrollAnimation(0.2)

  return (
    <section className="px-4 sm:px-6 mb-16 sm:mb-24 lg:mb-32">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 lg:space-y-24">
        {/* Guiding Light Agentic AI - Video Left, Text Right */}
        <div
          ref={agenticAI.ref}
          className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 transition-all duration-1000 ease-out ${
            agenticAI.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6F0FFA]/30 via-[#472AB9]/25 to-[#8A64EA]/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A64EA]/25 via-[#472AB9]/30 to-[#6F0FFA]/25 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-[#BB23FD]/20 via-[#46179C]/25 to-[#472AB9]/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl animate-pulse delay-2000"></div>
              <div className="relative bg-black rounded-3xl sm:rounded-2xl overflow-hidden shadow-2xl z-20">
                <img
                  src="/images/agentic-ai.png"
                  alt="Agentic AI Character"
                  className="w-full aspect-square object-cover rounded-3xl z-20"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-lg blur-sm opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 p-1.5 sm:p-2 rounded-lg shadow-2xl border border-yellow-300/30">
                    <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4 text-white drop-shadow-lg" />
                  </div>
                </div>
                <h4 className="text-sm sm:text-lg font-bold text-foreground">Guiding Light</h4>
              </div>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6F0FFA]/20 via-[#BB23FD]/15 to-[#8A64EA]/20 rounded-full blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#472AB9]/15 via-[#46179C]/20 to-[#BB23FD]/15 rounded-full blur-lg"></div>
                <h3 className="relative text-xl sm:text-2xl lg:text-4xl font-bold text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 backdrop-blur-sm bg-black/20 rounded-full border border-white/20 shadow-2xl drop-shadow-lg hover:scale-105 hover:brightness-110 hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer">
                  Agentic AI
                </h3>
              </div>
              <div className="space-y-3 sm:space-y-4 max-w-xs sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
                  The Agent can adapt to any design task with flexibility.
                  <br className="hidden sm:block" />
                  2D, 3D, Advertising, Product Design — and more
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
                  GenPresso's Agentic AI understands your intent,
                  <br className="hidden sm:block" />
                  suggests better directions, and completes the work with you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Node Interface - Text Left, Video Right */}
        <div
          ref={nodeInterface.ref}
          className={`flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-12 transition-all duration-1000 ease-out ${
            nodeInterface.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#46179C]/30 via-[#BB23FD]/25 to-[#6F0FFA]/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl animate-pulse delay-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A64EA]/25 via-[#472AB9]/30 to-[#46179C]/25 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl animate-pulse delay-1500"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-[#BB23FD]/20 via-[#46179C]/25 to-[#472AB9]/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl animate-pulse delay-2500"></div>
              <div className="relative bg-black rounded-3xl sm:rounded-2xl overflow-hidden shadow-2xl z-10">
                <img
                  src="/images/node-interface.png"
                  alt="Node Interface Workflow"
                  className="w-full aspect-square object-cover rounded-3xl z-10"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-600 rounded-lg blur-sm opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 p-1.5 sm:p-2 rounded-lg shadow-2xl border border-blue-300/30">
                    <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-white drop-shadow-lg" />
                  </div>
                </div>
                <h4 className="text-sm sm:text-lg font-bold text-foreground">Power of Process</h4>
              </div>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6F0FFA]/20 via-[#BB23FD]/15 to-[#8A64EA]/20 rounded-full blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#472AB9]/15 via-[#46179C]/20 to-[#BB23FD]/15 rounded-full blur-lg"></div>
                <h3 className="relative text-xl sm:text-2xl lg:text-4xl font-bold text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 backdrop-blur-sm bg-black/20 rounded-full border border-white/20 shadow-2xl drop-shadow-lg hover:scale-105 hover:brightness-110 hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">
                  Node Interface
                </h3>
              </div>
              <div className="max-w-xs sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
                  The Node Interface follows the familiar flow of design
                  <br className="hidden sm:block" />
                  and lets you step in at any time to refine and expand your work.
                  <br className="hidden sm:block" />
                  This makes outcome more complete.
                  <br className="hidden sm:block" />
                  It also lets a single creation be easily applied to
                  <br className="hidden sm:block" />
                  various formats and platforms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Co-Creation Team - Video Left, Text Right */}
        <div
          ref={teamCollaboration.ref}
          className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 transition-all duration-1000 ease-out ${
            teamCollaboration.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8A64EA]/30 via-[#472AB9]/25 to-[#46179C]/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#6F0FFA]/25 via-[#8A64EA]/30 to-[#BB23FD]/25 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl animate-pulse delay-2000"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-[#BB23FD]/20 via-[#46179C]/25 to-[#472AB9]/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl animate-pulse delay-3000"></div>
              <div className="relative bg-black rounded-3xl sm:rounded-2xl overflow-hidden shadow-2xl z-10">
                <img
                  src="/images/team-workflow.png"
                  alt="Team Collaboration Workflow"
                  className="w-full aspect-square object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-600 rounded-lg blur-sm opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-green-400 to-green-600 p-1.5 sm:p-2 rounded-lg shadow-2xl border border-green-300/30">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-white drop-shadow-lg" />
                  </div>
                </div>
                <h4 className="text-sm sm:text-lg font-bold text-foreground">Co-Creation</h4>
              </div>
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-[#6F0FFA]/20 via-[#BB23FD]/15 to-[#8A64EA]/20 rounded-full blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#472AB9]/15 via-[#46179C]/20 to-[#BB23FD]/15 rounded-full blur-lg"></div>
                <h3 className="relative text-xl sm:text-2xl lg:text-4xl font-bold text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 backdrop-blur-sm bg-black/20 rounded-full border border-white/20 shadow-2xl drop-shadow-lg hover:scale-105 hover:brightness-110 hover:shadow-green-500/50 transition-all duration-300 cursor-pointer">
                  Team
                </h3>
              </div>
              <div className="max-w-xs sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
                <p className="text-sm sm:text-base lg:text-lg text-white leading-relaxed">
                  Through Team Collaboration, you can share ideas and work together in real time within a single
                  project.
                  <br className="hidden sm:block" />
                  The ideas your team shares are reflected in the AI Agent,
                  <br className="hidden sm:block" />
                  leading to better results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
