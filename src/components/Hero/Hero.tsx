import styles from "./Hero.module.css";

const clients = [
    "Emerson",
    "Eaton",
    "NLNG",
    "Total Energies",
    "Aradel Group",
    "NDPHC",
    "Seplat",
    "Fipl",
];

const Hero = () => {
    const scrollToServices = () => {
        document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
    };

    return (

        <>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.overlay}></div>

                    <div className={styles.content}>
                        <h1>
                            Engineering Innovation.
                            <br />
                            Driving Precision.
                        </h1>

                        <p>
                            Empowering the oil & gas industry with advanced automation and
                            engineering solutions built on integrity, innovation, and excellence.
                        </p>

                        <button type="button" onClick={scrollToServices}>Explore Our Services</button>
                    </div>
                    <div className={styles.heroBrand}>
                        <span className={styles.brandLabel}>Clients & Partners</span>
                        <div className={styles.brandViewport}>
                            <div className={styles.brandTrack}>
                                {[...clients, ...clients].map((client, index) => (
                                    <span className={styles.brandItem} key={`${client}-${index}`}>
                                        {client}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Hero;
