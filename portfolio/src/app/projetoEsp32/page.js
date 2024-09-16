'use client'

import styles from "@/app/projetoEsp32/page.module.css"
import Link from "next/link"
import { use, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive"

import { Nav } from '@/components/Desktop/Nav'; 
import { NavTablet } from '@/components/Tablet/NavTablet'; 
import { NavMobile } from '@/components/Mobile/NavMobile';

import { Contato } from '@/components/Desktop/Contato';
import { ContatoTablet } from '@/components/Tablet/ContatoTablet';
import { ContatoMobile } from '@/components/Mobile/ContatoMobile';


const ProjetoEsp32Desktop = () => {
    const isDesktop = useMediaQuery({minWidth: 1024});

    if (!isDesktop) {
        return null;
    }

    return (
        <div className={styles.main}>
            <Nav />
            <section className={styles.detalheProjeto}>
                <div className={styles.tituloEimagem}>
                    <h2>Verificar porta</h2>
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
                        <div><img src="/htmlIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/cssIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/IconReact 1.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/c.svg" alt="" className={styles.imgIcon}/></div>
                    </div>
                </div>
            </section>

            <Contato />
        </div>
    )
}

const ProjetoEsp32Tablet = () => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    if (!isTablet) {
        return null;
    }

    return (
        <div className={styles.main}>
            <NavTablet />
            <section className={styles.detalheProjeto}>
                <div className={styles.tituloEimagem}>
                    <h2>Verificar porta</h2>
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
                        <div><img src="/htmlIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/cssIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/IconReact 1.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/c.svg" alt="" className={styles.imgIcon}/></div>
                    </div>
                </div>
            </section>

            <ContatoTablet />
        </div>
    )
}

const ProjetoEsp32Mobile = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    if (!isMobile) {
        return null;
    }

    return (
        <div className={styles.main}>
            <NavMobile />
            <section className={styles.detalheProjeto}>
                <div className={styles.tituloEimagem}>
                    <h2>Verificar porta</h2>
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
                        <div><img src="/htmlIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/cssIcon.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/IconReact 1.svg" alt="" className={styles.imgIcon}/></div>
                        <div><img src="/c.svg" alt="" className={styles.imgIcon}/></div>
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
        <ProjetoEsp32Desktop />
        <ProjetoEsp32Tablet />
        <ProjetoEsp32Mobile />{" "}
        </>
    ) : null;
}