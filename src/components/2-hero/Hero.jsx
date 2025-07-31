import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import "./Hero.css"
import { MdVerified } from "react-icons/md";
import Lottie from "lottie-react";
import laptopAnimation from "../../animation/Programming_Computer.json"
import { useRef } from "react";

const Hero = () => {
    const lottieRef = useRef();
    return (
        <section className="hero flex">
            <div className="left-section">
                <div className="parent-avatar">
                    <img src="/me.png" className="avatar" alt="" />
                    <span><MdVerified fontSize={"1.2rem"} color="var(--blue)" /></span>
                </div>
                <div className="bio">
                    <h1 className="title">Software designer, frontend developer, founder, and amateur diver.</h1>
                    <p className="sub-title">Ali Hassan. a software designer and
                        entrepreneur based in New York City. I'm the
                        founder and CEO of Planetaria, where we develop
                        technologies that empower regular people to
                        explore space on their own terms.</p>
                </div>
                <div className="social-links flex">
                    <a href="https://www.facebook.com/molotfg" target="_blank" className="social-link"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/molotfg" target="_blank" className="social-link"><FaInstagram /></a>
                    <a href="https://github.com/Mahmoud141-oos" target="_blank" className="social-link"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/mahmoud-abd-elgalil-063504228/" target="_blank" className="social-link"><FaLinkedin /></a>
                </div>
            </div>
            <div className="right-section">
                <Lottie animationData={laptopAnimation} lottieRef={lottieRef} onLoadedImages={() => lottieRef.current.setSpeed(0.5)}/>
            </div>
        </section>
    )
}

export default Hero