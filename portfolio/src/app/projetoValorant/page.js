'use client'

import styles from "@/app/projetoValorant/page.module.css"
import Link from "next/link"
import { use, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive"

import { Nav } from '@/components/Desktop/Nav'; 
import { NavTablet } from '@/components/Tablet/NavTablet'; 
import { NavMobile } from '@/components/Mobile/NavMobile';

import { Contato } from '@/components/Desktop/Contato';
import { ContatoTablet } from '@/components/Tablet/ContatoTablet';
import { ContatoMobile } from '@/components/Mobile/ContatoMobile';

const ProjetoValorantDesktop = () => {
    const isDesktop = useMediaQuery({minWidth: 1024});

    if (!isDesktop) {
        return null;
    }

    return (
        <div className={styles.main}>
            <Nav />
            <section className={styles.detalheProjeto}>
                <div className={styles.tituloEimagem}>
                    <h2>Agentes Valorant</h2>
                    <img src="/imagemValorant.png" alt="" className={styles.imgProjeto}/>
                    <div>
                        <Link href={'https://github.com/MiguellArcanjo/AgentesValorant'} className={styles.link} target="blanck_">Ver repositorio</Link>
                        <Link href={'/'} className={styles.link}>Voltar</Link>
                    </div>
                </div>
                <div className={styles.divParagrafo}>
                    <p>Este projeto foi desenvolvido como parte dos meus estudos, seguindo o tutorial do Leo Vargar. Nele, aprendi a consumir a API do Valorant e tive dicas essenciais para o desenvolvimento web.</p>
                </div>
            </section>

            <section className={styles.sectionSkills} id="skills">
                <div>
                    <h2 className={styles.titleSkills}>Tecnologias usada</h2>
                    <div className={styles.containerSkill}>
                        <div><img src="/htmlIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/cssIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/IconReact 1.svg" alt="" className={styles.imgIcon}/></div>
                    </div>
                </div>
            </section>

            <Contato />
        </div>
    )
}

const ProjetoValorantTablet = () => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    if (!isTablet) {
        return null;
    }

    return (
        <div className={styles.main}>
            <NavTablet />
            <section className={styles.detalheProjeto}>
                <div className={styles.tituloEimagem}>
                    <h2>Agentes Valorant</h2>
                    <img src="/imagemValorant.png" alt="" className={styles.imgProjeto}/>
                    <div>
                        <Link href={'https://github.com/MiguellArcanjo/AgentesValorant'} className={styles.link} target="blanck_">Ver repositorio</Link>
                        <Link href={'/'} className={styles.link}>Voltar</Link>
                    </div>
                </div>
                <div className={styles.divParagrafo}>
                    <p>Este projeto foi desenvolvido como parte dos meus estudos, seguindo o tutorial do Leo Vargar. Nele, aprendi a consumir a API do Valorant e tive dicas essenciais para o desenvolvimento web.</p>
                </div>
            </section>

            <section className={styles.sectionSkills} id="skills">
                <div>
                    <h2 className={styles.titleSkills}>Tecnologias usada</h2>
                    <div className={styles.containerSkill}>
                        <div><img src="/htmlIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/cssIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/IconReact 1.svg" alt="" className={styles.imgIcon}/></div>
                    </div>
                </div>
            </section>

            <ContatoTablet />
        </div>
    )
}

const ProjetoValorantMobile = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    if (!isMobile) {
        return null;
    }

    return (
        <div className={styles.main}>
            <NavMobile />
            <section className={styles.detalheProjeto}>
                <div className={styles.tituloEimagem}>
                    <h2>Agentes Valorant</h2>
                    <img src="/imagemValorant.png" alt="" className={styles.imgProjeto}/>
                    <div>
                        <Link href={'https://github.com/MiguellArcanjo/AgentesValorant'} className={styles.link} target="blanck_">Ver repositorio</Link>
                        <Link href={'/'} className={styles.link}>Voltar</Link>
                    </div>
                </div>
                <div className={styles.divParagrafo}>
                    <p>Este projeto foi desenvolvido como parte dos meus estudos, seguindo o tutorial do Leo Vargar. Nele, aprendi a consumir a API do Valorant e tive dicas essenciais para o desenvolvimento web.</p>
                </div>
            </section>

            <section className={styles.sectionSkills} id="skills">
                <div>
                    <h2 className={styles.titleSkills}>Tecnologias usada</h2>
                    <div className={styles.containerSkill}>
                        <div><img src="/htmlIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/cssIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/IconReact 1.svg" alt="" className={styles.imgIcon}/></div>
                    </div>
                </div>
            </section>

            <ContatoMobile />
        </div>
    )
}


export default function ProjetoEsp32() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? (
        <>
        {" "}
        <ProjetoValorantDesktop />
        <ProjetoValorantTablet />
        <ProjetoValorantMobile />{" "}
        </>
    ) : null;
}