import {useState} from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({data}) => {
  let all = (data.good + data.bad + data.neutral)

  if (!all){
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text='good' value={data.good} />
          <StatisticsLine text='neutral' value={data.neutral} />
          <StatisticsLine text='bad' value={data.bad} />
          <StatisticsLine text='all' value={all} />
          <StatisticsLine text='average' value={((data.good - data.bad) / all)} />
          <StatisticsLine text='positive' value={`${(data.good / all) * 100}%`} />
          </tbody>
      </table>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState({good: 0, neutral: 0, bad: 0})

  const handleGoodClick = () => {
    setAll({...allClicks, good: allClicks.good + 1})
    setGood(good + 1)
  }

  const handleNeuturalClick = () => {
    setAll({...allClicks, neutral: allClicks.neutral + 1})
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll({...allClicks, bad: allClicks.bad + 1})
    setBad(bad + 1)
  }


  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeuturalClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics data={allClicks}/>
    </div>
  )
}

export default App;
