import React from "react";
import Shop from "../components/Shop";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Searchbar from "../components/Searchbar";

const ShopPage = () => {
  return (

    <>
        <Header/>
        <Searchbar/>
        <Shop/>
        <Footer/>

    </>
  )
};

export default ShopPage;
