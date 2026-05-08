"use client"

import { useEffect, useRef, useState } from "react"

type Language = "pt" | "en"

interface ProficiencyProps {
  language: Language
}

interface SkillBar {
  name: string
  level: number
  note?: string
}

const content = {
  pt: {
    sectionLabel: "// proficiência",
    title: "Nível de Habilidade",
    hardSkillsTitle: "Hard Skills",
    softSkillsTitle: "Soft Skills",
    hardSkills: [
      { name: "Criptografia & PKI", level: 72, note: "TLS, JWT, AES, RSA" },
      { name: "Engenharia Reversa", level: 55, note: "Análise de binários, Ghidra" },
      { name: "Network Security", level: 68, note: "TCP/IP, Protocolos, Sniffing" },
      { name: "CVE Research", level: 60, note: "Divulgação responsável, PoC" },
      { name: "Cloud Security", level: 48, note: "AWS IAM, S3, EC2 misconfigs" },
      { name: "API Security", level: 80, note: "REST, GraphQL, OAuth 2.0" },
    ] as SkillBar[],
    softSkills: [
      { name: "Documentação Técnica", level: 90, note: "Relatórios, write-ups, manuais" },
      { name: "Pensamento Crítico", level: 88, note: "Análise de superfície de ataque" },
      { name: "Comunicação Clara", level: 82, note: "Bridging técnico & executivo" },
      { name: "Aprendizado Contínuo", level: 95, note: "CTFs, pesquisa independente" },
      { name: "Resolução de Problemas", level: 87, note: "Debugging, RCA, root cause" },
      { name: "Gestão de Tempo", level: 75, note: "Escopo, triagem, priorização" },
    ] as SkillBar[],
  },
  en: {
    sectionLabel: "// proficiency",
    title: "Skill Level",
    hardSkillsTitle: "Hard Skills",
    softSkillsTitle: "Soft Skills",
    hardSkills: [
      { name: "Cryptography & PKI", level: 72, note: "TLS, JWT, AES, RSA" },
      { name: "Reverse Engineering", level: 55, note: "Binary analysis, Ghidra" },
      { name: "Network Security", level: 68, note: "TCP/IP, Protocols, Sniffing" },
      { name: "CVE Research", level: 60, note: "Responsible disclosure, PoC" },
      { name: "Cloud Security", level: 48, note: "AWS IAM, S3, EC2 misconfigs" },
      { name: "API Security", level: 80, note: "REST, GraphQL, OAuth 2.0" },
    ] as SkillBar[],
    softSkills: [
      { name: "Technical Documentation", level: 90, note: "Reports, write-ups, manuals" },
      { name: "Critical Thinking", level: 88, note: "Attack surface analysis" },
      { name: "Clear Communication", level: 82, note: "Bridging technical & executive" },
      { name: "Continuous Learning", level: 95, note: "CTFs, independent research" },
      { name: "Problem Solving", level: 87, note: "Debugging, RCA, root cause" },
      { name: "Time Management", level: 75, note: "Scoping, triage, prioritization" },
    ] as SkillBar[],
  },
}

function SkillRow({ skill, animate }: { skill: SkillBar; animate: boolean }) {
  return (
    <div className="group">
      <div className="flex items-baseline justify-between mb-2">
        <div className="flex items-baseline gap-3">
          <span className="text-sm text-foreground">{skill.name}</span>
          {skill.note && (
            <span className="font-mono text-xs text-muted-foreground/60 hidden sm:inline">
              {skill.note}
            </span>
          )}
        </div>
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {skill.level}%
        </span>
      </div>
      <div className="h-px w-full bg-border/50 relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-foreground transition-all duration-700 ease-out"
          style={{
            width: animate ? `${skill.level}%` : "0%",
            transitionDelay: animate ? "0ms" : "0ms",
          }}
        />
      </div>
    </div>
  )
}

export function Proficiency({ language }: ProficiencyProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [animated])

  const { sectionLabel, title, hardSkillsTitle, softSkillsTitle, hardSkills, softSkills } =
    content[language]

  return (
    <section id="proficiency" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <span className="font-mono text-xs text-muted-foreground tracking-wider">
          {sectionLabel}
        </span>

        <h2 className="text-2xl md:text-3xl font-light mt-4 mb-16 text-balance">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Hard Skills */}
          <div>
            <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-8">
              {hardSkillsTitle}
            </h3>
            <div className="flex flex-col gap-7">
              {hardSkills.map((skill, i) => (
                <div
                  key={skill.name}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <SkillRow skill={skill} animate={animated} />
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-8">
              {softSkillsTitle}
            </h3>
            <div className="flex flex-col gap-7">
              {softSkills.map((skill, i) => (
                <div
                  key={skill.name}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <SkillRow skill={skill} animate={animated} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
