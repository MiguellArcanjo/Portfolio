import styles from "@/components/Desktop/Contato/style.module.css"

export const Contato = () => {
    return (
        <section className={styles.contato} id="contato">
            <div>
                <h2 className={styles.titleContato}>Entre em contato</h2>
                <form action="https://formsubmit.co/contato.miguelarcanjo2305@gmail.com" method="POST" className={styles.formContato}>
                    <div className={styles.divInputs}>
                        <div className={styles.divEsq}>
                        <label htmlFor="">Nome</label>
                        <input type="text" name="name" id="" placeholder='Por favor coloque seu nome'/>

                        <label htmlFor="">E-mail</label>
                        <input type="email" name="email" placeholder='Por favor coloque seu email'/>
                        </div>

                        <div className={styles.divDir}>
                        <label htmlFor="">Menssagem</label>
                        <textarea name="message" id="" rows={7} cols={40} placeholder='Digite a mensagem'/>
                        </div>
                    </div>
                    
                    <button type="submit" className={styles.btnSubmit}>Enviar {'>'}</button>

                    <input type="hidden" name="_subject" value="Novo Contato!"/>
                    <input type="text" name="_horney" style={{ display: 'none' }}/>
                    <input type="hidden" name="_captcha" value="false"/>
                </form>
            </div>
        </section>
    )
}