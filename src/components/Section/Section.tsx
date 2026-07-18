import styles from "./Section.module.css";

interface PillarType {
    title: string;
    description: string;
}

const values = [
    { title: "Innovation", description: "Cutting-edge solutions at the industry forefront." },
    { title: "Integrity", description: "Honest, transparent, ethical practices." },
    { title: "Client-Centricity", description: "Tailored solutions fostering long-term trust." },
    { title: "Precision", description: "Highly accurate, reliable services." },
    { title: "Sustainability", description: "Environmentally responsible resource management." },
    { title: "Excellence", description: "Striving for best-in-class delivery and support." },
];

const Section = () => {
    const pillarsItems: PillarType[] = [
        {
            title: "Vision",
            description:
                "To become a leading internationally recognized engineering and process automation solutions company.",
        },
        {
            title: "Mission",
            description:
                "To achieve our vision by identifying, evaluating and responding to client needs, while providing innovative services with utmost satisfaction.",
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>What We Stand For</span>

                    <h2 className={styles.title}>The Pillars of TitanEdge</h2>

                    <p className={styles.description}>
                        At TitanEdge, we engineer innovative, precise, and sustainable
                        solutions, guided by integrity and a client-first commitment to
                        excellence.
                    </p>
                </div>

                <div className={styles.topCards}>
                    {pillarsItems.map((item, index) => (
                        <article
                            key={item.title}
                            className={`${styles.card} ${index === 1 ? styles.missionCard : ""}`}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>

                <div className={styles.values}>
                    <h3>Values</h3>
                    <div className={styles.valuesGrid}>
                        {values.map((value) => (
                            <article key={value.title} className={styles.valueCard}>
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;
