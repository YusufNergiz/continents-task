import React from 'react'
import styles from "./styles.module.css"

function Spinner() {
  return (
    <div className={styles.loader}>
        <div className={styles.loader__bar}></div>
        <div className={styles.loader__bar}></div>
        <div className={styles.loader__bar}></div>
        <div className={styles.loader__bar}></div>
        <div className={styles.loader__bar}></div>
        <div className={styles.loader__ball}></div>
    </div>

  )
}

export default Spinner