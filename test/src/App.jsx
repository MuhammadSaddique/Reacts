import Header from "./Header";
import Footer from "./Footer";
import Student from "./Student";
import './app.css'

function App() {
  const app = () => {
    console.log("app", app);
  }

  return (
    <div className="App">
      <Header />

      <Student
        name="Saddique"
        age={21}
      />
      <Student
        name="Shafique"
        age={18}
      />
      <Student
        name="Rafique"
        age={16}
      />
      {/* <h1>Main Body</h1>
      <button onClick={app}>Click</button> */}

      <Footer />

    </div>
  )
}

export default App
