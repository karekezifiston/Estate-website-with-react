import Header from "./components/Header/Header"
import Hero from "./components/hero/hero"
import Companies from "./components/companies/Companies"
import Residencies from "./components/Residencies/Residencies"
import Carousel from "./components/Carousel/Carousel"




function App() {


  return(
    <div className="App">
       <Header/>
       <Hero/>
       <Companies/>
       <Residencies/>
       <Carousel/>
       
       
    </div>
  )
}

export default App
