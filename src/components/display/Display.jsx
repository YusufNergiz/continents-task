import React, { useEffect, useState } from 'react'
import { useQuery, gql } from "@apollo/client";
import { useDispatch, useSelector } from 'react-redux';
import { fetchContinentFailure, fetchContinentRequest, fetchContinentSuccess } from '../../state/reducers/continentReducer';
import axios from 'axios';
import CountryBox from '../countryBox/CountryBox';
import Loading from '../loading/Loading';
import styles from "./styles.module.css"

function Display({ code, limit }) {

    const dispatch = useDispatch();
    const selectedContinent = useSelector(state => state.continent); // <-- {continentName, continentCode, countries, laoding, error}



    const continentQuery = `
        query getContinentCountries($code: ID!) {
            continent(code: $code) {
            name,
            code,
            countries {
                code
                name
            }
            }
        }
    `;

    useEffect(() => {
        fetchContinentCountries(code)
    }, [code, limit])

    const fetchContinentCountries = async (code) => {
        const endpoint = "https://countries.trevorblades.com/graphql";
        const headers = {
            "Content-Type": "application/json",
        };
        const graphqlQuery = {
            "operationName": "getContinentCountries",
            "query": continentQuery,
            "variables": {code: code}
        };

        try {
            dispatch(fetchContinentRequest())
            const response = await axios({
                url: endpoint,
                method: "post",
                headers: headers,
                data: graphqlQuery
            })
            dispatch(fetchContinentSuccess({
                continentCode: response.data.data.continent.code,
                continentName: response.data.data.continent.name,
                countries: response.data.data.continent.countries
            }))
        } catch (error) {
            dispatch(fetchContinentFailure(error))
        }
    }

if (selectedContinent) {
    return (
        <section className='container'>
            <h5>{selectedContinent.continentName} - {selectedContinent.continentCode}</h5>
            <div className={styles.countryBoxesContainer}>
                {selectedContinent.countries.map((country) => (
                    <CountryBox key={country.code} code={country.code} name={country.name}/>
                ))}
            </div>
        </section>
    )
}
}

export default Display