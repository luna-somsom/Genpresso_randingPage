"use client"

import type React from "react"
import { useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface WaitlistModalProps {
  isModalOpen: boolean
  setIsModalOpen: (open: boolean) => void
  email: string
  setEmail: (email: string) => void
  handleSubmit: (e: React.FormEvent) => void
  isLoading: boolean
  isSuccess: boolean
  buttonText?: string
  buttonClassName?: string
}

export function WaitlistModal({
  isModalOpen,
  setIsModalOpen,
  email,
  setEmail,
  handleSubmit,
  isLoading,
  isSuccess,
  buttonText = "Join waitlist",
  buttonClassName = "glass-button px-12 py-6 rounded-full text-lg font-bold text-white",
}: WaitlistModalProps) {
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("[v0] Join Waitlist 버튼 클릭됨")
    console.log("[v0] 현재 모달 상태:", isModalOpen)
    setIsModalOpen(true)
    console.log("[v0] 모달 열기 시도 완료")
  }

  useEffect(() => {
    console.log("[v0] 모달 상태 변경됨:", isModalOpen)
  }, [isModalOpen])

  return (
    <>
      <Button className={buttonClassName} onClick={handleButtonClick} type="button">
        {buttonText}
      </Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          className="sm:max-w-md rounded-3xl border border-white/20 bg-black/80 backdrop-blur-xl shadow-2xl"
          aria-describedby="waitlist-description"
        >
          <DialogHeader className="pb-6">
            <DialogTitle className="text-2xl font-semibold text-center text-white">
              {isSuccess ? "Welcome!" : "Join the GenPresso Waitlist"}
            </DialogTitle>
            <DialogDescription id="waitlist-description" className="text-white/70 text-center">
              {isSuccess
                ? "You've been successfully added to our waitlist!"
                : "Be the first to receive news about the GenPresso AI platform launch."}
            </DialogDescription>
          </DialogHeader>

          {isSuccess ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <p className="text-white text-lg">You've been successfully added to our waitlist!</p>
              <p className="text-white/70 text-sm mt-2">We'll notify you as soon as GenPresso launches.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-white/90">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent focus:ring-accent/20 backdrop-blur-sm"
                  required
                  disabled={isLoading}
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 rounded-xl glass-button font-bold text-white"
                disabled={isLoading}
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
