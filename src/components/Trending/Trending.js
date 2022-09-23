import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './trending.css'  
import TrendBlock from './TrendBlock.js'
import CryptoBlock from './CryptoBlock.js'

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
          const stocksList = ["AAPL", "PYPL", "ADBE", "MSFT"];
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

    /* CRYPTO */
    const [coins, setCoins] = useState()

    useEffect(() => {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=4&page=1&sparkline=false'
          )
        .then(res => {
          setCoins(res.data);
          console.log(res.data);
        })
        .catch(error => console.log(error));
    }, []);

  return (
    <div className='trending__main'>
        <div className='trending__content'>
            <div className='trending__header'>
                <h1>Stock Market</h1>
                <p>Trending market group</p>
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

            <div style={{margin: '50px 0'}}></div>

            <div className='trending__header'>
                <h1>Crypto Currency</h1>
                <p>Trending market group</p>
            </div>
            <div className='trending__blocks'>
            {coins?.map((coin) => (
                  <CryptoBlock
                    key={coin.id}
                    name={coin.name}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.total_volume}
                    volume={coin.market_cap}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                  />
            ))}
            </div>
        </div>
    </div>
  )
}

export default Trending