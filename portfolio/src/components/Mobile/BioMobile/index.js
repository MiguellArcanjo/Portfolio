import styles from "@/components/Mobile/BioMobile/styles.module.css"

export const BioMobile = () => {
    return (
        <section className={styles.main}>
            <div className={styles.containerSection1}>
                <div>
                    <h2>Miguel Arcanjo</h2>
                    <p className={styles.textBio}>
                    Me chamo Miguel Arcanjo, tenho 19 anos e sou apaixonado por tecnologia desde os 15, quando ingressei em uma equipe de robótica. Durante esse período, participei de competições e dei meus primeiros passos no mundo da programação e da robótica, utilizando linguagem em blocos e aprendendo o básico sobre sensores. Após o término da minha jornada na robótica, comecei a me aprofundar no desenvolvimento web, com o objetivo de me tornar um desenvolvedor Full-Stack. Atualmente, estou utilizando Next.js no front-end e Node.js no back-end, além de trabalhar em projetos que integram eletrônica com desenvolvimento web.
                    </p>
                    <button className={styles.btnContato}>Entre em contato</button>
                </div>
            </div>
        </section>
    )
}