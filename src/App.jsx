import React from 'react'
import Top from './Components/Top'
import Nav from './Components/Nav'
import About from './Views/About'
import FAQ from './Views/FAQ'
import Contact from './Views/Contact'
import Home from './Views/Home'
import Products from './Views/Products'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './Views/HomeLayout'
import ProductID from './Views/ProductID'
import ContextProvider from './Context/Context'
// import ProductID from './Views/ProductID'

function App() {
  return (<>
  <ContextProvider>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomeLayout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/products/:id' element={<ProductID/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/faq' element={<FAQ/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Route>
   
  </Routes>
  </BrowserRouter>
  </ContextProvider>
  
  

  </>
    
  )
}

export default App
