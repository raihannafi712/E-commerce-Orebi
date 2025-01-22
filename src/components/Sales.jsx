import React from "react";
import phone from '../assets/phones.png'
import electro from '../assets/electronic.png'
import furniture from '../assets/furniture.png'
import Container from "./Container";
import { FaTruck , FaRedoAlt  } from "react-icons/fa";
import Flex from './Flex';


const Sales = () => {
  return (
    <section>
        <Container>
            {/* delivery start */}
            <Flex >
                    <div className="w-1/3 text-center">
                        <h3 className="font-dm text-[10px] lg:text-[20px]" ><span className="font-bold pr-1  ">2</span>Two years warranty </h3>
                    </div>
                    <div className="w-1/3 flex items-center justify-center">
                        <h3><FaTruck /></h3>                    
                        <h3 className="font-dm text-[10px] lg:text-[20px] pl-1">Free shipping </h3>                           
                    </div>
                    <div className="w-1/3 flex items-center justify-center font-dm text-[10px] lg:text-[20px]">                       
                        <FaRedoAlt/>
                        <h3 className="pl-1" >Return policy in 30 days</h3>
                    </div>
            </Flex>
            {/* delivery end */}
            <div className="flex pt-[48px] pb-[48px] gap-[40px] ">
                <div>
                    <a href="#">
                        <img src={phone} alt="phones" />
                    </a>
                </div>
                <div className="">
                    <div className="pb-[40px] ">
                        <a href="#">
                            <img src={electro} alt="electronics" />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src={furniture} alt="furnitures" />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
};

export default Sales;
