import React from "react";
import Burger from "./Burger";
import styles from '../styles/Home.module.css'

export default function Home() {
  const burgers = [];

  for (let i = 0; i < 20; i++)
  {
    burgers.push(<Burger />)
  }
  console.log(burgers)
  return (
    <div className={styles.container}>
     <h1 className={styles.title}>Burger shop</h1>
    {
      burgers
    }
     
  
    </div>
  );
}
