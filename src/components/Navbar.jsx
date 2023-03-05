import React from "react"
import logo from "../images/airbnb_logo.png"
import '../css/nav.css';
import { faMagnifyingGlass, faGlobe, faCircleUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="logo" />
            <div className="middle-nav">
                <span>Anywhere</span>
                <span className="sep">|</span>
                <span>Any week</span>
                <span className="sep">|</span>
                <span className="guests">Add guests</span>
                <span><FontAwesomeIcon icon={faMagnifyingGlass} className="icon" /></span>
            </div>
            <div className="right-nav">
                <span>Airbnb your home</span>
                <span><FontAwesomeIcon icon={faGlobe} className="globe" /></span>
                <div className="contact">
                    <FontAwesomeIcon icon={faBars} className="right-icon" />
                    <FontAwesomeIcon icon={faCircleUser} className="right-icon" />

                </div>


            </div>
        </nav>
    )
}