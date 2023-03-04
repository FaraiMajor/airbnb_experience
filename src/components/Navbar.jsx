import React from "react"
import logo from "../images/airbnb_logo.png"
import '../css/nav.css';

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="logo" />
        </nav>
    )
}