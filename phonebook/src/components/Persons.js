const Entry = ({name, number}) => {
    return (
      <p>Name: {name} | Number: {number}</p>
    )
}
  
const PhoneBook = ({persons}) => {
  return (
    <div>
      {persons.map(person => 
        <Entry key={person.name} name={person.name} number={person.number} />)}
    </div>
  )
}

export default PhoneBook