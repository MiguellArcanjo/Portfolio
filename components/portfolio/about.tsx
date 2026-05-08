"use client"

type Language = "pt" | "en"

interface AboutProps {
  language: Language
}

const content = {
  pt: {
    sectionLabel: "// sobre",
    title: "Da Construção à Desconstrução",
    paragraphs: [
      "Minha jornada começou como desenvolvedor Full Stack, construindo aplicações web com PHP, Python, JavaScript e frameworks modernos como Next.js e Laravel. Essa experiência me deu uma compreensão profunda de como os sistemas são construídos — e, consequentemente, como podem ser comprometidos.",
      "Agora, aplico esse conhecimento em segurança ofensiva, focando em testes de intrusão web e análise de código-fonte. Entender o mindset do desenvolvedor me permite identificar vulnerabilidades que ferramentas automatizadas frequentemente não detectam.",
    ],
    quote: "\"A melhor forma de defender um sistema é saber como atacá-lo.\"",
  },
  en: {
    sectionLabel: "// about",
    title: "From Building to Breaking",
    paragraphs: [
      "My journey started as a Full Stack developer, building web applications with PHP, Python, JavaScript, and modern frameworks like Next.js and Laravel. This experience gave me a deep understanding of how systems are built — and consequently, how they can be compromised.",
      "Now, I apply this knowledge in offensive security, focusing on web penetration testing and source code analysis. Understanding the developer's mindset allows me to identify vulnerabilities that automated tools often miss.",
    ],
    quote: "\"The best way to defend a system is to know how to attack it.\"",
  },
}

export function About({ language }: AboutProps) {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="font-mono text-xs text-muted-foreground tracking-wider">
          {content[language].sectionLabel}
        </span>
        
        <h2 className="text-2xl md:text-3xl font-light mt-4 mb-12 text-balance">
          {content[language].title}
        </h2>

        <div className="space-y-6">
          {content[language].paragraphs.map((paragraph, index) => (
            <p 
              key={index} 
              className="text-muted-foreground leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <blockquote className="mt-12 pl-6 border-l-2 border-muted-foreground/30">
          <p className="font-mono text-sm text-muted-foreground italic">
            {content[language].quote}
          </p>
        </blockquote>
      </div>
    </section>
  )
}
