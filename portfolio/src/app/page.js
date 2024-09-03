'use client'

import React from 'react';
import Image from "next/image";
import styles from "./page.module.css";

import { Projeto } from '@/components/Projeto';



export default function Home() {
  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.linksAncora}>
          <a href="">Sobre mim</a>
          <a href="">Skills</a>
          <a href="">Projetos</a>
          <a href="">Trabalhos</a>
          <a href="">Contato</a>
        </div>
        <div className={styles.linksPerfil}>
          <a href=""><Image src="\icons8-instagram.svg" width={40} height={40} alt="icone instagram"/></a>
          <a href=""><Image src="\iconLinkedin1.svg" width={40} height={40} alt="icone LinkeDIn"/></a>
          <a href=""><Image src="\iconGithub 1.svg" width={40} height={40} alt="icone LinkeDIn"/></a>
        </div>
        
      </nav>
      <main>
        <section className={styles.containerSection1}>
          <div>
            <h2>Miguel Arcanjo</h2>
            <p className={styles.textBio}>
              Me chamo Miguel Arcanjo, tenho 19 anos e sou apaixonado por tecnologia desde os 15, quando ingressei em uma equipe de robótica. Durante esse período, participei de competições e dei meus primeiros passos no mundo da programação e da robótica, utilizando linguagem em blocos e aprendendo o básico sobre sensores. Após o término da minha jornada na robótica, comecei a me aprofundar no desenvolvimento web, com o objetivo de me tornar um desenvolvedor Full-Stack. Atualmente, estou utilizando Next.js no front-end e Node.js no back-end, além de trabalhar em projetos que integram eletrônica com desenvolvimento web.
            </p>
            <button className={styles.btnContato}>Entre em contato</button>
          </div>

          <div>
            <div className={styles.imgContainer}>
              <img src="/minha foto.jpeg" alt="Minha foto" width={400} height={400} className={styles.img}/>
            </div>
          </div>
        </section>

        <section className={styles.sectionSkills}>
          <div>
            <h2 className={styles.titleSkills}>Hard Skills</h2>
            <div className={styles.containerSkill}>
              <div><img src="/cssIcon.svg" alt="" className={styles.imgIcon}/></div>
              <div><img src="/htmlIcon.svg" alt="" className={styles.imgIcon}/></div>
              <div><img src="/fluent.svg" alt="" className={styles.imgIcon}/></div>
              <div><img src="/IconPython 1.svg" alt="" className={styles.imgIcon}/></div>
              <div><img src="/IconReact 1.svg" alt="" className={styles.imgIcon}/></div>
            </div>
            <div className={styles.containerSkill}>
              <div><img src="/iconGit 1.svg" alt="" className={styles.imgIcon}/></div>
              <div><img src="/iconPostgres 1.svg" alt="" className={styles.imgIcon}/></div>
              <div><img src="/iconJava 1.svg" alt="" className={styles.imgIcon}/></div>
              <div><img src="/iconC+ 1.svg" alt="" className={styles.imgIcon}/></div>
            </div>
          </div>
        </section>

        <section className={styles.sectionProjects}>
          <Projeto />

        </section>

        <section className={styles.trabalhosRecente}>
          <div>
            <h2>Trabalhos recentes</h2>
            <div className={styles.divTrabalho}>
              <div className={styles.containerFabrica}>
                <img src="/fabricaDeSoftware-removebg-preview 1.svg" alt=""className={styles.imgFabrica} />
                <p>Fabrica de Software</p>
              </div>
              <img src="/Group 7.svg" alt="" />
              <p className={styles.agosto}>Agosto de 2023</p>
              <p className={styles.junho}>Junho de 2024</p>
              <p className={styles.text}>Nesse período, estagiei na fábrica de software como desenvolvedor Back-End, utilizando Java e Spring para a criação de APIs e funcionalidades no backend. Durante o estágio, minha equipe e eu desenvolvemos um sistema de gestão de estoque para a farmácia da Unipe.</p>
            </div>
          </div>
        </section>

        <section className={styles.contato}>
          <div>
            <h2 className={styles.titleContato}>Entre em contato</h2>
            <form action="" className={styles.formContato}>
              <div className={styles.divInputs}>
                <div className={styles.divEsq}>
                  <label htmlFor="">Email</label>
                  <input type="text" name="" id="" placeholder='Por favor coloque seu email'/>

                  <label htmlFor="">Titulo</label>
                  <input type="text" placeholder='Coloque o titulo'/>
                </div>

                <div className={styles.divDir}>
                  <label htmlFor="">Menssagem</label>
                  <textarea name="" id="" rows={7} cols={40} placeholder='Digite a mensagem'/>
                </div>
              </div>
              
              <button type="submit" className={styles.btnSubmit}>Enviar {'>'}</button>
            </form>
          </div>
        </section>


      </main>
    </div>
  );
}
