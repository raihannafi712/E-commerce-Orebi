import React from "react";
import Container from "../components/Container";
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";

const AccountPage = () => {
  return (
    <section>
        <Container>
            <div className="pt-[20px]">
              <h3 className="font-dm text-[39px] font-bold ">My Account</h3>
              <div className="flex text-[12px] font-normal font-dm text-[#767676] items-center mt-2 ">
                <Link to="/" className="hover:text-black hover:underline">Home</Link>
                <p> <FaAngleRight /></p>
                <Link to="/shop" className="hover:text-black hover:underline">My account</Link>
              </div>
            </div>
            <div className="flex py-[80px] ">
                <div className="w-[20%] " >
                    <ul>
                        <li className="my-10 cursor-pointer font-dm text-[18px] font-normal text-[#767676] hover:font-bold hover:text-black  ">
                            <h3>Dashboard</h3>
                        </li>
                        <li className="my-10 cursor-pointer font-dm text-[18px] font-normal text-[#767676] hover:font-bold hover:text-black  ">
                            <h3>Others</h3>
                        </li>
                        <li className="my-10 cursor-pointer font-dm text-[18px] font-normal text-[#767676] hover:font-bold hover:text-black  ">
                            <h3>Downloads</h3>
                        </li>
                        <li className="my-10 cursor-pointer font-dm text-[18px] font-normal text-[#767676] hover:font-bold hover:text-black  ">
                            <h3>Addresses</h3>
                        </li>
                        <li className="my-10 cursor-pointer font-dm text-[18px] font-normal text-[#767676] hover:font-bold hover:text-black  ">
                            <h3>Account details</h3>
                        </li>
                        <li className="my-10 cursor-pointer font-dm text-[18px] font-normal text-[#767676] hover:font-bold hover:text-black  ">
                            <h3>Logout</h3>
                        </li>
                    </ul>
                </div>
                <div className="w-[80%] mt-10 text-center " >
                    <h3>details</h3>
                </div>
            </div>
        </Container>
    </section>
  )
};

export default AccountPage;
