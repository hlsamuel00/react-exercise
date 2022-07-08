const Header = ({course}) => {
  return (
    <header>
      <h1>{course}</h1>
    </header>
  )
}

const Part = ({part}) => {
  return (
    <p><strong>Part:</strong> {part.name} | <strong>Number of Exercises:</strong> {part.exercises}</p>
  )
}

const Footer = ({parts}) => {
  return (
    <footer>
      <strong>Total number of exercises:</strong> {parts.reduce((s,p) => s + p, 0)} 
    </footer>
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
      <Footer parts={course.parts.map(part => part.exercises)} />
    </>
  )
}

const App = ({courses}) => {
  console.log(courses)

  return (
    <div>
      {courses.map(course => 
        <Course key={course.id} course={course} />)}
    </div>
  )
}
export default App
