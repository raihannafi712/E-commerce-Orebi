import Home from "./pages/Home"

/*router start */

import {createBrowserRouter , createRoutesFromElements , RouterProvider , Router, Route } from "react-router-dom"
import ShopPage from "./pages/ShopPage"
import DetailsPage from "./pages/DetailsPage"
import Layout from "./components/Layout"

let routerVar = createBrowserRouter(createRoutesFromElements(

  <Route element={<Layout/>} >
    <Route index element={<Home/>} ></Route>
    <Route path="/shop" element={<ShopPage/>} ></Route>
    <Route path="/shop/:id" element={<DetailsPage/>} ></Route>
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
