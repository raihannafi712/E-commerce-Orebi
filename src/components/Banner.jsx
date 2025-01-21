import React from "react";
import banner from '../assets/banner.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Banner = () => {

  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          position:"absolute",
          left:"12%",
          top:"50%",
          translate:"-50%"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          borderRight: "2px solid white",
          padding: "10px 0",
          color:"transparent"
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (

    <section>
      <Slider {...settings}> 
        <div>
          <a href="#" >
              <img src={banner} alt="banner" className="w-max-[101%] "  />    {/* In E-commerce sites, the banners are a whole anchor tag images */}
          </a>
        </div>
        <div>
          <a href="#">
              <img src={banner} alt="banner" className="bg-no-repeat" />    {/* In E-commerce sites, the banners are a whole anchor tag images */}
          </a>
        </div>
        <div>
          <a href="#">
              <img src={banner} alt="banner" className="bg-no-repeat" />    {/* In E-commerce sites, the banners are a whole anchor tag images */}
          </a>
        </div>
        <div>
          <a href="#">
              <img src={banner} alt="banner" className="" />    {/* In E-commerce sites, the banners are a whole anchor tag images */}
          </a>
        </div>
        <div>
          <a href="#">
              <img src={banner} alt="banner" className="bg-no-repeat" />    {/* In E-commerce sites, the banners are a whole anchor tag images */}
          </a>
        </div>
      </Slider>
    </section>
  )
};

export default Banner;
