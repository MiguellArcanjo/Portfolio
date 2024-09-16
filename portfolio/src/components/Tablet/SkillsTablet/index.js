import styles from "@/components/Tablet/SkillsTablet/style.module.css";

export const SkillsTablet = () => {
    return (
        <section className={styles.sectionSkills} id="skills">
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
                <div><img src="/c.svg" alt="" className={styles.imgIcon}/></div>
                </div>
            </div>
        </section>
    )
}