import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Parallax() {
    const [background, setBackground] = useState(20);

    const parallaxRef = useRef(null);
    const mountain = useRef(null);
    const hills = useRef(null);
    const plains = useRef(null);
    const cloudsBottom = useRef(null);
    const cloudsLeft = useRef(null);
    const cloudsRight = useRef(null);
    const stars = useRef(null);
    const moon = useRef(null);
    const headline = useRef(null);
    const p = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "5000 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20));
                    },
                },
            });
            tl.to(
                mountain.current,
                {
                    y: "-=80",
                },
                0
            );
            tl.to(
                hills.current,
                {
                    y: "-=30",
                },
                0
            );
            tl.to(
                plains.current,
                {
                    y: "+=50",
                },
                0
            );
            tl.to(
                moon.current,
                {
                    y: "+=210",
                },
                0
            );
            tl.to(
                headline.current,
                {
                    y: "-210%",
                    opacity: 1,
                },
                0
            );
            tl.to(
                p.current,
                {
                    opacity: 1,
                },
                1.5
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="parallax-outer">
            <div ref={parallaxRef} className="parallax">
                <img ref={mountain} className="mountain" src="/parallax/mountain.svg" />
                <img ref={hills} className="hills" src="/parallax/hills.svg" />
                <img ref={plains} className="plains" src="/parallax/plains.svg" />
                <img ref={moon} className="moon" src="/parallax/moon.svg" />
                <div ref={headline} className="headline">
                    <h1>AME</h1>
                    <h4>Ride the wave or embrace the struggle</h4>
                </div>
            </div>
        </div>
    );
}

export default Parallax;
