'use client'

import styles from "@/app/projetoValorant/page.module.css"
import Link from "next/link"
import { Nav } from "@/components/Desktop/Nav"
import { Contato } from "@/components/Desktop/Contato"

export default function ProjetoNetflix() {
    return (
        <div className={styles.main}>
            <Nav />
            <section className={styles.detalheProjeto}>
                <div className={styles.tituloEimagem}>
                    <h2>Agentes Valorant</h2>
                    <img src="/imagemSenhaCerta.png" alt="" className={styles.imgProjeto}/>
                    <div>
                        <Link href={'https://github.com/MiguellArcanjo/fechaduraComSenha'} className={styles.link} target="blanck_">Ver repositorio</Link>
                        <Link href={'/'} className={styles.link}>Voltar</Link>
                    </div>
                </div>
                <div className={styles.divParagrafo}>
                    <p>Dando continuidade aos meus estudos em desenvolvimento web e IoT, tentei ir além ao construir um protótipo de fechadura eletrônica que possui uma interface web para interação. O objetivo é criar uma interface para interagir com o dispositivo eletrônico, permitindo abrir a fechadura ao inserir a senha correta.</p>
                </div>
            </section>

            <section className={styles.sectionSkills} id="skills">
                <div>
                    <h2 className={styles.titleSkills}>Tecnologias usada</h2>
                    <div className={styles.containerSkill}>
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