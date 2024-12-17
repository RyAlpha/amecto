import React from "react";
import { useState, useEffect } from "react";
import styles from "./navigation.module.css";

const NavBar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolling ? styles.scrolled : ""}`}>
            <div className={styles.logo}>
                <img className={styles.ame_logo} src="/ame_logo.svg" />
                <h3>AMECTO</h3>
            </div>
        </nav>
    );
};

export default NavBar;
