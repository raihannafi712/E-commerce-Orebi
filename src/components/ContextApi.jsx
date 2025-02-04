import React, { useEffect, useState } from "react";
import { createContext } from 'react';
import axios from 'axios';

const ApiData = createContext();

const ContextApi = ({children}) => {

    let [data,setData] = useState([])
    let getData = ()=>{
      axios.get("https://dummyjson.com/products").then((response)=>{
        // console.log(response.data.products);
        setData(response.data.products);        
      })
    }
  
    useEffect(()=>{
      getData()
    },[])
    // console.log(data);     /* To see all the data */

  return (

    <>
        <ApiData.Provider value={data} >
            {children}
        </ApiData.Provider>
    </>

  )
};

export  { ContextApi , ApiData };
