import React from 'react';
import styles from "./styles.module.css";

function Card({ officalName, capital, population, currency, subregion, languages, flag }) {
  return (
    <div className={styles.card}>
        <div className={styles.tools}>
            <div className={styles.circle}>
                <span className={`${styles.red} ${styles.box}`}></span>
            </div>
            <div className={styles.circle}>
                <span className={`${styles.yellow} ${styles.box}`}></span>
            </div>
            <div className={styles.circle}>
                <span className={`${styles.green} ${styles.box}`}></span>
            </div>
        </div>
        <div className={styles.card__content}>
            <div className='d-flex justify-content-between'>
                <h1>{officalName}</h1>
                <img src={flag} alt={`${officalName} flag`} />
            </div>
            <p>Capital: <span>{capital}</span></p>
            <p>Population: <span>{population}</span></p>
            <p>Currency: <span>{currency}</span></p>
            <p>Subregion: <span>{subregion}</span></p>
            <ul>
                Languages:
                {languages.map(language => (
                    <li key={language}><span>{language}</span></li>
                ))}
            </ul>
        </div>
    </div>

  )
}

export default Card