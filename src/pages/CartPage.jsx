import React from "react";
import Container from './../components/Container';
import { Link } from 'react-router-dom';
import { FaAngleRight , FaMinus , FaPlus   } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import cart from '../assets/cartbuy.png'



const CartPage = () => {
  return (
    <section>
      <Container>
        <div className="pt-[20px]">
          <h3 className="font-dm text-[39px] font-bold ">Cart</h3>
          <div className="flex text-[12px] font-normal font-dm text-[#767676] items-center mt-2 ">
            <Link to="/" className="hover:text-black hover:underline">Home</Link>
            <p> <FaAngleRight /></p>
            <Link to="/shop" className="hover:text-black hover:underline">Cart</Link>
          </div>
        </div>
        <div className="py-[127px]">
          <div className="flex bg-[#F5F5F3] py-8 ">
            <div className="w-[25%] text-center ">
              <h3 className="pl-5 text-[20px] font-bold font-dm text-black">Product</h3>
            </div>
            <div className="w-[25%] text-center ">
              <h3 className="text-[20px] font-bold font-dm text-black">Price</h3>
            </div>
            <div className="w-[25%] text-center ">
              <h3 className="text-[20px] font-bold font-dm text-black">Quantity</h3>
            </div>
            <div className="w-[25%] text-center ">
              <h3 className="text-[20px] font-bold font-dm text-black">Total</h3>
            </div>
          </div>          
          <div className="flex py-8 items-center ">
            <div className="flex w-[25%] text-center items-center">
              <div className="pl-5 cursor-pointer hover:text-red-500 ">
                <ImCross />
              </div>
              <div className="pl-[20px] pr-[20px] ">
                <img src={cart} alt="product" />
              </div>
              <h3 className=" text-[20px] font-bold font-dm text-black">
                Product name
              </h3>
            </div>
            <div className="w-[25%] text-center ">
              <h3 className="text-[20px] font-bold font-dm text-black">$44.00</h3>
            </div>
            <div className="w-[25%] text-center ">
              <div className="text-[16px] font-normal font-dm text-[#767676] ">
                <ul className="flex justify-center py-[22px] mx-[70px] border-[#767676] border-[1px] items-center ">
                  <li className="mx-[35px] cursor-pointer hover:text-black hover:font-bold "><FaMinus /></li>
                  <li className="mx-[35px] ">1</li>
                  <li className="mx-[35px] cursor-pointer hover:text-black hover:font-bold "><FaPlus /></li>
                </ul>
              </div>
            </div>
            <div className="w-[25%] text-center ">
              <h3 className="text-[20px] font-bold font-dm text-black">$44.00</h3>
            </div>
          </div>         
          <div className="flex items-center">
            <div className="">
              <select name="cate" id="cate" className="w-[%] border-black border-[1px] ">
                <option value="valOne" className="text-center ">10</option>
                <option value="valOne" className="text-center ">20</option>
                <option value="valOne" className="text-center ">30</option>
                <option value="valOne" className="text-center ">40</option>
                <option value="valOne" className="text-center ">50</option>
              </select>
            </div>
            <div>
              <h3>Apply coupon</h3>
            </div>
            <div>
              <h3>Update cart</h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
};

export default CartPage;
