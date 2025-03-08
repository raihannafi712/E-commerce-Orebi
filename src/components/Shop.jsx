import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";
import Post from "./pagination/Post";
import Pagination from "./pagination/Pagination";
import { ApiData } from "./ContextApi";
import { TiThSmallOutline } from "react-icons/ti";




const Shop = () => {

  let info = useContext(ApiData)
  let [currentPage , setCurrentPage] = useState(1)
  let [perPage , setPerPage] = useState(6)

  let [categoryFilter , setCategoryFilter] = useState([]);          /* To show items based on category */
  let lastPage = currentPage * perPage;            /* In this case, 1*6 = 6 */
  let firstPage = lastPage - perPage;              /* In this case, 6-6 = 0 */
  let allPage = info.slice(firstPage , lastPage);  /* In this case, Total 30 objects and it will slice from 0 to 6.So there will be 5 items and its length will be 6 */
  // console.log(allPage);    /* To see how many items will be in a page */

  let pageNumber = []

  for(let i = 0; 
    i <  Math.ceil( categoryFilter.length > 0 ? categoryFilter : info.length / perPage) ;
     i++ 
    ){
    pageNumber.push(i);
  }

  let paginate = (state) => {
    setCurrentPage(state + 1);
  }

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((state) => state + 1);           
    }
  }
  let previous = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);          
    }
  }
  // check page numbers start

  // console.log(pageNumber.length);
  // console.log(currentPage);

  // check page numbers end
  

  let [active , setActive] = useState("");     /* transfer active as props to post.jsx */
  let handleActive = ()=> {
    setActive("active");
  }
  // console.log(active);

  let [category , setCategory] = useState([]);
  let [brand , setBrand] = useState([]);

  useEffect(() =>{
    setCategory([...new Set(info.map((item)=> item.category))])
    setBrand([...new Set(info.map((item)=> item.brand))])
  },[info])



 
  let handleCategory = (citem) => {
    let cateFilter = info.filter((item)=> item.category == citem);
    setCategoryFilter(cateFilter);
  };

  let handleBrand = (bitem) => {
    let brandFilter = info.filter((item)=> item.brand == bitem);
    setCategoryFilter(brandFilter);
  }
  

  
  
  return (

    <section>
        <Container>
            <div className="pt-[20px]">
              <h3 className="font-dm text-[39px] font-bold ">Products</h3>
              <div className="flex text-[12px] font-normal font-dm text-[#767676] items-center mt-2 ">
                <Link to="/" className="hover:text-black hover:underline">Home</Link>
                <p> <FaAngleRight /></p>
                <Link to="/shop" className="hover:text-black hover:underline">Products</Link>
              </div>
            </div>
            <div className="py-[70px] flex ">
              <div className="w-[15%] ">
                 <div>
                    <h3 className="font-dm text-[20px] font-bold mb-4">Shop by Category</h3>    
                    <h2 onClick={()=> setCategoryFilter("")} className="flex justify-center gap-1 items-center font-dm font-normal text-[16px] text-[#6D6D6D] cursor-pointer  border-y-[2px] py-2 hover:font-bold hover:text-black capitalize  ">
                      <TiThSmallOutline />
                      Show All
                    </h2>                
                    <ul  className="font-dm font-normal text-[16px] text-[#6D6D6D] my-[25px] ">
                      {category.map((item) => (
                        <li 
                          onClick={() => handleCategory(item)} 
                          className="my-[20px]  border-b-[1px] pb-2  ">
                          <Link className="hover:font-bold hover:text-black capitalize " href="#">
                            {item}
                          </Link>
                        </li>                 
                      ))}
                    </ul>
                 </div>
                 <div>
                    <h3 className="font-dm text-[20px] font-bold my-[40px]">Shop by Brand</h3>
                    <ul  className="font-dm font-normal text-[16px] text-[#6D6D6D] my-[15px] h-[250px] overflow-y-scroll ">
                    {brand.map((item) => (
                      <li 
                      onClick={() => handleBrand(item)} 
                      className="my-[20px]  border-b-[1px] pb-2 ">
                        <a className="hover:font-bold hover:text-black cursor-pointer ">
                          {item}
                        </a>
                      </li>                    
                    ))}
                    </ul>
                 </div>
                 <div>
                    <h3 className="font-dm text-[20px] font-bold my-[50px] ">Shop by Color</h3>
                    <ul  className="font-dm font-normal text-[16px] text-[#6D6D6D] my-[35px] ">
                      <li className="my-[20px]  border-b-[1px] pb-1 flex gap-3 items-center ">
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
              <div className="w-[85%] text-center pl-10 ">
                  <div className="flex items-center">
                    <div className="w-[40%] flex gap-[20px] items-center ">
                      <div 
                        onClick={() => setActive("")}        /* setActive null "" means active is off */
                        className={`
                        ${active == "active" 
                          ? "p-[10px] bg-white hover:text-white hover:bg-black ease-in-out duration-300 cursor-pointer" 
                          : "p-[10px]  text-white bg-black ease-in-out duration-300 cursor-pointer"}
                        `}>    
                        {/* ? means its active and " " is the css and same goes for : */}
                        <IoGrid />
                      </div>
                      <div onClick={handleActive}
                        className={`
                        ${active == "active" 
                          ? "p-[10px] bg-black  text-white ease-in-out duration-300 cursor-pointer" 
                          : "p-[10px]  text-black hover:text-white hover:bg-black bg-white ease-in-out duration-300 cursor-pointer"}
                        `}>
                        <FaListUl />
                      </div>
                    </div>
                    <div className="w-[25%] ">
                      <div className="flex ">
                        <h3 className="text-[16px] font-normal font-dm pr-3">Sort by:</h3>
                        <select name="cate" id="cate" className="w-[70%] border-black border-[1px] duration-300 ease-in-out ">
                          <option value="valOne" className="text-center ">Sort 1</option>
                          <option value="valOne" className="text-center ">Sort 2</option>
                          <option value="valOne" className="text-center ">Sort 3</option>
                          <option value="valOne" className="text-center ">Sort 4</option>
                          <option value="valOne" className="text-center ">Sort 5</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-[35%]">
                      <div className="flex justify-end">
                        <h3 className="text-[16px] font-normal font-dm pr-3">Show:</h3>
                        <select name="cate" id="cate" className="w-[40%] border-black border-[1px] ">
                          <option value="6" className="text-center ">6</option>
                          <option value="12" className="text-center ">12</option>
                          <option value="18" className="text-center ">18</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Post 
                      allPage={allPage} 
                      active={active}
                      categoryFilter={categoryFilter}
                    />                  
                    <div className="text-center pb-20 ">
                      <Pagination                 /* using props to bring pagination's data here and vice versa */
                        pageNumber = {pageNumber} 
                        paginate={paginate} 
                        next={next} 
                        previous={previous} 
                        currentPage={currentPage}                      
                      />  
                    </div>
                  </div>
              </div>
            </div>
        </Container>
    </section>
  )
};

export default Shop;
