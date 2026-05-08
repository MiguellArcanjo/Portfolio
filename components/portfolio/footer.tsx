"use client"

type Language = "pt" | "en"

interface FooterProps {
  language: Language
}

const content = {
  pt: {
    built: "Construído com Next.js",
    location: "João Pessoa, PB",
  },
  en: {
    built: "Built with Next.js",
    location: "João Pessoa, PB",
  },
}

export function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-muted-foreground/60">
            <span className="font-mono text-xs">
              © {currentYear} Miguel Arcanjo
            </span>
            <span className="hidden md:inline text-muted-foreground/30">|</span>
            <span className="font-mono text-xs">
              {content[language].location}
            </span>
          </div>
          
          <span className="font-mono text-xs text-muted-foreground/40">
            {content[language].built}
          </span>
        </div>
      </div>
    </footer>
  )
}
