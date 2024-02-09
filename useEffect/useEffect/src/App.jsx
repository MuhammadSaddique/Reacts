import React ,  { useState, useEffect } from 'react'

import './App.css'

function App() {
  useEffect(() => {
    console.log("useEffect called");
  })
  console.log("Function Body");

  return (
    <>
      {console.log("inside jsx")}


    </>
  )
}

export default App
