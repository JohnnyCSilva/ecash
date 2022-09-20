import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './stats.css'
import StatsRow from './StatsRow';

const TOKEN = 'ccl2uk2ad3i7ei0c9m5gccl2uk2ad3i7ei0c9m60';
const BASE_URL = 'https://finnhub.io/api/v1/quote';

const Stats = () => {

  const [stockData, setStockData] = useState([])

  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) =>{
        console.error(error + ' error message');
      })

  }

  useEffect(() => {
    let tempStockData =[];
    const stocksList = ["AAPL", "MSFT", "TSLA", "META", "BABA", "UBER", "DIS", "SBUX"];

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
  }, []);

  return (
    <div className='stats'>
      <div className='stats__container'>
        <div className='stats__header'>
          <p>Crypto Portfolio</p>
          <i className='pi pi-angle-double-down'/>
        </div>
        <div className='stats__content'>
        <div className='stats__row'>
            
            </div>
        </div>
        <div className='stats__header'>
          <p>Stocks Portfolio</p>
          <i className='pi pi-angle-double-down'/>
        </div>
        <div className='stats__row'>
          {stockData.map((stock) => (
            <StatsRow
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

export default Stats