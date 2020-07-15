import React from "react";
import "./PriceCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAd } from "@fortawesome/free-solid-svg-icons";

const PriceCard = (props) => (
  <div className={props.className}>
    {props.cardIcon}
    <span className="price-title">{props.planTitle}</span>
    <div className="pricing">
      <span className="dollar-sign">$</span>
      <span className="price">{props.price}</span>
      <spa className="period">{props.period}</spa>
    </div>
    {props.children}
  </div>
);

export default PriceCard;
