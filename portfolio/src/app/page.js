'use client'

import React from 'react';
import styles from "./page.module.css";

import { Projeto } from '@/components/Projeto';
import { Nav } from '@/components/Nav';
import { Bio } from '@/components/Bio';
import { Skills } from '@/components/Skills';
import { Trabalho } from '@/components/Trabalho';
import { Contato } from '@/components/Contato';

export default function Home() {
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
}
