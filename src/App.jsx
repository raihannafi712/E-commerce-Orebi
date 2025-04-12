import Home from "./pages/Home"

/*router start */

import {createBrowserRouter , createRoutesFromElements , RouterProvider , Router, Route } from "react-router-dom"
import ShopPage from "./pages/ShopPage"
import DetailsPage from "./pages/DetailsPage"
import Layout from "./components/Layout"
import AboutPage from "./pages/AboutPage"
import Contacts from "./pages/Contacts"
import CartPage from "./pages/CartPage"
import ErrorPage from "./pages/ErrorPage"
import AccountPage from "./pages/AccountPage"
import Checkout from "./pages/Checkout"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"

let routerVar = createBrowserRouter(createRoutesFromElements(

  <>
    <Route element={<Layout/>} >
      <Route index element={<Home/>} ></Route>
      <Route path="/shop" element={<ShopPage/>} ></Route>
      <Route path="/shop/:id" element={<DetailsPage/>} ></Route>
      <Route path="/about" element={<AboutPage/>} ></Route>
      <Route path="/contacts" element={<Contacts/>} ></Route>
      <Route path="/cart" element={<CartPage/>} ></Route>
      <Route path="/accounts" element={<AccountPage/>} ></Route>
      <Route path="/checkout" element={<Checkout/>} ></Route>
      <Route path="/signup" element={<SignUpPage/>} ></Route>
      <Route path="/login" element={<LoginPage/>} ></Route>
    </Route>
    <Route path="*" element={<ErrorPage/>} ></Route>             {/* Error page */}
  </>
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
