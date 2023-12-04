const VisitedCountriesList = ({visitedCountriesList}) => {

    const Country = (country) => {
        return(
            <>  
                {country.name.common}
                {country.flag}
            </>
        )
    } 

    const countryNames = visitedCountriesList.map((country) => {
            return(
                <div className="country">
                    {Country(country)}
                </div>
            )
        })
    
    return(
        <div className="visitedCountriesList">
            <h3>This is a list of visited countries</h3>
            {countryNames}
        </div>
    )       
}

export default VisitedCountriesList;