import styles from './Section.module.css'

function Section(props:any) {

    const { children } = props;


    const sectionCss = styles.section;

    return (
        <section className={`${sectionCss}`}>
            {children}
        </section>
    )
}

export default Section