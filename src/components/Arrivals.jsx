import React from "react";
import Container from "./Container";
import neck from '../assets/neck.png';
import { FaHeart } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";



const Arrivals = () => {
  return (
    <section>
        <Container>
          <div>
            <h3 className="font-dm text-[39px] font-bold ">New Arrivals</h3>
          </div>
          <div className="pt-12 pb-[216px] ">                                             {/* row */}
            <div className="w-[25%] ">                                           {/* whole box */}
              <div className="relative mb-6 group overflow-hidden cursor-pointer ">
                <img src={neck} alt="product" />
                <div className="w-full h-[0px] opacity-0 bg-white absolute bottom-0 left-0 group-hover:h-[156px] duration-300 ease-in-out group-hover:opacity-100 ">
                  <ul>
                    <li className="flex justify-end py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">Add to Wish List <FaHeart /></li>
                    <li className="flex justify-end py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">Compare <GrPowerCycle /></li>
                    <li className="flex justify-end py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">Add to Cart <FaShoppingCart /></li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <a className="font-dm text-[20px] font-bold hover:underline " href="#">Basic Crew  Neck Tee</a>
                <h4 className="font-dm text-[16px] font-normal ">$44.00</h4>
              </div>
              <div>
                <h4 className="font-dm text-[16px] font-normal ">Black</h4>
              </div>
            </div>
            <div className="w-[25%] "></div>
            <div className="w-[25%] "></div>
            <div className="w-[25%] "></div>
          </div>
        </Container>
    </section>
  )
};

export default Arrivals;
