import React from "react";
import Container from "./Container";
import logo from '../assets/logo.png';
import { LiaFacebookF } from "react-icons/lia";
import { FaLinkedinIn, FaInstagram  } from "react-icons/fa";



const Footer = () => {
  return (

    <section className="bg-[#F5F5F3] ">
        <Container>
            <div>
                <div className="flex py-[60px] ">
                    <div className="w-[15%] ">
                        <h3 className="font-dm font-bold text-[18px] text-black ">Menu</h3>
                        <ul  className="font-dm font-normal text-[16px] text-[#6D6D6D] ">
                            <li className="my-[3px] "><a href="#">Home</a></li>
                            <li className="my-[3px] "><a href="#">Shop</a></li>
                            <li className="my-[3px] "><a href="#">About</a></li>
                            <li className="my-[3px] "><a href="#">Contact</a></li>
                            <li className="my-[3px] "><a href="#">Journal</a></li>
                        </ul>
                    </div>
                    <div className="w-[15%] ">
                        <h3 className="font-dm font-bold text-[18px] text-black ">Menu</h3>
                        <ul  className="font-dm font-normal text-[16px] text-[#6D6D6D] ">
                            <li className="my-[3px] "><a href="#">Category 1</a></li>
                            <li className="my-[3px] "><a href="#">Category 2</a></li>
                            <li className="my-[3px] "><a href="#">Category 3</a></li>
                            <li className="my-[3px] "><a href="#">Category 4</a></li>
                            <li className="my-[3px] "><a href="#">Category 5</a></li>
                        </ul>
                    </div>
                    <div className="w-[15%] ">
                    <h3 className="font-dm font-bold text-[18px] text-black ">Menu</h3>
                        <ul  className="font-dm font-normal text-[16px] text-[#6D6D6D] ">
                            <li className="my-[3px] "><a href="#">Privacy Policy</a></li>
                            <li className="my-[3px] "><a href="#">Terms & Conditions</a></li>
                            <li className="my-[3px] "><a href="#">Special E-shop</a></li>
                            <li className="my-[3px] "><a href="#">Shipping</a></li>
                            <li className="my-[3px] "><a href="#">Secure Payments</a></li>
                        </ul>
                    </div>
                    <div className="w-[30%] text-center ">
                        <div>
                            <h3>(052) 611-5711</h3>
                            <h3>company@domain.com</h3>
                        </div>
                    </div>
                    <div className="w-[25%] text-center ">
                        <div className="flex justify-center ">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between pb-16 items-center">
                    <div className="flex">
                        <a className="mx-[13px] " href="#"><LiaFacebookF /></a>
                        <a className="mx-[13px] " href="#"><FaLinkedinIn /></a>
                        <a className="mx-[13px] " href="#"><FaInstagram /></a>
                    </div>
                    <div>
                        <h3>2020 Orebi Minimal eCommerce Figma Template by Adveits</h3>
                    </div>
                </div>
            </div>
        </Container>
    </section>

  )
};

export default Footer;
