import React, { useState } from 'react';
import styles from "./styles.module.css";

function Input() {

    const [selectedContinentCode, setSelectedContinentCode] = useState("");
    const [selectedLimit, setselectedLimit] = useState(2);
    const [showData, setShowData] = useState(false);

    const handleContinentSelectChange = (e) => {
        console.log(e.target.value);
        setSelectedContinentCode(e.target.value);
    };

    const handleLimitSelectChange = (e) => {
        console.log(e.target.value)
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
    <section className='container d-flex align-items-center justify-content-center border border-5'>
        <select value={selectedContinentCode} onChange={handleContinentSelectChange}>
            <option value="">Select a continent</option>
            {Object.entries(continents).map(([code, name]) => (
                <option key={code} value={code}>
                {code} - {name}
                </option>
            ))}
        </select>

        <select value={selectedLimit} onChange={handleLimitSelectChange}>
            <option value="">Select the number of Countries to be displayed</option>
            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <option key={value} value={value}>
                    {value}
                </option>
            ))}
        </select>

        <button onClick={() => setShowData(true)}>Fetch Data</button>

    </section>
  )
}

export default Input