import Arrivals from "./components/Arrivals"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Products from "./components/Products"
import Sales from "./components/Sales"
import Searchbar from "./components/Searchbar"

function App() {


  return (
    <>
      <Header/>
      <Searchbar/>
      <Banner/>
      <Sales/>
      <Arrivals/>
      <Products/>
      <Footer/>
    </>
  )
}

export default App
