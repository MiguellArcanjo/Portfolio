"use client"

type Language = "pt" | "en"

interface StackProps {
  language: Language
}

interface TechItem {
  name: string
  category: "language" | "tool" | "framework" | "platform"
}

const techStack: TechItem[] = [
  { name: "Python", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "PHP", category: "language" },
  { name: "SQL", category: "language" },
  { name: "Bash", category: "language" },
  { name: "Linux", category: "platform" },
  { name: "Git", category: "tool" },
  { name: "Docker", category: "tool" },
  { name: "Burp Suite", category: "tool" },
  { name: "OWASP ZAP", category: "tool" },
  { name: "Nmap", category: "tool" },
  { name: "SQLMap", category: "tool" },
  { name: "Wireshark", category: "tool" },
  { name: "Next.js", category: "framework" },
  { name: "React", category: "framework" },
  { name: "Laravel", category: "framework" },
  { name: "Node.js", category: "framework" },
]

const content = {
  pt: {
    sectionLabel: "// infraestrutura",
    title: "Stack & Ferramentas",
    description: "Tecnologias que domino como desenvolvedor e utilizo em operações de segurança.",
    categories: {
      language: "Linguagens",
      tool: "Ferramentas",
      framework: "Frameworks",
      platform: "Plataformas",
    },
  },
  en: {
    sectionLabel: "// infrastructure",
    title: "Stack & Tools",
    description: "Technologies I master as a developer and use in security operations.",
    categories: {
      language: "Languages",
      tool: "Tools",
      framework: "Frameworks",
      platform: "Platforms",
    },
  },
}

export function Stack({ language }: StackProps) {
  const groupedTech = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = []
    }
    acc[tech.category].push(tech)
    return acc
  }, {} as Record<string, TechItem[]>)

  const categoryOrder: TechItem["category"][] = ["language", "tool", "framework", "platform"]

  return (
    <section id="stack" className="py-32 px-6 bg-card/50">
      <div className="max-w-3xl mx-auto">
        <span className="font-mono text-xs text-muted-foreground tracking-wider">
          {content[language].sectionLabel}
        </span>
        
        <h2 className="text-2xl md:text-3xl font-light mt-4 mb-4">
          {content[language].title}
        </h2>
        
        <p className="text-muted-foreground mb-12">
          {content[language].description}
        </p>

        {/* Tech Grid */}
        <div className="grid gap-10">
          {categoryOrder.map((category) => (
            groupedTech[category] && (
              <div key={category}>
                <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-4">
                  {content[language].categories[category]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {groupedTech[category].map((tech) => (
                    <span
                      key={tech.name}
                      className="font-mono text-sm px-4 py-2 bg-background border border-border/50 rounded text-foreground hover:border-muted-foreground/50 transition-colors"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
