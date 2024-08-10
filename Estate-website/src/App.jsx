import Header from "./components/Header/Header"
import Hero from "./components/hero/hero"
import Companies from "./components/companies/Companies"
import Carousel from "./components/Carousel/Carousel"
import Values from "./components/Values/Values"
import Started from "./components/Started/Started"
import Contact from "./components/Contact/Contact"
import Information from "./components/Information/Information"




function App() {


  return(
    <div className="App">
       <Header/>
       <Hero/>
       <Companies/>
       <Carousel/>
       <Values />
       <Started/>
       <Contact/>
       <Information/>
       
       
       
    </div>
  )
}

export default App
