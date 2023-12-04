
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
        <>
            <h3>This is a list of countries</h3>
            {countryNames}
        </>
    )       
}

export default CountriesList;