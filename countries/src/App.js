import {useState, useEffect} from 'react'
import axios from 'axios'
import Search from './components/Search'

const Countries = (props) => {
  return (
    <>

    </>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => {
        console.log(res.data)
        setCountries(res.data)
      })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const countriesToShow = countries

  return (
    <>
      <Search search={search} handleSearch={handleSearch}/>
      <Countries countries={countriesToShow}/>
    </>
  )

}


export default App