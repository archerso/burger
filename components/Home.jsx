import React from "react";
import Burger from "./Burger";
import styles from '../styles/Home.module.css'

export default function Home() {
  
  const burgersData = [
    { name:'burger 1', desc:'joli', price:'9€'},
    { name:'burger 2',desc:'gros',price:'10€'},
    { name:'burger 3',desc:'petit',price:'15€'},
  ];
const burgers = burgersData.map((data)=>   {
  //{...data} permet de faire transité les elements du tableau
  return <Burger {...data} />

});

return (
<>
  <div>
     <h1>BURGER SHOP</h1>
  </div>
<div>{burgers}</div></>)
}

  
 
    // <Burger name="burger 2" />
    // <Burger name="burger 3" />
    // <Burger desc="joli" />
    // <Burger desc="gros" />
    // <Burger desc="bon" />
    // <Burger price="10€"/>
    // <Burger price="15€"/>
    // <Burger price="9€"/> */}

  
  

