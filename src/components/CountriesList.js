
const CountriesList = ({countriesList}) => {

    const countryNames = countriesList.map((country) => {
        return(
            country.name.common
        )
    })
    console.log(countryNames)

    return(
        <>
            <h3>This is a list of countries</h3>
            {countryNames}
        </>
    )       
}

export default CountriesList;