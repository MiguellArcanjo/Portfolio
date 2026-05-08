"use client"

import { useState } from "react"
import Link from "next/link"

type Language = "pt" | "en"

interface HeaderProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = {
    pt: ["Sobre", "Competências", "Lab", "Stack", "Contato"],
    en: ["About", "Skills", "Lab", "Stack", "Contact"],
  }

  const navLinks = ["#about", "#skills", "#lab", "#stack", "#contact"]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="#" 
            className="font-mono text-sm tracking-wider text-foreground hover:text-muted-foreground transition-colors"
          >
            MA_
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems[language].map((item, index) => (
              <Link
                key={item}
                href={navLinks[index]}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <div className="flex items-center gap-1 ml-4 border-l border-border pl-4">
              <button
                onClick={() => onLanguageChange("pt")}
                className={`text-xs font-mono px-2 py-1 transition-colors ${
                  language === "pt" 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                PT
              </button>
              <span className="text-muted-foreground/50">/</span>
              <button
                onClick={() => onLanguageChange("en")}
                className={`text-xs font-mono px-2 py-1 transition-colors ${
                  language === "en" 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navItems[language].map((item, index) => (
                <Link
                  key={item}
                  href={navLinks[index]}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center gap-2 pt-2 border-t border-border mt-2">
                <button
                  onClick={() => onLanguageChange("pt")}
                  className={`text-xs font-mono px-2 py-1 transition-colors ${
                    language === "pt" 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  PT
                </button>
                <span className="text-muted-foreground/50">/</span>
                <button
                  onClick={() => onLanguageChange("en")}
                  className={`text-xs font-mono px-2 py-1 transition-colors ${
                    language === "en" 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
