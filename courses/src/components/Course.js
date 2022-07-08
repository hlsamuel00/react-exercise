const Header = ({name}) => {
    return (
      <header>
        <h1>{name}</h1>
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
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Footer parts={course.parts.map(part => part.exercises)} />
      </>
    )
}

export default Course