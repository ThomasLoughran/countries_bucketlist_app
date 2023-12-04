import {useState, useEffect} from 'react';
import CountriesList from "../components/CountriesList";

const CountriesContainer = () => {

    const [countriesList, setCountriesList] = useState(null);

    const loadCountriesData = async() => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountriesList(data);
    }

    useEffect(() => {
        loadCountriesData();
    }, [])

    return(
        <>
            <h2>This is a countries Container</h2>
            {countriesList ? <CountriesList countriesList={countriesList}/> : <p>Loading countries...</p>}
        </>
    )
}

export default CountriesContainer;