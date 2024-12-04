// import React from 'react';
import { useState } from 'react';
import './CounterApp.css';
const CounterApp = () => {
  const [count,setcount] = useState(0);
  return (
    <div className='display'>
      <h1>{count}</h1>
      <button className='btn' onClick={()=>{setcount(count+1)}}>Increment Count</button>
      <button className='btn' onClick={()=>{setcount(0)}}>Reset Count</button>
      <button className='btn' onClick={()=>{setcount(count-1)}}>Decrement Count</button>
    </div>
  )
}

export default CounterApp
