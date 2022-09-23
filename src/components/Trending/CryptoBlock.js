import React from 'react'

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

const CryptoBlock = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {

    var chartImage = "";

    var randomImagePos = [stockGreen1, stockGreen2, stockGreen3, stockGreen4, stockGreen5];
    var randomImageNeg = [stockRed1, stockRed2, stockRed3, stockRed4, stockRed5];

    var chartImagePos = randomImagePos[Math.floor(Math.random()*randomImagePos.length)];
    var chartImageNeg = randomImageNeg[Math.floor(Math.random()*randomImagePos.length)];

    if (priceChange > 0) {
        chartImage = chartImagePos;
    } else {
        chartImage = chartImageNeg;
    }


  return (
    <div className='block__main'>
        <div className='block__header'>
        <img src={image} alt='Logo' />
            <div className='block__title'>
                <h2>{name}</h2>
                <p>{symbol}</p>
            </div>
            <i className='pi pi-ellipsis-v'></i>
        </div>
        <div className='block__info'>
            <img src={chartImage} alt='Graph'/>
            <div className='block__price'>
                <h2>{(price).toFixed(2)}€</h2>
                <p className='percentage'>{priceChange.toFixed(2)}€</p>
            </div>
        </div>   
    </div>
  )
}

export default CryptoBlock