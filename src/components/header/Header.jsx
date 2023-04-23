import React from 'react'
import styles from "./styles.module.css";
import globeIcon from "../../assets/globe.svg"

function Header() {
  return (
    <header>
        <img src={globeIcon} alt="globe image" />
        <h3>Yussuf Nergiz</h3>
    </header>
  )
}

export default Header;