const Country = ({country}) => {
    return(
        <>
            {country.name.common}
            {country.flag}
        </>
    )
}
export default Country;