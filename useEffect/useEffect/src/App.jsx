import React, { useEffect, useState } from 'react';
import Header from './compontents/Header';
import './index.css'

const App = () => {
    const [mark , setMark] = useState(80)
  return (
    <div>
      <h1>My marks are {mark}</h1>
      <button onClick={()=>{
        setMark(33)
      }} className=''>Update</button>

      <Header/>
    </div>



  )
}

export default App
