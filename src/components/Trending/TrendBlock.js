import React, { useEffect } from 'react'
import './trending.css'
import Apple from './Images/apple.jpg'
import Paypal from './Images/paypal.png'
import Adobe from './Images/adobe.png'
import Microsoft from './Images/microsoft.png'
import $ from "jquery";

import stockRed1 from "./Images/stockRed1.svg"
import stockRed2 from "./Images/stockRed2.svg"
import stockRed3 from "./Images/stockRed3.svg"
import stockRed4 from "./Images/stockRed4.svg"
import stockRed5 from "./Images/stockRed5.svg"
import stockGreen1 from "./Images/stockGreen1.svg"
import stockGreen2 from "./Images/stockGreen2.svg"
import stockGreen3 from "./Images/stockGreen3.svg"
import stockGreen4 from "./Images/stockGreen4.svg"
import stockGreen5 from "./Images/stockGreen5.svg"

const TrendBlock = (props) => {

    const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;
    var chartImage = "";
    var stockName = "";
    var stockImage = "";


    var randomImagePos = [stockGreen1, stockGreen2, stockGreen3, stockGreen4, stockGreen5];
    var randomImageNeg = [stockRed1, stockRed2, stockRed3, stockRed4, stockRed5];

    var chartImagePos = randomImagePos[Math.floor(Math.random()*randomImagePos.length)];
    var chartImageNeg = randomImageNeg[Math.floor(Math.random()*randomImagePos.length)];

    if (percentage > 0) {
        chartImage = chartImagePos;
    } else {
        chartImage = chartImageNeg;
    }

    if( props.name === "AAPL") {
        stockName = "Apple";
        stockImage = Apple
    } else if( props.name === "ADBE" ){
        stockName = "Adobe";
        stockImage = Adobe
    } else if( props.name === "PYPL" ){
        stockName = "Paypal";
        stockImage = Paypal
    } else {
        stockName = "Microsoft";
        stockImage = Microsoft
    }

    useEffect(() => {
        const getColor = setInterval(() => {  
          $('.percentage').each(function() {
            if (parseFloat($(this).text()) >= 0) {
              $(this).addClass('numPos');
            } else if (parseFloat($(this).text()) < 0) {
              $(this).addClass('numNeg');
            }
          });    
        },2000);
        
        return () => clearInterval(getColor); 
      },[]);

  return (
    <div className='block__main'>
        <div className='block__header'>
        <img src={stockImage} alt='Logo' />
            <div className='block__title'>
                <h2>{props.name}</h2>
                <p>{stockName}</p>
            </div>
            <i className='pi pi-ellipsis-v'></i>
        </div>
        <div className='block__info'>
            <img src={chartImage} alt='Graph'/>
            <div className='block__price'>
                <h2>{(props.price).toFixed(2)}€</h2>
                <p className='percentage'>{Number(percentage).toFixed(2)}%</p>
            </div>
        </div>   
    </div>
  )
}

export default TrendBlock