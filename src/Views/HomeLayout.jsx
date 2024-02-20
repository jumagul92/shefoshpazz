import React from 'react'
import Top from '../Components/Top'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <>
    <Top/>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default HomeLayout