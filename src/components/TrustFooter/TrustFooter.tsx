import { useState } from "react";
import type { FormEvent } from "react";
import styles from "./TrustFooter.module.css";

const certifications = [
    "ISO 9001",
    "ISO 14001",
    "ISO 45001",
    "NUPRC",
    "NCDMB",
    "DPR",
    "PEBEC",
];

const TrustFooter = () => {
    const [subscriptionMessage, setSubscriptionMessage] = useState("");

    const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const email = new FormData(form).get("email");

        if (typeof email === "string" && email) {
            window.localStorage.setItem("titanedge-newsletter-email", email);
            setSubscriptionMessage("You are subscribed. Thank you.");
            form.reset();
        }
    };

    return (
        <>
            <section className={styles.trust} id="about">
                <div className={styles.certificationArea}>
                    <span className={styles.badge}>Our Credentials</span>
                    <h2>Certified for Excellence</h2>
                    <p>Compliance, quality, and safety standards that guide every project we deliver.</p>
                    <div className={styles.certifications}>
                        {certifications.map((certification) => (
                            <article className={styles.certificate} key={certification}>
                                <span className={styles.certificateIcon}>TE</span>
                                <strong>{certification}</strong>
                                <small>Certified</small>
                            </article>
                        ))}
                    </div>
                </div>

                <div className={styles.testimonialArea}>
                    <header>
                        <span className={styles.badge}>Client Testimonials</span>
                        <h2>Trusted by Industry Leaders</h2>
                        <p>Our clients rely on TitanEdge to execute critical projects with precision and confidence.</p>
                    </header>
                    <blockquote className={styles.testimonial}>
                        <p>
                            "TitanEdge brought deep technical expertise and dependable project delivery to our operation. Their team understood our requirements and delivered a solution that improved performance."
                        </p>
                        <footer>
                            <span className={styles.person}>AO</span>
                            <span>
                                <strong>Abiola Okafor</strong>
                                <small>Operations Manager, Energy Sector</small>
                            </span>
                        </footer>
                    </blockquote>
                </div>
            </section>

            <section className={styles.cta}>
                <div className={styles.ctaContent}>
                    <span className={styles.badge}>Let's Build Together</span>
                    <h2>Ready to Partner With TitanEdge?</h2>
                    <p>Let&apos;s discuss how our engineering expertise can support your next project.</p>
                    <a href="mailto:info@titanedge.com" className={styles.ctaButton}>Start a Conversation</a>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className={styles.footerTop}>
                    <div>
                        <a href="/" className={styles.logo}>Titan Edge</a>
                        <p>Engineering innovation that drives precision across the energy sector.</p>
                    </div>
                    <div>
                        <h3>Quick Links</h3>
                        <a href="#business">Business</a>
                        <a href="#services">Services</a>
                        <a href="#company">Company</a>
                    </div>
                    <div>
                        <h3>Contact Us</h3>
                        <a href="mailto:info@titanedge.com">info@titanedge.com</a>
                        <a href="tel:+234000000000">+234 (0) 000 000 0000</a>
                    </div>
                    <div>
                        <h3>Newsletter</h3>
                        <form className={styles.newsletter} onSubmit={handleNewsletterSubmit}>
                            <label className={styles.visuallyHidden} htmlFor="email">Email address</label>
                            <input id="email" name="email" type="email" placeholder="Your email address" required />
                            <button type="submit" aria-label="Subscribe to newsletter">Subscribe</button>
                        </form>
                        {subscriptionMessage && <p className={styles.subscriptionMessage} role="status">{subscriptionMessage}</p>}
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <span>© 2026 TitanEdge. All rights reserved.</span>
                    <span>Privacy Policy · Terms of Use</span>
                </div>
            </footer>
        </>
    );
};

export default TrustFooter;
