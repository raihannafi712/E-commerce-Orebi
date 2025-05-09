import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser , FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import cart from '../assets/cartimg.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApiData } from "./ContextApi";






const Searchbar = () => {

    let info = useContext(ApiData)                                  /* Bringing API data from context API */
    let data = useSelector((state) => state.product.cartItem);      /* Cart icon count */
    let [search , setSearch] = useState('');                        /* searchBar item search */
    let [searchFilter , setSearchFilter] = useState([]);
    // Dropdown logic 
    let [categoryShow , setCategoryShow] = useState(false);    /* Initiating variables in react to hide and show the category dropdown */
    let [useShow , setUseShow] = useState(false);              /* Initiating variables in react to hide and show the User dropdown */
    let [cartShow , setCartShow] = useState(false);              /* Initiating variables in react to hide and show the Cart dropdown */
    let cateRef = useRef();   /* Category dropdown show btn ref */
    let userRef = useRef();   /* User dropdown show btn ref */
    let cartRef = useRef();   /* Cart dropdown show btn ref */
    let cartCrossRef = useRef();
    // Searchbar link part
    let navigate = useNavigate();

    /* Dropdown logic start */
    useEffect(()=>{
        document.addEventListener("click",(e)=>{
            if (cateRef.current.contains(e.target)) {         /* For category btn */
                setCategoryShow(true)
            }else{
                setCategoryShow(false)                       /* use false rather than categoryShow */
            }   
            if (userRef.current.contains(e.target)) {         /* For User btn */
                setUseShow (true)
            } else {
                setUseShow (false)
            }
            if (cartRef.current.contains(e.target)) {         /* For Cart btn */
                setCartShow (true)
            } else  {
                setCartShow (false)
            }
            // if (cartCrossRef.current.contains(e.target)) {     /* For cross btn */
            //     setCartShow (false)
            // }
        })
    },[categoryShow , useShow , cartShow])        /*useEffect occurs only once,so giving the variable inside makes it a loop  */
      
    /* Dropdown logic end */

    // Searchbar logic
    let handleSearch = (e) => {
        setSearch(e.target.value)
        // console.log(e.target.value);            /* to check searchbar inputs */
        if (e.target.value == "") {
            setSearchFilter([])
        } else {
            let searchOne = info.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()) )
            setSearchFilter(searchOne); 
        }  
    }
    // console.log(searchFilter);                   /* Show search results */

    // searchbar itemwise link
    let handleSingleItem = (id) =>{
        navigate(`/shop/${id}`);
        setSearchFilter([]);
        setSearch('');
    }
    



  return (
    <section className="py-6 bg-[#F5F5F3]  ">
        <Container>
            <Flex className="justify-between items-center">
                <div className="w-[30%] relative">
                    <div  className="flex gap-x-2 items-center" ref={cateRef}  >
                        <HiMiniBars3BottomLeft />
                        <h3 className="font-dm text-[12px] lg:text-[16px] text-[#262626] cursor-pointer"  >
                            Shop by Category
                        </h3>
                    </div>
                    {categoryShow &&            /* Using ternary operator */

                    <div className="absolute top-[61px] left-0 w-[119%] lg:w-[60%] z-10 ">
                        <ul className="bg-[#262626] py-4">
                            <li className="font-dm text-[12px] lg:text-[16px] font-normal text-[rgb(255,255,255,70%)] pl-[21px] lg:py-[16px] py-[8px]   cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:pl-8 ">Accesories</li>
                            <li className="font-dm text-[12px] lg:text-[16px] font-normal text-[rgb(255,255,255,70%)] pl-[21px] lg:py-[16px] py-[8px]   cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:pl-8 ">Furniture</li>
                            <li className="font-dm text-[12px] lg:text-[16px] font-normal text-[rgb(255,255,255,70%)] pl-[21px] lg:py-[16px] py-[8px]   cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:pl-8 ">Electronics</li>
                            <li className="font-dm text-[12px] lg:text-[16px] font-normal text-[rgb(255,255,255,70%)] pl-[21px] lg:py-[16px] py-[8px]   cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:pl-8 ">Clothes</li>
                            <li className="font-dm text-[12px] lg:text-[16px] font-normal text-[rgb(255,255,255,70%)] pl-[21px] lg:py-[16px] py-[8px]   cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:pl-8 ">Bags</li>
                        </ul>
                    </div>                
                    }
                </div>
                <div className="w-[40%] ">
                    <div className="relative">
                        <input onChange={handleSearch}
                            type="text" placeholder="Search Products"
                            className="w-full h-[36px] lg:h-[50px] lg:pl-5 pl-[4px] text-[10px] lg:text-[20px] -outline-offset-1 "
                            value={search}
                        />
                        <div className="absolute top-[50%] translate-y-[-50%] right-[2%]">
                            <FaSearch className="cursor-pointer text[8px] lg:text-[20px] "/>
                        </div>
                        <div className="">
                            {searchFilter.length > 0 && 
                                <div className="h-[300px] w-[100%] backdrop-blur-3xl bg-transparent absolute top-[52px] left-0 z-50 overflow-y-scroll ease-linear duration-500">
                                    <ul>
                                        {searchFilter.map((item) => (
                                            <li onClick={()=>handleSingleItem(item.id)} className="py-3 border-y-[1px] border-gray-500 ">
                                                <Link to="">
                                                    <h3 className="font-dm text-[24px] lg:text-[16px] font-normal hover:font-bold ease-in-out duration-300">
                                                        {item.title}
                                                    </h3>                         
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="w-[30%]">
                    <div className="flex justify-end lg:gap-[41px] gap-[20px] relative ">
                        <div className="flex cursor-pointer" ref={userRef}>
                            <FaUser  />
                            <FaCaretDown  />
                        </div>
                        {useShow &&             /* Using ternary operator */

                        <div className="absolute top-[61px] left-[-30%] w-[100%] lg:left-[30%] lg:w-[60%] z-10 ">
                            <ul className="bg-[#FFFFFF]  border-[1px] border-gray-300">
                                <Link to="/accounts">
                                    <li className="font-dm lg:text-[16px] text-[12px] font-normal text-center text-[#262626]  py-[8px] lg:py-[15px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:bg-[#2B2B2B] ">
                                        My Account                             
                                    </li>
                                </Link>
                                <Link to="">
                                    <li className="font-dm lg:text-[16px] text-[12px] font-normal text-center text-[#262626]  py-[8px] lg:py-[15px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:bg-[#2B2B2B] ">
                                        <Link to="" >Log Out</Link>
                                    </li>                             
                                </Link>
                            </ul>
                        </div>                       
                        }
                        <div className="cursor-pointer lg:pr-0 pr-5 relative mr-5 " ref={cartRef}>
                            <FaCartShopping />
                            {data.length > 0 && (
                                <div className="absolute left-[10px] top-[-15px] w-[20px] h-[20px]  rounded-full bg-black text-white ease-in-out duration-200 ">
                                    <p className="text-center leading-[20px] items\ ">
                                        {data.length}
                                    </p>
                                </div>
                            )}
                        </div>
                        { cartShow &&
                        <div className="absolute top-[61px]  lg:left-[24%] lg:w-[75%] left-[-141%] w-[215%] z-10 ">
                            <ul className="bg-[#FFFFFF]  border-[1px] border-gray-300 py-[20px]">
                                <li className="flex justify-around items-center pb-5 ">
                                    <img src={cart} alt="cart"  />
                                    <div>
                                        <h3 className="text-[12px] lg:text-[20px] ">Black Smart Watch</h3>
                                        <span>$44.00</span>
                                    </div>
                                    <div className="lg:text-[18px] text-[12px] cursor-pointer duration-300 ease-in-out hover:text-red-400 " ref={cartCrossRef}>
                                        <ImCross />
                                    </div>
                                </li>
                                <li className="pl-[20px]">
                                    <h3 className="font-dm lg:text-[16px] text-[12px] text-black font-normal ">Subtotal: 
                                        <span className="font-dm lg:text-[16px] text-[12px] text-black font-bold pl-2 ">$44.00</span> 
                                    </h3>
                                </li>
                                <li className="flex justify-center gap-3 pt-4 ">
                                    <Link to="/cart">
                                        <a href="" className="font-dm text-[10px] lg:text-[16px]  text-[#767676] font-bold lg:px-9 px-[12px] lg:py-4 py-[10px] border-[#2B2B2B] border-[1px] duration-300 ease-in-out hover:bg-black hover:text-white ">View Cart</a>                               
                                    </Link>
                                    <Link to="/checkout">
                                        <a href="" className="font-dm text-[10px] lg:text-[16px] text-black font-bold lg:px-9 px-[12px] lg:py-4 py-[10px] border-[#2B2B2B] border-[1px] duration-300 ease-in-out hover:bg-black hover:text-white ">Checkout</a>                                  
                                    </Link>
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
