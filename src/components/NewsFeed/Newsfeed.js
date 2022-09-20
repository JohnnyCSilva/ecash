import React from 'react'
import './newsfeed.css'

import { useState } from "react";
import Graph from "./Data/Graph.js";
import { UserData } from "./Data/Data.js";

const Newsfeed = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "var(--mainColor)",
        ],
        borderColor: "#6366f1",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className='newsfeed'>
        <div className='newsfeed__container'>
          <div className='newsfeed__chartSection'>
            <div className='newsfeed__portfolioValue'>
              <h1> 139.324,53</h1>
              <p>+ 144,56€ (+0,04%)</p>
            </div>
            <div className='newsfeed__chart'>
            <Graph chartData={userData} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Newsfeed