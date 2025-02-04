import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {

  let productId = useParams();
  console.log(productId);

  let [ singleProduct , setsingleProduct ] = useState([])

  let singleData = ()=>{
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{

      console.log(response.data);
      
    });
  };

  useEffect(()=>{
    singleData();
  },[])
  

  return (
  
    <>

      <h3>haha</h3>

    </>
  )
};

export default DetailsPage;
