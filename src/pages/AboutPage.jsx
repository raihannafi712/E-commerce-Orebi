import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import about from '../assets/about.png';

const AboutPage = () => {
  return (
    <section>
        <Container>
            <div className="pt-[124px]">
                <h3 className="font-dm text-[39px] font-bold ">About</h3>
                <div className="flex text-[12px] font-normal font-dm text-[#767676] items-center mt-2 ">
                <Link to="/" className="hover:text-black hover:underline">Home</Link>
                <p> <FaAngleRight /></p>
                <Link to="/about" className="hover:text-black hover:underline">About</Link>
                </div>
            </div>
            <div className="w-full py-[128px] ">
                <a href=""><img src={about} alt="about" /></a>
            </div>
            <div>
                <h3 className="text-[39px] font-normal font-dm ">Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h3>
            </div>
            <div className="flex py-[118px] ">
                <div className="w-[33%] ">
                    <h3 className="text-[24px] font-bold font-dm ">Our Vision</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="w-[33%]">
                    <h3 className="text-[24px] font-bold font-dm ">Our Story</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="w-[33%]" >
                    <h3 className="text-[24px] font-bold font-dm ">Our Brands</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </Container>
    </section>
  )
};

export default AboutPage;
