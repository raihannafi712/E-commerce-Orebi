import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { FaBold, FaHeart } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { FcNext , FcPrevious  } from "react-icons/fc";
import year from '../assets/year.png';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
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

const Products = () => {

    const newSlide = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    let dataFromContext = useContext(ApiData);

    // fetch added

    // /* fetch start  */

    // useEffect(()=>{
    //     fetch("https://dummyjson.com/products").then((res) =>
    //         res.json().then((data)=> setData(data.Products))
    // );
    // },[])

    // /* fetch end */

  return (

    <section className=" my-[20px] lg:my-[123px] ">
        <Container>
          <div>
            <h3 className="font-dm text-[24px] text-center lg:text-start lg:text-[39px] font-bold ">Products</h3>
          </div>
          <Slider {...newSlide}>
            {dataFromContext.map((item)=>(
            <div className="!w-[95%]">                                           {/* whole box */}
              <div className="relative mb-6 group overflow-hidden cursor-pointer ">
                <img src={item.thumbnail} alt="product" />                        {/* item and thumbnail comes from the profuct API */}
                <div>
                    <h3 className="font-dm font-bold text-[8px] lg:text-[16px] text-[white] bg-[#262626] px-[10px] lg:px-[25px] py-[4px] lg:py-[6px] inline-block absolute top-[0%] left-[0%] mt-2 lg:mt-4 ml-2 lg:ml-4 ">New</h3>
                </div>
                {/* <div className="w-full h-[0px] opacity-0 bg-white absolute bottom-0 left-0 group-hover:h-[156px] duration-300 ease-in-out group-hover:opacity-100 ">
                  <ul>
                    <li className="flex justify-end py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">Add to Wish List <FaHeart /></li>
                    <li className="flex justify-end py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">Compare <GrPowerCycle /></li>
                    <li className="flex justify-end py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">Add to Cart <FaShoppingCart /></li>
                  </ul>
                </div> */}
              </div>
              <div className=" lg:flex items-center justify-between text-center">
                <a className="font-dm  text-[12px] lg:text-[16px] font-bold hover:underline " href="#">{item.title} </a>
                <h4 className="font-dm text-[12px] lg:text-[16px] font-normal ">${item.price} </h4>
              </div>
              <div>
                <h4 className="font-dm text-[12px] lg:text-[16px] text-center lg:text-start font-normal ">Black</h4>
              </div>
            </div>
            ))}
          </Slider>
            
            {/* year start */}
            <div className=" my-7 lg:my-32">
                <a href="#"><img src={year} alt="year" /></a>
            </div>
            {/* year end */}
        </Container>
    </section>

  )
};

export default Products;
