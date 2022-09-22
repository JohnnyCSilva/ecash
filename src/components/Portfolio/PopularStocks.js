import React, { useEffect } from "react";
import './feed.css';
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

function PopularStocks(props) {

// (currentPrice - openPrice)/openPrice
  const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;

  // Random graphImage from current
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
  
  // color of % green or red
  useEffect(() => {
    const getColor = setInterval(() => {  
      $('.row__percentage').each(function() {
        if (parseFloat($(this).text()) >= 0) {
          $(this).addClass('numPos');
        } else if (parseFloat($(this).text()) < 0) {
          $(this).addClass('numNeg');
        }
      });
      //console.log((props.price).toFixed(2));

    },2000);
    
    return () => clearInterval(getColor); 
  },[]);

  const buyBoxStock = () => {

  }

  var star = 0;
  function starClick(){
    if (star === 0 ){
        $('#stared').removeClass('pi-star').addClass('pi-star-fill color__starStarred');
        $('#stared');
        star = 1;
    } else {
        $('#stared').removeClass('pi-star-fill color__starStarred').addClass('pi-star');
        star = 0;
    }
  }

  return (
    <div className="row__fullStocks" onClick={buyBoxStock}>
      <div className="favourite"> 
        <i className="star pi pi-star" id='stared' onClick={starClick}/>
      </div>
      <div className="row__start">
        <h1>{props?.name}</h1>
      </div>
      <div className="row__price">
        <p>{(props.price).toFixed(2)} <span>€</span></p>
      </div>
      <div className="percentage__1h">
        <p className="row__percentage" id="row_percentage">{Number(percentage).toFixed(2)}%</p>
      </div>
      <div className="open__price">
        <p>{(props.openPrice).toFixed(2)} €</p>
      </div>  
      <div className="close__price">
        <p>{(props.closePrice).toFixed(2)} €</p>
      </div> 
      <div className="high__dayPrice">
        <p>{(props.highPrice).toFixed(2)} €</p>
      </div> 
      <div className="low__dayPrice">
        <p>{(props.lowPrice).toFixed(2)} €</p>
      </div>
      <div className="row__chart">
      <img src={chartImage} alt="" height={18}/>
      </div>
    </div>
  );
}

export default PopularStocks;