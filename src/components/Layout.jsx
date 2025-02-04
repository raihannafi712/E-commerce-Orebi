import React from "react";
import Header from "./Header";
import Searchbar from "./Searchbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
        <Header/>
        <Searchbar/>
        <Outlet/>             {/* It's for the new created components */}
        <Footer/>
    </>

  )
};

export default Layout;
