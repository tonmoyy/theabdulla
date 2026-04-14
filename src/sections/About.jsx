import {useEffect, useRef, useState} from "react";
import { AS } from "../assets";

const About = () => {


    // States and refs for Div 1
    const [isVisible1, setIsVisible1] = useState(false);
    const domRef1 = useRef();

    // Reusable observer effect logic
    const createObserver = (setState) => new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setState(true);
                    // Optional: stop observing once visible
                    // observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.99 }
    );

    useEffect(() => {
        const observer1 = createObserver(setIsVisible1);
        const { current: current1 } = domRef1;
        if (current1) observer1.observe(current1);


        return () => {
            if (current1) observer1.unobserve(current1);
        };
    }, []);

    return (
        <section
            id="gm-flexible-small-image-content-block_39347a86ddcd341afac95ff5a57bf6b6"
            className="gm-flexible-small-image-content align-full gm-section-element gm-flexible-small-image-content_bg-sand-text-deepgrey-cta-drkblu"
        >
            <div className="gm-flexible-small-image-content__container gm-flexible-small-image-content__container_text-right">
                <div className="gm-flexible-small-image-content__image">
                    <img
                        decoding="async"
                        width={469}
                        height={505}
                        src={AS}
                        className="attachment-medium_large size-medium_large lazyload"
                        alt="A unique perspective of a building from below, showcasing architectural innovation."
                        sizes="(max-width: 469px) 100vw, 469px"
                        data-src="https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Rectangle-4517.jpg"
                        data-srcset="https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Rectangle-4517.jpg 469w, https://www.TheAbdullaCapital.com/wp-content/uploads/2023/08/Rectangle-4517-279x300.jpg 279w"
                    />{" "}
                    <div className="gm-flexible-small-image-content__frame" />
                </div>
                <div className="gm-flexible-small-image-content__content">
                    <div
                        ref={domRef1}
                        className={`gm-flexible-small-image-content__text ${isVisible1 ? 'is-visible' : ''}`}>
                        <h2> A Multi-Disciplinary Capital Platform</h2>
                        <p>
                            Abdulla Capital operates at the intersection of private
                            investment, strategic advisory and equity participation. The
                            platform is designed to preserve capital, assess opportunity
                            and create enduring value across sectors, markets and
                            long-term partnerships. .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
