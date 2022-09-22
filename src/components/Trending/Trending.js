import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './trending.css'  
import TrendBlock from './TrendBlock.js'

const TOKEN = 'ccl2uk2ad3i7ei0c9m5gccl2uk2ad3i7ei0c9m60';
const BASE_URL = 'https://finnhub.io/api/v1/quote';

const Trending = () => {

    const [ stockData, setStockData ] = useState([])

    const getStocksData = (stock) => {
        return axios.get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
    }
      useEffect(() => {
        //const intervalId = setInterval(() => {  
          let tempStockData =[];
          const stocksList = ["AAPL", "PYPL", "ADBE"];
          let promises = [];
    
          stocksList.map((stock) => {
            promises.push(
              getStocksData(stock)
              .then((res) => {
                tempStockData.push({
                  name: stock,
                  ...res.data
                });
              })
            )
          });
          Promise.all(promises).then(()=>{
              setStockData(tempStockData);
          })
       // },30000)
       // return () => clearInterval(intervalId);
      },[]);


  return (
    <div className='trending__main'>
        <div className='trending__content'>
            <div className='trending__header'>
                <h1>Stock Market</h1>
                <p>Trending markets group</p>
            </div>

            <div className='trending__blocks'>
            {stockData.map((stock) => (
                <TrendBlock
                    key={stock.name}
                    name={stock.name}
                    openPrice={stock.o}
                    price={stock.c}
                />          
            ))}
            </div>
        </div>
    </div>
  )
}

export default Trending