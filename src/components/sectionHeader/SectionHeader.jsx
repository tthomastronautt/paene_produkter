import styles from "./sectionHeader.module.css"

const SectionHeader = ({title}) => {
    return (
        <div className={styles.header}>
            <h1>{title}</h1>
        </div>
    )
}

export default SectionHeader