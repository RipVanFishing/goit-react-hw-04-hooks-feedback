import {useState} from 'react';
import FeedbackOptions from './components/FeedbackOption/FeedbackOption';
import Statistics from './components/Statistic/Statistic'
import Section from './components/Section/Section'
import Notification from './components/Notification/Notification'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

   totalFeeds = () => {
  
  return good + neutral + bad

 } 

 positivePercentage = () => {
  
  const total = this.totalFeeds()
  return Math.trunc(good / total * 100) 

 }

  
 
addFeed = (props) => {
    const {name} = props.currentTarget        
    this.setState(prevState => ({
      [name]:prevState[name] + 1
    }));

  };

  return (
    <>
  <Section title="Please leave feedback">
  <FeedbackOptions options={Object.keys(this.state)} addFeed={this.addFeed} />  
  </Section>
  <Section title="Statistics">
  {total ?
  <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage ? positivePercentage : 0} /> 
  : <Notification message="There is no feedback"></Notification>}
      
</Section>


</>
  )
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//  totalFeeds = () => {
//   const {good, neutral, bad} = this.state
//   return good + neutral + bad

//  } 

//  positivePercentage = () => {
//   const {good} = this.state
//   const total = this.totalFeeds()
//   return Math.trunc(good / total * 100) 

//  }

  
 
// addFeed = (props) => {
//     const {name} = props.currentTarget        
//     this.setState(prevState => ({
//       [name]:prevState[name] + 1
//     }));

//   };


//   render() 
//     {
//       const {good, neutral, bad} = this.state
//       const total = this.totalFeeds()
//       const positivePercentage = this.positivePercentage()
     
//     return (
// <>
// <Section title="Please leave feedback">
//   <FeedbackOptions options={Object.keys(this.state)} addFeed={this.addFeed} />  
// </Section>
// <Section title="Statistics">
//   {total ?
//   <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage ? positivePercentage : 0} /> 
//   : <Notification message="There is no feedback"></Notification>}
      
// </Section>


// </>


//     )
//   }
// }


export default App;