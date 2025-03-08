import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Container from "../components/Container";
import { FaAngleRight } from "react-icons/fa";
import { RxStarFilled } from "react-icons/rx";
import { IoStarHalfOutline , IoStarOutline  } from "react-icons/io5";
import { FaPlus , FaMinus  } from "react-icons/fa";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { addToCart } from "../components/slice/productSlice";
import { useDispatch } from "react-redux";






const DetailsPage = () => {

  let productId = useParams();         /* API DATA */
  // console.log(productId);
  let navigate = useNavigate()         /* We're using usenavigate method instead of Link to use tostify */
  let [ singleProduct , setsingleProduct ] = useState([]);
  let [show , setShow] = useState(true);     /* Dropdown */
  let [show1 , setShow1] = useState(true);   
  let dispatch = useDispatch();



  let singleData = ()=>{
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
      // console.log(response.data);
      setsingleProduct(response.data)
    });
  };

  useEffect(()=>{
    singleData();
  },[])

  let handleFaq = ()=>{
    setShow(!show)
}
  let handleFaq1 = ()=>{
      setShow1(!show1)
  }

  // rating start

  let clientRating = Array.from({length:5},(_ , index)=>{      /* _ is for blank spaces */
    let number = index + 0.5
    return singleProduct.rating > index + 1 ? <RxStarFilled/> : singleProduct.rating > number ? <IoStarHalfOutline /> : <IoStarOutline/>
  } )
  // console.log(clientRating);
  
  // rating end


  // Tostify start

  let handleCart = (item)=>{
    dispatch(addToCart({ ...item , quantity: 1}));        /* quantity has been added to item details */
    toast('Added to Cart!')
    setTimeout(() => {
      navigate('/cart')
    }, [2500])
  }
  // Tostify end
  




  return (
  
    <>
      <Container>
        <div>
          <div className="flex text-[12px] font-normal font-dm text-[#767676] items-center mt-2 ">
            <Link to="/shop" className="hover:text-black hover:underline">Products</Link>
            <p> <FaAngleRight /></p>
            <Link to="#"  className="hover:text-black hover:underline">Item</Link>
          </div>
        </div>
        <div className="w-[100%] py-[60px] ">
          <div>
            <img className="mx-auto " src={singleProduct.thumbnail} alt="" />
          </div>
          <div>
            <div>
            <h3 className="font-dm text-[24px] text-center lg:text-start lg:text-[39px] font-bold pt-32 ">{singleProduct.title}</h3>
            <h3 className="font-dm text-[16px] text-center lg:text-start lg:text-[24px] underline font-medium pt-2 ">Description:</h3>
            <h3 className="font-dm text-[12px] text-center lg:text-start lg:text-[16px] font-normal pt-3  ">{singleProduct.description}</h3>
            </div>
            <div className="flex pt-6">
              {/* <RxStarFilled/>
              <IoStarHalfOutline />
              <IoStarOutline/> */}
              {clientRating}
              <span className="font-dm font-normal text-[14px] pl-6 ">
                {" "}
                {singleProduct?.reviews?.length} reviews
              </span>
            </div>
            <div className="flex pt-1 items-center ">
              <h3 className="font-dm font-normal text-[16px] line-through">88.00</h3>
              <h3 className="font-dm font-bold text-[20px]  pl-6">${singleProduct.price} </h3>
            </div>
            <div className="flex items-center pt-9 ">
              <h3 className="font-dm font-bold text-[16px] mr-11 ">COLOR:</h3>
              <div className="flex">
                <div className="w-[20px] h-[20px] bg-[#000] rounded-[50%] "></div>
                <div className="w-[20px] h-[20px] bg-[#FF8686] rounded-[50%] ml-4 "></div>
                <div className="w-[20px] h-[20px] bg-[#7ED321] rounded-[50%] ml-4  "></div>
                <div className="w-[20px] h-[20px] bg-[#979797] rounded-[50%] ml-4  "></div>
                <div className="w-[20px] h-[20px] bg-[#B6B6B6] rounded-[50%] ml-4  "></div>
              </div>
            </div>
            <div className="flex pt-[30px] ">
            <h3 className="font-dm font-bold text-[16px] mr-11 ">SIZE:</h3>
            <select name="cate" id="cate" className="w-[10%] border-black border-[1px] duration-300 ease-in-out ">
              <option value="valOne" className="text-center ">Small</option>
              <option value="valOne" className="text-center ">Medium</option>
              <option value="valOne" className="text-center ">Large</option>
            </select>
            </div>
            <div className="flex pt-[30px] ">
              <h3 className="font-dm font-bold text-[16px] mr-11 ">QUANTITY:</h3>
            </div>
            <div className="flex pt-[30px] items-center ">
              <h3 className="font-dm font-bold text-[16px] mr-11 ">STOCK:</h3>
              <h3 className="font-dm font-medium text-[15px] mr-11 ">{singleProduct.stock} </h3>
            </div>
            <div  className="flex pt-[30px] items-center ">             
              <ul className="flex bg-[#FFFFFF]  ">
                <li className="font-dm lg:text-[14px] text-[12px] font-bold text-center text-[#262626]  py-[8px] lg:py-[15px] px-[47px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:bg-[#2B2B2B] border-[1px] border-gray-300 mr-6 ">Add to Wish List</li>
                <li onClick={()=> handleCart(singleProduct) } className="font-dm lg:text-[14px] text-[12px] font-bold text-center text-[#262626]  py-[8px] lg:py-[15px] px-[47px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:bg-[#2B2B2B] border-[1px] border-gray-300 ">
                  Add to Cart
                </li>
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                  transition={Bounce}
                />
              </ul>
            </div>
          </div>
          <div className="pt-[30px] ">
            <div className="flex pb-[50px] ">
              <h3 className="pr-[400px] cursor-pointer font-dm font-bold text-[20px] " onClick={handleFaq}>
                FEATURES  & DETAILS
              </h3>
               {show == false ? <FaMinus /> : <FaPlus />}
            </div>
            <div className="ease-in-out duration-300">
              {show==false && <p className="py-[44px] font-dm font-medium text-[16px] ">{singleProduct.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat aliquid itaque, totam quae dignissimos nemo voluptatum minus quod enim ipsam voluptates omnis, error neque, temporibus pariatur dolor et obcaecati autem! </p> }
            </div>
            <div className="flex cursor-pointer ">
              <h3 className="pr-[395px] font-dm font-bold text-[20px] " onClick={handleFaq1}>SHIPPING & RETURNS</h3>
               {show1 == false ? <FaMinus /> : <FaPlus />}
            </div>
            <div className="ease-in-out duration-300">
              {show1==false && <p className="py-[44px] font-dm font-medium text-[16px] ">{singleProduct.description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat aliquid itaque, totam quae dignissimos nemo voluptatum minus quod enim ipsam voluptates omnis, error neque, temporibus pariatur dolor et obcaecati autem! </p> }
            </div>
          </div>
          <div className="pt-[70px] ">
            <div>
              <h3 className="font-dm font-bold text-[20px] ">Add a Review</h3>
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
              <h3 className="font-dm font-bold text-[18px] pt-[50px] pb-2  ">Review</h3>
              <input type="text" placeholder="Your review here"
                className="border-b-2 "             
              />
            </div>
            <div className="pt-[116px] ">
              <a href="#" className="font-dm lg:text-[14px] text-[12px] font-bold text-center text-[#262626]  py-[8px] lg:py-[15px] px-[47px]  cursor-pointer duration-300 ease-in-out hover:text-[white] hover:font-bold  hover:bg-[#2B2B2B] border-[1px] border-gray-300 mr-6 ">
              Post review
              </a>
            </div>
          </div>
        </div>
      </Container>

    </>
  )
};

export default DetailsPage;
