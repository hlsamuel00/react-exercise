import Button from "./Button"
import Search from "./Search"

const Countries = ({countries, search}) => {
    if (countries.length > 10){
      return (
        <>
          <p>Too many matches; specify another filter</p>
        </>
      )
    }
    if (countries.length < 10 && countries.length > 1){
      return (
        <>
          {countries.map(country => <p key={country.name.common}>{country.name.common}<Button handleClick={() => console.log('button clicked')} text='show' /></p>)}
        </>
      )
    }
    if (countries.length == 1){
      return (
        <> 
          <h2>{countries[0].name.common}</h2>
          <p>Capital: {countries[0].capital[0]}</p>
          <p>Area: {countries[0].area}</p>
          <h4>Languages</h4>
            <ul>
              {Object.values(countries[0].languages).map(language => <li key={language}>{language}</li>)}
            </ul>
          <img src={countries[0].flags.png}/>
        </>
      )
    }
  
    if (countries.length == 0){
      return (
        <>
          <p>No results to show; try your search again</p>
        </>
      )
    }
}

export default Countries
