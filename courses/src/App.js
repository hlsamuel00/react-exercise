const Header = ({course}) => {
  return (
    <header>
      <h1>{course}</h1>
    </header>
  )
}

const Part = ({part}) => {
  console.log(part)
  return (
    <p><strong>Part:</strong> {part.name} | <strong>Number of Exercises:</strong> {part.exercises}</p>
  )
}

const Footer = ({parts}) => {
  return (
    <footer><strong>Total number of exercises:</strong> {parts.map(part => part.exercises).reduce((acc,c) => acc + c, 0)} </footer>
  )
}
const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Footer parts={course.parts} />
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
      <Course course={course}/>
    </div>
  )
}
export default App
