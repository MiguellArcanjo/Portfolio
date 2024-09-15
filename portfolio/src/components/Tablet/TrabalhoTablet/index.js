import styles from "@/components/Tablet/TrabalhoTablet/styles.module.css"

export const TrabalhoTablet = () => {
    return (
        <section className={styles.trabalhosRecente} id="trabalho">
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
    )
}