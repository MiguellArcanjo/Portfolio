'use client'

import React from 'react';
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';

import { Nav } from '@/components/Desktop/Nav'; 
import { NavTablet } from '@/components/Tablet/NavTablet'; 
import { NavMobile } from '@/components/Mobile/NavMobile';

import { Bio } from '@/components/Desktop/Bio'; 
import { BioTablet } from "@/components/Tablet/BioTablet";
import { BioMobile } from '@/components/Mobile/BioMobile';

import { Skills } from '@/components/Desktop/Skills';
import { SkillsTablet } from '@/components/Tablet/SkillsTablet';
import { SkillsMobile } from '@/components/Mobile/SkillsMobile';

import { Projeto } from '@/components/Desktop/Projeto';
import { ProjetoTablet } from '@/components/Tablet/ProjetoTablet';

import { Trabalho } from '@/components/Desktop/Trabalho'; 
import { TrabalhoTablet } from '@/components/Tablet/TrabalhoTablet';

import { Contato } from '@/components/Desktop/Contato';
import { ContatoTablet } from '@/components/Tablet/ContatoTablet';


const HomeDesktop = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  if (!isDesktop) {
    return null;
  }

  return (
    <div className={styles.main}>
      <Nav />
      <main>
        <Bio />
        <Skills />
        <Projeto />
        <Trabalho />
        <Contato />
      </main>
    </div>
  );
};

const HomeTablet = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  if (!isTablet) {
    return null;
  }

  return (
    <div className={styles.main}>
      <NavTablet />
      <main>
        <BioTablet />
        <SkillsTablet />
        <ProjetoTablet />
        <TrabalhoTablet />
        <ContatoTablet />
      </main>
    </div>
  )
}

const HomeMobile = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (!isMobile) {
    return null;
  }

  return (
    <div className={styles.main}>
      <NavMobile />
      <main>
        <BioMobile />
        <SkillsMobile />
        {/* <ProjetoTablet />
        <TrabalhoTablet />
        <ContatoTablet /> */}
      </main>
    </div>
  )
}

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <>
      {" "}
      <HomeDesktop />
      <HomeTablet />
      <HomeMobile />{" "}
    </>
  ) : null;
}