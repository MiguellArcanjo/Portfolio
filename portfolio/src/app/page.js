'use client'

import React from 'react';
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import styles from "./page.module.css";

import { Nav } from '@/components/Desktop/Nav'; 
import { NavTablet } from '@/components/Tablet/NavTablet'; 

import { Bio } from '@/components/Desktop/Bio'; 
import { BioTablet } from "@/components/Tablet/BioTablet";

import { Projeto } from '@/components/Desktop/Projeto';
import { Skills } from '@/components/Desktop/Skills';
import { Trabalho } from '@/components/Desktop/Trabalho'; 
import { Contato } from '@/components/Desktop/Contato';


const HomeDesktop = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // Corrigido para usar o formato de objeto

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
      <HomeTablet />{" "}
    </>
  ) : null;
}