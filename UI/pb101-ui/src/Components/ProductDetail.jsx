import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'

const ProductDetail = () => {
    const location=useLocation();
    const[product,setProduct]=useState({});
    useEffect(()=>{
        const id=location.pathname.split("/")[2]
        axios.get(`https://localhost:7065/api/Product/${id}`).then(res=>{
            setProduct(res.data)
            console.log(res.data)
        })
    },[])
  return (
    <div>
       
      <Link className='btn btn-danger d-block text-center w-25 m-auto my-5'  to={"/"}>Go To Home</Link>
      {product.productImages&&product.productImages.map(item=>{
        return  <img style={{height:"300px",width:"300px"}} className="card-img-top" src={item.imageUrl} alt="Card image cap"/>
      })}
      <div className='container my-4'>
      <h5 className='text-primary'>Product:{product&&product.name}</h5>
      <p>Brand:{product&&product.brandName}</p>
      <p>Category:{product&&product.categoryName}</p>
      </div>
    </div>
  )
}

export default ProductDetail
