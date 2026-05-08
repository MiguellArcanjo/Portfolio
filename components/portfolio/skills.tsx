"use client"

type Language = "pt" | "en"

interface SkillsProps {
  language: Language
}

const content = {
  pt: {
    sectionLabel: "// competências",
    title: "Metodologias & Expertise",
    methodology: {
      title: "Abordagem",
      description: "Minha abordagem de teste de intrusão web combina a experiência em desenvolvimento fullstack com os padrões da OWASP. Foco em identificar falhas de lógica de negócio e vulnerabilidades de injeção através de análise estática e dinâmica.",
    },
    categories: [
      {
        name: "Web Penetration Testing",
        items: [
          "OWASP Top 10",
          "SQL/NoSQL Injection",
          "XSS (Reflected, Stored, DOM)",
          "SSRF & CSRF",
          "Authentication Bypass",
          "Business Logic Flaws",
        ],
      },
      {
        name: "Source Code Analysis",
        items: [
          "Static Analysis (SAST)",
          "Dynamic Analysis (DAST)",
          "Code Review Manual",
          "Dependency Scanning",
          "Secret Detection",
        ],
      },
      {
        name: "Reconnaissance",
        items: [
          "Asset Discovery",
          "Subdomain Enumeration",
          "Technology Fingerprinting",
          "Information Gathering",
          "OSINT Techniques",
        ],
      },
    ],
  },
  en: {
    sectionLabel: "// skills",
    title: "Methodologies & Expertise",
    methodology: {
      title: "Approach",
      description: "My web penetration testing approach combines fullstack development experience with OWASP standards. I focus on identifying business logic flaws and injection vulnerabilities through static and dynamic analysis.",
    },
    categories: [
      {
        name: "Web Penetration Testing",
        items: [
          "OWASP Top 10",
          "SQL/NoSQL Injection",
          "XSS (Reflected, Stored, DOM)",
          "SSRF & CSRF",
          "Authentication Bypass",
          "Business Logic Flaws",
        ],
      },
      {
        name: "Source Code Analysis",
        items: [
          "Static Analysis (SAST)",
          "Dynamic Analysis (DAST)",
          "Manual Code Review",
          "Dependency Scanning",
          "Secret Detection",
        ],
      },
      {
        name: "Reconnaissance",
        items: [
          "Asset Discovery",
          "Subdomain Enumeration",
          "Technology Fingerprinting",
          "Information Gathering",
          "OSINT Techniques",
        ],
      },
    ],
  },
}

export function Skills({ language }: SkillsProps) {
  return (
    <section id="skills" className="py-32 px-6 bg-card/50">
      <div className="max-w-3xl mx-auto">
        <span className="font-mono text-xs text-muted-foreground tracking-wider">
          {content[language].sectionLabel}
        </span>
        
        <h2 className="text-2xl md:text-3xl font-light mt-4 mb-12">
          {content[language].title}
        </h2>

        {/* Methodology Statement */}
        <div className="mb-16 p-6 border border-border/50 rounded-lg bg-background/50">
          <h3 className="font-mono text-xs text-muted-foreground mb-3 uppercase tracking-wider">
            {content[language].methodology.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {content[language].methodology.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-12 md:gap-16">
          {content[language].categories.map((category) => (
            <div key={category.name}>
              <h3 className="font-mono text-sm text-foreground mb-6">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-3 py-2 bg-secondary text-muted-foreground border border-border/50 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
