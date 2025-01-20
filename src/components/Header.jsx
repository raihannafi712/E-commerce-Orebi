import React from "react";
import Container from "./Container";
import logo from '../assets/logo.png';

const Header = () => {
  return(

    <nav>
        <Container>
            
        <div className='flex items-center py-10'>
            <div className='w-1/3'>
                <img className='cursor-pointer ' src={logo} alt="logo" />
            </div>
            <div className='w-2/3'>
                <ul className='flex font-inter font-semibold text-[18px] text-white capitalize '>
                    <li className='mx-6'>
                        <a 
                        className="text-[#767676] font-dm font-bold text-[16px] relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white  hover:text-black duration-300 ease-in-out hover:font-bold "
                        href="#">
                            Home
                        </a>
                    </li>
                    <li className='mx-6'>
                    <a 
                        className=" text-[#767676] font-dm font-bold text-[16px] relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white hover:after:w-full hover:text-black duration-300 ease-in-out hover:font-bold "
                        href="#">
                            Shop
                        </a>
                    </li>
                    <li className='mx-6 relative group'>
                        <a 
                            className="text-[#767676] font-dm font-bold text-[16px] relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white hover:after:w-full hover:text-black duration-300 ease-in-out hover:font-bold "
                            href="#">
                            About
                        </a>
                    </li>
                    <li className='mx-6'>
                    <a 
                        className=" text-[#767676] font-dm font-bold text-[16px] relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white hover:after:w-full hover:text-black duration-300 ease-in-out hover:font-bold "
                        href="#">
                            Contacts
                        </a>
                    </li>
                    <li className='mx-6'>
                    <a 
                        className="text-[#767676] font-dm font-bold text-[16px] relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] hover:text-black duration-300 ease-in-out hover:font-bold "
                        href="#">
                            Journal
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </Container>
    </nav>
  )
};

export default Header;
