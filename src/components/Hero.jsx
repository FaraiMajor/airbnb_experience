import React from "react";
import hero from "../images/hero-img.png"
import "../css/hero.css"

export default function Hero() {
    return (
        <div>
            <section>
                <div>
                    <img src={hero} className="hero-img" />
                </div>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by
                    one-of-a-kind hosts—all without leaving home.</p>
            </section>
        </div>
    )
}