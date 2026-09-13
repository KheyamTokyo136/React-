import React from 'react'
import styles from "./Header.module.css"
const Button = () => {
  return (
    <div className={styles.header}>
      <h3 className={styles.text}>Hello i am kheyam khan </h3>
      <button className={styles.btn}>Click</button>
    </div>
  )
}

export default Button
