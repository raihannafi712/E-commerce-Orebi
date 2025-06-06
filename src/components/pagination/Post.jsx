import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBold, FaHeart } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import head from '../../assets/head.png';
import { ApiData } from "../ContextApi";



const Post = ({allPage , active , categoryFilter}) => {

  let data = useContext(ApiData);
  // console.log(data);
  let [showFilter , setShowFilter ] = useState([])
  let [count , setCount ] = useState(true);
  

  // console.log(allPage);

  useEffect(() =>{
    let filterAmi = categoryFilter.slice(0 , 6)
    setShowFilter(filterAmi)
  },[categoryFilter] )

  /* Category show all/less start */
  let handleShow = () => {
    setShowFilter(categoryFilter);
    setCount(false);
  }

  let handleLess = () => {
    let filterLess = categoryFilter.slice(0 , 5);
    setShowFilter(filterLess);
    setCount(true);
  }

  /* Category show all/less end */


  return (
    <section>
      {showFilter.length > 0 
        ? 
        <>
          <div className="pt-[60px] flex flex-wrap justify-between ">
            {
              showFilter.map((item) => (
                <div className="!w-[24%] pb-[50px] mx-[20px]">                                           {/* whole box */}
                  <div className="relative mb-6 group overflow-hidden cursor-pointer ">
                    <Link to={`${item.id}`} ><img src={item.thumbnail} alt="product" /></Link>                        {/* each item has different id, so it needs to be set dynamically */}
                    <div className="w-full h-[0px] opacity-0 bg-white absolute bottom-0 left-0 group-hover:h-[156px] duration-300 ease-in-out group-hover:opacity-100 ">
                      <ul>
                        <Link to={`${item.id}`} >
                          <li className="flex justify-end py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">
                            Add to Wish List <FaHeart />
                          </li>
                          <li className="flex justify-end py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">
                            Compare <GrPowerCycle />
                          </li>
                          <li className="flex justify-end py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">
                            Add to Cart <FaShoppingCart />
                          </li>             
                        </Link>
                      </ul>
                    </div>
                    <div>
                      <Link to={`${item.id}`}>
                        <h3 className="font-dm font-bold text-[16px] text-[white] bg-[#262626] px-[25px] py-[6px] inline-block absolute top-[0%] left-[0%] mt-4 ml-4 ">{item.discountPercentage} % </h3>           
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <a className="font-dm text-[16px] font-bold hover:underline " href="/shop">{item.title} </a>
                    <h4 className="font-dm text-[16px] font-normal ">${item.price} </h4>
                  </div>
                  <div>
                    <h4 className="font-dm text-[16px] font-normal text-start ">Black</h4>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="">
            { count 
            ? categoryFilter.length > 5 && <h3 onClick={handleShow} className="font-dm text-[16px] font-bold text-[#262626] cursor-pointer hover:underline ">Show All</h3>
            : categoryFilter.length > 5 && <h3 onClick={handleLess} className="font-dm text-[16px] font-bold text-[#262626] cursor-pointer hover:underline">Show Less</h3>
            }
          </div>  
        </>
        : 
        <div className={`${
          active == "active" 
          ? "w-full pt-[60px] "           
          : "pt-[60px] flex flex-wrap justify-between"
          }`} >
          {allPage.map((item)=>(
            active === "active"  
            ?
            (
              <div className="!w-[100%] pb-[50px] mx-[20px] ">                                           {/* whole box */}
                <div className="flex justify-center relative mb-6 group overflow-hidden cursor-pointer ">
                  <Link to={`${item.id}`} ><img src={item.thumbnail} alt="product" /></Link>                        {/* each item has different id, so it needs to be set dynamically */}
                  <div className="w-full h-[0px] opacity-0 bg-white absolute bottom-0 left-0 group-hover:h-[156px] duration-300 ease-in-out group-hover:opacity-100 ">
                    <ul>
                      <Link to={`${item.id}`} >
                        <li className="flex justify-center py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">Add to Wish List <FaHeart /></li>
                        <li className="flex justify-center py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">Compare <GrPowerCycle /></li>
                        <li className="flex justify-center py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">Add to Cart <FaShoppingCart /></li>             
                      </Link>
                    </ul>
                  </div>
                  <div>
                    <Link to={`${item.id}`}>
                      <h3 className="font-dm font-bold text-[16px] text-[white] bg-[#262626] px-[25px] py-[6px] inline-block absolute top-[0%] left-[0%] mt-4 ml-4 ">{item.discountPercentage} % </h3>           
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-[10px] ">
                  <a className="font-dm text-[16px] font-bold hover:underline " href="/shop">
                    {item.title}-
                  </a>
                  <h4 className="font-dm text-[16px] font-normal ">
                    ${item.price} 
                  </h4>
                </div>
                <div>
                  <h4 className="font-dm text-[16px] font-normal text-center ">Black</h4>
                </div>
              </div>
            )
            :
            (
            <div className="!w-[24%] pb-[50px] mx-[20px] ">                                           {/* whole box */}
              <div className="relative mb-6 group overflow-hidden cursor-pointer ">
                <Link to={`${item.id}`} ><img src={item.thumbnail} alt="product" /></Link>                        {/* each item has different id, so it needs to be set dynamically */}
                <div className="w-full h-[0px] opacity-0 bg-white absolute bottom-0 left-0 group-hover:h-[156px] duration-300 ease-in-out group-hover:opacity-100 ">
                  <ul>
                    <Link to={`${item.id}`} >
                      <li className="flex justify-end py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">Add to Wish List <FaHeart /></li>
                      <li className="flex justify-end py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">Compare <GrPowerCycle /></li>
                      <li className="flex justify-end py-4 gap-x-4 items-center font-dm text-[16px] font-bold text-[#262626] hover:text-[red] ">Add to Cart <FaShoppingCart /></li>             
                    </Link>
                  </ul>
                </div>
                <div>
                  <Link to={`${item.id}`}>
                    <h3 className="font-dm font-bold text-[16px] text-[white] bg-[#262626] px-[25px] py-[6px] inline-block absolute top-[0%] left-[0%] mt-4 ml-4 ">{item.discountPercentage} % </h3>           
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <a className="font-dm text-[16px] font-bold hover:underline " href="/shop">{item.title} </a>
                <h4 className="font-dm text-[16px] font-normal ">${item.price} </h4>
              </div>
              <div>
                <h4 className="font-dm text-[16px] font-normal text-start ">Black</h4>
              </div>
            </div>
            )
          )) }
        </div>        
      }
    </section>
  )
};

export default Post;
