"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative py-3 sm:py-4 px-0 w-full bg-black/40 backdrop-blur-sm z-10 mt-4 sm:mt-6 lg:mt-8">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6F0FFA]/20 via-[#472AB9]/20 to-[#8A64EA]/20 blur-2xl sm:blur-3xl opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#46179C]/15 via-[#BB23FD]/15 to-[#6F0FFA]/15 blur-xl sm:blur-2xl opacity-25" />

      <div className="relative w-full px-4 sm:px-6 text-center z-20">
        <div className="space-y-2 sm:space-y-3">
          <div className="rounded-lg p-2 sm:p-3 backdrop-blur-sm z-30 relative">
            <div className="text-xs sm:text-sm text-white/60 font-light leading-relaxed space-y-1">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/images/recon-logo.png"
                  alt="RECON Logo"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <p>RECON Inc. | Seonghoon Ban</p>
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="text-base">🇰🇷</span>
                <span>30, Hakdong-ro 53-gil, Gangnam-gu, Seoul, South Korea</span>
              </div>

              <div className="flex items-center justify-center gap-2">
                <span className="text-base">🇺🇸</span>
                <span>3003 North First Street, San Jose, CA 95134</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-3">
              <p className="text-xs text-white/50 font-light">Copyright ⓒ 2025 RECON Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
