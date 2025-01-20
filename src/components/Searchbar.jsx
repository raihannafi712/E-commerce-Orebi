import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser , FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import cart from '../assets/cartimg.png';






const Searchbar = () => {

    let [categoryShow , setCategoryShow] = useState(false);    /* Initiating variables in react to hide and show the category dropdown */
    let [useShow , setUseShow] = useState(false);              /* Initiating variables in react to hide and show the User dropdown */
    let [cartShow , setCartShow] = useState(false);              /* Initiating variables in react to hide and show the Cart dropdown */
    let cateRef = useRef();   /* Category dropdown show btn ref */
    let userRef = useRef();   /* User dropdown show btn ref */
    let cartRef = useRef();   /* Cart dropdown show btn ref */
    let cartCrossRef = useRef();

    useEffect(()=>{
        document.addEventListener("click",(e)=>{
            if (cateRef.current.contains(e.target)) {         /* For category btn */
                setCategoryShow(!categoryShow)
            }else{
                setCategoryShow(categoryShow)
            }   
            
            if (userRef.current.contains(e.target)) {         /* For User btn */
                setUseShow (!useShow)
            } else {
                setUseShow(useShow)
            }

            if (cartRef.current.contains(e.target)) {         /* For Cart btn */
                setCartShow (!cartShow)
            } else  {
                setCartShow (setCartShow)
            }

            if (cartCrossRef.current.contains(e.target)) {     /* For cross btn */
                setCartShow (!cartShow)
            } else  {
                setCartShow (setCartShow)
            }
        })
    },[categoryShow , useShow , cartShow])                         /*useEffect occurs only once,so giving the variable inside makes it a loop  */





  return (
    <section className="py-6 bg-[#F5F5F3]  ">
        <Container>
            <Flex className="justify-between items-center">
                <div className="w-[30%] relative">
                    <div  className="flex gap-x-2 items-center" ref={cateRef}  >
                        <HiMiniBars3BottomLeft />
                        <h3 className="font-dm text-[16px] text-[#262626] cursor-pointer"  >
                            Shop by Category
                        </h3>
                    </div>
                    {categoryShow &&            /* Using ternary operator */

                    <div className="absolute top-[61px] left-0 w-[60%] ">
                        <ul className="bg-[#262626] py-4">
                            <li className="font-dm text-[16px] font-normal text-[rgb(255,255,255,70%)] pl-[21px] py-[15px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:pl-8 ">Accesories</li>
                            <li className="font-dm text-[16px] font-normal text-[rgb(255,255,255,70%)] pl-[21px] py-[15px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:pl-8 ">Furniture</li>
                            <li className="font-dm text-[16px] font-normal text-[rgb(255,255,255,70%)] pl-[21px] py-[15px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:pl-8 ">Electronics</li>
                            <li className="font-dm text-[16px] font-normal text-[rgb(255,255,255,70%)] pl-[21px] py-[15px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:pl-8 ">Clothes</li>
                            <li className="font-dm text-[16px] font-normal text-[rgb(255,255,255,70%)] pl-[21px] py-[15px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:pl-8 ">Bags</li>
                        </ul>
                    </div>                
                    }
                </div>
                <div className="w-[40%] ">
                    <div className="relative">
                        <input 
                            type="text" placeholder="Search Products"
                            className="w-full h-[50px] pl-5  "
                        />
                        <div className="absolute top-[50%] translate-y-[-50%] right-[2%]">
                            <FaSearch className="cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="w-[30%]">
                    <div className="flex justify-end gap-[41px] relative ">
                        <div className="flex cursor-pointer" ref={userRef}>
                            <FaUser  />
                            <FaCaretDown  />
                        </div>
                        {useShow &&             /* Using ternary operator */

                        <div className="absolute top-[61px] left-[30%] w-[60%]  ">
                            <ul className="bg-[#FFFFFF]  border-[1px] border-gray-300">
                                <li className="font-dm text-[16px] font-normal text-center text-[#262626]  py-[15px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:bg-[#2B2B2B] ">My Account</li>
                                <li className="font-dm text-[16px] font-normal text-center text-[#262626]  py-[15px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:bg-[#2B2B2B] ">Log Out</li>
                            </ul>
                        </div>                       
                        }
                        <div className="cursor-pointer" ref={cartRef}>
                            <FaCartShopping />
                        </div>
                        { cartShow &&
                        <div className="absolute top-[61px] left-[24%] w-[75%]  ">
                            <ul className="bg-[#FFFFFF]  border-[1px] border-gray-300 py-[20px]">
                                <li className="flex justify-around items-center pb-5 ">
                                    <img src={cart} alt="cart" />
                                    <div>
                                        <h3>Black Smart Watch</h3>
                                        <span>$44.00</span>
                                    </div>
                                    <div className="cursor-pointer duration-300 ease-in-out hover:text-red-400 " ref={cartCrossRef}>
                                    <ImCross />
                                    </div>
                                </li>
                                <li className="pl-[20px]">
                                    <h3 className="font-dm text-[16px] text-black font-normal ">Subtotal: 
                                        <span className="font-dm text-[16px] text-black font-bold pl-2 ">$44.00</span> 
                                    </h3>
                                </li>
                                <li className="flex justify-center gap-3 pt-4 ">
                                    <a href="#" className="font-dm text-[16px] text-[#767676] font-bold px-9 py-4 border-[#2B2B2B] border-[1px] duration-300 ease-in-out hover:bg-black hover:text-white ">View Cart</a>
                                    <a href="#" className="font-dm text-[16px] text-black font-bold px-9 py-4 border-[#2B2B2B] border-[1px] duration-300 ease-in-out hover:bg-black hover:text-white ">Checkout</a>
                                </li>
                            </ul>
                        </div>
                        }
                    </div>
                </div>
            </Flex>
        </Container>
    </section>

  )
};

export default Searchbar;
