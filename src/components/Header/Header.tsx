import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    Titan Edge
                </a>

                <button
                    className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ""}`}
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`} id="primary-navigation">
                    <a href="#business" onClick={closeMenu}>Business</a>
                    <a href="#services" onClick={closeMenu}>Services</a>
                    <a href="#company" onClick={closeMenu}>Company</a>
                    <a href="#about" onClick={closeMenu}>About Us</a>
                </nav>

                <a className={styles.button} href="mailto:info@titanedge.com?subject=Quote%20Request" onClick={closeMenu}>
                    Get a Quote
                </a>
            </div>
        </header>
    );
};

export default Header;
