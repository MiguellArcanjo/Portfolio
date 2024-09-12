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
                    <img src="/imagemNetflix.png" alt="" className={styles.imgProjeto}/>
                    <div>
                        <Link href={'https://github.com/MiguellArcanjo/NetflixClone'} className={styles.link} target="blanck_">Ver repositorio</Link>
                        <Link href={'/'} className={styles.link}>Voltar</Link>
                    </div>
                </div>
                <div className={styles.divParagrafo}>
                    <p>Este projeto foi desenvolvido com o objetivo de aprofundar meus conhecimentos e praticar HTML e CSS puros, sem a utilização de frameworks. Para testar minhas habilidades e enfrentar um desafio interessante, decidi criar um "clone" da Netflix.</p>
                </div>
            </section>

            <section className={styles.sectionSkills} id="skills">
                <div>
                    <h2 className={styles.titleSkills}>Tecnologias usada</h2>
                    <div className={styles.containerSkill}>
                        <div><img src="/htmlIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/cssIcon.svg" alt="" className={styles.imgIcon}/></div>
                    </div>
                </div>
            </section>

            <Contato />
        </div>
    )
}