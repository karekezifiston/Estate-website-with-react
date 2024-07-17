import Header from "./components/Header/Header"
import Hero from "./components/hero/hero"
import Companies from "./components/companies/Companies"
import Residencies from "./components/Residencies/Residencies"
import Carousel from "./components/Carousel/Carousel"
import Values from "./components/Values/Values"
import { accordionData } from "./components/Data/Data"




function App() {


  return(
    <div className="App">
       <Header/>
       <Hero/>
       <Companies/>
       <Residencies/>
       <Carousel/>
       <Values items={accordionData} />
       
       
    </div>
  )
}

export default App
