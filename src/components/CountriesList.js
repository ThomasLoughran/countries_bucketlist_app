
const CountriesList = ({countriesList}) => {

    

    const Country = (country) => {
        return(
            <>
                <input type="checkbox"></input>
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