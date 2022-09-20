import React from "react";
import chart1up from './images/stock.svg'
import chart2up from './images/stock2.svg'
import './stats.css';

function StatsRow(props) {

// (currentPrice - openPrice)/openPrice
  const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;
  
    /*set color green if percentage is above 0
    let Color = "green";
    if (Number(percentage).toFixed(2) < 0 < 0) {
      Color = "red";
    }*/

    /*select random image from array
    let randomImage = [];
    for (let i = 0; i < props.images.length; i++) {
      randomImage.push(props.images[i]);
    }*/

  const getModal = () => {

  }
  return (
    <div className="row" onClick={getModal}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{props.volume && 
          (props.volume + " shares")
        }</p>
      </div>
      <div className="row__chart">
        <img src={chart2up} alt="graph" height={20}/>
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price} <span>€</span></p>
        <p className="row__percentage" id="row_percentage">{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;