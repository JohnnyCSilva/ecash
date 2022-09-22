import React from 'react'
import './content.css'

import PopularStocks from './Blocks/PopularStocks'

const Content = () => {
  return (
    <div>
        <div className="newsfeed__popularlists__section">
            <div className="newsfeed__popularlists__intro">
              <h1>Popular Stocks</h1>
            </div>
            <PopularStocks />
          </div>
    </div>
  )
}

export default Content