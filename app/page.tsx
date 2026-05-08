"use client"

import { useState } from "react"
import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Proficiency } from "@/components/portfolio/proficiency"
import { Lab } from "@/components/portfolio/lab"
import { Stack } from "@/components/portfolio/stack"
import { Links } from "@/components/portfolio/links"
import { Footer } from "@/components/portfolio/footer"

type Language = "pt" | "en"

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>("pt")

  return (
    <main className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Skills language={language} />
      <Proficiency language={language} />
      <Lab language={language} />
      <Stack language={language} />
      <Links language={language} />
      <Footer language={language} />
    </main>
  )
}
