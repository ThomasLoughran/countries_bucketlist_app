
const CountriesList = ({countriesList}) => {

    

    const Country = (country) => {
        return(
            <div>
                {country.name.common}
                {country.flag}
            </div>
        )
    } 
    const countryNames = countriesList.map((country) => {
            return(
                Country(country)
            )
        })
    return(
        <>
            <h3>This is a list of countries</h3>
            {countryNames}
        </>
    )       
}

export default CountriesList;