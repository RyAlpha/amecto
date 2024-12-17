import React from "react";
import styles from "./socials.module.css";

const Telegram = () => {
    return (
        <button className={styles.icon_button}>
            <a href="https://t.me/AMEPortal" target="blank" rel="noopener noreferrer">
                <svg
                    className={styles.icon}
                    viewBox="0 0 225 187"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M212.75 0H216.5L218.75 0.5L221 2L223 4.25L224.25 7.25L224.75 9.5V14L222.25 26L218.25 44.75L215.5 57.75L213 69.25L210.25 82.25L207.25 96.25L203 116L200.5 128L198 139.75L192.5 165.5L190.25 175.75L189 179.75L187.5 182.75L185.5 185L183 186.5L182.25 186.75H176.75L173.25 185.5L170.25 183.75L160.75 176.75L156.25 173.5L151.5 170L147.5 167L144 164.5L139.25 161L134.75 157.75L130.75 154.75L126.25 151.5L121.5 148L120.25 147L119.25 147.5L116.75 149.75L112.5 154L110.5 155.75L105.25 161L103.25 162.75L100 166L98 167.75L94.75 171L92 173.25L90 174.5L86.5 175.5H84.5L84.75 170.5L86.25 149L86.75 143.25L87.5 131.75L88 125.5V123.5L89.25 122L91.25 120.25L95 116.75L97.75 114.5L102 110.5L104.75 108L106.75 106.25L110 103.5L111.75 101.75L113.75 100L116.75 97.25L119.5 95L121.75 92.75L123.75 91L126.5 88.5L129.25 86.25L131.75 83.75L133.75 82L136.25 79.75L139.5 77L141.5 75L143.5 73.25L146 71L148 69.25L150.5 67L153.75 64L155.75 62.25L159 59.5L161.5 57L163.5 55.25L167 52.25L170.75 48.75L174.25 45.75L177.25 43L179.25 41.25L183.5 37.25L184.5 36.75L185 35.5L184.75 34.25L183.75 33.75H182L178.5 35L172 39L162.5 45L156 49L150.5 52.5L145.25 55.75L139.25 59.5L133.75 63L123.25 69.5L117.75 73L112.5 76.25L100.5 83.75L95 87.25L89 91L83.75 94.25L77.75 98L73 101L67.75 104.25L60.25 109L59.25 109.5L20.75 97.5L8.75 93.75L5.5 92.5L3.25 91.25L1.25 89.5L0.25 87.5L0 86L1.5 83L4.25 80.25L8.25 78L11.75 76.5L21 73L32 68.75L41.25 65.25L60.75 57.75L107.75 39.75L115 37L124.75 33.25L153.5 22.25L167.25 17L205.75 2.25L211.25 0.25L212.75 0Z"
                        fill="#FEFEFE"
                    />
                </svg>

                <p>Telegram</p>
            </a>
        </button>
    );
};
export default Telegram;
