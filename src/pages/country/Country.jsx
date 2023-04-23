import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/header/header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryFailure, fetchCountryRequest, fetchCountrySuccess } from '../../state/reducers/countryReducer';
import Loading from '../../components/loading/Loading';
import Card from '../../components/card/Card';
import styles from "./styles.module.css"

function Country() {

  const [data, setData] = useState(null);
  const { name } = useParams();
  const dispatch = useDispatch();
  const currentCountry = useSelector(state => state.country); // <-- {laoding, error}

  useEffect(() => {
    const fetchCountryData = async () => {
      dispatch(fetchCountryRequest())
      try {
          const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`).then(dispatch(fetchCountrySuccess()))
          setData(response.data[0])
      } catch (error) {
          dispatch(fetchCountryFailure(error))
      }
    }
    fetchCountryData()
}, [])


  if (currentCountry.loading) {
    return <Loading />
  }

  if (currentCountry.error) {
    return <h1>There were no Data found with the given country</h1>
  }

  if (data) {
    return (
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <Header />
        <Card officalName={data.name.official} capital={data.capital[0]} population={data.population} currency={Object.keys(data.currencies).map(currencyCode => data.currencies[currencyCode].name)} subregion={data.subregion} languages={Object.keys(data.languages)} flag={data.flags.svg}/>
        <br />
        <Link to={'/'}><button className={styles.button}>Go Back</button></Link>

      </div>
    )
  }
}

export default Country