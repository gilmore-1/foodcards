import React from "react";
import "./cards.css";
import hoticon from "./hoticon.svg";
import grenellipse from "./grenellipse.svg";
import wheatIcon from "./WheatIcon.svg";
function Foodcards({
  image,
  title,
  isgreen = true,
  isred = false,
  isyellow = false,

  description,
  cal,
  pfc,
  c,
  price,
  discount,
  isdiscount,
}) {
  return (
    <div className="container">
      <div className="card">
        <img className="image" src={image} alt={title} />
        <div className="title">
          <h1> {title}</h1>
          <div className="icon">
            {isgreen && (
              <img className="icon" src={grenellipse} alt="green Icon" />
            )}
            {isred && <img className="icon" src={hoticon} alt="Hot Icon" />}
            {isyellow && (
              <img className="icon" src={wheatIcon} alt="yellow Icon" />
            )}
          </div>
        </div>
        <p>{description}</p>

        <div className="addinformation">
          <span>{cal} Cal</span>
          <span>P/F/C: {pfc}</span>
          <span>{c} °C</span>
        </div>
        <div className="orders">
          <div className="prices">
            <h1 className="price">{price}</h1>
            {isdiscount && <h1 className="discount">{discount}</h1>}
          </div>
          <button className="orderbutton">ORDER</button>
        </div>
      </div>
    </div>
  );
}

export default Foodcards;
