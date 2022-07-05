const Header = (props) => {
  return (
    <header>
      <h1>{props.course.name}</h1>
    </header>
  )
}

const Content = (props) => {
  console.log(props.parts[0])
  return (
    <>
      <p><strong>Part:</strong> {props.parts[0].name}  | <strong>Number of exercises:</strong> {props.parts[0].exercises}</p>
      <p><strong>Part:</strong> {props.parts[1].name}  | <strong>Number of exercises:</strong> {props.parts[1].exercises}</p>
      <p><strong>Part:</strong> {props.parts[2].name}  | <strong>Number of exercises:</strong> {props.parts[2].exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <footer><strong>Total number of exercises:</strong> {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises } </footer>
  )
}

const App = () => {
  const course = { 
    name: 'Half Stack Application Development',
    parts:  [
      { name: 'Fundamentals of React',
        exercises:  10
      },
      { name: 'Using props to pass data',
        exercises: 7
      },
      { name: 'State of component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}
export default App
