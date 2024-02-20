import React, { createContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import productList from '../productList';
export const Context = createContext();

function ContextProvider({children}) {
  const [activeBasket, setActiveBasket] = useState(false);
    const [basket, setBasket] = useState([]);
    const [amount, setAmount] = useState(1);
    
    // console.log(basket);
    
    const addToBasket =(newProduct)=>{
      const index = basket.findIndex(basketItem=>basketItem.id===newProduct.id);

      if (index==-1) {
        setBasket(prevBasket=>[...prevBasket, newProduct])
        setActiveBasket(true)
        // console.log(newProduct);
      } else{
        const updatedBasket = [...basket];
        updatedBasket[index] = {
          ...updatedBasket[index],
          amount: updatedBasket[index].amount + 1
        };
        setBasket(updatedBasket);
      }

    }
    
    const removeFromBasket =(item)=>{
      const renewedBasket = basket.filter(basketItem=>basketItem.id !==item);
      setBasket(renewedBasket)
    }
    
    const totalPrice = ()=>{
      return basket.reduce((total, item)=>{
        return total + (item.price * item.amount)
      },0)
    }
    // console.log(totalPrice());
    const decreaseQuantity=(itemId)=>{
      const renewedBasket = basket.map(product=>{
        if (product.id===itemId && product.amount>1) {
          return {
            ...product,
            amount:product.amount-1
          }
        }
        return product
      });
      setBasket(renewedBasket)
    }
    
    
    
    
  return (
   <Context.Provider value={{basket, activeBasket, setActiveBasket, addToBasket, amount, removeFromBasket, totalPrice, decreaseQuantity}}>
    {children}
   </Context.Provider>
  )
}

export default ContextProvider