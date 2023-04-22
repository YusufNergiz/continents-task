import React from 'react'
import styles from "./styles.module.css";
import worldIcon from "../../assets/World-Flags-Globe.png";

function Header() {
  return (
    <header>
        <img src={worldIcon} alt="Globe made out of country flags" />
        <h3>Learn some Geography</h3>
    </header>
  )
}

export default Header;