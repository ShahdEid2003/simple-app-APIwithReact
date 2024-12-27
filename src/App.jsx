import React from 'react'
import  Navbar from './components/Navbar/navbar.jsx'
import Mainveiw from './components/MainVeiw/Mainveiw.jsx'
import  Footer from './components/Footer/footer.jsx'
import { Route, Routes } from 'react-router-dom'
import Category from './components/categeory/category.jsx'
import Products from './components/products/products.jsx'
import ProductsDetails from './components/products/productDetails.jsx'
import CategoryProduct from './components/productByCategory/categoryProduct.jsx'
import  Quotes  from './components/Quotes/quote.jsx'
import  AddProduct  from './components/addProduct/addProduct.jsx'
export default function App() {
  return (
    <>
    <Navbar />
    <Mainveiw />
   
      <Routes>
        <Route  path="/cateogry" element={<Category/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/quote" element={<Quotes />} />  
        <Route path="/addproducts" element={<AddProduct />} />  
        <Route path="/product/:id" element={<ProductsDetails />} />
        <Route path="/categoryProduct/:category" element={<CategoryProduct />} />
      </Routes>

    <Footer />

   

      
    </>
  )
}


