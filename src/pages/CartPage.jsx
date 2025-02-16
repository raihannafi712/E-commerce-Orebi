import React from "react";
import Container from './../components/Container';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";

const CartPage = () => {
  return (
    <section>
      <Container>
        <div className="pt-[124px]">
          <h3 className="font-dm text-[39px] font-bold ">Cart</h3>
          <div className="flex text-[12px] font-normal font-dm text-[#767676] items-center mt-2 ">
            <Link to="/" className="hover:text-black hover:underline">Home</Link>
            <p> <FaAngleRight /></p>
            <Link to="/shop" className="hover:text-black hover:underline">Cart</Link>
          </div>
        </div>
        <div className="py-[127px]">
          <div>
            <h4>details</h4>
          </div>
          <div></div>
        </div>
      </Container>
    </section>
  )
};

export default CartPage;
