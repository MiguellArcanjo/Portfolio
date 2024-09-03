import styles from "@/components/Nav/style.module.css"
import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.linksAncora}>
            <a href="">Sobre mim</a>
            <a href="#skills">Skills</a>
            <a href="#projetos">Projetos</a>
            <a href="#trabalho">Trabalhos</a>
            <a href="#contato">Contato</a>
            </div>
            <div className={styles.linksPerfil}>
                <Link href='https://www.instagram.com/miguel_4rcanjo/' target="blanck_"><Image src="\icons8-instagram.svg" width={40} height={40} alt="icone instagram"/></Link>
                <Link href='http://www.linkedin.com/in/miguel-arcanjo-barreto-siqueira-4b879a259' target="blanck_"><Image src="\iconLinkedin1.svg" width={40} height={40} alt="icone LinkeDIn"/></Link>
                <Link href="https://github.com/MiguellArcanjo" target="blanck_"><Image src="\iconGithub 1.svg" width={40} height={40} alt="icone LinkeDIn"/></Link>
            </div>
        </nav>
    )
}