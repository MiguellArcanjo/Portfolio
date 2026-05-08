"use client"

type Language = "pt" | "en"

interface LabProps {
  language: Language
}

type Severity = "HIGH" | "MEDIUM" | "LOW"

interface WriteUp {
  id: string
  title: {
    pt: string
    en: string
  }
  summary: {
    pt: string
    en: string
  }
  severity: Severity
  date: string
  status: "in_progress" | "published"
}

const writeUps: WriteUp[] = [
  {
    id: "WU-001",
    title: {
      pt: "Análise de Autenticação em Aplicações SPA",
      en: "Authentication Analysis in SPA Applications",
    },
    summary: {
      pt: "Estudo sobre falhas comuns de autenticação em Single Page Applications, incluindo JWT misconfigurations e session management.",
      en: "Study on common authentication flaws in Single Page Applications, including JWT misconfigurations and session management.",
    },
    severity: "HIGH",
    date: "2025-XX",
    status: "in_progress",
  },
  {
    id: "WU-002",
    title: {
      pt: "SSRF em Integrações de API",
      en: "SSRF in API Integrations",
    },
    summary: {
      pt: "Investigação de vulnerabilidades SSRF em endpoints de integração que processam URLs fornecidas por usuários.",
      en: "Investigation of SSRF vulnerabilities in integration endpoints that process user-supplied URLs.",
    },
    severity: "MEDIUM",
    date: "2025-XX",
    status: "in_progress",
  },
  {
    id: "WU-003",
    title: {
      pt: "Injeção de Template em Frameworks Modernos",
      en: "Template Injection in Modern Frameworks",
    },
    summary: {
      pt: "Pesquisa sobre Server-Side Template Injection (SSTI) em frameworks populares como Jinja2, Twig e EJS.",
      en: "Research on Server-Side Template Injection (SSTI) in popular frameworks like Jinja2, Twig, and EJS.",
    },
    severity: "HIGH",
    date: "2025-XX",
    status: "in_progress",
  },
]

const severityColors: Record<Severity, string> = {
  HIGH: "text-[#ef4444]",
  MEDIUM: "text-[#f97316]",
  LOW: "text-[#eab308]",
}

const content = {
  pt: {
    sectionLabel: "// laboratório",
    title: "The Lab",
    subtitle: "Pesquisas e Write-ups técnicos",
    statusLabel: "PESQUISA EM ANDAMENTO",
  },
  en: {
    sectionLabel: "// laboratory",
    title: "The Lab",
    subtitle: "Technical research and write-ups",
    statusLabel: "RESEARCH IN PROGRESS",
  },
}

export function Lab({ language }: LabProps) {
  return (
    <section id="lab" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="font-mono text-xs text-muted-foreground tracking-wider">
          {content[language].sectionLabel}
        </span>
        
        <h2 className="text-2xl md:text-3xl font-light mt-4 mb-2">
          {content[language].title}
        </h2>
        
        <p className="text-muted-foreground mb-12">
          {content[language].subtitle}
        </p>

        {/* Write-ups Grid */}
        <div className="space-y-6">
          {writeUps.map((writeUp) => (
            <article
              key={writeUp.id}
              className="group p-6 border border-border/50 rounded-lg bg-card/30 hover:bg-card/50 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    {writeUp.id}
                  </span>
                  <span className={`font-mono text-xs ${severityColors[writeUp.severity]}`}>
                    [{writeUp.severity}]
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground/60">
                  {writeUp.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-light mb-3 text-foreground">
                {writeUp.title[language]}
              </h3>

              {/* Summary */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {writeUp.summary[language]}
              </p>

              {/* Status */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full status-pulse" />
                <span className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wider">
                  {content[language].statusLabel}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
