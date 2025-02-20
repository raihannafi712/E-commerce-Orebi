import React from "react";
import Container from './../components/Container';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Contacts = () => {
  return (
    <section>
        <Container>
            <div className="pt-[20px]">
                <h3 className="font-dm text-[39px] font-bold ">Contacts</h3>
                <div className="flex text-[12px] font-normal font-dm text-[#767676] items-center mt-2 ">
                    <Link to="/" className="hover:text-black hover:underline">Home</Link>
                    <p> <FaAngleRight /></p>
                    <Link to="/contacts" className="hover:text-black hover:underline">Contacts</Link>
                </div>
            </div>
            <div className="py-[70px] ">
                <div>
                    <h3 className="font-dm font-bold text-[20px] ">Fill up a Form</h3>
                </div>
                <div className="">
                    <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Name</h3>
                    <input type="text" placeholder="Your name here"
                    className="border-b-2 "             
                    />
                </div>
                <div className="">
                    <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Email</h3>
                    <input type="text" placeholder="Your email here"
                    className="border-b-2 "             
                />
                </div>
                <div className="">
                    <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Message</h3>
                    <input type="text" placeholder="Your Message here"
                    className="border-b-2 "             
                    />
                </div>
                <div className="pt-[70px] ">
                    <a href="#" className="font-dm lg:text-[14px] text-[12px] font-bold text-center text-[#262626]  py-[8px] lg:py-[15px] px-[47px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:bg-[#2B2B2B] border-[1px] border-gray-300 mr-6 ">
                    Post
                    </a>
                </div>
            </div>
            <div>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.7782458348!2d2.2646349990563057!3d48.85893843455474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sbd!4v1739465710047!5m2!1sen!2sbd" className="w-full h-[500px] mb-[140px] "  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </Container>
    </section>
  )
};

export default Contacts;
