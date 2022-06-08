import {useState} from 'react';
import FeedbackOptions from './components/FeedbackOption/FeedbackOption';
import Statistics from './components/Statistic/Statistic'
import Section from './components/Section/Section'
import Notification from './components/Notification/Notification'

const feed = ["good", "neutral", "bad" ]


export default function App () {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function addFeed (e) {
    let feedName = e.target.name
    
   
    
    switch (feedName) {
      case "good":
        setGood(good+1);
        break;
      case "bad":
      setBad(bad+1);
      break;
      case "neutral":
        setNeutral(neutral+1);
      break;    
      default:
        break;
    }}
  
  
  return (
    <>
    <Section title="Please leave feedback">
      <FeedbackOptions options={feed} addFeed={addFeed} />  
    </Section>
    <Section title="Statistics">
      {(good > 0 || neutral > 0 || bad > 0) ?
      <Statistics good={good} neutral={neutral} bad={bad}/> 
      : <Notification message="There is no feedback"></Notification> }          
    </Section>
    
    
    </>
    
    
        )
      }