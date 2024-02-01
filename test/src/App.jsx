import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const app = ()=>{
    console.log(app,"app");
  }

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={app}>Click</button>
      
    </>
  )
}

export default App
