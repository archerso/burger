import React from "react";
import styles from "../styles/Burger.module.css";

export default function Burger() {
  return (
    <div className={styles.container}>
      <img src="/img/burger1.png" alt="" />
      <h2 className={styles.text}>Big Mac</h2>
      <p className={styles.text}>Au Beuf</p>
      <p className={styles.text}>10 €</p>
    </div>
  );
}
