import React from "react";
import "../css/card.css"
import star from "../images/star.png"

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className='card-badge'>{badgeText}</div>}
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