import React from "react";
import Container from './../Container';

const Pagination = ({pageNumber , paginate , next , previous , currentPage}) => {
  // console.log(pageNumber);


  
  return (
    <section>
      <Container>
          <ul class="inline-flex -space-x-px text-sm">
            <li>
              <a onClick={previous} class="flex items-center justify-center cursor-pointer px-3 h-8 ms-0 leading-tight border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 bg-white dark:border-gray-700 text-black dark:hover:bg-gray-700 dark:hover:text-white">
                Previous
              </a>
            </li>
            {pageNumber.map((item , i)=>(
            <li>
              <a onClick={()=>paginate(item)} 
                className={`${
                  currentPage == i + 1 ? "flex items-center justify-center cursor-pointer px-3 h-8 leading-tight text-white bg-black border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white" 
                  : "flex items-center justify-center cursor-pointer px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white"
                }`}>        {/* after ? will be the active page css and after : will be the normal css */}
                {item + 1} 
              </a>
            </li>
            )) }
            <li>
              <a onClick={next} class="flex items-center justify-center cursor-pointer px-3 h-8 leading-tight text-black bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white">
                Next
              </a>
            </li>
          </ul>
      </Container>
    </section>
  )
};

export default Pagination;
