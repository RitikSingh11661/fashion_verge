import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Filter from '../Components/Product/Filter'
import ProductList from '../Components/Product/ProductList'
import logo from '../Components/Product/image/row.png'
import '../CSS/Product.css'
// import Navbar from '../Components/Navbar/Navbar'

export default function Product() {
  
  return (
    // whole container
    <>
    {/* <Navbar/> */}
      <div>
        <Heading className="product-heading">MEN ALL CLOTHING</Heading>
        <div className="product-breadcrumbs">
          <Link to='/'>Home</Link> {">"} Men all clothing
        </div>
      </div>

      {/* sort and filter container */}
      <div className="product-filters-container">
        <Filter />
      </div>
      
      <div>
        <ProductList/>
      </div>
    </>
  )
}
