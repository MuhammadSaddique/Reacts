import Header from "./Header";
import Footer from "./Footer";
import './app.css'

function App() {
  const app = () => {
    console.log("app", app);
  }

  return (
    <>
      <Header />

      <h1>Main Body</h1>
      <button onClick={app}>Click</button>

      <Footer />

    </>
  )
}

export default App
