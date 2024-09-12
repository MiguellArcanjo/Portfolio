'use client'

import styles from "@/app/projetoValorant/page.module.css"
import Link from "next/link"
import { Nav } from "@/components/Nav"
import { Contato } from "@/components/Contato"

export default function ProjetoEsp32() {
    return (
        <div className={styles.main}>
            <Nav />
            <section className={styles.detalheProjeto}>
                <div className={styles.tituloEimagem}>
                    <h2>Agentes Valorant</h2>
                    <img src="/imagemEsp.png" alt="" className={styles.imgProjeto}/>
                    <div>
                        <Link href={'https://github.com/MiguellArcanjo/ComunicacaoEsp32'} className={styles.link} target="blanck_">Ver repositorio</Link>
                        <Link href={'/'} className={styles.link}>Voltar</Link>
                    </div>
                </div>
                <div className={styles.divParagrafo}>
                    <p>No meu dia a dia, enfrentei o problema de verificar se a porta estava realmente fechada. Para resolver essa questão, desenvolvi um projeto simples que combina Desenvolvimento Web e Arduino. O objetivo do projeto é criar um sistema que permita monitorar o status da porta (aberta ou fechada) de maneira prática e eficiente, utilizando tecnologias modernas para obter informações em tempo real.</p>
                </div>
            </section>

            <section className={styles.sectionSkills} id="skills">
                <div>
                    <h2 className={styles.titleSkills}>Tecnologias usada</h2>
                    <div className={styles.containerSkill}>
                        {/* <div><img src="/iconGit 1.svg" alt="" className={styles.imgIcon}/></div> */}
                        <div><img src="/htmlIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/cssIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/IconReact 1.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/iconC+ 1.svg" alt="" className={styles.imgIcon}/></div>
                    </div>
                </div>
            </section>

            <Contato />
        </div>
    )
}