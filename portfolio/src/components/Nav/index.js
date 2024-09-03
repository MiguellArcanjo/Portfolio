import styles from "@/components/Nav/style.module.css"
import Image from "next/image";

export const Nav = () => {
    return (
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
    )
}