import styles from "@/components/Projeto/style.module.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Link from "next/link";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Projeto = () => {
    return (
        <section className={styles.sectionProjects} id="projetos">
            <div>
                <h2>Projetos</h2>
                <div>
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} slidesPerView={2} navigation  loop={true}>
                    
                        <SwiperSlide className={styles.carrocel}>
                            <img src='/imagemEsp.png' alt="" className={styles.imagemEsp}/>
                            <h3>Projeto Utilizando o Esp-32</h3>
                            <p>No meu dia a dia, enfrentei o problema de verificar se a porta estava realmente fechada. Para resolver essa questão, desenvolvi um projeto simples que combina Desenvolvimento Web e Arduino.</p>
                            <br />
                            <Link href={'/projetoEsp32'} className={styles.linkBtn}>Mais Detalhes</Link>
                        </SwiperSlide>

                        <SwiperSlide className={styles.carrocel}>
                            <img src='/imagemNetflix.png' alt="" className={styles.imagemEsp}/>
                            <h3>Landing Page Netflix</h3>
                            <p>O objetivo deste projeto é recriar a tela de login da Netflix utilizando apenas HTML e CSS, sem o uso de frameworks. a finalidade do projeto é praticar e aperfeiçoar habilidades fundamentais no Front-end.</p>
                            <br />
                            <Link href={'/projetoNetflix'} className={styles.linkBtn}>Mais Detalhes</Link>
                        </SwiperSlide>

                        <SwiperSlide className={styles.carrocel}>
                            <img src='/imagemValorant.png' alt="" className={styles.imagemEsp}/>
                            <h3>Agentes Valorant</h3>
                            <p>Este projeto foi desenvolvido como parte dos meus estudos, seguindo o tutorial do Leo Vargar. Nele, aprendi a consumir a API do Valorant e tive dicas essenciais para o desenvolvimento web.</p>
                            <br />
                            <Link href={'/projetoValorant'} className={styles.linkBtn}>Mais Detalhes</Link>
                        </SwiperSlide>

                        <SwiperSlide className={styles.carrocel}>
                            <img src='/imagemSenhaCerta.png' alt="" className={styles.imagemSenha}/>
                            <h3>Fechadura com Senha</h3>
                            <p>Dando continuidade aos meus estudos em desenvolvimento web e IoT, tentei ir além ao construir um protótipo de fechadura eletrônica que possui uma interface web para interação...</p>
                            <br />
                            <Link href={'/projetoSenha'} className={styles.linkBtn}>Mais Detalhes</Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}