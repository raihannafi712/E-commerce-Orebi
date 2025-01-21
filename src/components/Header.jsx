import React, { useState } from "react";
import Container from "./Container";
import logo from '../assets/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {

    let [show ,setShow] = useState(true);            /* True means it will show the show variable*/

   return (
    <nav className='bg-white'>
        <Container>
            <div className='flex items-center py-7'>
                <div className='w-1/3'>
                    <img className='cursor-pointer ' src={logo} alt="logo" />
                </div>
                <div className='w-2/3'>
                    <ul className={`lg:flex w-full pb-1  text-center  capitalize ${
                        show == true 
                        ? "backdrop-blur-md absolute top-[70px] left-[-500px] lg:static z-30 duration-700 ease-in-out  " 
                        : "backdrop-blur-md bg-transparent absolute left-0 top-[70px] z-30 duration-700 ease-in-out " 
                        }`} >
                        <li className='mx-6 py-1'>
                            <a 
                            className="text-[#767676] font-dm font-bold text-[16px] relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white  hover:text-black duration-300 ease-in-out hover:font-bold  "
                            href="#">
                                Home
                            </a>
                        </li>
                        <li className='mx-6 py-1'>
                        <a 
                            className="text-[#767676] font-dm font-bold text-[16px] relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white  hover:text-black duration-300 ease-in-out hover:font-bold  "
                            href="#">
                                Shop
                            </a>
                        </li>
                        <li className='mx-6 py-1 relative group'>
                            <a 
                                className="text-[#767676] font-dm font-bold text-[16px] relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white  hover:text-black duration-300 ease-in-out hover:font-bold  "
                                href="#">
                                About
                            </a>
                        </li>
                        <li className='mx-6 py-1'>
                        <a 
                            className="text-[#767676] font-dm font-bold text-[16px] relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white  hover:text-black duration-300 ease-in-out hover:font-bold  "
                            href="#">
                                Contacts
                            </a>
                        </li>
                        <li className='mx-6 py-1'>
                        <a 
                            className="text-[#767676] font-dm font-bold text-[16px] relative after:absolute after:right-0 after:bottom-[-5px] after:content-[''] after:w-0 after:duration-500 after:ease-in-out after:h-[3px] after:bg-white  hover:text-black duration-300 ease-in-out hover:font-bold  "
                            href="#">
                                Journal
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='lg:hidden cursor-pointer lg:cursor-default pr-4 lg:pr-0 text-[20px] ' onClick={() => setShow(!show)}>
                    {show ? <GiHamburgerMenu /> : <RxCross2 /> }
                </div>
            </div>
        </Container>
    </nav>
  )
  
    
   
};

export default Header;
