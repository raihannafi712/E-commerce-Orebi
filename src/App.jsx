import Arrivals from "./components/Arrivals"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Products from "./components/Products"
import Sales from "./components/Sales"
import Searchbar from "./components/Searchbar"
import Home from "./pages/Home"

/*router start */

import {createBrowserRouter , createRoutesFromElements , RouterProvider , Router, Route } from "react-router-dom"
import ShopPage from "./pages/ShopPage"

let routerVar = createBrowserRouter(createRoutesFromElements(

  <Route>
    <Route index element={<Home/>} ></Route>
    <Route path="/shop" element={<ShopPage/>} ></Route>
  </Route>
))

/*router end */

function App() {


  return (
    <>
      <RouterProvider router={routerVar}/>
    </>
  )
}

export default App
