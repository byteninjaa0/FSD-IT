// import React from 'react'
import { useState } from 'react';
import pic from '../images/nature.jpeg';
import './ImageApp.css';
const ImageApp = () => {
  const [width,setWidth] = useState(250);
  const [height,setHeight] = useState(250);
  const [rotation,setRotation] = useState(0);
  return (
    <div className='imageConatiner'>
      <h1>ImageApp</h1>
      <div className='image'>
        <img src={pic}  style={ {width:width , height:height , transform: `rotate(${rotation}deg)`} } />
      </div>
      <div className="btn_box">
        <button onClick={()=>{setWidth(width+20)}} >Width Increase</button>
        <button onClick={()=>{setHeight(height+20)}} >Height Increase</button>
        <button onClick={()=>{setRotation(rotation+20)}} >Rotation</button>
        <button onClick={()=>{setHeight(250) , setWidth(250) , setRotation(0)}}>Normalise Image</button>
      </div>
    </div>
  )
}

export default ImageApp
