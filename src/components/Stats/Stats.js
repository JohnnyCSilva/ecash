import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './stats.css'
import StatsRow from './StatsRow';
import { db } from '../Firebase/Firebase.js';

const TOKEN = 'ccl2uk2ad3i7ei0c9m5gccl2uk2ad3i7ei0c9m60';
const BASE_URL = 'https://finnhub.io/api/v1/quote';

const Stats = () => {

  const [stockData, setStockData] = useState([])
  const [myStocks, setMyStocks] = useState([]);

  const getMyStocks = () => {

    db.collection('myStocks').onSnapshot(snapshot => {
        let promises = [];
        let tempData = []
        snapshot.docs.map((doc) => {
          promises.push(getStocksData(doc.data().ticker)
          .then(res => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data
            })
          })
        )})
        Promise.all(promises).then(()=>{
          setMyStocks(tempData);
        })
    })
  }

  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) =>{
        console.error(error + ' error message');
      })

  }
  useEffect(() => {
    const intervalId = setInterval(() => {  
      let tempStockData =[];
      const stocksList = ["AMZN", "PYPL", "ADBE", "AAPL", "BABA", "SHOP"];

      let promises = [];
      getMyStocks();
     
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
    },30000)
    return () => clearInterval(intervalId); //This is important
  },[]);
  

  /*var totalStockPrice = 0;
  var stockPrice = 0;
  stockData.map((stock) => {
    stockPrice += stock.price;
    totalStockPrice += stock.price;
    sessionStorage.setItem("totalStockPrice", totalStockPrice);
  });*/
  

  var toggled = 1;
  function handleHideSection(){
    if (toggled === 1){
      toggled = 0;
      document.getElementById('stats_row').style.display = 'none';
    } else {
      toggled = 1;
      document.getElementById('stats_row').style.display = 'block';  
    }
  }


  return (
    <div className='stats'>
      <div className='stats__container'>
        <div className='stats__header'>
          <p>Crypto Portfolio </p>
          <i className='pi pi-angle-double-down'/>
        </div>
        <div className='stats__content'>
        <div className='stats__row'>
            {/* Crypto */}
        </div>
        </div>
        <div className='stats__header'>
          <p>Stocks Portfolio</p>
          <i className='pi pi-angle-double-down' onClick={handleHideSection}/>
        </div>
        <div className='stats__row' id='stats_row'>
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                shares={stock.data.shares}
                price={stock.info.c}
              />
            ))}
        </div>

        { /* get all of stocks that's in the array

        <div className='stats__header'>
          <p>Stocks Portfolio</p>
          <i className='pi pi-angle-double-down' onClick={handleHideSection}/>
        </div>
        <div className='stats__row' id='stats_row'>
            {stockData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
        </div>

        */}
        
      </div>
    </div>
  )
}

export default Stats 