import React from "react";
import Container from './../components/Container';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";


const Checkout = () => {
  return (
    <section>
      <Container>
        <div className="pt-[20px]">
          <h3 className="font-dm text-[39px] font-bold ">Checkout</h3>
          <div className="flex text-[12px] font-normal font-dm text-[#767676] items-center mt-2 ">
            <Link to="/" className="hover:text-black hover:underline">Home</Link>
            <p> <FaAngleRight /></p>
            <Link to="/signup" className="hover:text-black hover:underline">Checkout</Link>
          </div>
        </div>   
        <div>
          <h3 className="font-dm font-bold text-[28px] text-black py-[30px] ">Billing Details</h3>
        </div>
        <div>
          <div className="flex">
            <div className="w-[20%] ">
              <div className="">
                <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">First Name*</h3>
                <input type="text" placeholder="First Name"
                className="border-b-2 "             
                />
              </div>
              <div className="">
                <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Companye Name (optional)</h3>
                <input type="text" placeholder="Company Name"
                className="border-b-2 "             
                />
              </div>
            </div>
            <div className="w-[50%] ">
                <div className="">
                    <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Last Name*</h3>
                    <input type="text" placeholder="Last Name"
                    className="border-b-2 "             
                    />
                </div>
                <div className="">
                  <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Country *</h3>
                  <select name="cate" id="cate" className="w-[30%] border-black border-[1px] duration-300 ease-in-out ">
                      <option value="valOne" className="text-center ">Bangladesh</option>
                      <option value="valOne" className="text-center ">Bangladesh</option>
                      <option value="valOne" className="text-center ">Bangladesh</option>
                      <option value="valOne" className="text-center ">Bangladesh</option>
                      <option value="valOne" className="text-center ">Bangladesh</option>
                  </select>
                </div>
            </div>
          </div>
          <div className="">
            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Street Address *</h3>
            <input type="text" placeholder="First House number and street name"
            className="border-b-2 "             
            />
          </div>
          <div className="">
            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Town/City *</h3>
            <input type="text" placeholder="Town/City"
            className="border-b-2 "             
            />
          </div>
          <div className="">
            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">County (optional)</h3>
            <input type="text" placeholder="County"
            className="border-b-2 "             
            />
          </div>
          <div className="">
            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Post Code *</h3>
            <input type="text" placeholder="Post Code"
            className="border-b-2 "             
            />
          </div>
          <div className="">
            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Phone *</h3>
            <input type="text" placeholder="Phone"
            className="border-b-2 "             
            />
          </div>
          <div className="">
            <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Email Address *</h3>
            <input type="text" placeholder="Email"
            className="border-b-2 "             
            />
          </div>
        </div>
        <div>
          <h3 className="font-dm font-bold text-[28px] text-black pt-[60px] ">Additional Information</h3>
        </div>
        <div className="pb-[60px] ">
          <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Other Notes (optional)</h3>
          <input type="text" placeholder="Notes about your order, e.g. special notes for delivery."
          className="border-b-2 w-[40%] h-[100px] pl-[10px] "             
          />
        </div>
        <div className="py-[70px] ">
          <a href="#" className="font-dm lg:text-[14px] text-[12px] font-bold text-center text-[#262626]  py-[8px] lg:py-[15px] px-[47px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:bg-[#2B2B2B] border-[1px] border-gray-300 mr-6 ">
            Proceed to Payment
          </a>
        </div>
      </Container>
    </section>
  )
};

export default Checkout;
