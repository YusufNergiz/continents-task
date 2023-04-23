import React, { useState } from 'react';
import styles from "./styles.module.css";
import Display from '../display/Display';

function Input() {

    const [selectedContinentCode, setSelectedContinentCode] = useState("");
    const [selectedLimit, setselectedLimit] = useState(2);
    const [showData, setShowData] = useState(false);

    const handleContinentSelectChange = (e) => {
        setSelectedContinentCode(e.target.value);
        setShowData(true)
    };

    const handleLimitSelectChange = (e) => {
        setselectedLimit(e.target.value)
    }

    const continents = {
        AF: "Africa",
        AN: "Antarctica",
        AS: "Asia",
        EU: "Europe",
        NA: "North America",
        OC: "Oceania",
        SA: "South America"
      };

  return (
    <>
        <section className='container d-flex flex-column align-items-center justify-content-center border border-5'>
            <select value={selectedContinentCode} onChange={handleContinentSelectChange}>
                <option value="" hidden>Select a continent</option>
                {Object.entries(continents).map(([code, name]) => (
                    <option key={code} value={code}>
                    {code} - {name}
                    </option>
                ))}
            </select>

            <select value={selectedLimit} onChange={handleLimitSelectChange}>
                <option value="" hidden>Select the number of Countries to be displayed</option>
                {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>

        </section>

        {showData && (
            <Display code={selectedContinentCode} limit={selectedLimit}/>
        )}

    </>
  )
}

export default Input