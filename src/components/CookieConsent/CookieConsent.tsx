/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import styles from "./CookieConsent.module.css";

type ConsentChoice = "accepted" | "rejected";

const storageKey = "titanedge-cookie-consent";

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

    useEffect(() => {
        const savedConsent = window.localStorage.getItem(storageKey);
        setVisible(!savedConsent);
    }, []);

    const saveConsent = (choice: ConsentChoice, allowAnalytics: boolean) => {
        window.localStorage.setItem(storageKey, choice);
        window.localStorage.setItem("titanedge-analytics-enabled", String(allowAnalytics));
        setVisible(false);
    };

    if (!visible) {
        return null;
    }

    return (
        <aside className={styles.banner} aria-label="Cookie consent">
            <div className={styles.content}>
                <p className={styles.eyebrow}>Your privacy</p>
                <h2>We use cookies</h2>
                <p>
                    We use essential cookies to keep this website running and optional analytics cookies to improve it.
                </p>
                {showPreferences && (
                    <label className={styles.preference}>
                        <input
                            type="checkbox"
                            checked={analyticsEnabled}
                            onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                        />
                        <span>Allow analytics cookies</span>
                    </label>
                )}
            </div>
            <div className={styles.actions}>
                <button className={styles.secondaryButton} type="button" onClick={() => setShowPreferences((open) => !open)}>
                    {showPreferences ? "Close preferences" : "Preferences"}
                </button>
                {showPreferences && (
                    <button className={styles.secondaryButton} type="button" onClick={() => saveConsent("accepted", analyticsEnabled)}>
                        Save preferences
                    </button>
                )}
                <button className={styles.secondaryButton} type="button" onClick={() => saveConsent("rejected", false)}>Reject</button>
                <button className={styles.primaryButton} type="button" onClick={() => saveConsent("accepted", true)}>Accept all</button>
            </div>
        </aside>
    );
};

export default CookieConsent;
