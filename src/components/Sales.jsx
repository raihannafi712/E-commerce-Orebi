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
            <Flex>
                    <div className="w-1/3">
                        <h3><span>2</span>Two years warranty </h3>
                    </div>
                    <div className="w-1/3 items-center gap-2">
                        <h3><span><FaTruck /></span>Free shipping </h3>
                    </div>
                    <div className="w-1/3">
                        <h3><span><FaRedoAlt /></span>Return policy in 30 days</h3>
                    </div>
            </Flex>
        </Container>
    </section>
  )
};

export default Sales;
