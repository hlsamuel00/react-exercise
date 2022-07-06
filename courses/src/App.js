const Course = ({course}) => {
  return (
    <header>
      <h1>{course}</h1>
    </header>
  )
}

const Content = ({parts}) => {
  console.log(parts)
  return (
    <>
      {parts.map(part => <p key={part.id}><strong>Part:</strong> {part.name} | <strong>Number of Exercises:</strong> {part.exercises}</p>)}
    </>
  )
}

const Total = ({parts}) => {
  return (
    <footer><strong>Total number of exercises:</strong> {parts.map(part => part.exercises).reduce((acc,c) => acc + c, 0)} </footer>
  )
}

const App = () => {
  const course = { 
    id: 1,
    name: 'Half Stack Application Development',
    parts:  [
      { name: 'Fundamentals of React',
        exercises:  10,
        id: 1
      },
      { name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      { name: 'State of component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}
export default App
