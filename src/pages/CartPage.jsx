import React from "react";
import Container from './../components/Container';
import { Link } from 'react-router-dom';
import { FaAngleRight , FaMinus , FaPlus   } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import { useDispatch, useSelector } from "react-redux";
import   {decrementProduct, incrementProduct, productRemove}   from "../components/slice/productSlice";



const CartPage = () => {

  let data = useSelector((state)=>state.product.cartItem);
  console.log(data);
  let dispatch = useDispatch();


  let handleIncrement = (index) => {        /* Increasing product quantity  */
    dispatch(incrementProduct(index));    
  };

  let handledecrement = (index) => {        /* decreasing product quantity  */
    dispatch(decrementProduct(index));    
  }
   
  let handleCross = (i) => {
    dispatch(productRemove(i));
  }

  return (
    <section>
      <Container>
        <div className="pt-[20px]">
          <h3 className="font-dm text-[39px] font-bold ">Cart</h3>
          <div className="flex text-[12px] font-normal font-dm text-[#767676] items-center mt-2 ">
            <Link to="/" className="hover:text-black hover:underline">Home</Link>
            <p> <FaAngleRight /></p>
            <Link to="/shop" className="hover:text-black hover:underline">Cart</Link>
          </div>
        </div>
        <div className="py-[60px]">
          <div className="flex bg-[#F5F5F3] py-8 ">
            <div className="w-[25%] text-center ">
              <h3 className="pl-5 text-[20px] font-bold font-dm text-black">Product</h3>
            </div>
            <div className="w-[25%] text-center ">
              <h3 className="text-[20px] font-bold font-dm text-black">Price</h3>
            </div>
            <div className="w-[25%] text-center ">
              <h3 className="text-[20px] font-bold font-dm text-black">Quantity</h3>
            </div>
            <div className="w-[25%] text-center ">
              <h3 className="text-[20px] font-bold font-dm text-black">Total</h3>
            </div>
          </div>     
          {data.length > 0 
            ?
            <>
              {data.map((item , i)=>(
                <div className="flex py-3 items-center ">
                  <div className="flex w-[25%] text-center items-center">
                    <div onClick={()=> handleCross(item)} className="pl-5 cursor-pointer hover:text-red-500 ">
                      <ImCross />
                    </div>
                    <div className="pl-[20px] pr-[20px] ">
                      <img src={item.thumbnail} alt="product" />
                    </div>
                    <h3 className=" text-[20px] font-bold font-dm text-black">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-[25%] text-center ">
                    <h3 className="text-[20px] font-bold font-dm text-black">${item.price}</h3>
                  </div>
                  <div className="w-[25%] text-center ">
                    <div className="text-[16px] font-normal font-dm text-[#767676] ">
                      <ul className="flex justify-center py-[15px] mx-[80px] border-[#767676] border-[1px] items-center ">
                        <li onClick={()=>handledecrement(i)} className="mx-[35px] cursor-pointer hover:text-black hover:font-bold ">
                          <FaMinus />
                        </li>
                        <li className="mx-[35px] text-[20px] ">
                          {item.quantity}
                        </li>
                        <li onClick={()=>handleIncrement(i)} className="mx-[35px] cursor-pointer hover:text-black hover:font-bold ">
                          <FaPlus />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-[25%] text-center ">
                    <h3 className="text-[20px] font-bold font-dm text-black">
                      ${(item.price * item.quantity).toFixed(2)} 
                    </h3>
                  </div>
                </div>         
              ))}    
            </>
            :
            <h3 className="items-center py-8 text-center text-[24px] font-bold font-dm text-black">
              No Products
            </h3>
          }
          <div className="flex items-center justify-between text-[16px] font-bold font-dm text-black ">
            <div className="w-[30%] ">
              <select name="cate" id="cate" className="w-[40%] border-black border-[1px] ">
                <option value="valOne" className="text-center ">Small</option>
                <option value="valOne" className="text-center ">Medium</option>
                <option value="valOne" className="text-center ">Large</option>
              </select>
            </div>
            <div className="w-[30%] ">
              <a href="" >Apply coupon</a>
            </div>
            <div className="w-[30%] text-end">
              <a href="">Update cart</a>
            </div>
          </div>
          <div className="py-[40px] text-[16px] font-bold font-dm text-black text-end ">
            <h3>Cart totals</h3>
          </div>
          <div className="">
            <div className="pb-[16px] items-center flex justify-end ">
              <h3>Subtotal</h3>
              <p className="pl-[250px] ">389.99 $</p>
            </div>
            <div className="items-center flex justify-end" >
              <h3>Total</h3>
              <p className="pl-[275px]">389.99 $</p>
            </div>
          </div>
          <div className="py-[46px] text-end " >
            <Link to="/checkout" >
              <a href="" className="font-dm text-[10px] lg:text-[16px] text-black font-bold lg:px-9 px-[12px] lg:py-4 py-[10px] border-[#2B2B2B] border-[1px] duration-300 ease-in-out hover:bg-black hover:text-white ">
                Proceed to Checkout
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
};

export default CartPage;
