"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { HeroVideo } from "@/components/hero-video"
import { WhyGenPresso } from "@/components/why-genpresso"
import { FeaturesSection } from "@/components/features-section"
import { OneSparkSection } from "@/components/one-spark-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      alert("올바른 이메일 주소를 입력해주세요.")
      return
    }

    setIsLoading(true)

    try {
      console.log("Email submitted:", email)

      // 임시로 2초 지연 후 성공 처리
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSuccess(true)
      setEmail("")

      // 3초 후 모달 닫기
      setTimeout(() => {
        setIsModalOpen(false)
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting email:", error)
      alert("등록 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div id="home">
        <Header
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
        <HeroVideo />
      </div>
      <div id="features">
        <div id="why-genpresso">
          <WhyGenPresso />
        </div>
        <FeaturesSection />
      </div>
      <div id="explore">
        <OneSparkSection />
      </div>
      <FinalCTA
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
      <Footer />
    </div>
  )
}
