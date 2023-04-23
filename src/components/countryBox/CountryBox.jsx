import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css";
import { Link, Route } from 'react-router-dom';

function CountryBox({ name, code }) {

    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
                setData(response.data[0])
            } catch (error) {
                console.log(error);
            }
        }
        fetchCountryData()
    }, [])

  if (data) {


    return (
        <Link to={`/country/${name}`}>
            <div className={styles.boxContainer}>
                <h3>{data.name.common}</h3>
                <img src={data.flags.svg} alt={`${data.name.common} flag`} />
            </div>
        </Link>
      )
  }
}

export default CountryBox