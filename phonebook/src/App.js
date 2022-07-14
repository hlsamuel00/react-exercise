import {useState, useEffect} from 'react'
import axios from 'axios'
import Search from './components/Search'
import Add from './components/Add'
import PhoneBook from './components/Persons'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const[search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        setPersons(res.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (newName && newNumber){
      if (persons.map(person => person.name).includes(newName)){
        alert(`${newName} is already added to phonebook`)
        setNewName('')
        setNewNumber('')
      } else {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      }
    } 
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(search)) || persons

  return (
    <div>
        <h2>PhoneBook</h2>
        <Search search={search} handleSearch={handleSearch} />
        <h2>add a new</h2>
        <Add newName={newName} handleNameChange={handleNameChange} addPerson={addPerson}
             newNumber={newNumber} handleNumberChange={handleNumberChange} />
        <h2>Numbers</h2>
        <PhoneBook persons={personsToShow} />
    </div>
  )
}

export default App;
