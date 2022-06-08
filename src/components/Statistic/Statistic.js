import React from 'react'
import './Statistic.css'



export default function Statistics ({good, neutral, bad}) {
   
   
   let total = good + bad + neutral
   let positiveFeddback = Math.trunc(good/total*100)
   return (
       <>
        
        <ul>
            <li>
                <h3>Good: <span>{good}</span></h3>
            </li>
            <li>
                <h3>Neutral: <span>{neutral}</span></h3>
            </li>
            <li>
                <h3>Bad: <span>{bad}</span></h3>
            </li>
            <li>
                <h3>Total: <span>{total}</span> </h3>
            </li>
            <li>
                <h3>Positive feddback: <span>{positiveFeddback}</span> % </h3>
            </li>
        </ul>

       </>
    )
}