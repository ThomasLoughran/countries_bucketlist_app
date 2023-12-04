import {useState, useEffect} from 'react';
import CountriesList from "../components/CountriesList";
import VisitedCountriesList from '../components/VisitedCountriesList';

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

    useEffect(() => {

    }, [])

    return(
        <div className='main'>
            
            {countriesList ? <CountriesList countriesList={countriesList}/> : <p>Loading countries...</p>}
            {countriesList ? <VisitedCountriesList countriesList={countriesList}/> : <p>Loading countries...</p>}
        </div>
    )
}

export default CountriesContainer;