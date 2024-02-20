import React, { useContext, useState } from 'react';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import productList from "../productList.js";
import { FaPlus } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { Link, NavLink, useParams } from 'react-router-dom';
import { Context } from '../Context/Context.jsx';


function ProductID() {
  const params = useParams();
    const getProduct =()=>{
      return productList.find(product=>product.id==params.id)
     };
     
      const newProduct ={
      id: getProduct().id,
      title: getProduct().title,
      img: getProduct().img,
      price: getProduct().price,
      amount: getProduct().amount+1
     };
  const {addToBasket} = useContext(Context);
 const [active, setActive] = useState(false)

  return (
   <div className="container">
    <div className="item">
      <div className="item__top">
        <ul className="item__left">
         <li><NavLink to={'/'} className="item__link">Asosiy /</NavLink></li>
         <li><NavLink to={'/products'} className="item__link">Tovarlar /</NavLink></li>
         <li><NavLink to={'#!'} className="item__link">{getProduct().title}</NavLink></li>
        </ul>
        <ul className="item__right">
        <GrPrevious className='item__icon'/>
          <li><a href="" className="item__link"> Orqaga |</a></li>
          <li><a href="" className="item__link">Oldinga </a></li>
          <GrNext className='item__icon'/>
        </ul>
      </div>
      <div className="item__box">
        <div className="item__box-left">
          <div className="item__background">
          <img src={getProduct().img} alt="" className="item__img" />
          </div>
          <p className="item__description">Это описание товара. Здесь вы можете рассказать о товаре подробнее: напишите о размерах, материалах, уходе и любых других важных моментах.</p>
        </div>
        <div className="item__box-right">
          <h3 className='item__title'>{getProduct().title}</h3>
          <p className="item__price">{`${getProduct().price} so'm`}</p>
          <p className="item__text">Soni</p>
          <p className="item__amount">1</p>
 <button className="item__buy" onClick={()=>addToBasket(newProduct)}>Savatga qo'shish</button>
          <div className="item__bottom">
            <div className="item__about">
              <div className="item__info">
              <h2 className="item__about-title">Tovar haqida</h2>
              <FaPlus className='item__plus'/>
              </div>
              <p className="item__about-text">Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.</p>
              <hr/>
            </div>
            <div className="item__about">
            <div className="item__info">
              <h2 className="item__about-title">Tovar va pulni qaytarish</h2>
              <FaPlus className={`item__plus ${active? 'active' : ''}`} onClick={()=>setActive(true)}/>
              </div>
              <p className="item__about-text">Это правила и условия возврата товара и денег. Расскажите посетителям, что нужно сделать, если они захотят вернуть товар и получить назад свои деньги. Четкая и ясная политика возврата — это хороший способ построить доверительные отношения с клиентами.</p>
              <hr/>
            </div>
            <div className="item__about">
            <div className="item__info">
              <h2 className="item__about-title">Yetkazib berish</h2>
              <FaPlus className='item__plus'/>
              </div>
              <p className="item__about-text">Это информация о доставке заказов. Расскажите, какие способы доставки вы предлагаете, как упаковываете заказы и сколько это стоит. Подробная информация о доставке вызывает доверие клиентов и помогает принять решение купить у вас товар.</p>
              <hr/>
            </div>
            </div>
          <ul className="item__media">
            <li><a href="" className="item__link"><IoLogoWhatsapp className='social_media1'/></a></li>
            <li><a href="" className="item__link"><FaFacebookF className='social_media2'/></a></li>
            <li><a href="" className="item__link"><FaTwitter className='social_media3'/></a></li>
            <li><a href="" className="item__link"></a><FaPinterestP className='social_media4'/></li>
          </ul>
        </div>
      </div>
    </div>
   </div>
  )
}

export default ProductID