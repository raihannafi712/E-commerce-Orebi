import React from "react";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Banner from "../components/Banner";
import Sales from "../components/Sales";
import Arrivals from "../components/Arrivals";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ShopPage from "./ShopPage";

const Home = () => {
  return (
    <>
      <Banner/>
      <Sales/>
      <Arrivals/>
      <Products/>
    </>
  )
};

export default Home;
