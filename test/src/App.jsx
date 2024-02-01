

function App() {
  const app = ()=>{
    console.log("app",app);
  }

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={app}>Click</button>
      
    </>
  )
}

export default App
