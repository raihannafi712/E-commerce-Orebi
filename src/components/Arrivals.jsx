import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { FaBold, FaHeart } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { FcNext , FcPrevious  } from "react-icons/fc";

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ApiData } from "./ContextApi";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, position:"absolute", right:"0" ,top:"30%" , width:"40px" , height:"40px" ,
        background:"#979797" ,color:"white !important" , borderRadius:"50%" , display:"flex" , justifyContent:"center" ,
        alignItems:"center" , zIndex:"10" , cursor:"pointer" ,
       }}
      onClick={onClick}
    > <FcNext /> </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, position:"absolute", left:"0" ,top:"30%" , width:"40px" , height:"40px" ,
         background:"#979797" ,color:"white" , borderRadius:"50%" , display:"flex" , justifyContent:"center" ,
         alignItems:"center" , zIndex:"10" , cursor:"pointer" ,
        }}
      onClick={onClick}
      > <FcPrevious /></div>
  );
}

const Arrivals = () => {

  let dataFromContext = useContext(ApiData);

  const newSlide = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  

  return (
    <section>
        <Container>
          <div>
            <h3 className="font-dm text-[24px] text-center lg:text-start lg:text-[39px] font-bold ">New Arrivals</h3>
          </div>
          <Slider {...newSlide}>
            {dataFromContext.map((item)=>(
            <div className="!w-[95%]">                                           {/* whole box */}
              <div className="relative mb-6 group overflow-hidden cursor-pointer ">
                <Link to="/shop"><img src={item.thumbnail} alt="product" /></Link>                        {/* item and thumbnail comes from the profuct API */}
                <div className="w-full h-[0px] opacity-0 bg-white absolute bottom-0 left-0 group-hover:h-[80px] lg:group-hover:h-[156px] duration-300 ease-in-out group-hover:opacity-100 ">
                  <ul>
                    <li className="flex justify-end py-2 lg:py-4 lg:gap-x-4 items-center font-dm text-[8px] lg:text-[16px] font-bold text-[#262626] hover:text-[red] ">Add to Wish List <FaHeart /></li>
                    <li className="flex justify-end py-2 lg:py-4 lg:gap-x-4 items-center font-dm text-[8px] lg:text-[16px] font-bold text-[#262626] hover:text-[red] ">Compare <GrPowerCycle /></li>
                    <li className="flex justify-end py-2 lg:py-4 lg:gap-x-4 items-center font-dm text-[8px] lg:text-[16px] font-bold text-[#262626] hover:text-[red] ">Add to Cart <FaShoppingCart /></li>
                  </ul>
                </div>
              </div>
              <div className=" lg:flex items-center justify-between text-center lg:text-start">
                <a className="font-dm  text-[12px] lg:text-[16px] font-bold hover:underline " href="/shop">{item.title} </a>
                <h4 className="font-dm text-[12px] lg:text-[16px] font-normal ">${item.price} </h4>
              </div>
              <div>
                <h4 className="font-dm text-[12px] lg:text-[16px] text-center lg:text-start font-normal ">Black</h4>
              </div>
            </div>
            ))}
          </Slider>
          {/* <div className="pt-12 pb-[216px] flex flex-wrap justify-between ">                                             row
            <div className="w-[25%] "></div>
            <div className="w-[25%] "></div>
            <div className="w-[25%] "></div>
          </div> */}
        </Container>
    </section>
  )
};

export default Arrivals;
