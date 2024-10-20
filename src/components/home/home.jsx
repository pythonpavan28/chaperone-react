import React from 'react'
import './home.css'
import Header from '../../pages/header/header'
import Navbar from '../../pages/navbar/navbar'
import MainSection from '../mainSection/main'
import Footer from '../../pages/footer/footer'
import FilterSection from '../filterSection/filterSection'

import SortBy from '../sortBy/sortBy'
import Products from '../products/products'

function Home() {
  return (
    <div>
        <Header/>
        <div className='home-main-contianer'>
        <Navbar/>
        <MainSection/>
        <div className='home-sub-container'>
        <FilterSection/>
        <div className='sort-products-container'>
          <SortBy/>
          <Products/>
          </div>
        </div>
        
        
        </div>
        <Footer/>
        
    </div>
  )
}

export default Home