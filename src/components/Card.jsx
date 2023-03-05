import React from "react";
import "../css/card.css"
import star from "../images/star.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={`./images/${props.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.stats.rating}&nbsp;</span>
                <span className="gray">({props.stats.reviewCount})&nbsp;•&nbsp;</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">${props.price}</span> / person</p>
        </div>
    )
}