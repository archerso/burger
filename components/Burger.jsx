import React from "react";
import styles from "../styles/Burger.module.css";

export default function Burger(props) {
  
  return (
    <div className={styles.container}>
     
      <img src="/img/burger1.png" alt="" />
      <h2 className={styles.text}>{props.name}</h2>
      <p className={styles.text}>{props.desc}</p>
      <p className={styles.text}>{props.price}</p>
      
      
    </div>
  );
}
  