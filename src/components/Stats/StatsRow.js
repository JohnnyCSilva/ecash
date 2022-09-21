import React, { useEffect } from "react";
import './stats.css';
import $ from "jquery";

import stockRed1 from "./images/stockRed1.svg"
import stockRed2 from "./images/stockRed2.svg"
import stockRed3 from "./images/stockRed3.svg"
import stockRed4 from "./images/stockRed4.svg"
import stockRed5 from "./images/stockRed5.svg"

import stockGreen1 from "./images/stockGreen1.svg"
import stockGreen2 from "./images/stockGreen2.svg"
import stockGreen3 from "./images/stockGreen3.svg"
import stockGreen4 from "./images/stockGreen4.svg"
import stockGreen5 from "./images/stockGreen5.svg"

function StatsRow(props) {

// (currentPrice - openPrice)/openPrice
  const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;

  var chartImage = 0;

  var randomImagePos = [stockGreen1, stockGreen2, stockGreen3, stockGreen4, stockGreen5];
  var randomImageNeg = [stockRed1, stockRed2, stockRed3, stockRed4, stockRed5];

  var chartImagePos = randomImagePos[Math.floor(Math.random()*randomImagePos.length)];
  var chartImageNeg = randomImageNeg[Math.floor(Math.random()*randomImagePos.length)];

  if (percentage > 0) {
    chartImage = chartImagePos;
  } else {
    chartImage = chartImageNeg;
  }
    
  useEffect(() => {
    const getColor = setInterval(() => {  
      $('.row__percentage').each(function() {
        if (parseFloat($(this).text()) >= 0) {
          $(this).addClass('numPos');
        } else if (parseFloat($(this).text()) < 0) {
          $(this).addClass('numNeg');
        }
      });
    },1000);
    return () => clearInterval(getColor); 
  },[]);

  const getModal = () => {

  }

  return (
    <div className="row" onClick={getModal}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{/*props.shares && (props.shares + " shares")*/}10 Shares</p>
      </div>
      <div className="row__chart">
      <img src={chartImage} height={18}/>
      </div>
      <div className="row__numbers">
        <p className="row__price">{(props.price).toFixed(2)} <span>€</span></p>
        <p className="row__percentage" id="row_percentage">{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;