import { useState } from "react";

const CountriesList = ({
    countriesList, 
    setCountriesList, 
    visitedCountriesList,
    setVisitedCountriesList
}) => {

    let isChecked = false;

    const handleCheckBox = (country) => {
        // add the country to the list of countries that have been visited
        setVisitedCountriesList([...visitedCountriesList, country]);
        // remove the country from the list of countries that haven't been visited
        setCountriesList(countriesList.filter(
            (thisCountry) => thisCountry !== country)
        )
        isChecked = false;
        console.log(country.name.common)
    }

    const Country = (country) => {
        return(
            <>
                <input 
                    type="checkbox"
                    checked={isChecked}
                    onInput={(e) => {
                        
                        handleCheckBox(country)
                    }}
                ></input>
                
                {country.name.common}
                {country.flag}
            </>
        )
    } 

    const countryNames = countriesList.map((country) => {
            return(
                <div className="country">
                    {Country(country)}
                </div>
            )
        })
    
    return(
        <div className="countriesList">
            <h3>This is a list of countries</h3>
            {countryNames}
        </div>
    )       
}

export default CountriesList;