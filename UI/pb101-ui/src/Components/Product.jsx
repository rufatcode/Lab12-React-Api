import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import loadingIcon from '../Images/loading.gif'
const Product = () => {
    const[productDto,setProductDto]=useState([])
    const[loading,setLoading]=useState(true);
    const[search,setSearch]=useState(null)
    useEffect(()=>{
        FetchData();
    },[])
    const FetchData=()=>{
        axios.get('https://localhost:7065/api/Product').then(res=>{
            setProductDto(res.data);
            console.log(res.data)
            setLoading(false)
        })
    }
    const onSearch=(search)=>{
        setLoading(true)
       if (search!=""&&search!=null) {
        axios.get(`https://localhost:7065/api/Product/UserSearch?name=${search}`).then(res=>{
            if (res.data.length>0) {
                setProductDto(res.data)
            }
        })
       }
        setLoading(false)
    }
    if (loading) {
        return <div className='text-center mt-5 py-5'>
             <img className='my-5' width="50" height="50" src={loadingIcon}/>
        </div>
    }
  return (
    
    <div className='px-5 my-5 row'>
        <input  placeholder='search by product name' className='w-25 mx-3' onChange={(e)=>onSearch(e.target.value)} type="text" />
        <button onClick={onSearch} type='button' className='btn btn-success w-25'>Search</button>
        <button onClick={FetchData} type='button' className='btn btn-primary w-25 mx-3'>Get All</button>
    <h1 className='text-danger text-center'>Products</h1>
 {
    productDto&&productDto.map(item=>{
        return <div className="card mx-3 my-3 col3" style={{width:"25rem"}}>
        <img style={{height:"300px"}} className="card-img-top" src={item.productImages[0].imageUrl} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{item.name.length<20?item.name:item.name.substring(0,20)+"..."}</h5>
          <p className="card-text">{item.content}</p>
          <a href="#" className="btn btn-danger">{item.price+"$"}</a>
          <a href="#" className="btn btn-primary mx-3">{item.price-item.salePercentage*item.price/100+"$"}</a>
          <Link to={`/detail/${item.id}`} className='btn btn-success'>Detail</Link>
        </div>
      </div>
    })
 }
 </div>
  )
}

export default Product
