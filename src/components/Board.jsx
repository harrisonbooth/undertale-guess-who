import React from 'react'
import Person from './Person.jsx'

const Board = (props) => {
  const personNodes = props.people.map((person, index) => {
    if(person.disabled){
      return(
        <Person 
        key={index} 
        disabled='true' 
        onPersonDoubleClick={props.onPersonDoubleClick}
        person={person} />
      ) 
    }
    return(
      <Person 
      key={index} 
      onPersonDoubleClick={props.onPersonDoubleClick}
      person={person} />
    )
  })

  return (
    <div id='board'>
      {personNodes}
    </div>
  )
}

export default Board
