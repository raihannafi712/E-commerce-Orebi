import React from "react";
import Container from './../Container';

const Pagination = ({pageNumber , paginate}) => {
  // console.log(pageNumber);


  


  return (
    <section>
      <Container>
          <ul class="inline-flex -space-x-px text-sm">
            <li>
              <a class="flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 bg-white dark:border-gray-700 text-black dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            {pageNumber.map((item , i)=>(
            <li>
              <a onClick={()=>paginate(item)} class="flex items-center justify-center cursor-pointer px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white">{item + 1} </a>
            </li>
            )) }
            <li>
              <a class="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
          </ul>
      </Container>
    </section>
  )
};

export default Pagination;
