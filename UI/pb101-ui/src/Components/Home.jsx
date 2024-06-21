import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import NavBar from './NavBar'
import Product from './Product'

const Home = () => {
   

  return (
    <>
    <NavBar/>
    <Product/>
    </>
  )
}

export default Home
