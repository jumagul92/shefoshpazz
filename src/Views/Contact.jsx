import React from 'react'

function Contact() {
  return (
    <div className="container">
        <div className="contact">
            <h2 className="title">BIZ ALOQADAMIZ</h2>
            <p className="contact__email">E-mail: info@shef_oshpaz.uz</p>
            <p className="contact__phone">Tel: +99899 123-45-67</p>
            <form action="" className="form">
                <div className="form__box">
                <input type="text" className="form__input" placeholder='Ismingiz' />
                <input type="text" className="form__input" placeholder='email' />
                <input type="text" className="form__input" placeholder='telefon'/>
                <input type="text" className="form__input" placeholder='matn kiriting...' />
                </div>
                <button className="form__submit">Jo'natish</button>
            </form>
        </div>

    </div>
  )
}

export default Contact