import React, { useState } from 'react';
import productList from "../productList";
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Products() {
    const [value, setValue] = useState('');
    const filterProducts = productList.filter(product=>{
        if (value.trim()=='') {
            return product
        } else{
            return product.title.toLowerCase().includes(value.toLowerCase())
        }
    })
    
  return (<>
    <div className="container">
       
        <div className="products">
            <div className="products__top">
            <h2 className="title products__titlee" >Tovarlar</h2>
            <div className="products__search">
                <input type="text" className="products__input" placeholder='Tovarni izlang...' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <BsSearch className='products__icon'/>
            </div>
            </div>
            
                <div className="products__box">
                {filterProducts.map((product=><>
                <Link to={`/products/${product.id}`} className="products__card" key={product.id}>
                    <div  className="products__images">
                        <img className='products__img' src={product.img} alt="" />
                    </div>
                    <h2 className="products__title">{product.title}</h2>
                    <p className="products__price">{`${product.price} so'm`}</p>
                    </Link> 
                    
                    </>
                    ))} 
                    </div>
                    </div>
                    
           
    </div>
    </>
  )
}

export default Products