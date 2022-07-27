const express = require('express')
const app = express()

const cors = require('cors')

app.use(express.json())

let persons = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
      },
      { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
      },
      { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
      },
      { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
      }
]

app.get('/info', (req,res) => {
    res.send(`<p>The Phonebook contains ${persons.length} entries.</p><p>${new Date()}`)
})

app.get('/api/persons', (req,res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const person = persons.find(person => person.id === parseInt(req.params.id))

    person ? res.json(person) : res.status(404).json({error: 'Invalid Entry'})
})

app.delete('/api/persons/:id', (req,res) => {
  persons = persons.filter(person => person.id !== parseInt(req.params.id))
  res.status(204).end()
})

app.post('api/persons', (req,res) => {
  const body = req.body
  const person = {
    id: persons.length + 1,
    name: body.name,
    number: body.number
  }

  if (!body.name || !body.number){
    res.status(404).json({error: 'Content Missing'})
  }
  if (persons.map(person => person.name.toLowerCase()).includes(body.name.toLowerCase())){
    res.status(404).json({error: 'name must be unique'})
  } 
  if (persons.map(person => person.number).includes(body.number)){
    res.status(404).json({error: 'number must be unique'})
  }
  
  res.json(person)

})

const PORT = 8888
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}; you better go catch it!!`)
})