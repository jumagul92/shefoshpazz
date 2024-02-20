import React from 'react';
import { SlSocialVkontakte } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";

function Footer() {
  return (
   <div className="container">
    <footer className="footer">
        <div className="footer__box">
        <ul className="footer__media">
            <li><a href="#!" className="footer__link">{<SlSocialVkontakte/>}</a></li>
            <li><a href="#!" className="footer__link">{<FaFacebookF/>}</a></li>
            <li><a href="#!" className="footer__link">{<IoLogoTwitter/>}</a></li>
            <li><a href="#!" className="footer__link">{<IoLogoInstagram/>}</a></li>
        </ul>
        <form action="" className="footer__card">
            <h2 className="footer__title">Bizga obuna bo'ling</h2>
            <form className="footer__form">
            <input required type="text" className="footer__input" placeholder='email kiriting*' />
            <button className="footer__btn">OK</button>
            </form>
           
        </form>
        </div>
    </footer>
   </div>
  )
}

export default Footer