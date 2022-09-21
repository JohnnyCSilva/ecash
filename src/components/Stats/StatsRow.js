import React, {useState, useEffect} from "react";
import chart1up from './images/stock.svg'
import chart2up from './images/stock2.svg'
import chart1down from './images/stock3.svg'
import chart2down from './images/stock4.svg'
import './stats.css';
import $ from "jquery";

function StatsRow(props) {

// (currentPrice - openPrice)/openPrice
  const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;

  var chartImage = '';

  useEffect(() => {
    $('.row__percentage').each(function() {
      if (parseFloat($(this).text()) < 0) {
        chartImage = './images/stock3.svg';
        $(this).addClass('numNeg');
      } else if (parseFloat($(this).text()) >= 0) {
        chartImage = './images/stock2.svg';
        $(this).addClass('numPos');
      }
    });

  }, []);

  const getModal = () => {

  }

  return (
    <div className="row" onClick={getModal}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{/*props.volume && (props.volume + " shares")*/}10 Shares</p>
      </div>
      <div className="row__chart">
      <img src={chartImage} height={20}/>
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price} <span>€</span></p>
        <p className="row__percentage" id="row_percentage">{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;