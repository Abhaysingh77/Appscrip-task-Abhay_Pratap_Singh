import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ProductListingPage from './components/ProductsList/ProductList'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ProductListingPage/>
    <Footer/>
    </>
  )
}

export default App