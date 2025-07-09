import React, { useState } from 'react'
import {Box} from '@mui/material'
import CardP from './Card'
import { useEffect } from 'react';
import Hero from './Hero';
const Home = () => {

  const[product,setProduct]=useState([]);
   useEffect(() => {
  fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      setProduct(result);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
  return (
    <div>

      <Hero/>
      <Box sx={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        gap:'15px',
        margin:'30px'
        }}>
      {
        product.map((value,index)=>(
         <CardP productData={value} key={index}/>
        ))
      }
      </Box>
    </div>
  )
}

export default Home