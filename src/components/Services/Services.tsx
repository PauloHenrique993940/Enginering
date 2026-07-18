import styles from "./Services.module.css";

type Service = {
    title: string;
    items: string[];
    imageClass: string;
};

type Milestone = {
    year: string;
    text: string;
};

const services: Service[] = [
    {
        title: "Engineering Design",
        items: [
            "Conceptual Studies",
            "FEED / BOD",
            "Detailed Engineering",
            "Project Management Services (PMC)",
            "In-House Integrated Solutions",
        ],
        imageClass: "design",
    },
    {
        title: "Engineering",
        items: [
            "Process Engineering",
            "Mechanical Engineering",
            "Civil & Structural Engineering",
            "Electrical & Instrumentation Engineering",
            "Cost Estimation",
            "Front Assistance & Production Assistance",
        ],
        imageClass: "engineering",
    },
    {
        title: "Procurement & SCM",
        items: [
            "Global Strategic Sourcing",
            "Materials & Inventory Management",
            "Logistics Coordination & Expediting",
            "Warehousing",
            "Supply Chain & Procurement Management",
        ],
        imageClass: "procurement",
    },
    {
        title: "Field Services",
        items: [
            "Construction Support",
            "Commissioning Assistance",
            "Maintenance Planning",
            "Operations Readiness",
        ],
        imageClass: "field",
    },
];

const milestones: Milestone[] = [
    { year: "2013", text: "TitanEdge was established with a focus on engineering excellence." },
    { year: "2015", text: "Expanded into integrated energy project delivery." },
    { year: "2016", text: "Completed key automation and process control projects." },
    { year: "2020", text: "Strengthened our sustainable engineering capabilities." },
    { year: "2021", text: "Delivered major industrial solutions across Nigeria." },
    { year: "2022", text: "Continued growing our impact in the energy sector." },
];

const Services = () => {
    return (
        <section className={styles.services} id="services">
            <div className={styles.servicesHeader}>
                <span className={styles.badge}>Services</span>
                <h2>Comprehensive Solutions for Complex Industrial Challenges</h2>
                <p>Tailor-made solutions for all aspects of engineering, tailored to the oil, gas, and power sectors.</p>
            </div>

            <div className={styles.serviceScroller}>
                <div className={styles.serviceTrack}>
                    {services.map((service) => (
                        <article className={styles.serviceCard} key={service.title}>
                            <div className={`${styles.serviceImage} ${styles[service.imageClass]}`} />
                            <div className={styles.cardBody}>
                                <span className={styles.accent} />
                                <h3>{service.title}</h3>
                                <ul>
                                    {service.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className={styles.timelineSection} id="company">
                <header className={styles.timelineHeader}>
                    <span className={styles.badge}>Our Journey</span>
                    <h2>TitanEdge: Pioneering Engineering Excellence in Nigeria</h2>
                    <p>Since 2013, TitanEdge has transformed from a procurement firm to a leader in engineering and automation.</p>
                </header>

                <div className={styles.timeline}>
                    {milestones.map((milestone, index) => (
                        <article className={styles.milestone} key={milestone.year}>
                            <div className={styles.milestoneCard}>
                                <strong>{milestone.year}</strong>
                                <p>{milestone.text}</p>
                            </div>
                            <span className={styles.timelinePoint} />
                            <div className={styles.milestoneSpacer} />
                            {index < milestones.length - 1 && <span className={styles.timelineLine} />}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
