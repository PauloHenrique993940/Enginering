import styles from "./Business.module.css";

type Service = {
    title: string;
    description: string;
    imageClass: string;
};

const services: Service[] = [
    {
        title: "E-House Integrated Solutions",
        description:
            "Modular electrical and control systems that optimize space and streamline operations in oil and gas facilities.",
        imageClass: "eHouse",
    },
    {
        title: "Instrumentation & Process Control",
        description:
            "Precision monitoring and regulation for enhanced safety and operational efficiency.",
        imageClass: "instrumentation",
    },
    {
        title: "Procurement",
        description:
            "Global sourcing of quality equipment and materials with cost-effective, timely delivery.",
        imageClass: "procurement",
    },
];

const Business = () => {
    return (
        <section className={styles.business} id="business">
            <div className={styles.container}>
                <header className={styles.header}>
                    <span className={styles.badge}>Business</span>
                    <h2>Empowering Nigeria&apos;s Energy Sector Through Innovation</h2>
                    <p>
                        A dynamic Nigerian company specializing in innovative, sustainable
                        engineering and automation solutions for the energy industry.
                    </p>
                </header>

                <div className={styles.cards}>
                    {services.map((service) => (
                        <article
                            className={`${styles.card} ${styles[service.imageClass]}`}
                            key={service.title}
                        >
                            <div className={styles.cardContent}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Business;
