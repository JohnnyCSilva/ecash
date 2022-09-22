import React from 'react'
import './content.css'

import PopularStocks from './Blocks/PopularStocks'

const Content = () => {
  return (

    <div className="content__main">
        <div className="content__content">
              <div className="stocks__header">
                <h1>Today's Stock Prices</h1>
                <p>Results were generated a few mins ago. Pricing data is updated frequently. Currency in EUR</p>
              </div>
            <PopularStocks />
          </div>
    </div>
  )
}

export default Content