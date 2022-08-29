import React from "react";
import testImg from '../images/Frame.png'
import pinImg from '../images/pin.svg'

export default function Card(props) {
  return (
    <div className="main">
      <div className="card">
        <img className="card-image" src={props.imageUrl} alt="location scenery" />
        <div className="card-info">
          <div className="card-location">
            <img className="card-location-pin" src={pinImg} alt="location pin"/>
            <p className="card-location-country">{props.location}</p>
            <a className="card-location-link" href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
          </div>
          <h1 className="card-title">{props.title}</h1>
          <p className="card-date">{props.startDate} - {props.endDate}</p>
          <p className="card-desc">{props.description}</p>
        </div>
      </div>
      <div className="border"></div>
    </div>
  )
}