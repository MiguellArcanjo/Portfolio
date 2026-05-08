"use client"

import { Github, Linkedin, Mail } from "lucide-react"

type Language = "pt" | "en"

interface LinksProps {
  language: Language
}

const content = {
  pt: {
    sectionLabel: "// contato",
    title: "Vamos Conversar",
    description: "Interessado em discutir segurança, colaborar em projetos ou oportunidades profissionais.",
    email: "contato.miguelarcanjo2305@gmail.com",
  },
  en: {
    sectionLabel: "// contact",
    title: "Let's Talk",
    description: "Interested in discussing security, collaborating on projects, or professional opportunities.",
    email: "contato.miguelarcanjo2305@gmail.com",
  },
}

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/miguellarcanjo",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/miguelarcanjo",
    icon: Linkedin,
  },
]

export function Links({ language }: LinksProps) {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="font-mono text-xs text-muted-foreground tracking-wider">
          {content[language].sectionLabel}
        </span>
        
        <h2 className="text-2xl md:text-3xl font-light mt-4 mb-4">
          {content[language].title}
        </h2>
        
        <p className="text-muted-foreground mb-12 max-w-lg">
          {content[language].description}
        </p>

        {/* Email */}
        <a
          href={`mailto:${content[language].email}`}
          className="group inline-flex items-center gap-3 mb-12 hover:text-muted-foreground transition-colors"
        >
          <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          <span className="font-mono text-sm">
            {content[language].email}
          </span>
        </a>

        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <link.icon className="w-5 h-5" />
              <span className="font-mono text-sm">{link.name}</span>
              <svg
                className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
