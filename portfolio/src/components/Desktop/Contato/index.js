import styles from "@/components/Desktop/Contato/style.module.css"

export const Contato = () => {
    return (
        <section className={styles.contato} id="contato">
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
    )
}