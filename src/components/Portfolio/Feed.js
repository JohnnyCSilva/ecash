import React, { useEffect, useState } from 'react'
import './feed.css';

import { LineChart, Line, Tooltip, XAxis, CartesianGrid, ResponsiveContainer } from 'recharts';


const Feed = () => {

  const [ graphData, setgraphData ] = useState([])

  /*const data = [{
    Value: '135351',
    Time: 'Day 16'
  },{
    Value: '133516',
    Time: 'Day 17'
  },{
    Value: '146204',
    Time: 'Day 18'
  },{
    Value: '150256',
    Time: 'Day 19'
  },{
    Value: '139324',
    Time: 'Day 20'
  }];*/

  const createMockData = () => {
    let data = [];
    let value = 50;
    for (var i = 0; i <= 175; i++) {
      let date = new Date();
      date.setMonth(0, 0, 0, 0);
      date.setDate(i);
      value += Math.round((Math.random() < 0.5 ? 1 : 0) * Math.random() * 50);
      data.push({ x: date.toLocaleDateString(), y: value });
    }
    //console.log(data);
    setgraphData(data);
  };

  useEffect(() => {
    createMockData();
  }, []);

  return (
    <div className='newsfeed'>
        <div className='newsfeed__container'>
          <div className='newsfeed__chartSection'>
            <div className='newsfeed__portfolioValue'>
              <h1>2.351,53 <sup>€</sup></h1>
              <p>+11,56€ <span>(+0,04%)</span></p>
            </div>
            <div className='newsfeed__chart' id='newsfeed_chart'>

            <ResponsiveContainer width='100%' height={150}>
              <LineChart data={graphData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <Line type="monotone" dataKey="y" stroke="var(--mainColor)" dot={false} />
                <CartesianGrid stroke="var(--backgroundDark)" strokeDasharray="5 5" yAxis='1'/>
                <XAxis dataKey="x" hide="true" />

                <Tooltip labelStyle={
                  {color: "black",fontFamily: "var(--font)"}}
                />
              </LineChart>
              </ResponsiveContainer>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Feed