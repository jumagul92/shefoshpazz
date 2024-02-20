import React, {  useContext, useState } from 'react';
import logo from "../assets/Images/logo.png";
import { GiShoppingBag } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import { Context } from '../Context/Context';


function Top() {
 
  const {basket, activeBasket, setActiveBasket,amount, removeFromBasket, totalPrice, addToBasket, decreaseQuantity} = useContext(Context)
  return (<>
  <nav className="nav">
  <div className="container">
  <div className="top__info">
    <a href="" className="top__link">
        <img src={logo} alt="" className="top__logo" />
    </a>
    <div className="top__items">
        <p className="top__items-text">Bepul yetkazib berish xizmati</p>
        <GiShoppingBag className='top__shopping' onClick={()=>setActiveBasket(true)}/>
        <p className="top__items-number">{basket.length}</p>
    </div>
   
   </div>
   <h1 className="top__title">SHEF-OSHPAZ</h1>
   <p className="top__text">Sizning oshxonadagi yordamchingiz</p>
  </div>
  <div className={`basket ${activeBasket? 'active': ''}`}>
  
    <div className="basket__top">
      <FaChevronRight className='basket__icon' onClick={()=>setActiveBasket(false)}/>
      <h2 className="basket__title">Savat</h2>
    </div>
    <div className="basket__box">
        <div className="basket__items">
      
        {basket.map(product=>(<>
          <div className="basket__item">
          <img src={product.img} alt="" className="basket__item-img" />
        <div className="basket__item-info">
          <h3 className="basket__item-title">{product.title}</h3>
          <p className="basket__item-price">{product.price}</p>
        
        
          <div className="basket__item-change">
            <p className="change basket__item-remove" onClick={()=>decreaseQuantity(product.id)}>-</p>
            <p className="change basket__item-number">{product.amount}</p>
            <p className="change basket__item-add" onClick={()=>addToBasket(product)} >+</p>
          </div>
        </div>
        <CiCircleRemove className='basket__item-close' onClick={()=>removeFromBasket(product.id)}/>
        </div>
        </>
        ))}
      
    </div>
    <hr></hr>
    <p className="basket__price">Jami: {`${totalPrice()} so'm`} </p>
    <button className="basket__btn">Sotib olish</button>
    </div>
    
   </div>
  
  </nav>
 
  </>
   
  )
}

export default Top