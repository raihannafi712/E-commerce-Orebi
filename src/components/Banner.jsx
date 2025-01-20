import React from "react";
import banner from '../assets/banner.png'

const Banner = () => {
  return (

    <div>
      <a href="#">
          <img src={banner} alt="banner" />    {/* In E-commerce sites, the banners are a whole anchor tag images */}
      </a>
    </div>
  )
};

export default Banner;
