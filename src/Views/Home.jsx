import React, { useEffect, useState } from 'react';
import skovoroda from "../assets/Images/skovoroda.png";
import spoon from "../assets/Images/spoon.png";
import venchik from "../assets/Images/venchik.png";
import chaynik from "../assets/Images/chaynik.png";



function Home() {
  const images =[
    skovoroda,
    spoon,
    venchik,
    chaynik
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentIndex(prevIndex=>
        prevIndex===images.length-1 ? 0 : prevIndex+1)
    }, 3000);
    return ()=>clearInterval(interval);
  }, [images.length])
  console.log(images);
  return (
    <div className="container">
      <div className="slider__container">
        {images.map((image, index)=>(
          <img key={index} src={image} className= {index===currentIndex ? 'slide active': 'slide'}/>
        ))}
          </div>
          </div>
     
    
     /* <div className="container">
        <div className="home__box">
           <img src={skovoroda} alt="" className="home__img" />
            <img src={spoon} alt="" className="home__img" />
            <img src={venchik} alt="" className="home__img" />
            <img src={chaynik} alt="" className="home__img" />
            </div>
        </div>  */
  )
}

export default Home