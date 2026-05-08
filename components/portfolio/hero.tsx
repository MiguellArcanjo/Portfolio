"use client"

import { useEffect, useState } from "react"

type Language = "pt" | "en"

interface HeroProps {
  language: Language
}

const content = {
  pt: {
    subtitle: "Security Researcher | Offensive Security & Web Hacking",
    bio: "Desenvolvedor Full Stack em transição para Red Team. Combino experiência em desenvolvimento web com metodologias de segurança ofensiva para identificar vulnerabilidades em aplicações modernas.",
  },
  en: {
    subtitle: "Security Researcher | Offensive Security & Web Hacking",
    bio: "Full Stack Developer transitioning to Red Team. I combine web development experience with offensive security methodologies to identify vulnerabilities in modern applications.",
  },
}

export function Hero({ language }: HeroProps) {
  const [typedName, setTypedName] = useState("")
  const fullName = "Miguel Arcanjo"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullName.length) {
        setTypedName(fullName.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        {/* Name with typing effect */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4 animate-fade-in">
          <span className="font-mono">{typedName}</span>
          <span className="typing-cursor text-muted-foreground" />
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-sm md:text-base text-muted-foreground mb-8 animate-fade-in-delay-1">
          {content[language].subtitle}
        </p>

        {/* Bio */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-delay-2">
          {content[language].bio}
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-fade-in-delay-3">
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <span className="text-xs font-mono">scroll</span>
            <svg
              className="w-4 h-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
