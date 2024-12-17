"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import NavBar from "./components/navigation/NavBar";
import Parallax from "./components/Parallax";
import Dexscreener from "./components/socials/Dexscreener";
import Dextools from "./components/socials/Dextools";
import X from "./components/socials/X";
import Telegram from "./components/socials/Telegram";

export default function Home() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const abbreviateNumber = (num) => {
        if (num < 1000) return num.toFixed(2); // No abbreviation for numbers < 1k
        const units = ["k", "m", "b", "t"]; // Thousand, Million, Billion, Trillion
        let unitIndex = -1;

        while (num >= 1000 && unitIndex < units.length - 1) {
            num /= 1000;
            unitIndex++;
        }

        return `${num.toFixed(1)}${units[unitIndex]}`; // Show one decimal place
    };

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://api.dexscreener.com/latest/dex/tokens/6LJRyimQPKEKYK97p451rPs4wkNP8djjBS696CC7pump"
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const result = await response.json();
            const pairData = result.pairs[0];
            setData({
                priceNative: pairData.priceNative,
                priceUsd: pairData.priceUsd,
                liquidityUsd: pairData.liquidity.usd,
                marketCap: pairData.marketCap,
                symbol: pairData.baseToken.symbol,
            });
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <NavBar />
            <Parallax />
            <section className={styles.darkbg}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <h1>$AME INFORMATION</h1>
                        <p>Token Name: Average Male Experience (AME)</p>
                        <p>CA: 6LJRyimQPKEKYK97p451rPs4wkNP8djjBS696CC7pump</p>
                    </div>
                    <div className={styles.right}>
                        {error && <p style={{ color: "red" }}>Error: {error}</p>}
                        {data ? (
                            <div className={styles.information}>
                                <div className={styles.info_gap}>
                                    <div className={styles.ticker_info}>
                                        <h4 className={styles.attention}>Symbol</h4>
                                        <h5>{data.symbol}</h5>
                                    </div>
                                    <div className={styles.ticker_info}>
                                        <h4 className={styles.attention}>Released</h4>
                                        <h5>December 2025</h5>
                                    </div>
                                    <div className={styles.ticker_info}>
                                        <h4 className={styles.attention}>Market Cap</h4>
                                        <h5>${abbreviateNumber(data.marketCap)}</h5>
                                    </div>
                                </div>
                                <div className={styles.info_gap}>
                                    <div className={styles.ticker_info}>
                                        <h4 className={styles.attention}>Price (SOL)</h4>
                                        <h5>{data.priceNative}</h5>
                                    </div>
                                    <div className={styles.ticker_info}>
                                        <h4 className={styles.attention}>Price (USD)</h4>
                                        <h5>${data.priceUsd}</h5>
                                    </div>
                                    <div className={styles.ticker_info}>
                                        <h4 className={styles.attention}>Liquidity (USD)</h4>
                                        <h5>${abbreviateNumber(data.liquidityUsd)}</h5>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>Loading data...</p>
                        )}
                    </div>
                </div>
            </section>
            <section className={styles.lightbg}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <h1>Average Male Experience</h1>
                        <p>
                            AME (Average Male Experience): A raw, relatable meme token capturing
                            every degenerate's highs and lows. Built on Solana for fast, cheap
                            chaos. Ride the wave or embrace the struggle—just like life.
                        </p>
                    </div>
                    <div className={styles.right}>
                        <img src="/memes/meme1.jpg" />
                    </div>
                </div>
            </section>
            <section className={styles.darkbg}>
                <div className={styles.container}>
                    <div className={styles.center}>
                        <h1>Join us</h1>
                        <div className={styles.links}>
                            <Dexscreener />
                            <Dextools />
                            <X />
                            <Telegram />
                        </div>
                        <img className={styles.finale} src="/memes/finale.jpg" />
                        <h3 className={styles.benny}>Send it for Benny</h3>
                    </div>
                </div>
            </section>
            <footer>
                <p>Average Male Experience</p>
                <p>6LJRyimQPKEKYK97p451rPs4wkNP8djjBS696CC7pump</p>
            </footer>
        </div>
    );
}
