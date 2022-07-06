import {useState} from 'react'

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>


const AnecdoteOfTheDay = ({anecdote, votes}) => {
  return (
    <>
      <h2>Anecdote of the Day</h2>
      <p>{anecdote}<br />
      has {votes} {votes == 1 ? 'vote': 'votes'}</p>
    </>
  )
}

const MostVotes = ({anecdote, votes}) => {
  return (
    <>
      <h2>Anecdote with the Most Votes</h2>
      <p>{anecdote}<br />
      has {votes} {votes == 1 ? 'vote': 'votes'}</p> 
    </>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [votes, setVotes] = useState(anecdotes.reduce((a,_,i) => {
    if (!(i in a)) {
      a[i] = 0
    }
    return a
  }, {}))
  const most = Object.keys(votes).find(k => votes[k] == Math.max(...Object.values(votes)))


  const nextAnecdote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const addVote = () => {
    setVotes({...votes, [selected]: votes[selected] + 1})
    console.log('vote successfully added!')
  }

  return (
    <>
      <AnecdoteOfTheDay anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={addVote} text='vote'/>
      <Button handleClick={nextAnecdote} text='next anecdote' />
      <MostVotes anecdote={anecdotes[most]} votes={votes[most]}/>
    </>
  )
}

export default App