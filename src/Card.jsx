import React from "react";


export default function Card(props) {

    

    return (
        <div className="card-container">
            <img src={props.imageUrl} alt={props.title} className="card-img" />
            <div className="card-details">
                <div className="card-details-top">
                    <i class="fa-solid fa-location-dot"></i>
                    <h3 className="location">{props.location}</h3>
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="descripton">{props.description}</p>
            </div>
        </div>
    )
}