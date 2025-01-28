import React from "react";
import Container from "./Container";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";



const Shop = () => {
  return (

    <section>
        <Container>
            <div className="pt-[124px]">
              <h3 className="font-dm text-[39px] font-bold ">Products</h3>
              <div className="flex text-[12px] font-normal font-dm text-[#767676] items-center mt-2 ">
                <Link to="/" className="hover:text-black hover:underline">Home</Link>
                <p> <FaAngleRight /></p>
                <Link to="/shop" className="hover:text-black hover:underline">Products</Link>
              </div>
            </div>
            <div className="py-[130px] flex ">
              <div className="w-[15%] ">
                 <div>
                    <h3 className="font-dm text-[20px] font-bold">Shop by Category</h3>
                    <ul  className="font-dm font-normal text-[16px] text-[#6D6D6D] ">
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">Category 1</a></li>
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">Category 2</a></li>
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">Category 3</a></li>
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">Category 4</a></li>
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">Category 5</a></li>
                    </ul>
                 </div>
                 <div>
                    <h3 className="font-dm text-[20px] font-bold my-[50px] ">Shop by Color</h3>
                    <ul  className="font-dm font-normal text-[16px] text-[#6D6D6D] ">
                      <li className="my-[25px]  border-b-[1px] pb-5 flex gap-3 items-center ">
                        <div className="w-[11px] h-[11px] bg-[#000] rounded-[50%] "></div>
                        <a className="hover:font-bold hover:text-black " href="#">Color 1</a>
                      </li>
                      <li className="my-[25px]  border-b-[1px] pb-5 flex gap-3 items-center ">
                        <div className="w-[11px] h-[11px] bg-[#FF8686] rounded-[50%] "></div>
                        <a className="hover:font-bold hover:text-black " href="#">Color 2</a>
                      </li>
                      <li className="my-[25px]  border-b-[1px] pb-5 flex gap-3 items-center ">
                        <div className="w-[11px] h-[11px] bg-[#7ED321] rounded-[50%] "></div>
                        <a className="hover:font-bold hover:text-black " href="#">Color 3</a>
                      </li>
                      <li className="my-[25px]  border-b-[1px] pb-5 flex gap-3 items-center ">
                        <div className="w-[11px] h-[11px] bg-[#979797] rounded-[50%] "></div>
                        <a className="hover:font-bold hover:text-black " href="#">Color 4</a>
                      </li>
                      <li className="my-[25px]  border-b-[1px] pb-5 flex gap-3 items-center ">
                        <div className="w-[11px] h-[11px] bg-[#979797] rounded-[50%] "></div>
                        <a className="hover:font-bold hover:text-black " href="#">Color 5</a>
                      </li>
                    </ul>
                 </div>
                 <div>
                    <h3 className="font-dm text-[20px] font-bold my-[50px]">Shop by Brand</h3>
                    <ul  className="font-dm font-normal text-[16px] text-[#6D6D6D] ">
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">Brand 1</a></li>
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">Brand 2</a></li>
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">Brand 3</a></li>
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">Brand 4</a></li>
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">Brand 5</a></li>
                    </ul>
                 </div>
                 <div>
                    <h3 className="font-dm text-[20px] font-bold my-[50px]">Shop by Price</h3>
                    <ul  className="font-dm font-normal text-[16px] text-[#6D6D6D] ">
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">$0.00 - $9.99</a></li>
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">$10.00 - $19.99</a></li>
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">$20.00 - $29.99</a></li>
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">$30.00 - $39.99</a></li>
                      <li className="my-[25px]  border-b-[1px] pb-5 "><a className="hover:font-bold hover:text-black " href="#">$40.00 - $69.99</a></li>
                    </ul>
                 </div>
              </div>
              <div className="w-[85%] text-center ">
                  <div className="flex items-center">
                    <div className="w-[40%] flex gap-[20px] items-center pl-6 ">
                      <div className="p-[10px] bg-white hover:text-white hover:bg-black ease-in-out duration-300 ">
                        <IoGrid />
                      </div>
                      <div className="p-[10px] bg-white hover:text-white hover:bg-black ease-in-out duration-300 ">
                        <FaListUl />
                      </div>
                    </div>
                    <div className="w-[25%] ">
                      <div className="flex ">
                        <h3 className="text-[16px] font-normal font-dm pr-1">Sort by:</h3>
                        <select name="cate" id="cate" className="w-[70%] border-black border-[1px] ">
                          <option value="valOne" className="text-right ">Sort 1</option>
                          <option value="valOne" className="text-right ">Sort 2</option>
                          <option value="valOne" className="text-right ">Sort 3</option>
                          <option value="valOne" className="text-right ">Sort 4</option>
                          <option value="valOne" className="text-right ">Sort 5</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-[35%] flex justify-start ">
                      <div className="flex">
                        <h3 className="text-[16px] font-normal font-dm">Show:</h3>
                        <select name="cate" id="cate" className="w-[60%] border-black border-[1px] ">
                          <option value="valOne" className="text-right ">Sort 1</option>
                          <option value="valOne" className="text-right ">Sort 2</option>
                          <option value="valOne" className="text-right ">Sort 3</option>
                          <option value="valOne" className="text-right ">Sort 4</option>
                          <option value="valOne" className="text-right ">Sort 5</option>
                        </select>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </Container>
    </section>
  )
};

export default Shop;
